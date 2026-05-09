ItemEvents.tooltip((event) => {
    
    addCommonTooltip("cmc:test")
    addCommonTooltip("minecraft:kelp")
	addCommonTooltip("minecraft:clay_ball")
	addCommonTooltip("cmc:creative_physics_staff")
	addCommonTooltip("cmc:wooden_mechanism")
	addCommonTooltip("cmc:glue_bucket")

    /** 
	 * @param {Internal.Ingredient_} ingredient 
	 */
	function addCommonTooltip(ingredient) {
		let itemTooltipTranslateKey = `tooltip.${ingredient}`.replace(":", ".")
		event.add(ingredient, Component.translatable(itemTooltipTranslateKey))
	}
})