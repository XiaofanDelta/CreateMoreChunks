# CMC 图片素材（源文件）

> 这里是**源文件**，运行时用的是 `kubejs/assets/cmc/textures/image/` 下的同名/改名副本。
> 改完要按下表同步；对应关系是 SHA-256 实测出来的，不是猜的。

---

## 一、对应关系

| 源文件 | 目标（`kubejs/assets/cmc/textures/`） | 用途 |
|---|---|---|
| `title.png` | `image/gui/cmc_title.png` | 标题界面标题字（FancyMenu `title_screen_layout.txt` 引用） |
| `cover.png` | `image/gui/modpack_cover.png` | 整合包封面 |
| `loading.png` | `image/gui/chunk.png` | 加载 / 菜单背景（FancyMenu 引用的是 `chunk.png`，**名字不同是历史原因，保持原状**） |
| `by_delta.png` | `image/by_delta.png` | 作者标识 |
| `bcc.png` | `image/ftb/bcc.png` | 资源包图标：Better Chunk by Chunk |
| `ouid.png` | `image/ftb/ouid.png` | 资源包图标：OreUI |
| `random_thing.png` | — | **待定**，当前无引用 |
| `reference/material.webp` | — | **参考图，不进包** |

---

## 二、改动流程

1. 改本目录的源文件
2. 按上表覆盖目标文件（保持目标文件名不变）
3. `title.png` / `loading.png` 这类会被 FancyMenu 引用的，改完进游戏看一眼标题界面和加载界面
4. `reference/` 里的东西**永远不复制进包**——它只是对照用的

---

## 三、相关

- 图标（16 / 32 / 256 / 600）在 [`../icon/`](../icon/)，对应关系见 [`../icon/README.md`](../icon/README.md)
- 群系 GIF 的逐帧素材在 `Developer/assets/textures/image/gui/gif_base/`，
  合成后的 `.gif` 放在 `kubejs/assets/cmc/textures/image/gui/chunk_button/selected/`
