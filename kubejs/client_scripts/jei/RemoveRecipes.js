JEIEvents.removeRecipes((event) => {
	let ids = event.getCategoryIds()

	/**
	 * 
	 * @param {Special.RecipeType} type 要删除的配方类型
	 * @param {Special.RecipeId | Special.RecipeId[]} id 要删除的配方id
	 */
	function removeRecipeFromJEI(type, id) {
		event.remove(type, id)
	}

	const RAILWAYS_COLOR_GROUP =
		global.dyeColorGroup.concat([
			"chartreuse",
			"diorite",
			"dripstone",
			"flat_sea_green",
			"granite",
			"limestone",
			"maroon",
			"ochrum",
			"olive_green",
			"pine_green",
			"royal_blue",
			"scorchia",
			"sea_green",
			"tuff",
			"turquoise",
			"vermilion"
		])

	RAILWAYS_COLOR_GROUP.forEach((color) => {
		if (color === "white") {
			return
		}
		removeRecipeFromJEI("create:mixing", [
			`railways:mixing/palettes/dyeing/${color}_brass_wrapped_locometal_boiler`,
			`railways:mixing/palettes/dyeing/${color}_flat_slashed_locometal`,
			`railways:mixing/palettes/dyeing/${color}_locometal_pillar`,
			`railways:mixing/palettes/dyeing/${color}_riveted_locometal`,
			`railways:mixing/palettes/dyeing/${color}_locometal_boiler`,
			`railways:mixing/palettes/dyeing/${color}_slashed_locometal`,
			`railways:mixing/palettes/dyeing/${color}_flat_riveted_locometal`,
			`railways:mixing/palettes/dyeing/${color}_iron_wrapped_locometal`,
			`railways:mixing/palettes/dyeing/${color}_hinged_locometal_door`,
			`railways:mixing/palettes/dyeing/${color}_round_pane_locometal_window`,
			`railways:mixing/palettes/dyeing/${color}_locometal_end_ladder`,
			`railways:mixing/palettes/dyeing/${color}_copper_wrapped_locometal_smokebox`,
			`railways:mixing/palettes/dyeing/${color}_sliding_locometal_door`,
			`railways:mixing/palettes/dyeing/${color}_locometal_flywheel`,
			`railways:mixing/palettes/dyeing/${color}_hazard_stripes_diagonal_on_black`,
			`railways:mixing/palettes/dyeing/${color}_hazard_stripes_chevron_on_black`,
			`railways:mixing/palettes/dyeing/${color}_brass_wrapped_locometal`,
			`railways:mixing/palettes/dyeing/${color}_iron_wrapped_locometal_smokebox`,
			`railways:mixing/palettes/dyeing/${color}_iron_wrapped_locometal_boiler`,
			`railways:mixing/palettes/dyeing/${color}_locometal_smokebox`,
			`railways:mixing/palettes/dyeing/${color}_locometal_rung_ladder`,
			`railways:mixing/palettes/dyeing/${color}_copper_wrapped_locometal_boiler`,
			`railways:mixing/palettes/dyeing/${color}_hazard_stripes_chevron_on_white`,
			`railways:mixing/palettes/dyeing/${color}_folding_locometal_door`,
			`railways:mixing/palettes/dyeing/${color}_wrapped_locometal_smokebox`,
			`railways:mixing/palettes/dyeing/${color}_single_pane_locometal_window`,
			`railways:mixing/palettes/dyeing/${color}_copper_wrapped_locometal`,
			`railways:mixing/palettes/dyeing/${color}_two_pane_locometal_window`,
			`railways:mixing/palettes/dyeing/${color}_four_pane_locometal_window`,
			`railways:mixing/palettes/dyeing/${color}_locometal_trapdoor`,
			`railways:mixing/palettes/dyeing/${color}_plated_locometal`,
			`railways:mixing/palettes/dyeing/${color}_hazard_stripes_diagonal_on_white`,
			`railways:mixing/palettes/dyeing/${color}_locometal_vent`
		])
	})

})