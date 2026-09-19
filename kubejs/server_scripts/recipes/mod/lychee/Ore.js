ServerEvents.recipes((event) => {
	let { lychee } = event.recipes

	addCrushRecipe("minecraft:raw_copper", "thermal:copper_nugget", "minecraft:crush/copper")
	addCrushRecipe("minecraft:raw_gold", "minecraft:gold_nugget", "minecraft:crush/gold")
	addCrushRecipe("minecraft:raw_iron", "minecraft:iron_nugget", "minecraft:crush/iron")
	addCrushRecipe("create:raw_zinc", "create:zinc_nugget", "create:crush/zinc")

	addCrushRecipe("minecraft:cobblestone", "minecraft:gravel", "minecraft:crush/gravel", false)
	addCrushRecipe("minecraft:gravel", "minecraft:sand", "minecraft:crush/sand", false)

	/**
	 * 
	 * @param {InputItem_} input - 输入物品
	 * @param {OutputItem_} result - 砸出物品
	 * @param {ResourceLocation_} id - 配方 id
	 * @param {boolean} [chanceOutput = true] - 配方输出是否是概率配方
	 * @returns {Special.Recipes.BlockCrushingLychee}
	 */
	function addCrushRecipe(input, result, id, chanceOutput) {

		let postList = (chanceOutput ?? true) ?
			[
				Post.drop_item(Item.of(result, 5)),
				Post.drop_item(Item.of(result)).withChance(0.3)
			] :
			[
				Post.drop_item(Item.of(result))
			]

		let recipe =
			lychee.block_crushing(
				[input],
				"cmc:drop_hammer",
				"#forge:stone"
			).post(postList).id(id)

		return recipe
	}

})