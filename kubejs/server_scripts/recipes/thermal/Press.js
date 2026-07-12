ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	// 热力组件锻造模版
	thermal.press(
		"thermal_extra:augment_smithing_upgrade",
		"cmc:basic_smithing_template"
	).energy(global.EnergyStage[1]).id("thermal_extra:thermal/press/augment_smiting_upgrade")

	// 世界物质板
	thermal.press(
		"cmc:world_matter_plate",
		"cmc:world_matter_ingot"
	).energy(global.EnergyStage[1]).id("cmc:thermal/press/world_matter_plate")

	// 精密构件基底
	thermal.press("cmc:precision_mechanism_base",
		"create:brass_ingot"
	).energy(global.EnergyStage[1]).id("cmc:thermal/press/precision_mechanism_base")

	// 黄铜齿轮
	thermal.press("cmc:brass_gear",[
		"4x create:brass_ingot",
		"thermal:press_gear_die"
	]).energy(5000)
		.keepIngredient("thermal:press_gear_die")
		.id("cmc:thermal/press/brass_gear")
	
	// 红石通量线圈转化
	thermal.press("thermal:rf_coil",
		"2x cmc:small_rf_coil"
	).energy(1000).id("thermal:press/rf_coil")

	// 机器框架
	thermal.press("2x thermal:machine_frame", [
		"#forge:storage_blocks/iron",
		"#forge:storage_blocks/steel"
	]).energy(global.EnergyStage[1]).id("thermal:press/machine_frame")

	// 黑铁板
	thermal.press("extendedcrafting:black_iron_slate", 
		"extendedcrafting:black_iron_ingot"
	).energy(global.EnergyStage[1]).id("extendedcrafting:thermal/press/black_ingot_slate")
	
	// 精密核心
	thermal.press("cmc:incomplete_precision_core", [
		"thermal:rf_coil",
		"create:precision_mechanism"
	]).energy(global.EnergyStage[1]).id("cmc:thermal/press/incomplete_precision_core")
	thermal.press("cmc:precision_core", [
		"4x thermal:cured_rubber",
		"cmc:incomplete_precision_core"
	]).energy(global.EnergyStage[1]).id("cmc:thermal/press/precision_core")

	// 抽屉升级基板
	thermal.press(
		"cmc:drawer_upgrade_base",
		"#forge:stone"
	).energy(global.EnergyStage[1]).id("cmc:thermal/press/drawer_upgrade_base")

	// 红石通量单元框架
	thermal.press(
		"2x thermal:energy_cell_frame",[
			"8x #forge:wires/electrum",
			"#forge:storage_blocks/lead"
	]).energy(global.EnergyStage[1]).id("thermal:press/energy_cell_frame")

	// 流体单元框架
	thermal.press(
		"thermal:fluid_cell_frame",[
			"2x #forge:gears/bronze",
			"create:fluid_tank"
	]).energy(global.EnergyStage[1]).id("thermal:press/fluid_cell_frame")

	// 荧光液
	thermal.press(
		Fluid.of("supplementaries:lumisene", 125),
		"minecraft:glow_berries"
	).energy(global.EnergyStage[1]).id("supplementaries:thermal/press/lumisene")

	// 能源炉基底
	thermal.press(
		"2x cmc:dynamo_base",[
			"thermal:rf_coil",
			"thermal:machine_frame"
	]).energy(global.EnergyStage[1]).id("cmc:thermal/press/dynamo_base")

	// 通货能源炉
	thermal.press(
		"thermal:dynamo_numismatic", [
		"2x #forge:gears/emerald",
		"cmc:dynamo_base"
	]).energy(global.EnergyStage[1]).id("thermal:press/dynamo_numismatic")

	// 祛魔能源炉
	thermal.press(
		"thermal:dynamo_disenchantment", [
		"2x #forge:gears/lapis",
		"cmc:dynamo_base"
	]).energy(global.EnergyStage[1]).id("thermal:press/dynamo_disenchantment")

	// 珠宝能源炉
	thermal.press(
		"thermal:dynamo_lapidary", [
		"#forge:gears/diamond",
		"cmc:dynamo_base"
	]).energy(global.EnergyStage[2]).id("thermal:press/dynamo_lapidary")

	// 饕餮能源炉
	thermal.press(
		"thermal:dynamo_gourmand", [
		"minecraft:enchanted_golden_apple",
		"cmc:dynamo_base"
	]).energy(global.EnergyStage[2]).id("thermal:press/dynamo_gourmand")

})