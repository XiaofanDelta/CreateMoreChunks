ServerEvents.recipes((event) => {
	let { cmc } = event.recipes
	
	cmc.advanced_component_assemble()
		.inputItems([
			"2x cmc:precision_mechanism_base",
			"2x cmc:mechanism_part",
			"2x #forge:gears/brass",
			"2x #forge:gears/gold"])
		.inputFluids(Fluid.of("cmc:advanced_compound", 50))
		.inputFE(global.EnergyStage[4])
		.outputItems("2x create:precision_mechanism")
		.outputFluids(Fluid.of("cmc:impurity", 50))
		.id("create:cmc/advanced_component_assemble/precision_mechanism")

})