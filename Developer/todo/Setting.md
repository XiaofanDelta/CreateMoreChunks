# CMC 设定与设计待定项

> 还没定稿的设定与设计决策. 定稿后写进 `Developer/docs/` 对应文档, 再回到这里勾掉.
> 待办总览见 [`README.md`](./README.md).

---

## 一、章节

- [ ] **4 章: 完整物品清单与顺序**
  - 现状: [`docs/Gameflow.md`](../docs/Gameflow.md) 4.1 只写到"无限红石源质 → 无限 RF"这条链, 具体物品表未定
  - 相关: [`docs/Worldview.md`](../docs/Worldview.md) §5 "从假到真"

---

## 二、橡胶

- [ ] **橡胶系统: 来源 / 橡胶树 / 橡胶线的定位**
  - 现状: 精密核心配方里预留了 "4 橡胶 (待设计)" (见 [`docs/Gameflow.md`](../docs/Gameflow.md) 2.1)
  - 未定: 橡胶从哪来 (树 / 流体 / 副产), 橡胶线是否做独立物品

---

## 三、星球

- [ ] **海王星: 3×1×3 水坑检测方案**
  - 候选: Lychee `block_interacting` / Create 混合 / `item_inside`
  - 现状: 临时用"灌水 10% 概率"兜底, 真正的 8 格判定以注释保留在
    [`Planet.js`](../../kubejs/server_scripts/recipes/mod/lychee/Planet.js)
- [ ] **海王星配方实现** (依赖上面的方案定稿)

---

## 四、无限源质

- [ ] **3.3 "无限"的程度**: 自动机 / 合成表 / 高级材料, 三选一还是组合
- [ ] **源质的"复用"**: 能否拆回来切换材料

---

## 五、彩蛋任务线

- [ ] **剧本**: 音乐、字幕、结构、触发流程
- [ ] **触发事件实现**
- [ ] **多方块结构**: 创造流体储罐 + 创造板条箱

> 定位: FTBQ 走主线, Odyssey Quests 走隐藏彩蛋线; 最终彩蛋物品解锁隐藏支线 (见 [`docs/Worldview.md`](../docs/Worldview.md) §7).
