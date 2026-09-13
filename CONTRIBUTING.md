# Create: More Chunks 代码规范

## 第一章 总则

**第一条** 本规范适用于所有参与 `Create: More Chunks` (以下简称 `CMC`) 项目的开发人员及贡献者。

**第二条** 项目主理人 (Maintainer) 拥有版本迭代的最终决策权和规范解释权。

**第三条** 本规范基于 CMI 项目的开源协作协议制定，结合 CMC 项目实际开发习惯做出调整。

---

## 第二章 版本管理

- `CMC` 版本号由大、中、小版本号组成
- 版本号须在 `kubejs/startup_scripts/Global.js` 的 `global.modPackMainVersion` 显示声明
- 热修复版本在版本号后追加 `-hf`

---

## 第三章 命名规范

**第四条** 命名规则: 

1. 类名采用大驼峰式 (**PascalCase**) ，例: `HammerCrushRecipe`、`MaterialUnification`
2. 函数 / 变量采用小驼峰式 (**camelCase**) ，例: `addRawOreCrushRecipe`、`chanceOutput`
3. 常量采用全大写蛇形命名 (**SNAKE_CASE**) ，例: `CHUNK_SPAWNER_LIST`、`PRESS_DIE`
4. **严格禁止** 使用 `var` 声明变量与常量，只能使用 `let` 或 `const`
5. 全局变量 / 工具对象挂载到 `global` 下，例: `global.Dev`、`global.EnergyStage`

---

## 第四章 脚本开发规范

### 4.1 事件处理

**第五条** 所有 `KubeJS` 事件的 `handler` 必须使用 `event` 参数: 

```js
ServerEvents.recipes((event) => {
    // 其他代码
})
```

**第六条** 配方脚本必须进行结构解构，同一个文件内只解构实际用到的配方类型: 

```js
ServerEvents.recipes((event) => {
    let { create } = event.recipes
    // 其他代码
})
```

### 4.2 格式

**第七条** 在非必要时刻禁止写分号 `;` 在代码行末。

**第八条** `if` 或 `else` 语句禁止单行结束，或者单行 `return`: 

```js
if (a === b) return // X

if (a === b) {
    return
} // √
```

**第九条** 若无特殊情况，所有条件判断只能使用三等号强等于 `===`，禁止使用双等号弱等于 `==`。

**第十条** 所有的 lambda (箭头函数) 必须加上小括号 `()`，且必须在末尾加上大括号 `{}`: 

```js
xxx.forEach((value) => {
    // ...
})

ServerEvents.recipes((event) => {
    // ...
})
```

**第十一条** 禁止使用单引号 `''`，只能使用反引号 `` ` `` 或双引号 `""`。

**第十二条** 所有对象 `{}` 和数组 `[]` 内必须换行 (数组内的数组随意) : 

```js
{
    "key": "value",
    "key1": "value1"
},
[
    "value",
    "value1"
]
```

**第十三条** 方法或构造函数参数列表换行规范: 

当长度过长需要换行时，必须每个参数都换行，要么就一路到底: 

```js
function name(a, b, c, d, e, f) {}
function name(
    a,
    b,
    c,
    d,
    e,
    f
) {}
```

---

## 第五章 注册规范

**第十四条** 注册时使用 `addXxx` 函数封装，尽量不使用 `event.create`: 

```js
StartupEvents.registry("item", (event) => {

    function addItem(name, type) {
        if (global.Dev["logRegisters"]) {
            console.log(`物品 cmc:${name} 已注册!`)
        }
        if (type === undefined) {
            return event.create(`cmc:${name}`, "basic")
        }
        return event.create(`cmc:${name}`, type)
    }

    addItem("example_item").texture("cmc:item/example")

})
```

**第十五条** 调用链式方法时 **必须** 换行: 

```js
addBlock("creative_casing")
    .textureAll("cmc:block/casing/creative/side")
    .hardness(5)
    .requiresTool(true)
    .tagBlock(global.WRENCH_PICKUP)
    .soundType(SoundType.METAL)
