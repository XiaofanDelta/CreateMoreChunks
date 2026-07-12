// priority: 100

let $LocalDateTime 
	= Java.loadClass("java.time.LocalDateTime")

let month = $LocalDateTime.now().getMonthValue()
let date = $LocalDateTime.now().getDayOfMonth()

// 日期
global.NowDate = {
	month: month,
	day: date,
	is41: (month === 4 && day === 1)
}

/**
 * DEV
 * 
 * @type {{ [key: boolean]: ResourceLocation_ }}
 */
global.Dev = {
	testing41: false,
	testingChunkSpawner: "不是你快点给我加上功能啊",
	recipesMaking: true,
	logRegisters: true
}

/**
 * @typedef {Object} EnergyStage
 * @property {number} 1 
 * @property {number} 2 
 * @property {number} 3 
 * @property {number} 4 
 * @property {number} 5 
 * @property {number} 6 
 * @property {function(number): number} getRandomScore - 生成 0~max 的随机整数
 */
global.EnergyStage = {
	1: 3000,
	2: 8000,
	3: 15000,
	4: 50000,
	5: 200000,
	6: 1000000,
	/**
	 * 
	 * @param {number} max 最高值
	 * @returns {number} 0~最高值的随机数
	 */
	getRandomEnergy: function (max) {
		return Math.floor(Math.random() * (max + 1))
	}
}

// 整合包状态
let modpackState = "Alpha"

// 热修复版本
let isHotfix = false

// 版本数字号
let modpackNumberVersion = "1.5.0"

/* 
 * Modpack总版本
 * 根据是否为热修复版本, 生成不同的版本号并保存到global并被读取
 */
if (isHotfix) {
	global.modPackMainVersion = `§0CMC ${modpackState}-${modpackNumberVersion}-hf`
} else {
	global.modPackMainVersion = `§0CMC ${modpackState}-${modpackNumberVersion}`
}

// 输出查看
console.log("Now Modpack Version: " + global.modPackMainVersion)

// 桶容量
global.BUCKET_CAPACITY = 1000

// 扳手Tag
global.WRENCH_PICKUP = "create:wrench_pickup"

/**
 * 挖掘等级
 * 
 * @type {{ [key: any]: ResourceLocation_ }}
 */
global.MiningLevel = {
	wooden: "minecraft:needs_wooden_tool",
	stone: "minecraft:needs_stone_tool",
	iron: "minecraft:needs_iron_tool",
	gold: "forge:needs_gold_tool",
	diamond: "minecraft:needs_diamond_tool",
	nether: "forge:needs_netherite_tool"
}

/**
 * 挖掘工具类型
 * 
 * @type {{ [key: any]: ResourceLocation_ }}
 */
global.ToolType = {
	sword: "forge:mineable/sword",
	pickaxe: "minecraft:mineable/pickaxe",
	axe: "minecraft:mineable/axe",
	shovel: "minecraft:mineable/shovel",
	hoe: "minecraft:mineable/hoe"
}

/**
 * 所有染料颜色
 * 
 * @type {string[]}
 */
global.dyeColorGroup = [
	"black",
	"blue",
	"brown",
	"cyan",
	"gray",
	"green",
	"light_blue",
	"light_gray",
	"lime",
	"magenta",
	"orange",
	"pink",
	"purple",
	"red",
	"white",
	"yellow"
]

/**
 * 太阳系星球
 * 
 * @type {string[]}
 */
global.planetList = [
		"sun",
		"mercury",
		"venus",
		"earth",
		"mars",
		"jupiter",
		"saturn",
		"uranus",
		"neptune",
]

/**
 * mek 机器等级
 * 
 * @type {string[]}
 */
global.mekTiers = [
	"basic",
	"advanced",
	"elite",
	"ultimate"
]
