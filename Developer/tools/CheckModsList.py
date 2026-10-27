#!/usr/bin/env python3
"""校验并补全 Developer/ModsList.csv。

做的事:
    1. 检查每一行的空字段并报告
    2. 交互式询问缺失内容（直接回车或输入 `-` 表示"确实没有"）
    3. 写回时删除 `Mod 文件路径` 列（绝对路径只对本机有意义）
    4. 保留 UTF-8 BOM 与原有换行符

用法:
    cd Developer/tools
    python CheckModsList.py            # 报告 + 交互补全
    python CheckModsList.py --check    # 只检查不修改，有缺失时退出码 1
    python CheckModsList.py --csv <路径>   # 指定 CSV（默认 ../ModsList.csv）

退出码:
    0 = 无缺失（或已补全）
    1 = --check 模式下存在缺失
    2 = 文件结构异常（表头不符等）
"""

import argparse
import csv
import io
import sys
from pathlib import Path

try:
    sys.stdout.reconfigure(errors="replace")
except (AttributeError, ValueError):
    pass

COLUMNS = [
    "文件名",
    "Mod 名称",
    "Mod 版本",
    "此版本更新时间",
    "Mod ID",
    "Mod 平台工程 ID",
    "Mod 文件大小（字节）",
    "Mod 文件路径",
]
PATH_COLUMN = "Mod 文件路径"
SKIP = "-"
DEFAULT_CSV = Path(__file__).resolve().parents[1] / "ModsList.csv"


def read_rows(path):
    raw = path.read_bytes()
    bom = raw.startswith(b"\xef\xbb\xbf")
    text = raw.decode("utf-8-sig")
    newline = "\r\n" if "\r\n" in text else "\n"
    rows = list(csv.reader(io.StringIO(text, newline="")))
    return rows, bom, newline


def write_rows(path, rows, bom, newline):
    buffer = io.StringIO(newline="")
    writer = csv.writer(buffer, lineterminator=newline)
    writer.writerows(rows)
    data = buffer.getvalue().encode("utf-8")
    path.write_bytes((b"\xef\xbb\xbf" if bom else b"") + data)


def main():
    parser = argparse.ArgumentParser(description="校验 / 补全 ModsList.csv")
    parser.add_argument("--csv", default=str(DEFAULT_CSV), help="CSV 路径（默认 Developer/ModsList.csv）")
    parser.add_argument("--check", action="store_true", help="只检查，不交互、不写回")
    args = parser.parse_args()

    path = Path(args.csv).resolve()
    if not path.is_file():
        print(f"[ERROR] 找不到 CSV: {path}")
        return 2

    rows, bom, newline = read_rows(path)
    if not rows:
        print("[ERROR] CSV 是空的")
        return 2

    header = rows[0]
    has_path = header == COLUMNS
    if not has_path and header != COLUMNS[:-1]:
        print("[ERROR] 表头与预期不符")
        print("  预期:", COLUMNS)
        print("  实际:", header)
        return 2

    columns = header
    data = rows[1:]

    print(f"[INFO] CSV: {path}")
    print(f"[INFO] 行数: {len(data)}  列数: {len(columns)}"
          f"{'（含路径列）' if has_path else '（路径列已删除）'}")

    rows_missing = []
    cells_missing = 0
    for index, row in enumerate(data, 1):
        missing = [col for col, value in zip(columns, row) if not value.strip()]
        if missing:
            rows_missing.append((index, row, missing))
            cells_missing += len(missing)

    print()
    if rows_missing:
        print(f"[WARN] {len(rows_missing)} 行共 {cells_missing} 个字段为空:")
        for index, row, missing in rows_missing:
            print(f"  - {row[0]}: {', '.join(missing)}")
    else:
        print("[OK]   没有空字段")

    if args.check:
        if rows_missing or has_path:
            if has_path:
                print("\n[WARN] `Mod 文件路径` 列仍存在，运行不带 --check 的命令即可删除")
            print("\n[RESULT] 需要处理")
            return 1
        print("\n[RESULT] 无需修改")
        return 0

    if not rows_missing and not has_path:
        print("\n[RESULT] 无需修改")
        return 0

    if rows_missing:
        print("\n提示: 直接回车或输入 `-` 表示“确实没有”")
        try:
            for index, row, missing in rows_missing:
                print(f"\n[{index}/{len(data)}] {row[0]}")
                for col in missing:
                    answer = input(f"    {col}: ").lstrip("\ufeff").strip()
                    if not answer:
                        answer = SKIP
                    position = columns.index(col)
                    row[position] = answer
        except KeyboardInterrupt:
            print("\n[ABORT] 已取消，未写入任何改动")
            return 130
        except EOFError:
            print("\n[ABORT] 输入结束，未写入任何改动")
            return 130

    # 删掉绝对路径列
    if has_path:
        path_index = columns.index(PATH_COLUMN)
        columns = columns[:path_index] + columns[path_index + 1:]
        for row in data:
            del row[path_index]

    # 写回前再确认一遍
    if any(not value.strip() for row in data for value in row):
        print("[WARN] 仍有空字段，请重新运行")
        return 2

    write_rows(path, [columns] + data, bom, newline)

    print(f"\n[OK] 已写回 {path}")
    print(f"     删除路径列: {'是' if has_path else '否'}")
    print(f"     占位 `-`: {sum(1 for row in data for value in row if value.strip() == SKIP)} 处")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
