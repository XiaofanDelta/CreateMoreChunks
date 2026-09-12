ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	// 热力组件锻造模版
	thermal.press(
		"thermal_extra:augment_smithing_upgrade",
		"cmc:basic_smithing_template"
	).energy(global.EnergyStage[1]).id("thermal_extra:thermal/press/augment_smiting_upgrade")

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
	
	// 高级合金齿轮
	thermal.press("cmc:advanced_alloy_gear",[
		"4x cmc:advanced_alloy_ingot",
		"thermal:press_gear_die"
	]).energy(5000)
		.keepIngredient("thermal:press_gear_die")
		.id("cmc:thermal/press/advanced_alloy_gear")
	
	// 红石通量线圈转化
	thermal.press("thermal:rf_coil",
		"2x cmc:small_rf_coil"
	).energy(1000).id("thermal:press/rf_coil")

	// 机器框架
	thermal.press("2x thermal:machine_frame", [
		"#forge:storage_blocks/iron",
		"#forge:storage_blocks/michan"
	]).energy(global.EnergyStage[1]).id("thermal:press/machine_frame")
	
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

	// 铁升级
	thermal.press("functionalstorage:gold_upgrade", [
		"4x #forge:storage_blocks/gold",
		"functionalstorage:copper_upgrade"
	]).id("functionalstorage:thermal/press/gold_upgrade")

	// 组件基板
	thermal.press("2x cmc:augment_base", [
		"#forge:plates/tin",
		"#forge:plates/silver"
	]).id("cmc:thermal/press/augment_base")

	// 过滤组件基板
	thermal.press("cmc:filter_augment_base", [
		"#cmc:filters",
		"cmc:augment_base"
	]).id("cmc:thermal/press/filter_augment_base")

	// 机器组件基板
	thermal.press("cmc:machine_augment_base", [
		"#forge:plates/invar",
		"cmc:augment_base"
	]).id("cmc:thermal/press/machine_augment_base")

	// 过滤规则
	thermal.press("thermal:item_filter_augment", [
		"2x #forge:gears/wooden",
		"cmc:filter_augment_base"
	]).id("thermal:press/item_filter_augment")
	thermal.press("thermal:fluid_filter_augment", [
		"#forge:gears/copper",
		"cmc:filter_augment_base"
	]).id("thermal:press/fluid_filter_augment")

	// 机器组件
	thermal.press("thermal:xp_storage_augment", [
		"thermal:xp_crystal",
		"cmc:machine_augment_base"
	]).id("thermal:press/xp_storage_augment")
	thermal.press("thermal:side_config_augment", [
		"6x minecraft:hopper",
		"cmc:machine_augment_base"
	]).id("thermal:press/side_config_augment")
	thermal.press("thermal:machine_null_augment", [
		"minecraft:cactus",
		"cmc:machine_augment_base"
	]).id("thermal:press/machine_null_augment")
	thermal.press("thermal:machine_cycle_augment", [
		"2x thermal:redstone_servo",
		"cmc:machine_augment_base"
	]).id("thermal:press/machine_cycle_augment")
	thermal.press("thermal:dynamo_throttle_augment", [
		"2x #forge:gears/electrum",
		"cmc:machine_augment_base"
	]).id("thermal:press/dynamo_throttle_augment")
	thermal.press("thermal:rs_control_augment", [
		"functionalstorage:redstone_upgrade",
		"cmc:machine_augment_base"
	]).id("thermal:press/rs_control_augment")

})