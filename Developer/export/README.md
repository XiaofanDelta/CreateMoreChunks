# 发布流程与导出配置

> `config.txt` 是 PCL2 的导出配置；本文件说明**什么时候、按什么顺序**用它。
> 版本号、打包清单、完整性清单三件事都在这里收口。

---

## 一、版本号：只有 `Global.js` 一个来源

版本号声明在 `kubejs/startup_scripts/Global.js`：

```js
let modpackState = "Alpha"
let isHotfix = false
let modpackNumberVersion = "1.6.0"
```

发版时**只改这里**，然后跑核对脚本：

```bash
cd Developer/tools
python CheckVersion.py
```

脚本会同时读 `UpdateLogs.md` 最后一条标题和 `config.txt` 的 `Version`，
三者不一致时以退出码 `1` 结束，必须先修再打包。

`export/config.txt` 的 `Version` 填**纯数字**（`1.6.0`），不要带 `Alpha` 前缀——
Modrinth 的 `versionId` 需要 semver，带前缀会传不上去。

---

## 二、发布前检查清单

按顺序勾，任何一项不过就不要导出：

- [ ] `Global.js` 版本号已改，`python CheckVersion.py` 退出码为 0
- [ ] `UpdateLogs.md` 已加本版本条目，并填**真实日期**（当前 1.6.0 仍是 `26/__/__`）
- [ ] `docs/ModsList.md` 已按当前 `mods/` 刷新（当前严重过期，见待办）
- [ ] 打包清单与根 `README.md` 的"整合包打包所需文件"一致
- [ ] `kubejs/probe`、`kubejs/jsconfig.json`、`kubejs/README.txt` 未被包进去（`config.txt` 已排除）
- [ ] `resourcepacks/` 里的实际文件名与 `config.txt` 中写死的那一行一致
- [ ] 完整性清单已生成：
      `python Convert.py --root <根目录> --targets kubejs config defaultconfigs --output integrity.json`
- [ ] 导出的 `.mrpack` / `.zip` 内不含 `Developer/`
- [ ] 上传前核对 `ModUpdateBlacklist.json5`（目前是人工对照，没有脚本强制）

---

## 三、`config.txt` 的取舍说明

| 行 | 作用 | 注意 |
|---|---|---|
| `mods/` + 三条 `!` 排除 | 打进全部模组，排除 `.disabled` / `.old` / `.connector` | 新增排除规则要同步 `.gitignore` |
| `icon.png` | 整合包图标 | 与 `Developer/icon/transparent_32x32.png` 是同一张 |
| `kubejs/` + 三条 `!` 排除 | 全部脚本与资源 | `probe` 是本机生成的类型提示，不能带走 |
| `README.md` / `UpdateLogs.md` / `LICENSE.md` / `LICENSE` / `CONTRIBUTING.md` | 说明与条款 | `LICENSE` 是完整许可证，`LICENSE.md` 是用户使用条款，**两个都要** |
| `ldlib/` | MBD2 的机器定义（`.sm` / `.mb` / `.rt`） | 目前整目录导出，README 只写了 `assets/mbd2`，实际等价 |
| `config/` `defaultconfigs/` | 模组配置 | `config/jei/world/` 是本机世界数据，已排除 |
| `CustomSkinLoader/CustomSkinLoader.json` | 皮肤站配置 | 根 README 的打包清单里没列，属"多打"，见下方待决策 |
| `schematics/` | 蓝图 | — |
| `resourcepacks/Better Chunk by Chunk v1.4.zip` | **写死文件名** | 资源包改名/升版会被静默漏打，必须手工核对 |

---

## 四、已知不一致（待决策）

1. `CustomSkinLoader/CustomSkinLoader.json` 会导出，但根 `README.md` 的打包清单没有它——
   是把 README 补上，还是从导出里去掉？
2. 根 README 写 `ldlib/assets/mbd2`，`config.txt` 导的是整个 `ldlib/`。
   如果 `ldlib` 里将来出现别的目录，会被一起带走。
3. `Version:` 从 1.6.0 起由 `Global.js` 同步，但两者没有自动联动，
   全靠 `CheckVersion.py` 在发版前拦一道。
