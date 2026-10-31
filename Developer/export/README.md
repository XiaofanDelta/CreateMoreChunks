# 发布流程与导出配置

> `config.txt` 是 PCL2 的导出配置; 本文件说明**什么时候、按什么顺序**用它.
> 版本号、打包清单、完整性清单三件事都在这里收口.

---

## 一、版本号: 只有 `Global.js` 一个来源

版本号声明在 `kubejs/startup_scripts/Global.js`:

```js
let modpackState = "Alpha"
let isHotfix = false
let modpackNumberVersion = "1.6.0"
```

发版时**只改这里**, 然后跑核对脚本:

```bash
cd Developer/tools
python CheckVersion.py
```

脚本会同时读 `UpdateLogs.md` 最后一条标题、`config.txt` 的 `Version`、`pack.toml` 的 `version`
(packwiz 启用后), 以及三处界面配置:

- `config/fancymenu/customization/title_screen_layout.txt` — 标题界面上的版本文字
- `config/fancymenu/options.txt` — `custom_window_title`
- `config/customwindowtitle-client.toml` — `title`

任何一处不一致都会以退出码 `1` 结束, 必须先修再打包.
后三处是本地界面配置, 文件缺失时只记警告.

`export/config.txt` 的 `Version` 写 `Alpha-1.6.0`——与 `Global.js` 拼出来的版本号同源
(游戏内显示会多一个颜色代码 `§0`). 当前是 Alpha 内测、不上 Modrinth, 所以保留 `Alpha-` 前缀;
将来要传 Modrinth 时再改成纯 `x.y.z`, `CheckVersion.py` 两种写法都认.

`pack.toml` 的 `version` 写**纯数字** (`1.6.0`), 因为 packwiz 会拿它做版本比较.

---

## 二、发布前检查清单

按顺序勾, 任何一项不过就不要导出:

- [ ] `Global.js` 版本号已改, `python CheckVersion.py` 退出码为 0
- [ ] `UpdateLogs.md` 已加本版本条目, 并填**真实日期** (当前 1.6.0 仍是 `26/__/__`)
- [ ] 三处界面版本已同步: 标题界面 / `custom_window_title` / `customwindowtitle` (脚本会核对)
- [ ] `pack.toml` 的 `version` 已同步 (packwiz 发布用, 脚本会一起核对)
- [ ] packwiz: `packwiz refresh` 已跑, `pack.toml` 的 `[index] hash` 与 `index.toml` 实际 sha256 一致
- [ ] `index.toml` 里没有 `Developer/` 条目 (`.packwizignore` 已排除, refresh 后生效)
- [ ] 模组清单 `Developer/ModsList.csv` 已用 PCL2 CE 重新导出, 并跑过 `python CheckModsList.py --check`
- [ ] 打包清单与根 `README.md` 的"整合包打包所需文件"一致
- [ ] `kubejs/probe`、`kubejs/jsconfig.json`、`kubejs/README.txt` 未被包进去 (`config.txt` 已排除)
- [ ] `resourcepacks/` 里的实际文件名与 `config.txt` 中写死的那一行一致
- [ ] 完整性清单已生成:
      `python Convert.py --root <根目录> --targets kubejs config defaultconfigs --output integrity.json`
- [ ] 导出的 `.mrpack` / `.zip` 内不含 `Developer/`
- [ ] 上传前核对 `ModUpdateBlacklist.json5` (目前是人工对照, 没有脚本强制)

---

## 三、`config.txt` 的取舍说明

| 行 | 作用 | 注意 |
|---|---|---|
| `mods/` + 三条 `!` 排除 | 打进全部模组, 排除 `.disabled` / `.old` / `.connector` | 新增排除规则要同步 `.gitignore` |
| `icon.png` | 整合包图标 | 与 `Developer/icon/transparent_32x32.png` 是同一张 |
| `kubejs/` + 三条 `!` 排除 | 全部脚本与资源 | `probe` 是本机生成的类型提示, 不能带走 |
| `README.md` / `UpdateLogs.md` / `LICENSE.md` / `LICENSE` / `CONTRIBUTING.md` | 说明与条款 | `LICENSE` 是完整许可证, `LICENSE.md` 是用户使用条款, **两个都要** |
| `ldlib/` | MBD2 的机器定义 (`.sm` / `.mb` / `.rt`) | 目前整目录导出, README 只写了 `assets/mbd2`, 实际等价 |
| `config/` `defaultconfigs/` | 模组配置 | `config/jei/world/` 是本机世界数据, 已排除 |
| `CustomSkinLoader/CustomSkinLoader.json` | 皮肤站配置 | 根 README 的打包清单里没列, 属"多打", 见下方待决策 |
| `schematics/` | 蓝图 | — |
| `resourcepacks/Better Chunk by Chunk v1.4.zip` | **写死文件名** | 资源包改名/升版会被静默漏打, 必须手工核对 |

---

## 四、已知不一致 (待决策)

1. `CustomSkinLoader/CustomSkinLoader.json` 会导出, 但根 `README.md` 的打包清单没有它——
   是把 README 补上, 还是从导出里去掉?
2. 根 README 写 `ldlib/assets/mbd2`, `config.txt` 导的是整个 `ldlib/`.
   如果 `ldlib` 里将来出现别的目录, 会被一起带走.
3. `Version:` 从 1.6.0 起由 `Global.js` 同步, 但两者没有自动联动,
   全靠 `CheckVersion.py` 在发版前拦一道.

---

## 五、packwiz (2026-10-25 引入)

| 文件 | 作用 |
|---|---|
| `pack.toml` | 包元数据: name / author / version / forge / minecraft; `version` 由 `CheckVersion.py` 一起核对 |
| `index.toml` | 由 `packwiz refresh` 生成, 记录每个收录文件的 sha256; `pack.toml` 的 `[index] hash` 就是它的校验值 |
| `.packwizignore` | 与 `.gitignore` 基本一致 (少一行 `/index.toml`), 额外排除 `/Developer/` |

**发版**: 改完文件 → `packwiz refresh` → `python CheckVersion.py` → 分发.
`refresh` 之后 `index.toml` 会变化, 记得和当次改动一起提交.

**现状**: packwiz 只收录了 `mods/cmc-1.0.0.jar` 与 `jei.pw.toml`, 其余 170+ 模组尚未迁移;
在迁移完成前, PCL 导出 (`config.txt`) 仍是完整的发布路径.
