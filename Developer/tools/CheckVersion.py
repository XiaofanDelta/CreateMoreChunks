#!/usr/bin/env python3
"""发布前版本号核对：以 `Global.js` 为唯一来源，检查另外两处是否跟上。

核对对象:
    1. kubejs/startup_scripts/Global.js
       modpackState / modpackNumberVersion / isHotfix  -> 唯一版本来源
    2. UpdateLogs.md 最后一条 "## Alpha x.y.z (日期)" 标题
    3. Developer/export/config.txt 的 Version 字段（支持 1.6.0 / Alpha-1.6.0 两种写法）

用法:
    python CheckVersion.py                 # 默认以脚本所在整合包为根目录
    python CheckVersion.py --root <根目录>

退出码:
    0 = 三处一致（或仅有警告）
    1 = 存在不一致，需要先修再发版
"""

import argparse
import re
import sys
from pathlib import Path

try:
    # 非中文控制台（cp1252 等）下避免编码异常导致中断，无法编码的字符以 ? 代替
    sys.stdout.reconfigure(errors="replace")
except (AttributeError, ValueError):
    pass

STATE_RE = re.compile(r"modpackState\s*=\s*\"([^\"]+)\"")
NUMBER_RE = re.compile(r"modpackNumberVersion\s*=\s*\"([^\"]+)\"")
HOTFIX_RE = re.compile(r"isHotfix\s*=\s*(true|false)")
LOG_HEADING_RE = re.compile(r"^#{1,3}\s+(Alpha|Beta|R)\s+(\d+\.\d+\.\d+)(?:\s*\(([^)]*)\))?", re.MULTILINE)
CONFIG_VERSION_RE = re.compile(r"^Version:(.*)$", re.MULTILINE)
# 允许: 1.6.0 / Alpha-1.6.0 / Alpha 1.6.0 / Alpha_1.6.0
PACK_VERSION_RE = re.compile(r"^(?:(Alpha|Beta|R)[\s\-_]*)?(\d+\.\d+\.\d+)$")


def read_text(path):
    try:
        return path.read_text(encoding="utf-8")
    except OSError as error:
        return None


def parse_global(path):
    text = read_text(path)
    if text is None:
        return None

    state = STATE_RE.search(text)
    number = NUMBER_RE.search(text)
    hotfix = HOTFIX_RE.search(text)

    if not state or not number:
        return None

    return {
        "state": state.group(1),
        "number": number.group(1),
        "hotfix": bool(hotfix and hotfix.group(1) == "true"),
    }


def parse_logs(path):
    text = read_text(path)
    if text is None:
        return None

    matches = list(LOG_HEADING_RE.finditer(text))
    if not matches:
        return None

    latest = matches[-1]
    return {
        "state": latest.group(1),
        "number": latest.group(2),
        "date": (latest.group(3) or "").strip(),
        "line": text[:latest.start()].count("\n") + 1,
    }


def parse_config_version(path):
    text = read_text(path)
    if text is None:
        return None

    match = CONFIG_VERSION_RE.search(text)
    if not match:
        return None

    return match.group(1).strip()


def main():
    parser = argparse.ArgumentParser(description="发布前版本号核对（以 Global.js 为唯一来源）")
    parser.add_argument("--root", default=None, help="整合包根目录（默认取脚本所在整合包）")
    args = parser.parse_args()

    root = Path(args.root).resolve() if args.root else Path(__file__).resolve().parents[2]

    global_path = root / "kubejs" / "startup_scripts" / "Global.js"
    logs_path = root / "UpdateLogs.md"
    config_path = root / "Developer" / "export" / "config.txt"

    problems = []
    warnings = []

    print(f"[INFO] 整合包根目录: {root}")

    version = parse_global(global_path)
    if version is None:
        problems.append(f"无法从 {global_path} 解析 modpackState / modpackNumberVersion")
        print("[FAIL] Global.js 解析失败")
    else:
        expected = f"{version['state']}-{version['number']}"
        if version["hotfix"]:
            expected += "-hf"
        print(f"[OK]   Global.js          {expected}  (唯一来源)")

    logs = parse_logs(logs_path)
    if logs is None:
        problems.append(f"无法从 {logs_path} 解析最新版本标题")
        print("[FAIL] UpdateLogs.md 解析失败")
    else:
        print(f"[INFO] UpdateLogs.md      {logs['state']} {logs['number']} ({logs['date'] or '无日期'})  @L{logs['line']}")
        if version:
            if (logs["state"], logs["number"]) != (version["state"], version["number"]):
                problems.append(
                    f"UpdateLogs.md 最新条目是 {logs['state']} {logs['number']}，"
                    f"但 Global.js 是 {version['state']}-{version['number']}"
                )
        if not logs["date"] or "?" in logs["date"] or "_" in logs["date"]:
            warnings.append(f"UpdateLogs.md 最新条目缺少确定日期（当前: {logs['date'] or '空'}）")

    config_version = parse_config_version(config_path)
    print(f"[INFO] export/config.txt   Version:{config_version if config_version is not None else '<缺失>'}")
    if not config_version:
        problems.append("Developer/export/config.txt 的 Version 为空")
    elif version:
        match = PACK_VERSION_RE.match(config_version)
        if not match:
            problems.append(
                f"export/config.txt 的 Version 无法识别: {config_version}"
                f"（应形如 1.6.0 或 Alpha-1.6.0）"
            )
        else:
            config_state, config_number = match.group(1), match.group(2)
            if config_number != version["number"]:
                problems.append(
                    f"export/config.txt 的 Version 是 {config_version}，"
                    f"与 Global.js 的 {version['number']} 不一致"
                )
            elif config_state and config_state != version["state"]:
                problems.append(
                    f"export/config.txt 的 Version 状态是 {config_state}，"
                    f"与 Global.js 的 {version['state']} 不一致"
                )

    print()
    for warning in warnings:
        print(f"[WARN] {warning}")

    if problems:
        for problem in problems:
            print(f"[FAIL] {problem}")
        print(f"\n[RESULT] 发现 {len(problems)} 处不一致，先修再发版。")
        raise SystemExit(1)

    print("[RESULT] 版本号一致，可以继续打包。")


if __name__ == "__main__":
    main()
