// priority: 222

ServerEvents.recipes((event) => {
	
	let { kubejs } = event.recipes

	// 安山合金
	kubejs.shaped(
		"create:andesite_alloy", [
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
		" B "
	], {
		A: "createdeco:andesite_sheet",
		B: "create:brass_sheet",
		C: "create:shaft"
	}).id("create:brass_hand")

	// 电子管
	kubejs.shaped(
		"create:electron_tube", [
		"A",
		"B",
		"C"
	], {
		A: "create:polished_rose_quartz",
		B: "#forge:wires/copper",
		C: "#forge:plates/iron"
	}).id("create:electron_tube")

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
	kubejs.shaped("cmc:globe_frame",[
		" AA",
		"A A",
		" B "
	], {
		A: "#forge:rods/gold",
		B: "#forge:plates/gold"
	}).id("cmc:globe_frame")

	// 区块生成器
	kubejs.shaped("chunkbychunk:chunkspawner",[
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
	kubejs.shaped("4x cmc:empty",[
		"AB",
		"BA"
	], {
		A: "cmc:null",
		B: "ftbquests:missing_item"
	}).id("cmc:empty")

	// 小型红石通量线圈
	kubejs.shaped("2x cmc:small_rf_coil",[
		"ABC",
		"B B",
		"CBA"
	], {
		A: "#forge:rods/gold",
		B: "#forge:dusts/redstone",
		C: "#forge:plates/gold"
	}).id("cmc:small_rf_coil")

	// 红石通量线圈
	kubejs.shaped("thermal:rf_coil",[
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
		M: "#forge:ingots/gold",
		U: "pipez:basic_upgrade",
		W: "#forge:wires/gold",
		R: "#forge:dusts/redstone"
	}).id("pipez:improved_upgrade")
	kubejs.shaped("pipez:advanced_upgrade", [
		" MU",
		"MRM",
		"WM "
	], {
		M: "#forge:gems/diamond",
		U: "pipez:improved_upgrade",
		W: "#forge:wires/gold",
		R: "#forge:storage_blocks/redstone"
	}).id("pipez:advanced_upgrade")
	kubejs.shaped("pipez:ultimate_upgrade", [
		" MU",
		"MRM",
		"WM "
	], {
		M: "#forge:ingots/netherite",
		U: "pipez:advanced_upgrade",
		W: "#forge:wires/gold",
		R: "compressium:redstone_1"
	}).id("pipez:ultimate_upgrade")
	kubejs.shaped("pipez:infinity_upgrade", [
		" MU",
		"MRM",
		"WM "
	], {
		M: "#forge:ingots/world_matter",
		U: "pipez:ultimate_upgrade",
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
		"A",
		"B",
		"C"
	], {
		A: "#forge:plates/zinc",
		B: "#forge:plates/copper",
		C: "cmc:small_rf_coil"
	}).id("createaddition:capacitor")

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
		P: ["#forge:plates/iron","#forge:plates/andesite_alloy"],
		R: "#forge:rods/iron"
	}).id("thermal:drill_head")

	// 锯片
	kubejs.shaped("thermal:saw_blade", [
		"PPP",
		"P P",
		"PPP"
	], {
		P: ["#forge:plates/iron","#forge:plates/andesite_alloy"]
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
		" A ",
		"DAD",
		"BCB"
	], {
		A: "createaddition:capacitor",
		B: "#forge:gears/iron",
		C: "thermal:machine_frame",
		D: "#forge:dusts/redstone"
	}).id("cmc:dynamo_base")

	// 木质齿轮
	kubejs.shaped("cmc:wooden_gear", [
		" A ",
		"A A",
		" A "
	], {
		A: "#minecraft:planks"
	}).id("cmc:wooden_gear")

	// 石质齿轮
	kubejs.shaped("cmc:stone_gear", [
		" A ",
		"A A",
		" A "
	], {
		A: "#forge:stone"
	}).id("cmc:stone_gear")

})
