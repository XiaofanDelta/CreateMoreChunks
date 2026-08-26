ServerEvents.recipes((event) => {
	let { extendedcrafting } = event.recipes

	// 空无限源质
	extendedcrafting.shaped_table("cmc:empty_infinity_source", [
		" EEE EEE ",
		"EEEEEEEEE",
		"EE EEE EE",
		"EEEEEEEEE",
		" EEE EEE "
	], {
		E: "cmc:empty"
	}).id("cmc:extendedcrafting/table/empty_infinity_source")

	// 传送器
	extendedcrafting.shaped_table("cmc:teleporter", [
		" J J ",
		"  J  ",
		" J J ",
		"IIJII",
		"IEEEI",
		"IFXFI",
		"IXOXI",
		"IQXQI",
		"IIIII"
	], {
		J: "#forge:plates/world_matter",
		I: "#forge:ingots/world_matter",
		E: "#forge:ingots/enhanced_ender_ingot",
		F: "#forge:ingots/ender_ingot",
		X: "extendedcrafting:ender_star",
		O: "#forge:ender_pearls",
		Q: "#forge:gears/enderium"
	}).id("cmc:extendedcrafting/table/teleporter")

	// 终极锭
	extendedcrafting.shapeless_table("64x extendedcrafting:the_ultimate_ingot", 
		Ingredient.of("#cmc:ultimate_ingot_ingredients").itemIds
	).id("extendedcrafting:the_ultimate_ingot")

})