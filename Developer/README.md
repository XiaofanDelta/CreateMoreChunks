# Developer 文件夹 README

> 在这里查看 Developer 里所有文件的用途。

---

## 文件夹结构

Developer

├── [assets/](assets/) : 未使用 / 测试素材

│---├── [textures/](assets/textures/) : 未使用贴图

│---└── *.bbmodel : Blockbench 工程文件

├── [docs/](docs/) : 设计文档

│---├── [Gameflow.md](docs/Gameflow.md) : 任务线

│---├── [InfinitySource.md](docs/InfinitySource.md) : 源质矩阵

│---├── [ModsList.md](docs/ModsList.md) : 模组列表

│---├── [Planet.md](docs/Planet.md) : 星球列表

│---├── [QuestsStyle.md](docs/QuestsStyle.md) : 任务书文风

│---└── [Worldview.md](docs/Worldview.md) : 世界观

├── [export/](export/) : 导出配置

│---└── [config.txt](export/config.txt)

├── [icon/](icon/) : CMC 图标

│---├── [black_16x16.png](icon/black_16x16.png)

│---├── [black_600x600.png](icon/black_600x600.png)

│---├── [transparent_16x16.png](icon/transparent_16x16.png)

│---├── [transparent_32x32.png](icon/transparent_32x32.png)

│---└── [transparent_256x256.png](icon/transparent_256x256.png)

├── [images/](images/) : 图片素材

│---├── [reference/](images/reference/) : 参考图

│---│---└── [material.webp](images/reference/material.webp)

│---├── [resourcepacks/](images/resourcepacks/) : 资源包图标

│---│---├── [bcc.png](images/resourcepacks/bcc.png)

│---│---└── [ouid.png](images/resourcepacks/ouid.png)

│---├── [title.png](images/title.png) : CMC 标题文字

│---├── [cover.png](images/cover.png) : 整合包封面

│---├── [loading.png](images/loading.png) : 加载界面

│---├── [random_thing.png](images/random_thing.png) : 待定

│---└── [by_delta.png](images/by_delta.png)

├── [todo/](todo/) : 待办

│---├── [Done.md](todo/Done.md)

│---└── [Main.md](todo/Main.md)

└── [tools/](tools/) : 工具脚本

-----└── [Convert.py](tools/Convert.py) : 文件哈希校验生成


---

## 各文件夹说明

| 文件夹 | 用途 |
|---|---|
| `assets/` | 测试 / 未实装的贴图和模型工程文件 |
| `docs/` | 所有设计文档 (世界观、任务线、源质等)  |
| `export/` | PCL2 导出配置和发布流程 |
| `icon/` | CMC 图标 (黑底 / 透明底，多尺寸)  |
| `images/` | 品牌素材 (封面、标题、标识、参考图)  |
| `todo/` | 待办清单 (`Main.md`) 和完成记录 (`Done.md`)  |
| `tools/` | 本地脚本 (文件校验、图片转换等)  |

---

## 工具说明

### `tools/Convert.py`

生成文件校验哈希 JSON，用于整合包完整性检测。

**用法**: 

```bash
cd Developer/tools
python Convert.py --root <整合包根目录> --targets <文件夹1> <文件夹2> ... --output <输出文件名>.json
```

**示例**: 

```bash
python Convert.py --root "C:/CMC-Alpha" --targets kubejs config --output checksums.json
```

**参数说明**: 

| 参数 | 说明 |
|---|---|
| `--root` | 整合包根目录 |
| `--targets` | 需要扫描的文件夹 (可多个，空格分隔)  |
| `--output` | 输出 JSON 文件名 |
| `--severity-missing` | 文件缺失时的严重级别 (`INFO` / `WARNING` / `ERROR` / `CRITICAL`)  |
| `--severity-changed` | 哈希不匹配时的严重级别 |
| `--required` | 默认将所有文件设为必需 |
| `--ignore` | 额外忽略模式 |

---

## 注意事项

- `Developer/` **不随整合包发布**——它是开发工作区
- `assets/` 里的大文件 (`.bbmodel`) 如果超过 50MB，考虑 Git LFS
- `icon/` 和 `images/` 的素材是**源文件**，改了要同步到对应的模组 / 资源包
- `docs/` 里所有文档都是**设计参考**，不是运行时文件

---