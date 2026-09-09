ItemEvents.tooltip((event) => {
	
	addCommonTooltip("cmc:test")
	addCommonTooltip("minecraft:kelp")
	addCommonTooltip("minecraft:clay_ball")
	addCommonTooltip("cmc:creative_physics_staff")
	addCommonTooltip("cmc:wooden_mechanism")
	addCommonTooltip("cmc:glue_bucket")
	addCommonTooltip("cmc:sun_oneshot")
	addCommonTooltip("cmc:sun_oneshot_item")
	addCommonTooltip("cmc:chunk_spawner")
	addCommonTooltip("cmc:empty_schematic")
	addCommonTooltip("cmc:press_shift")
	addCommonTooltip("cmc:teleporter")
	addCommonTooltip("cmc:channel_x2_card")
	addCommonTooltip("cmc:channel_x3_card")
	addCommonTooltip("cmc:channel_x4_card")
	addCommonTooltip("cmc:channel_infinite_card")
	addCommonTooltip("cmc:channel_default_card")
	addCommonTooltip("#railways:filled_paint_pitchers")

	/** 
	 * @param {Internal.Ingredient_} ingredient 
	 */
	function addCommonTooltip(ingredient) {
		let itemTooltipTranslateKey = `tooltip.${ingredient}`.replace(":", ".")
		event.add(ingredient, Component.translatable(itemTooltipTranslateKey))
	}
})