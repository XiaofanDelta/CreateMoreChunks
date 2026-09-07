ServerEvents.recipes((event) => {
	let { cmc } = event.recipes
	
	cmc.advanced_component_assemble()
		.inputItems([
			"2x cmc:precision_mechanism_base",
			"2x cmc:mechanism_part",
			"2x #forge:gears/brass",
			"2x #forge:gears/gold"
		]).inputFluids(Fluid.of("cmc:advanced_compound", 50))
		.inputFE(global.EnergyStage[4])
		.outputItems("2x create:precision_mechanism")
		.outputFluids(Fluid.of("cmc:impurity", 50))
		.duration(20 * 3)
		.id("create:cmc/advanced_component_assemble/precision_mechanism")

	cmc.advanced_component_assemble()
		.inputItems([
			"thermal:ender_tnt", 
			"thermal:glowstone_tnt", 
			"thermal:redstone_tnt", 
			"thermal:slime_tnt", 
			"thermal:fire_tnt", 
			"thermal:ice_tnt", 
			"thermal:lightning_tnt", 
			"thermal:earth_tnt"
		]).inputFluids(Fluid.of("thermal_extra:raw_uranium", 8000))
		.inputFE(global.EnergyStage[5])
		.outputItems("8x thermal:nuke_tnt")
		.duration(20 * 60)
		.id("thermal:cmc/aca/nuke_tnt")

	cmc.advanced_component_assemble()
		.inputItems([
			"2x thermal:ender_tnt", 
			"2x thermal:glowstone_tnt", 
			"2x thermal:redstone_tnt", 
			"2x thermal:slime_tnt", 
			"2x thermal:fire_tnt", 
			"2x thermal:ice_tnt", 
			"2x thermal:lightning_tnt", 
			"2x thermal:earth_tnt"
		]).inputFluids(Fluid.of("mekanism:uranium_hexafluoride", 1000))
		.inputFE(global.EnergyStage[5])
		.outputItems("16x thermal:nuke_tnt")
		.duration(20 * 30)
		.id("thermal:cmc/aca/nuke_tnt2")

})