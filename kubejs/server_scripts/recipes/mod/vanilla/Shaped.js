// priority: 222

ServerEvents.recipes((event) => {

	let { kubejs } = event.recipes

	let H = {
		1: "#cmc:hammer_tier1",
		2: "#cmc:hammer_tier2",
		3: "#cmc:hammer_tier3",
		4: "#cmc:hammer_tier4"
	}

	kubejs.shaped("cmc:drop_hammer", [
		"XOX",
		"IXI",
		"XOX"
	], {
		X: "minecraft:flint",
		O: "minecraft:gravel",
		I: "minecraft:cobblestone"
	}).id("cmc:drop_hammer")

	// 安山合金
	kubejs.shaped("create:andesite_alloy", [
		"BA",
		"AB"
	], {
		A: "minecraft:andesite",
		B: "chunkbychunk:worldfragment"
	}).id("create:andesite_alloy")

	// 黄铜手
	kubejs.shaped(
		"create:brass_hand", [
		" A ",
		"BCB",
		" BH"
	], {
		A: "#forge:plates/andesite_alloy",
		B: "#forge:plates/brass",
		C: "create:shaft",
		H: H[2]
	}).id("create:brass_hand").damageIngredient(H[2])

	// 电子管
	kubejs.shaped("create:electron_tube", [
		"AH",
		"B ",
		"C "
	], {
		A: "create:polished_rose_quartz",
		B: "#forge:wires/copper",
		C: "#forge:plates/iron",
		H: H[2]
	}).id("create:electron_tube").damageIngredient(H[2])

	// 蓝宝石齿轮
	kubejs.shaped("thermal:sapphire_gear", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:gems/sapphire",
		B: "#forge:nuggets/iron"
	}).id("thermal:sapphire_gear")

	// 红宝石齿轮
	kubejs.shaped("thermal:ruby_gear", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:gems/ruby",
		B: "#forge:nuggets/iron",
	}).id("thermal:ruby_gear")

	// 地球仪框架
	kubejs.shaped("cmc:globe_frame", [
		" AA",
		"A A",
		" BH"
	], {
		A: "#forge:rods/gold",
		B: "#forge:plates/gold",
		H: H[1]
	}).id("cmc:globe_frame").damageIngredient(H[1])

	// 区块生成器
	kubejs.shaped("chunkbychunk:chunkspawner", [
		"ABA",
		"BCB",
		"ABA"
	], {
		A: "#forge:plates/copper",
		B: "cmc:earth",
		C: "chunkbychunk:worldcore"
	}).replaceIngredient(
		"cmc:earth",
		"cmc:empty_planet"
	).id("chunkbychunk:chunkspawner")

	// 空
	kubejs.shaped("4x cmc:empty", [
		"AB",
		"BA"
	], {
		A: "cmc:null",
		B: "ftbquests:missing_item"
	}).id("cmc:empty")

	// 小型红石通量线圈
	kubejs.shaped("2x cmc:small_rf_coil", [
		"ABC",
		"B B",
		"CBA"
	], {
		A: "#forge:rods/gold",
		B: "#forge:dusts/redstone",
		C: "#forge:plates/gold"
	}).id("cmc:small_rf_coil")

	// 红石通量线圈
	kubejs.shaped("thermal:rf_coil", [
		"  A",
		" B ",
		"A  "
	], {
		A: "#forge:plates/gold",
		B: "#forge:ingots/redstone",
	}).id("thermal:rf_coil")

	// 水龙头
	kubejs.shaped("supplementaries:faucet", [
		" W ",
		"PGI",
		"P  "
	], {
		W: "#minecraft:wooden_buttons",
		P: "#forge:plates/iron",
		G: "#forge:gears/iron",
		I: "#forge:ingots/iron"
	}).id("supplementaries:faucet")

	// pipez管道
	kubejs.shaped("16x pipez:item_pipe", [
		"PPP",
		"RIR",
		"PPP"
	], {
		P: "#forge:plates/iron",
		R: "#forge:dusts/redstone",
		I: "#forge:chests"
	}).id("pipez:item_pipe")
	kubejs.shaped("16x pipez:fluid_pipe", [
		"PPP",
		"RIR",
		"PPP"
	], {
		P: "#forge:plates/iron",
		R: "#forge:dusts/redstone",
		I: "minecraft:bucket"
	}).id("pipez:fluid_pipe")
	kubejs.shaped("16x pipez:energy_pipe", [
		"PPP",
		"RIR",
		"PPP"
	], {
		P: "#forge:plates/iron",
		R: "#forge:dusts/redstone",
		I: "thermal:rf_coil"
	}).id("pipez:energy_pipe")
	kubejs.shaped("16x pipez:gas_pipe", [
		"PPP",
		"RIR",
		"PPP"
	], {
		P: "#forge:plates/iron",
		R: "#forge:dusts/redstone",
		I: "mekanism:basic_chemical_tank"
	}).id("pipez:gas_pipe")

	// 基岩宝箱
	kubejs.shaped("chunkbychunk:bedrockchest", [
		"BKB",
		"BCB",
		"BBB"
	], {
		B: "minecraft:bedrock",
		K: "#supplementaries:keys",
		C: "supplementaries:safe"
	}).id("chunkbychunk:bedrockchest")

	// 古式墨水
	kubejs.shaped("supplementaries:antique_ink", [
		" S ",
		"GIG",
		"GGG"
	], {
		S: "#minecraft:wooden_slabs",
		G: "#forge:glass",
		I: "minecraft:ink_sac"
	}).id("supplementaries:antique_ink")

	// 配置工具
	kubejs.shaped("cmc:configuration_tool_base", [
		"SSS",
		"EEG",
		"SSS"
	], {
		S: "minecraft:smooth_stone",
		E: "#forge:rods/emerald",
		G: "#forge:wires/gold"
	}).id("cmc:configuration_tool_base")
	/* 旧版配方
	kubejs.shaped("functionalstorage:configuration_tool", [
		" W ",
		"SPI",
		" K "
	], {
		W: "#forge:tools/wrench",
		S: "supplementaries:soap",
		P: "minecraft:paper",
		I: "supplementaries:antique_ink",
		K: "#supplementaries:keys"
	}).id("functionalstorage:configuration_tool")
		.keepIngredient([
			"#forge:tools/wrench",
			"functionalstorage:configuration_tool"
		]).replaceIngredient("supplementaries:antique_ink", "minecraft:glass_bottle")
	*/

	// 连接工具
	kubejs.shaped("cmc:linking_tool_base", [
		"SSS",
		"DDG",
		"SSS"
	], {
		S: "minecraft:smooth_stone",
		D: "#forge:rods/diamond",
		G: "#forge:wires/gold"
	}).id("cmc:linking_tool_base")
	/* 旧版配方
	kubejs.shaped("functionalstorage:linking_tool", [
		" T ",
		"SUS",
		" P "
	], {
		T: "functionalstorage:configuration_tool",
		S: "#forge:string",
		U: "functionalstorage:collector_upgrade",
		P: "minecraft:paper"
	}).id("functionalstorage:linking_tool")
		.keepIngredient("functionalstorage:configuration_tool")
	*/

	// pipez 管道升级
	kubejs.shaped("pipez:basic_upgrade", [
		" MU",
		"MRM",
		"WM "
	], {
		M: "#forge:ingots/iron",
		U: "#forge:plates/iron",
		W: "#forge:wires/gold",
		R: "#forge:dusts/redstone"
	}).id("pipez:basic_upgrade")
	kubejs.shaped("pipez:improved_upgrade", [
		" MU",
		"MRM",
		"WM "
	], {
		M: "#forge:ingots/copper",
		U: "pipez:basic_upgrade",
		W: "#forge:wires/gold",
		R: "#forge:dusts/redstone"
	}).id("pipez:improved_upgrade")
	kubejs.shaped("pipez:advanced_upgrade", [
		" MU",
		"MRM",
		"WM "
	], {
		M: "#forge:ingots/gold",
		U: "pipez:improved_upgrade",
		W: "#forge:wires/gold",
		R: "#forge:storage_blocks/redstone"
	}).id("pipez:advanced_upgrade")
	kubejs.shaped("pipez:ultimate_upgrade", [
		" MU",
		"MRM",
		"WM "
	], {
		M: "#forge:ingots/redstone",
		U: "pipez:advanced_upgrade",
		W: "#forge:wires/gold",
		R: "compressium:redstone_1"
	}).id("pipez:ultimate_upgrade")
	kubejs.shaped("pipez_optimizer:atm_upgrade", [
		" MU",
		"MRM",
		"WM "
	], {
		M: "#forge:ingots/refined_glowstone",
		U: "pipez:ultimate_upgrade",
		W: "#forge:wires/gold",
		R: "compressium:redstone_2"
	}).id("pipez_optimizer:atm_upgrade")
	kubejs.shaped("pipez_optimizer:vibranium_upgrade", [
		" MU",
		"MRM",
		"WM "
	], {
		M: "#forge:ingots/netherite",
		U: "pipez_optimizer:atm_upgrade",
		W: "#forge:wires/gold",
		R: "compressium:redstone_3"
	}).id("pipez_optimizer:vibranium_upgrade")
	kubejs.shaped("pipez_optimizer:unobtainium_upgrade", [
		" MU",
		"MRM",
		"WM "
	], {
		M: "#forge:ingots/quantum",
		U: "pipez_optimizer:vibranium_upgrade",
		W: "#forge:wires/gold",
		R: "compressium:redstone_4"
	}).id("pipez_optimizer:unobtainium_upgrade")
	kubejs.shaped("pipez:infinity_upgrade", [
		" MU",
		"MRM",
		"WM "
	], {
		M: "#forge:ingots/world_matter",
		U: "pipez_optimizer:unobtainium_upgrade",
		W: "#forge:wires/gold",
		R: "#cmc:infinity_source/redstone"
	}).id("pipez:infinity_upgrade")

	// 齿轮方块
	kubejs.shaped("2x supplementaries:cog_block", [
		"RGR",
		"GCG",
		"RGR"
	], {
		R: "#forge:dusts/redstone",
		G: "#forge:gears/copper",
		C: "#forge:storage_blocks/copper"
	}).id("supplementaries:cog_block")

	// 桶
	kubejs.shaped("minecraft:bucket", [
		"A A",
		" A "
	], {
		A: "#forge:plates/andesite_alloy"
	}).id("minecraft:bucket_from_andesite")

	// 水槽
	kubejs.shaped("cookingforblockheads:sink", [
		"BAB",
		"CAC",
		"CCC"
	], {
		A: "thermal:device_water_gen",
		B: "minecraft:water_bucket",
		C: "minecraft:terracotta"
	}).id("cookingforblockheads:sink")

	// 电容
	kubejs.shaped("createaddition:capacitor", [
		"AH",
		"B ",
		"C "
	], {
		A: "#forge:plates/zinc",
		B: "#forge:plates/copper",
		C: "cmc:small_rf_coil",
		H: H[2]
	}).id("createaddition:capacitor").damageIngredient(H[2])

	// 流体单元
	kubejs.shaped("thermal:fluid_cell", [
		"ICI",
		"RFD",
		"ICI"
	], {
		F: "thermal:fluid_cell_frame",
		R: "thermal:redstone_servo",
		D: "thermal:cured_rubber",
		C: "#forge:plates/copper",
		I: "#forge:plates/iron"
	}).id("thermal:fluid_cell")

	// 红石通量单元
	kubejs.shaped("thermal:energy_cell", [
		"LRE",
		"BFD",
		"ERL"
	], {
		F: "thermal:energy_cell_frame",
		R: ["createaddition:capacitor", "thermal:rf_coil"],
		D: "thermal:cured_rubber",
		E: "#forge:plates/electrum",
		L: "#forge:plates/lead",
		B: "#forge:storage_blocks/redstone"
	}).id("thermal:energy_cell")

	// 红石伺服器
	kubejs.shaped("thermal:redstone_servo", [
		"RIR",
		" I ",
		"RIR"
	], {
		I: "#forge:rods/iron",
		R: "#forge:dusts/redstone"
	}).id("thermal:redstone_servo")

	// 扳手
	kubejs.shaped("supplementaries:wrench", [
		" P ",
		" RP",
		"R  "
	], {
		P: "#forge:plates/copper",
		R: "#forge:rods/copper"
	}).id("supplementaries:wrench")

	// 钻头
	kubejs.shaped("thermal:drill_head", [
		"PP ",
		"PR ",
		"  R"
	], {
		P: ["#forge:plates/iron", "#forge:plates/andesite_alloy"],
		R: "#forge:rods/iron"
	}).id("thermal:drill_head")

	// 锯片
	kubejs.shaped("thermal:saw_blade", [
		"PPP",
		"P P",
		"PPP"
	], {
		P: ["#forge:plates/iron", "#forge:plates/andesite_alloy"]
	}).id("thermal:saw_blade")

	if (global.NowDate["is41"] === false) {
		// 动力锯
		kubejs.shaped("create:mechanical_saw", [
			"A",
			"B",
			"C"
		], {
			A: "create:shaft",
			B: "create:andesite_casing",
			C: "thermal:saw_blade"
		}).id("create:mechanical_saw")

		// 动力钻头
		kubejs.shaped("create:mechanical_drill", [
			"A",
			"B",
			"C"
		], {
			A: "create:shaft",
			B: "create:andesite_casing",
			C: "thermal:drill_head"
		}).id("create:mechanical_drill")
	}

	// 能源炉基底
	kubejs.shaped("2x cmc:dynamo_base", [
		" AH",
		"DAD",
		"BCB"
	], {
		A: "createaddition:capacitor",
		B: "#forge:gears/iron",
		C: "thermal:machine_frame",
		D: "#forge:dusts/redstone",
		H: H[2]
	}).id("cmc:dynamo_base").damageIngredient(H[2])

	// 木质齿轮
	kubejs.shaped("cmc:wooden_gear", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#minecraft:planks",
		B: "#forge:rods/wooden"
	}).id("cmc:wooden_gear")

	// 石质齿轮
	kubejs.shaped("cmc:stone_gear", [
		" A ",
		"A A",
		" A "
	], {
		A: "#forge:stone"
	}).id("cmc:stone_gear")

	// 高级合金齿轮
	kubejs.shaped("cmc:advanced_alloy_gear", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:ingots/advanced_alloy",
		B: "#forge:nuggets/iron"
	}).id("cmc:advanced_alloy_gear")

	// 销毁器
	kubejs.shaped("thermal:device_nullifier", [
		"LLL",
		"GAG",
		"IRI"
	], {
		I: "#forge:plates/invar",
		L: "#forge:plates/lead",
		R: "thermal:redstone_servo",
		A: ["minecraft:cactus", "minecraft:lava_bucket"],
		G: "#forge:glass"
	}).id("thermal:device_nullifier")

	// 充能台
	kubejs.shaped("thermal:charge_bench", [
		"EEE",
		"CRC",
		"LCL"
	], {
		C: ["createaddition:capacitor", "thermal:rf_coil"],
		E: "#forge:gears/electrum",
		L: "#forge:plates/lead",
		R: "#forge:storage_blocks/redstone"
	}).id("thermal:charge_bench")

	// 工匠台
	kubejs.shaped("thermal:tinker_bench", [
		"III",
		"GTG",
		"PCP"
	], {
		C: ["createaddition:capacitor", "thermal:rf_coil"],
		T: "minecraft:crafting_table",
		P: "#minecraft:planks",
		G: "#forge:glass",
		I: "#forge:plates/iron"
	}).id("thermal:tinker_bench")

	// 锤子
	let hammerList = ["copper", "iron", "invar", "bronze", "steel"]
	let hammerList2 = ["signalum", "lumium", "enderium", "soul_infused", "shellite", "twinite", "dragonsteel", "abyssal"]
	hammerList.forEach((hammerType) => {
		kubejs.shaped(`cmc:${hammerType}_hammer`, [
			" IG",
			" SI",
			"R  "
		], {
			S: "#forge:rods/wooden",
			R: `#forge:rods/${hammerType}`,
			I: `#forge:ingots/${hammerType}`,
			G: `#forge:gears/${hammerType}`
		}).id(`cmc:${hammerType}_hammer`)
	})
	hammerList2.forEach((hammerType) => {
		kubejs.shaped(`thermal_extra:${hammerType}_hammer`, [
			" IG",
			" RI",
			"R  "
		], {
			R: `#forge:rods/${hammerType}`,
			I: `#forge:ingots/${hammerType}`,
			G: `#forge:gears/${hammerType}`
		}).id(`thermal_extra:${hammerType}_hammer`)
	})
	kubejs.shaped("cmc:golden_hammer", [
		" IG",
		" SI",
		"R  "
	], {
		S: "#forge:rods/wooden",
		R: "#forge:rods/gold",
		I: "#forge:ingots/gold",
		G: "#forge:gears/gold"
	}).id("cmc:golden_hammer")
	kubejs.shaped("cmc:diamond_hammer", [
		" DG",
		" SD",
		"R  "
	], {
		S: "#forge:rods/wooden",
		R: "#forge:rods/diamond",
		D: "#forge:gems/diamond",
		G: "#forge:gears/diamond"
	}).id("cmc:diamond_hammer")

	// 抽屉升级
	let DUB = "cmc:drawer_upgrade_base"
	kubejs.shaped("functionalstorage:void_upgrade", [
		"OOO",
		"OBO",
		"OOO"
	], {
		B: DUB,
		O: "minecraft:obsidian"
	}).id("functionalstorage:void_upgrade")
	kubejs.shaped("functionalstorage:redstone_upgrade", [
		"RCR",
		"DBD",
		"RCR"
	], {
		B: DUB,
		D: "#forge:dusts/redstone",
		R: "#forge:storage_blocks/redstone",
		C: "minecraft:comparator"
	}).id("functionalstorage:redstone_upgrade")
	let BHRObject = {
		B: DUB,
		H: "minecraft:hopper",
		R: "#forge:dusts/redstone"
	}
	kubejs.shaped("functionalstorage:collector_upgrade", [
		"RHR",
		" B ",
		"RHR"
	], BHRObject).id("functionalstorage:collector_upgrade")
	kubejs.shaped("functionalstorage:puller_upgrade", [
		"H",
		"B",
		"R"
	], BHRObject).id("functionalstorage:puller_upgrade")
	kubejs.shaped("functionalstorage:pusher_upgrade", [
		"R",
		"B",
		"H"
	], BHRObject).id("functionalstorage:pusher_upgrade")
	kubejs.shaped("functionalstorage:iron_downgrade", [
		"I I",
		"IBI",
		" I "
	], {
		B: DUB,
		I: "#forge:ingots/iron"
	}).id("functionalstorage:iron_downgrade")

	// 斯特林能源炉
	kubejs.shaped("thermal:dynamo_stirling", [
		" CH",
		"CAC",
		"BBB"
	], {
		A: "cmc:dynamo_base",
		B: "#forge:gears/stone",
		C: "#forge:gears/wooden",
		H: H[2]
	}).id("thermal:dynamo_stirling").damageIngredient(H[2])

	// 新月锤
	kubejs.shaped("thermal:wrench", [
		"  A",
		" B ",
		"B  "
	], {
		A: "#forge:gears/iron",
		B: "#forge:rods"
	}).id("thermal:wrench")

	// 切石机
	kubejs.shaped("minecraft:stonecutter", [
		"A",
		"B"
	], {
		A: "thermal:saw_blade",
		B: "#forge:stone"
	}).id("minecraft:stonecutter")
	
	// 示例方块
	kubejs.shaped("cmc:example_block", [
		"AAA",
		"AAA",
		"AAA"
	], {
		A: "cmc:example_item"
	}).id("cmc:example_block")

})