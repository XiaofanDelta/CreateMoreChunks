#!/usr/bin/env python3
"""生成整合包完整性校验清单（SHA-256 + 严重级别）。

用法:
    cd Developer/tools
    python Convert.py --root <整合包根目录> --targets <文件夹...> --output <输出>.json

示例:
    python Convert.py --root "D:/PCL/.minecraft/versions/CMC-Alpha1.1" --targets kubejs config defaultconfigs --output integrity.json

输出结构（schema 1）:
    {
      "schema": 1,
      "files": [
        {
          "path": "kubejs/startup_scripts/Global.js",
          "sha256": "<64 位小写十六进制>",
          "required": true,
          "severityIfMissing": "ERROR",
          "severityIfChanged": "ERROR",
          "displayName": "File: Global.js",
          "reason": "File integrity check",
          "fix": "Restore from backup or reinstall"
        }
      ]
    }

字段约定:
    path              相对 --root 的正斜杠路径，条目按该字段升序排列
    required          由 --required / --no-required 控制，默认 true
    severityIfMissing 文件整体缺失时的级别 (INFO / WARNING / ERROR / CRITICAL)
    severityIfChanged 文件存在但哈希不符时的级别

    本工具只负责"生成期望值"；缺失/篡改的判定与提示由读取该 JSON 的校验端负责，
    因此这里不实现任何判定逻辑，只保证字段齐全、路径稳定、顺序可复现。

默认忽略（与 PCL 导出配置、.gitignore 对齐，避免把本机开发产物写进清单）:
    *.tmp  *.log  __pycache__  .git  logs  cache
    kubejs/probe 目录、kubejs/jsconfig.json、kubejs/README.txt
"""

import argparse
import fnmatch
import hashlib
import json
import sys
from pathlib import Path

try:
    # 非中文控制台（cp1252 等）下避免编码异常导致中断，无法编码的字符以 ? 代替
    sys.stdout.reconfigure(errors="replace")
except (AttributeError, ValueError):
    pass

DEFAULT_IGNORES = (
    "*.tmp",
    "*.log",
    "__pycache__",
    ".git",
    "logs",
    "cache",
    "kubejs/probe",
    "kubejs/probe/**",
    "kubejs/jsconfig.json",
    "kubejs/README.txt",
)

SEVERITIES = ("INFO", "WARNING", "ERROR", "CRITICAL")


def calculate_sha256(file_path):
    """计算文件的 SHA-256 哈希值。"""
    digest = hashlib.sha256()
    with open(file_path, "rb") as handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def is_targeted_file(rel_path, target_folders):
    """判断相对路径是否属于 --targets 指定的文件夹。"""
    if not target_folders:
        return True

    rel_path = rel_path.replace("\\", "/").strip("/")

    for folder in target_folders:
        folder = folder.replace("\\", "/").strip("/")
        if rel_path == folder or rel_path.startswith(folder + "/"):
            return True
    return False


def should_ignore(rel_path, ignore_patterns):
    """按"整路径 / 文件名 / 目录名"三种粒度匹配忽略规则。

    旧实现用 `pattern in rel_path` 做子串匹配，"cache" 会误伤
    `.../cache_icon.png` 这类路径；这里改为:
      1. 整路径 fnmatch（支持 `kubejs/probe/**`）
      2. 文件名 fnmatch（支持 `*.log`）
      3. 任一路径段与规则完全相等（支持 `logs`、`cache`、`.git`）
    """
    normalized = rel_path.replace("\\", "/")
    name = normalized.rsplit("/", 1)[-1]
    segments = normalized.split("/")

    for pattern in ignore_patterns:
        pattern = pattern.replace("\\", "/").strip("/")

        if not pattern:
            continue
        if fnmatch.fnmatch(normalized, pattern):
            return True
        if fnmatch.fnmatch(name, pattern):
            return True
        if pattern in segments:
            return True

    return False


