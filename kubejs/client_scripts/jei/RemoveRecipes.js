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

	global.dyeColorGroup.forEach((color) => {
		if (color === "white") {
			return
		}
		removeRecipeFromJEI("create:mixing", [
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/create/crafting/kinetics/${color}_seat_from_other_seat_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/create/crafting/kinetics/${color}_valve_handle_from_other_valve_handle_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/create/crafting/logistics/${color}_postbox_from_other_postbox_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/create/crafting/logistics/${color}_table_cloth_from_other_table_cloth_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/minecraft/dye_${color}_bed_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/minecraft/dye_${color}_carpet_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/minecraft/dye_${color}_wool_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/railways/dying_existing_cap_${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/minecraft/${color}_candle_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/farmersdelight/${color}_canvas_sign_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/farmersdelight/${color}_hanging_canvas_sign_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/createdeco/${color}_placard_from_dyeing_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/createdeco/${color}_shipping_container_from_dyeing_vaults_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/minecraft/${color}_stained_glass_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/minecraft/${color}_stained_glass_pane_from_glass_pane_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/minecraft/${color}_terracotta_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/ae2/network/cables/covered_${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/ae2/network/cables/dense_smart_${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/ae2/network/cables/glass_${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/ae2/network/cables/smart_${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/alexscaves/radon_lamp_${color}_dye_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/alexscaves/rock_candy_${color}_dye_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/thermal/rockwool/${color}_rockwool_from_dye_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/ae2/tools/paintballs_${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/ae2/network/cables/dense_covered_${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/mekanismadditions/balloon/recolor/${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/mekanismadditions/plastic/slab/transparent/recolor/${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/mekanismadditions/plastic/stairs/transparent/recolor/${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/mekanismadditions/plastic/transparent/recolor/${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/mekanismadditions/plastic/transparent/${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/supplementaries/bunting/bunting_${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/supplementaries/awnings/awning_${color}_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/supplementaries/candle_holders/candle_holder_${color}_dye_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/cookingforblockheads/dye_${color}_oven_as_coloring`,
			`create_dragons_plus:dye_fluid_coloring/minecraft/${color}/cookingforblockheads/${color}_kitchen_floor_as_coloring`
		])
	})

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