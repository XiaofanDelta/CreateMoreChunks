ServerEvents.recipes((event) => {
	let { createaddition } = event.recipes

	createaddition.liquid_burning(
		Fluid.of("cmc:world_fluid", 1000),
		20*60,
		false
	)

})