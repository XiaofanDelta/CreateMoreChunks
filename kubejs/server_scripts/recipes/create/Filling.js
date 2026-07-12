ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 玫瑰石英
	create.filling(
		"create:rose_quartz", [
		"cmc:high_pure_quartz",
		Fluid.of("thermal:redstone", 800)
	]).id("create:filling/rose_quartz")

	// 黑色光通染色球
	create.filling(
		"ae2:black_lumen_paint_ball",[
			"ae2:black_paint_ball",
			Fluid.of("mekanism:uranium_oxide",125)
	]).id("ae2:create/filling/black_lumen_paint_ball")

	// 不毁肥皂
	create.filling(
		"cmc:unbreakable_soap",[
			"supplementaries:soap",
			Fluid.of("cmc:world_fluid",1000)
	]).id("cmc:create/filling/unbreakable_soap")

	// 空白蓝图
	create.filling(
		"cmc:empty_schematic", [
			"minecraft:paper",
			Fluid.of("minecraft:water", 1000)
	]).id("cmc:create/filling/empty_schematic")

	// 荧光液瓶
	create.filling("supplementaries:lumisene_bottle", [
		Fluid.of("supplementaries:lumisene", 250),
		"minecraft:glass_bottle"
	]).id("supplementaries:create/filling/lumisene_bottle")

})