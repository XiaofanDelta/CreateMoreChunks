# Developer 文件夹 README

> 在这里查看 Developer 里所有文件的用途。

---

## 文件夹结构

Developer

├── [assets/](./assets/) : 未使用 / 测试素材

│---├── [textures/](./assets/textures/) : 未使用贴图

│---└── *.bbmodel : Blockbench 工程文件

├── [docs/](./docs/) : 设计文档

│---├── [Gameflow.md](./docs/Gameflow.md) : 任务线

│---├── [InfinitySource.md](./docs/InfinitySource.md) : 无限源质

│---├── [ModsList.md](./docs/ModsList.md) : 模组列表

│---├── [Planet.md](./docs/Planet.md) : 星球列表

│---├── [QuestsStyle.md](./docs/QuestsStyle.md) : 任务书文风

│---├── [README.md](./docs/README.md) : 文档索引

│---└── [Worldview.md](./docs/Worldview.md) : 世界观

├── [export/](./export/) : 导出配置与发布流程

│---├── [config.txt](./export/config.txt)

│---└── [README.md](./export/README.md) : 发布流程与核对清单

├── [icon/](./icon/) : CMC 图标

│---├── [black_16x16.png](./icon/black_16x16.png)

│---├── [black_600x600.png](./icon/black_600x600.png)

│---├── [transparent_16x16.png](./icon/transparent_16x16.png)

│---├── [transparent_32x32.png](./icon/transparent_32x32.png)

│---├── [transparent_256x256.png](./icon/transparent_256x256.png)

│---└── [README.md](./icon/README.md) : 源文件 → 纹理对照

├── [images/](./images/) : 图片素材

│---├── [reference/](./images/reference/) : 参考图

│---│---└── [material.webp](./images/reference/material.webp)

│---├── [resourcepacks/](./images/resourcepacks/) : 资源包图标

│---│---├── [bcc.png](./images/resourcepacks/bcc.png)

│---│---└── [ouid.png](./images/resourcepacks/ouid.png)

│---├── [title.png](./images/title.png) : CMC 标题文字

│---├── [cover.png](./images/cover.png) : 整合包封面

│---├── [loading.png](./images/loading.png) : 加载界面

│---├── [random_thing.png](./images/random_thing.png) : 待定

│---├── [by_delta.png](./images/by_delta.png)

│---└── [README.md](./images/README.md) : 源文件 → 纹理对照

├── [todo/](./todo/) : 待办

│---├── [Done.md](./todo/Done.md)

│---└── [Main.md](./todo/Main.md)

├── [tools/](./tools/) : 工具脚本

│---├── [Convert.py](./tools/Convert.py) : 文件哈希校验生成

│---└── [CheckVersion.py](./tools/CheckVersion.py) : 发版前版本号核对

├── [README.md](./README.md) : 本文件

└── [ModUpdateBlacklist.json5](./ModUpdateBlacklist.json5) : 模组更新黑名单


---

## 各文件夹说明

| 文件夹 | 用途 |
|---|---|
| `assets/` | 测试 / 未实装的贴图和模型工程文件 |
| `docs/` | 所有设计文档 (世界观、任务线、源质等)  |
| `export/` | PCL2 导出配置和发布流程 |
| `icon/` | CMC 图标 (黑底 / 透明底，多尺寸)  |
| `images/` | 素材 (封面、标题、标识、参考图)  |
| `todo/` | 待办清单 (`Main.md`) 和完成记录 (`Done.md`)  |
| `tools/` | 本地脚本 (完整性清单、版本号核对)  |

---

## 工具说明

### `tools/Convert.py`

生成文件校验哈希 JSON (schema 1) ，用于整合包完整性检测。

**用法**: 

```bash
cd Developer/tools
python Convert.py --root <整合包根目录> --targets <文件夹1> <文件夹2> ... --output <输出文件名>.json
```

**示例**: 

```bash
python Convert.py --root "D:/PCL/.minecraft/versions/CMC-Alpha1.1" --targets kubejs config defaultconfigs --output integrity.json
```

**参数说明**: 

| 参数 | 说明 |
|---|---|
| `--root` | 整合包根目录 |
| `--targets` | 需要扫描的文件夹 (可多个，空格分隔)  |
| `--output` | 输出 JSON 文件名 |
| `--severity-missing` | 文件缺失时的严重级别，默认 `ERROR` |
| `--severity-changed` | 哈希不匹配时的严重级别，默认 `ERROR` |
| `--required` / `--no-required` | 是否把所有文件标为必需，默认开启 |
| `--ignore` | 额外忽略模式，可多个 |

**输出约定**: `{"schema": 1, "files": [{path, sha256, required, severityIfMissing, severityIfChanged, ...}]}`，
条目按路径升序、路径统一用正斜杠，同一棵文件树每次生成的结果完全一致。

**默认忽略**: `*.tmp`、`*.log`、`__pycache__`、`.git`、`logs`、`cache`，
以及 `kubejs/probe`、`kubejs/jsconfig.json`、`kubejs/README.txt` (与 PCL 导出配置一致) 。

### `tools/CheckVersion.py`

发版前核对版本号：以 `kubejs/startup_scripts/Global.js` 为唯一来源，
比对 `UpdateLogs.md` 最后一条标题与 `export/config.txt` 的 `Version`。

**用法**: 

```bash
cd Developer/tools
python CheckVersion.py
```

一致时退出码 `0`, 不一致时列出差异并以 `1` 退出;
`UpdateLogs.md` 的日期仍是 `26/__/__` 这类占位符时给出警告.
完整发布流程见 [`export/README.md`](./export/README.md) .

---

## 注意事项

- `Developer/` **不随整合包发布**, 这是开发工作区
- `icon/` 和 `images/` 的素材是**源文件**，改了要同步到对应的模组 / 资源包（对照表见各自的 README）
- `docs/` 里所有文档都是**设计参考**，不是运行时文件

---