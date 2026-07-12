ServerEvents.recipes((event) => {
	let { extendedcrafting } = event.recipes

	extendedcrafting.shaped_table("cmc:empty_infinity_source", [
		" EEE EEE ",
		"EEEEEEEEE",
		"EE EEE EE",
		"EEEEEEEEE",
		" EEE EEE "
	], {
		E: "cmc:empty"
	}).id("cmc:extendedcrafting/table/empty_infinity_source")

	extendedcrafting.shapeless_table("64x extendedcrafting:the_ultimate_ingot", 
		Ingredient.of("#cmc:ultimate_ingot_ingredients").itemIds
	).id("extendedcrafting:the_ultimate_ingot")

})