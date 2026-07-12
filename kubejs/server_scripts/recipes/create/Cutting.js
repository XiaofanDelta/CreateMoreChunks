ServerEvents.recipes((event) => {
	let { create } = event.recipes

	create.cutting(
		"cmc:empty_planet",
		"#forge:glass"
	).id("cmc:create/cutting/empty_planet")
})