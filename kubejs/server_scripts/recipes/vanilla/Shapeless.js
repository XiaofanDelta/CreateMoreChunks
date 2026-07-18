ServerEvents.recipes((event) => {
	
	let { kubejs } = event.recipes

	// 安山合金
	kubejs.shapeless(
		Item.of("minecraft:andesite", 8),[
			"8x #forge:stone",
			"chunkbychunk:worldfragment"
	]).id("minecraft:andesite_from_cobblestone")

	// 石英种子
	kubejs.shapeless(
		Item.of("cmc:quartz_seed", 2),[
			"minecraft:quartz",
			"#forge:sand"
	]).id("cmc:quartz_seed")

	// 世界物质粒
	kubejs.shapeless(
		Item.of("cmc:world_matter_nugget", 9),
			"cmc:world_matter_ingot"
	).id("cmc:world_nugget")

	// 世界物质锭
	kubejs.shapeless(
		"cmc:world_matter_ingot",
		Item.of("cmc:world_matter_nugget", 9)
	).id("cmc:world_ingot_from_nuggets")

	// 地球仪
	kubejs.shapeless(
		"supplementaries:globe",[
			"cmc:globe_frame",
			"cmc:earth"
	]).id("supplementaries:globe")

	// 空
	kubejs.shapeless(
		"10x cmc:empty",
		"9x cmc:empty"
	).id("cmc:empty_copy")

	kubejs.shapeless(
		"cmc:empty",
		"cmc:ticks"
	).id("cmc:empty_from_tick")

	// 红色通量线圈转化
	kubejs.shapeless(
		"2x cmc:small_rf_coil",
		"thermal:rf_coil"
	).id("cmc:small_rf_coil_from_rf_coil")

	// pipez通用管道
	kubejs.shapeless(
		"4x pipez:universal_pipe",[
			"pipez:item_pipe",
			"pipez:fluid_pipe",
			"pipez:energy_pipe",
			"pipez:gas_pipe"
	]).id("pipez:universal_pipe")

	// 空白蓝图转化
	kubejs.shapeless("cmc:empty_schematic", "create:empty_schematic").id("cmc:empty_schematic")
	kubejs.shapeless("create:empty_schematic", "cmc:empty_schematic").id("create:empty_schematic")

	// 辞典
	kubejs.shapeless("mekanism:dictionary", [
		"minecraft:book",
		"#forge:ingot"
	]).id("mekanism:dictionary")

})