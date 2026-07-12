ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

/*
	
	mekanism.infusion_conversion(
		"10x world_gas",
		"cmc:world_gem"
	)

*/
	mekanism.enriching(
		"cmc:earth",
		"cmc:empty_planet",
	).id("cmc:test/114514")


	
	
})