def generate_checksums(
    root_dir,
    target_folders,
    ignore_patterns=None,
    default_severity_missing="ERROR",
    default_severity_changed="ERROR",
    default_required=True,
):
    """只扫描 target_folders 中指定的文件夹，生成校验清单（schema 1）。"""
    if ignore_patterns is None:
        ignore_patterns = list(DEFAULT_IGNORES)

    root_path = Path(root_dir).resolve()
    files_list = []
    skipped = 0

    for file_path in root_path.rglob("*"):
        if not file_path.is_file():
            continue

        # 获取相对路径（统一使用正斜杠）
        rel_path = str(file_path.relative_to(root_path)).replace("\\", "/")

        # 1. 先过滤目标文件夹
        if not is_targeted_file(rel_path, target_folders):
            continue

        # 2. 再过滤忽略规则
        if should_ignore(rel_path, ignore_patterns):
            continue

        # 3. 计算哈希
        try:
            sha256 = calculate_sha256(file_path)
        except OSError as error:
            print(f"[WARN] 无法读取文件 {rel_path}: {error}")
            skipped += 1
            continue

        files_list.append({
            "path": rel_path,
            "sha256": sha256,
            "required": default_required,
            "severityIfMissing": default_severity_missing,
            "severityIfChanged": default_severity_changed,
            "displayName": f"File: {file_path.name}",
            "reason": "File integrity check",
            "fix": "Restore from backup or reinstall"
        })

    # 排序，保证同一份文件树每次生成的 JSON 完全一致
    files_list.sort(key=lambda entry: entry["path"])

    return {
        "schema": 1,
        "files": files_list
    }, skipped


def main():
    parser = argparse.ArgumentParser(
        description="仅扫描指定文件夹，生成整合包文件校验 JSON（schema 1）"
    )
    parser.add_argument("--root", default=".", help="整合包根目录（默认当前目录）")
    parser.add_argument("--targets", nargs="+", required=True,
                        help="要扫描的子文件夹（相对 root），例如: --targets kubejs config defaultconfigs")
    parser.add_argument("--output", default="checksums.json", help="输出 JSON 文件名")
    parser.add_argument("--severity-missing", default="ERROR", choices=SEVERITIES,
                        help="文件缺失时的级别（默认 ERROR）")
    parser.add_argument("--severity-changed", default="ERROR", choices=SEVERITIES,
                        help="哈希不匹配时的级别（默认 ERROR）")
    parser.add_argument("--required", dest="required", action="store_true", default=True,
                        help="把所有文件标为必需（默认开启）")
    parser.add_argument("--no-required", dest="required", action="store_false",
                        help="关闭 required 标记，仅做哈希记录")
    parser.add_argument("--ignore", nargs="*", default=[],
                        help="额外忽略规则，例如 --ignore '*.bak' 'temp/**'")
    args = parser.parse_args()

    if not Path(args.root).is_dir():
        parser.error(f"--root 不是有效目录: {args.root}")

    ignore_patterns = list(DEFAULT_IGNORES) + list(args.ignore)

    print(f"[INFO] 扫描目录: {args.root}")
    print(f"[INFO] 仅限目标文件夹: {args.targets}")
    print(f"[INFO] 忽略规则 {len(ignore_patterns)} 条")

    result, skipped = generate_checksums(
        args.root,
        target_folders=args.targets,
        ignore_patterns=ignore_patterns,
        default_severity_missing=args.severity_missing,
        default_severity_changed=args.severity_changed,
        default_required=args.required
    )

    output_path = Path(args.output)
    if output_path.parent and not output_path.parent.exists():
        output_path.parent.mkdir(parents=True, exist_ok=True)

    with open(output_path, "w", encoding="utf-8") as handle:
        json.dump(result, handle, indent=2, ensure_ascii=False)
        handle.write("\n")

    print(f"[OK] 共生成 {len(result['files'])} 个文件条目"
          f"{f'（{skipped} 个文件读取失败被跳过）' if skipped else ''}，保存至 {output_path}")


if __name__ == "__main__":
    main()
