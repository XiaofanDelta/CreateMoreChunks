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
		"#forge:ingots"
	]).id("mekanism:dictionary")

	// 安山合金粒
	kubejs.shapeless("9x cmc:andesite_alloy_nugget", "create:andesite_alloy").id("cmc:andesite_alloy_nugget")
	kubejs.shapeless("create:andesite_alloy", "9x cmc:andesite_alloy_nugget").id("create:andesite_alloy_from_nuggets")

	// 高级合金
	kubejs.shapeless("cmc:advanced_alloy_ingot", "9x cmc:advanced_alloy_nugget").id("cmc:advanced_alloy_ingot_from_nuggets")
	kubejs.shapeless("9x cmc:advanced_alloy_nugget", "cmc:advanced_alloy_ingot").id("cmc:advanced_alloy_nugget")
	kubejs.shapeless("cmc:advanced_alloy_block", "9x cmc:advanced_alloy_ingot").id("cmc:advanced_alloy_block")
	kubejs.shapeless("9x cmc:advanced_alloy_ingot", "cmc:advanced_alloy_block").id("cmc:advanced_alloy_ingot_from_block")
	
	// 齿轮
	kubejs.shapeless("create:cogwheel", [
		"create:shaft",
		"#forge:gears/wooden"
	]).id("create:cogwheel")

	// 示例物品 
	kubejs.shapeless("9x cmc:example_item", "cmc:example_block").id("cmc:example_item")

})