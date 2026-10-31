ServerEvents.recipes((event) => {
	let s = SmeltingRecipes.blasting(
		event,
		"create:andesite_alloy",
		"cmc:andesite_alloy_dust"
	)
	
	s.blasting.id("cmc:blasting/andesite_alloy_from_dust")

	s.smelting.id("cmc:smelting/andesite_alloy_from_dust")
})