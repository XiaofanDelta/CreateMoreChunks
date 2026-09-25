ServerEvents.recipes((event) => {
	
	let { kubejs } = event.recipes

	// 安山岩
	kubejs.shapeless(
		Item.of("minecraft:andesite", 8),[
			"8x #forge:stone",
			"chunkbychunk:worldfragment"
	]).id("minecraft:andesite_from_cobblestone")

	// 安山混合物
	kubejs.shapeless(
		"cmc:andesite_mixture", [
			"cmc:andesite_dust",
			"2x #forge:nuggets/iron"
	]).id("cmc:andesite_mixture")

	// 石英种子
	kubejs.shapeless(
		Item.of("cmc:quartz_seed", 2),[
			"minecraft:quartz",
			"#forge:sand"
	]).id("cmc:quartz_seed")

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
	
	// 齿轮
	kubejs.shapeless("create:cogwheel", [
		"create:shaft",
		"#forge:gears/wooden"
	]).id("create:cogwheel")

	// 示例物品 
	kubejs.shapeless("9x cmc:example_item", "cmc:example_block").id("cmc:example_item")

	// 生物质制造机IO端口
	kubejs.shapeless("cmc:biomass_machine_io", [
		"cmc:biomass_machine",
		"minecraft:barrel"
	]).id("cmc:biomass_machine_io").keepIngredient("cmc:biomass_machine")

})