```

**第十六条** **严格禁止** 使用 `.displayName()` 方法，所有命名前往 lang 文件下处理

**第十七条** 所有注册 id 统一使用 `cmc:` 命名空间。

---

## 第六章 配方规范

**第十八条** 在正式发布的版本中，所有 KJS 添加的配方必须有 id。

**第十九条** 普通配方的 id 遵循以下格式: 

```
<namespace>:[<recipeNamespace>/]<recipeType>/<outputItem>
```

- `namespace`: 配方产物的命名空间
- `recipeNamespace`: 如果配方的命名空间和产物的命名空间不同，则为配方命名空间
- `recipeType`: 配方类型
- `outputItem`: 输出物品的 id，不带 namespace，若有多个输出，则采用最主要输出 / 输入的 id

示例: 

```js
// 产物命名空间与配方命名空间相同 (省略 recipeNamespace)
.id("create:mixing/brass_ingot") // 产物 create:brass_ingot
.id("cmc:mixing/world_gem") // 产物 cmc:world_gem

// 产物命名空间与配方命名空间不同 (使用 recipeNamespace)
.id("cmc:create/mixing/world_gem") // 产物 cmc:world_gem,用 create:mixing
.id("cmc:thermal/press/precision_mechanism_base") // 产物 cmc:precision_mechanism_base,用 thermal:press
.id("chunkbychunk:create/mixing/worldshard") // 产物 chunkbychunk:worldshard,用 create:mixing
```

**第二十条** 有序配方必须使用标准模板: 

```js
kubejs.shaped("minecraft:stone", [
    "AAA",
    "BBB",
    "CCC"
], {
    A: "minecraft:sand",
    B: "#forge:gravel",
    C: "#forge:ingots/iron"
}).id("cmc:crafting/stone")
```

**第二十一条** 无序配方或 Create / Thermal 等 Mod 的配方必须使用标准模板，以下模板任选其一 (无序合成请严格遵守前两个) : 

```js
// 无序
kubejs.shapeless("minecraft:stone", [
    "minecraft:sand"
])

kubejs.shapeless("minecraft:stone", [
    "minecraft:sand",
    "#forge:ingots/iron"
])

// Create
create.mixing("minecraft:stone", [
    "minecraft:sand",
    Fluid.of("minecraft:water", 1000)
]).heated()

// Thermal
thermal.centrifuge([
    "2x minecraft:stone",
    Item.of("minecraft:sand", 2).withChance(0.5)
], [
    "minecraft:sand",
    Fluid.of("minecraft:water", 1000)
]).energy(global.EnergyStage[1])
```

**第二十二条** **Create 序列合成规范**: 

- `TransitionalItem` 必须为**不涉及其他配方**的 `create:sequenced_assembly` 物品类
- 所有 `incomplete_*` 物品统一在 `register/item/Incomplete.js` 中注册

```js
const incomplete_machine_frame = "cmc:incomplete_machine_frame"

create.sequenced_assembly(
    "thermal:machine_frame",
    "#forge:storage_blocks/michan", [
        create.cutting(incomplete_machine_frame, incomplete_machine_frame),
        create.deploying(incomplete_machine_frame, [
            incomplete_machine_frame,
            "#forge:storage_blocks/iron"
        ]),
        create.pressing(incomplete_machine_frame, incomplete_machine_frame)
    ]).transitionalItem(incomplete_machine_frame)
        .loops(1)
        .id("thermal:create/sequenced_assembly/machine_frame")
```

**第二十三条** 配方类封装使用**原型链**风格，`this.recipe` 保存配方本体: 

```js
function MaterialRecipe(namespace, material, type) {
    this.namespace = namespace
    this.material = material
    this.types = []
}

MaterialRecipe.prototype.blockIngotConvert = function (options) {
    options = options ?? {}
    // ...
    return this
}
```

---

## 第七章 注释规范

> **本章为强烈建议性规范，非强制要求。** 建议按下述方式书写，以便于后期维护与他人阅读。

**第二十四条** 建议所有**函数 / 类 / 原型方法**都有 JSDoc 注释: 

```js
/**
 *
 * @param {InputItem_} input - 输入物品
 * @param {OutputItem_} result - 砸出物品
 * @param {ResourceLocation_} id - 配方 id
 * @param {boolean} chanceOutput - 配方输出是否是概率配方
 * @returns {Special.Recipes.BlockCrushingLychee}
 */
