ServerEvents.recipes((event) => {
	let { cmc } = event.recipes

	cmc.advanced_component_assemble()
		.inputItems("cmc:delta", "12x cmc:test")
		.inputFluids(Fluid.of("cmc:world_fluid", 114))
		.inputFE(114514)
		.outputItems("25x cmc:test")
		.outputFluids(Fluid.of("water", 114))
		.id("cmc:test1114u091094j1")

})