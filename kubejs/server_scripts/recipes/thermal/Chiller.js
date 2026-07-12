ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	// 世界物质锭
	thermal.chiller(
		"cmc:world_matter_ingot",
		[Fluid.of("cmc:world_fluid", 90),
			"thermal:chiller_ingot_cast"
	]).energy(global.EnergyStage[1])
		.keepIngredient("thermal_extra:chiller_plate_cast")
		.id("cmc:thermal/chiller/world_matter_ingot")

	// 史莱姆球
	thermal.chiller(
		"minecraft:slime_ball",[
		Fluid.of("cmc:glue", 250),
		"thermal:chiller_ball_cast"
	]).energy(global.EnergyStage[1])
		.keepIngredient("thermal:chiller_ball_cast")
		.id("thermal:chiller/glue_to_slime_ball")

	// 青铜锭
	thermal.chiller(
		"thermal:bronze_ingot",[
			Fluid.of("cmc:bronze", 90),
			"thermal:chiller_ingot_cast"
	]).energy(global.EnergyStage[1])
		.keepIngredient("thermal:chiller_ingot_cast")
		.id("thermal:chiller/bronze_ingot")

	// 殷钢锭
	thermal.chiller(
		"thermal:invar_ingot",[
			Fluid.of("cmc:invar", 90),
			"thermal:chiller_ingot_cast"
	]).energy(global.EnergyStage[1])
		.keepIngredient("thermal:chiller_ingot_cast")
		.id("thermal:chiller/invar_ingot")
	
	// 精炼红石锭
	thermal.chiller(
		"cmc:refined_redstone_ingot",[
			Fluid.of("thermal:redstone", 90),
			"thermal:chiller_ingot_cast"
	]).energy(global.EnergyStage[1])
		.keepIngredient("thermal:chiller_ingot_cast")
		.id("cmc:thermal/chiller/refined_redstone_ingot")
	
	// 板铸模
	thermal.chiller(
		"thermal_extra:chiller_plate_cast",[
			Fluid.of("cmc:bronze", 360),
			"#forge:plates"
	]).energy(global.EnergyStage[1])
		.id("thermal_extra:thermal/chiller/chiller_plate_cast")
	
	// 锭铸模
	thermal.chiller(
		"thermal:chiller_ingot_cast",[
			Fluid.of("cmc:bronze", 360),
			"#forge:ingots"
	]).energy(global.EnergyStage[1])
		.id("thermal:chiller/chiller_ingot_cast")

	// 杆铸模
	thermal.chiller(
		"thermal:chiller_rod_cast",[
			Fluid.of("cmc:bronze", 360),
			"#forge:rods"
	]).energy(global.EnergyStage[1])
		.id("thermal:chiller/chiller_rod_cast")
	
	// 球铸模
	thermal.chiller(
		"thermal:chiller_ball_cast",[
			Fluid.of("cmc:bronze", 360),
			"#cmc:balls"
	]).energy(global.EnergyStage[1])
		.id("thermal:chiller/chiller_ball_cast")

})