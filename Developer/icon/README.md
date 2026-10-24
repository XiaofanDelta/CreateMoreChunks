# CMC 图标（源文件）

> 这里是**源文件**，不是运行时纹理。改完要按下表同步到 `kubejs/assets/cmc/textures/`。
> 
> 图标不一定要求同名（包内命名见"目标"列），**不要**为了统一而重命名，保持现状即可。

---

## 一、对应关系（SHA-256 实测）

| 源文件 | 目标（`kubejs/assets/cmc/textures/`） | 用途 |
|---|---|---|
| `black_16x16.png` | `image/cmc_icon_16_blackbg.png`<br>`item/test/cmc_icon_black.png` | 黑底标志：物品 `cmc:cmc_icon_black` |
| `transparent_16x16.png` | `image/cmc_icon_16.png` | 16×16 透明标志（包内暂无直接引用） |
| `transparent_32x32.png` | `image/cmc_icon_32.png`<br>`item/test/cmc_icon.png`<br>**根目录 `icon.png`** | 透明标志：物品 `cmc:cmc_icon`（创造模式标签页图标）、**整合包图标** |
| `transparent_256x256.png` | `image/cmc_icon_big.png` | 256×256 大图（包内暂无直接引用，备用于宣传/启动器） |
| `black_600x600.png` | `image/cmc_icon_black_big.png` | 600×600 黑底大图（同上） |

**注意一个不对称**：透明标志的物品贴图用的是 **32×32**，黑底标志用的却是 **16×16**。
如果哪天要统一，先改物品模型再看效果，别只换源文件。

---

## 二、改动流程

1. 改本目录的源文件
2. 按上表覆盖 `kubejs/assets/cmc/textures/` 里对应的文件（尺寸可以不同，但别改文件名）
3. 若改的是 `transparent_32x32.png`，**别忘了同步根目录 `icon.png`**（两者字节一致）
4. 启动游戏确认：物品图标、创造标签页、PCL 整合包图标三处

---

## 三、不要做的事

- 不要重命名源文件去"对齐"包内名字——包内命名是历史原因，改了反而找不到
- 不要把大图（256 / 600）塞进 `item/`，它们不是物品贴图
- 不要在 `image/` 下放临时实验图，那是暂存区（`Developer/assets/`）该干的事