function addCrushRecipe(input, result, id, chanceOutput) {
    // ...
}
```

**第二十五条** 建议在撰写物品逻辑时注释逻辑实现的功能，并分步注释该步骤实现的内容: 

```js
// 自然构件右键运行骨粉逻辑
BlockEvents.rightClicked((event) => {
    let { level, item, player, facing, block, hand } = event

    // 取消无效右键事件
    if (level.clientSide) {
        return
    }

    // 判断玩家手持物品为自然构件
    if (item === "cmc:nature_mechanism") {
        // ...
    }
})
```

**第二十六条** 建议复杂配方块使用 **段落注释**: 

```js
// 1.1 落锤配方
addRawOreCrushRecipe("minecraft:raw_iron", "minecraft:iron_nugget", "cmc:crush/iron", true)

// 1.2 鼓风机配方
// ...
```

---

## 第八章 导入 Java 包

**第二十七条** 在脚本中导入 Java 类时，应统一使用 `Java.loadClass("package.ClassName")`: 

- 必须用 `let` 定义变量
- 变量名统一采用 **`$` + 类名** 形式
- 若为内部类 (子类) ，在变量名中使用 `$` 连接

```js
let $BlockItem = Java.loadClass("net.minecraft.world.item.BlockItem")
let $Item$Properties = Java.loadClass("net.minecraft.world.item.Item$Properties")
let $IPLogic = Java.loadClass("dev.celestiacraft.industrialplatform.api.IPLogic")
```

**第二十八条** 导入语句放在文件顶部，位于 `// priority: xxx` 之后。

---

## 第九章 文件组织

**第二十九条** `kubejs` 文件夹内所有文件夹名采用类似 Java 包名的命名方式，`js` 文件名采用类似 Java 类名的命名方式。

**第三十条** `!` 前缀表示**高优先级 / 最先执行**，`@` 前缀表示**全局前置 / 被引用**。

---

## 第十章 开发规范 (Dev 模式) 

**第三十一条** 所有注册相关日志通过 `global.Dev.logRegisters` 控制: 

```js
if (global.Dev["logRegisters"]) {
    console.log(`物品 cmc:${name} 已注册!`)
}
```

**第三十二条** `global.Dev` 中的开关: 

```js
global.Dev = {
    testing41: false, // 愚人节测试
    recipesMaking: true, // 配方开发模式
    logRegisters: false // 注册日志
}
```

**第三十三条** 正式发布时 `logRegisters` 必须为 `false`。

---

## 第十一章 代码管理

**第三十四条** 知识产权条款: 

1. 贡献者保留其提交代码的著作权
2. 项目核心团队拥有代码架构的最终优化权

---

## 第十二章 更新日志

**第三十五条** 每次做出一个修改 (看情况区分) 需要在 `UpdateLogs.md` 中写上记录，格式如下 (每一行的 `-` 前后请记得空一个空格) : 

```markdown
## Alpha 1.6.0 Code Update

### 添加内容

 - 新增落锤方块与粗矿粉碎配方
 - 实现 null 系列方块

### 修改内容

 - 修复黄铜配方 id 冲突
 - 优化世界物质奇点合成链

### 删除内容

 - 移除篝火烤粗铁配方
```

---

## 第十三章 任务书写规范

> **本章为建议性规范，非强制要求。** 为了 CMC 整体叙事风格的一致性，建议按下述方式书写。

**第三十六条** 建议任务书文案遵循 **"先问题，后答案"** 原则，不建议在第一个任务里透露后续内容。

**第三十七条** 建议任务书文案风格: 

- **短** —— 不写大段说明文
- **留白** —— 让玩家自己发现
- **叙事化** —— 用场景代替指令，用画面代替数据

示例: 

> **伊始之地**
>
> 你醒来时，世界只剩下一块。
>
> 不是比喻。十六步见方，边缘之外是虚空。
>
> 世界没有消失。它被拆开了——拆成无数细小的碎片，每一片都停留在自己的角落里，还记着自己原本的样子。
>
> 它们都还在。只是不在这里。

**第三十八条** 建议颜色代码保留在文案中，颜色与语义对应: 

| 颜色 | 语义 |
|---|---|
| `§a` 绿 | 正面、建议 |
| `§c` 红 | 警告、危险 |
| `§e` 黄 | 强调数值 |
| `§7` 灰 | 提示、参考 |
| `§k` 混淆 | NULL、错误 |

---