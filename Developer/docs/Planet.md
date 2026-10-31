# CMC 星球列表

> 共 **9 种** (含太阳), 按离太阳从近到远排列.
> 
> 物品 id 前缀统一 `cmc:`, 列表同步在 `global.planetList` ([Global.js](../../kubejs/startup_scripts/Global.js)).
>
> 实现位置:
> 
> - 交互配方: [Planet.js](../../kubejs/server_scripts/recipes/mod/lychee/Planet.js) (Lychee)
> 
> - 地球的搅拌配方: [Mixing.js](../../kubejs/server_scripts/recipes/mod/create/Mixing.js) L74~88
> 
> - 空星球 `cmc:empty_planet` 是所有星球配方的基底

---

## 一、总表

| # | 星球 | 物品 | 获取方式 | 状态 |
|---|---|---|---|---|
| 1 | Sun 太阳 | `cmc:sun` | 火把右键空星球; 75% 留下空气、25% 变成木棍 | 已实现 |
| 2 | Mercury 水星 | `cmc:mercury` | 空星球丢入水中 (`item_inside`) | 已实现 |
| 3 | Venus 金星 | `cmc:venus` | 金矿石 / 深板岩金矿石 / 下界金矿石 右键空星球, 地形方块被替换 | 已实现 (3 条变体) |
| 4 | Earth 地球 | `cmc:earth` | 见下节 | 已实现 |
| 5 | Mars 火星 | `cmc:mars` | 空星球丢进火里烧 (`item_burning`) | 已实现 |
| 6 | Jupiter 木星 | `cmc:jupiter` | 任意原木右键空星球 | 已实现 |
| 7 | Saturn 土星 | `cmc:saturn` | 任意泥土右键空星球 | 已实现 |
| 8 | Uranus 天王星 | `cmc:uranus` | 空星球丢入空气 (`item_inside`), 延迟 3 tick | 已实现 |
| 9 | Neptune 海王星 | `cmc:neptune` | 空星球丢入水中, 且中心周围 8 格全是水 | 已实现 |

---

## 二、地球 (唯一有两条路径的星球)

**路径 A｜地球仪**

空星球 + `supplementaries:globe` (地球仪) 交互 → 掉落地球, 地球仪变成 `supplementaries:globe_sepia`.

**路径 B｜九星搅拌**

Create 搅拌: 太阳 + 8 颗行星 + 空星球 → **1 地球 + 8 空星球**.

这条配方 ([Mixing.js:74-88](../../kubejs/server_scripts/recipes/mod/create/Mixing.js#L74-L88)) 是"9 种星球"的出处:
把太阳系凑齐, 换回一颗地球. 空星球会被原样退回, 所以成本只在"凑齐九星".

---

## 三、海王星 (3×1×3 水坑)

与水星共用 `item_inside` 的水触发, 但海王星额外要求**中心周围 8 格全是水**:

```
~1 ~ ~1    ~ ~ ~1    ~-1 ~ ~1
~1 ~ ~     [中心]    ~-1 ~ ~
~1 ~ ~-1   ~ ~ ~-1   ~-1 ~ ~-1
```

实现是 8 个 `Contextual.execute("execute if block … minecraft:water")` 用 `Contextual.and` 串联,
全部成立才掉落 (见 [Planet.js](../../kubejs/server_scripts/recipes/mod/lychee/Planet.js) 的 `// 海王星` 段).
不满足时只有水星, 不会给海王星.

---

## 四、素材

太阳系示意图: `Developer/assets/textures/image/太阳系.jpg` (参考用, 不进包).
