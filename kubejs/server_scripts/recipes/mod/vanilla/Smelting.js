ServerEvents.recipes((event) => {
	SmeltingRecipes.blasting(
		event,
		"create:andesite_alloy",
		"cmc:andesite_alloy_dust"
	).blasting.id("cmc:blasting/andesite_alloy_from_dust")
})