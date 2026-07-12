ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	// 不毁砂纸
	thermal.bottler(
		Item.of("cmc:unbreakable_sandpaper").withNBT({
			Unbreakable: 1
		}), [
		Fluid.of("cmc:world_fluid", 1000),
		"createaddition:diamond_grit_sandpaper"
	]).energy(global.EnergyStage[1])
		.id("cmc:thermal/bottler/unbreakable_sandpaper")

	// 附魔金苹果
	thermal.bottler(
		"minecraft:enchanted_golden_apple", [
		Fluid.of("cmc:world_fluid", 200),
		"minecraft:golden_apple"
	]).energy(global.EnergyStage[1])
		.id("minecraft:thermal/bottler/enchanted_golden_apple")

	// 玫瑰石英
	thermal.bottler(
		"create:rose_quartz", [
		Fluid.of("thermal:redstone", 500),
		"cmc:high_pure_quartz"
	]).energy(1000)
		.id("create:thermal/bottler/rose_quartz")

	// 末影锭 (Extended Crafting)
	thermal.bottler(
		"extendedcrafting:ender_ingot", [
			Fluid.of("thermal:ender",250),
			"extendedcrafting:black_iron_ingot"
		]
	).energy(global.EnergyStage[1])
		.id("extendedcrafting:thermal/bottler/ender_ingot")

	// 红石锭 (Extended Crafting)
	thermal.bottler(
		"extendedcrafting:redstone_ingot", [
			Fluid.of("thermal:redstone",250),
			"extendedcrafting:black_iron_ingot"
	]).energy(global.EnergyStage[1])
		.id("extendedcrafting:thermal/bottler/redstone_ingot")

	// 深渊块
	thermal.bottler(
		"thermal_extra:abyssal_block",[
			Fluid.of("thermal_extra:abyssal",810),
			"minecraft:note_block"
	]).energy(global.EnergyStage[1])
		.id("thermal_extra:thermal/bottler/abyssal_block")

	// 结晶: 高纯石英
	thermal.crystallizer(
		"cmc:high_pure_quartz", [
			Fluid.of("minecraft:water", 1000),
			"cmc:quartz_seed"
	]).energy(1000)
		.id("cmc:thermal/crystallizer/high_pure_quartz")

})