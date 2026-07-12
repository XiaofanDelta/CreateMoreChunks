ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	// 世界流体
	thermal.crucible(
		Fluid.of("cmc:world_fluid", 810),
		"chunkbychunk:worldcore"
	).energy(global.EnergyStage[1])
		.id("cmc:thermal/crucible/worldcore_to_world_fluid")

	// 粘合剂
	thermal.crucible(
		Fluid.of("cmc:glue", 250),
		"minecraft:slime_ball"
	).energy(global.EnergyStage[1])
		.id("cmc:thermal/crucible/slime_ball_to_glue")
	thermal.crucible(
		Fluid.of("cmc:glue", 1000),
		"minecraft:slime_block"
	).energy(global.EnergyStage[1])
		.id("cmc:thermal/crucible/slime_block_to_glue")

	// 熔融深渊
	thermal.crucible(
		Fluid.of("thermal_extra:abyssal", 90),
		"thermal_extra:abyssal_dust"
	).energy(global.EnergyStage[1])
		.id("thermal_extra:thermal/crucible/abyssal_to_fluid")

	// 熔融液体
	let molten_fluid_list = [
		"tin",
		"iron",
		"nickel",
		"copper",
		"zinc",
		"uranium",
		"gold",
		"lead",
		"aluminum",
		"osmium",
		"silver",
		"arcane_gold"
	]
	molten_fluid_list.forEach((meterial) => {
		thermal.crucible(
			Fluid.of(`thermal_extra:raw_${meterial}`, 90),
			`#forge:dusts/${meterial}`
		).energy(global.EnergyStage[1])
			.id(`thermal_extra:thermal/crucible/raw_${meterial}`)
	})
	thermal.crucible(
		Fluid.of("cmc:bronze", 90),
		"#forge:dusts/bronze"
	).energy(global.EnergyStage[1])
		.id("cmc:thermal/crucible/bronze")
	thermal.crucible(
		Fluid.of("cmc:invar", 90),
		"#forge:dusts/invar"
	).energy(global.EnergyStage[1])
		.id("cmc:thermal/crucible/invar")

})