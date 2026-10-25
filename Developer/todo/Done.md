# CMC 完成记录

> 记录已经完成的待办. 按版本归档.
> 
> 最后复核: 2026-10-24 (对照 `mods/`、`kubejs/` 与 `docs/` 实际文件)

---

## Alpha 1.6.0

### 文档

- [x] `docs/Worldview.md`: 世界观
- [x] `docs/Gameflow.md`: 任务线 (替代 ChapterStructure + CraftingChains) 
- [x] `docs/QuestsStyle.md`: 任务书文风指南
- [x] `docs/InfinitySource.md`: 11 种无限源质
- [x] `docs/ModsList.md`: 模组列表
- [x] `CONTRIBUTING.md`: 代码规范
- [x] `LICENSE.md`: 用户使用条款
- [x] `UpdateLogs.md`: 1.6.0 更新日志
- [x] `Developer/README.md`: 文件夹用途说明
- [x] `Developer/docs/README.md`: 文档索引 (A-Z + 编辑约定, 2026-10-25 补齐)
- [x] `Developer/icon/README.md`: 图标源文件 → 包内纹理对照
- [x] `Developer/images/README.md`: 图片素材对照

> 勘误 (2026-10-24): `icon/README.md` 与 `docs/README.md` 曾在本文件中被误标为已完成,
> 当时实际未创建; 2026-10-25 已真正补齐, 见上.

### 配方 / 内容

- [x] 世界物质奇点的 EC 量子压缩机配方 (催化剂 = 湮灭奇点) 
- [x] 粗矿处理 (落锤方块 + 4 种粗矿粉碎配方) 
- [x] 1.1 开局"粗铁 → 铁粒": 改成落锤砸粗矿
- [x] `Lychee.js`: 地球仪恢复加世界碎片配方
- [x] `Deploying.js`: 删除空星球装配配方 (保留 Cutting 版) 
- [x] `Ore.js`: 测试配方, 合并到 `Crushing.js`
- [x] null 方块分解链
- [x] `cmc:empty` 9 → 10 复制
- [x] `null 锻造模板` → `null 构件`
- [x] `null 构件` 右键特殊方块
- [x] 8 种无限源质的 EC 组合配方
- [x] 空无限源质的 ∞ 形状配方 (9×9 终极工作台) 
- [x] 落锤方块 (`cmc:drop_hammer`) 
- [x] 地质粉碎链: 圆石 → 砂砾 → 沙子
- [x] 行星合成配方 (Lychee 8 种) 
- [x] 地球仪循环

### 机器 / MBD2

- [x] `biomass_machine` 多方块完整功能
- [x] `advanced_component_assembly` 能量槽抽能 (能量 trait 名 `item_slot_energy` → `forge_energy_storage`, 2026-10-25 修复)

### 清理 / 修复

- [x] `sun_oneshot_item` 语言 key
- [x] `jade.info.cmi` 硬编码
- [x] `Campfire.js` 删除
- [x] `MelonFarm.js` 处理

### 文案 / 叙事

- [x] 初始箱子任务描述: 叙事化引导
- [x] 任务书文案统一风格 (7 条世界观文案) 
- [x] FTBQ 汉化 (`zh_cn.json` / `en_us.json`) 

---

## 文档维护 (2026-10-24 ~ 25)

### 修正

- [x] `docs/InfinitySource.md` / `docs/QuestsStyle.md`: 内容互换归位 (文件名与内容一致)
- [x] `docs/Planet.md`: 补全 9 种星球的获取方式与实现状态 (含海王星未定稿说明)
- [x] 无限源质描述收敛到 `InfinitySource.md`, Worldview / Gameflow 改为概述 + 链接
- [x] `ModsList.md`: 标注停止维护 (后续交给 packwiz)
- [x] `ModUpdateBlacklist.json5`: 移除已解禁的 Amendments, 写明"保留版本, 升级/回退都不允许" 

### 流程 / 工具

- [x] `tools/CheckVersion.py`: 以 `Global.js` 为唯一来源核对版本号 (含 packwiz 的 `pack.toml`)
- [x] `tools/Convert.py`: 修 `--required` 空参数、忽略规则误伤、条目排序、输出契约
- [x] `export/README.md`: 发布流程与核对清单
- [x] `export/config.txt`: 补 `LICENSE` / `CONTRIBUTING.md`, `Version` 与 `Global.js` 同源
- [x] packwiz 接入: `pack.toml` 的 `version` 纳入 `CheckVersion.py` 核对
- [x] `.packwizignore`: 排除 `/Developer/` (原先会被打进包, `packwiz refresh` 后生效)

### 待办卫生

- [x] `Main.md` / `Done.md`: 修正误标完成项、补复核日期、同步 null 方块完成状态

---

## 归档

- Alpha 1.5.0 及之前的完成项见 `UpdateLogs.md`