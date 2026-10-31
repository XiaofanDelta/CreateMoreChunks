ServerEvents.recipes((event) => {
	/**
	 * @constructor
	 * @param {Internal.ItemStack_} output
	 */
	function InscriberRecipe(output) {
		this.recipe = {
			type: "ae2:inscriber",
			ingredients: {},
			result: Item.of(output).toJson()
		}
	}

	/**
	 * @param {Internal.Ingredient_} input
	 * @returns
	 */
	InscriberRecipe.prototype.middle = function (input) {
		this.recipe.ingredients.middle = Ingredient.of(input).toJson()
		return this
	}

	/**
	 * @param {Internal.Ingredient_} input
	 * @returns 
	 */
	InscriberRecipe.prototype.top = function (input) {
		this.recipe.ingredients.top = Ingredient.of(input).toJson()
		return this
	}

	/**
	 * 
	 * @param {Internal.Ingredient_} input 
	 * @returns 
	 */
	InscriberRecipe.prototype.bottom = function (input) {
		this.recipe.ingredients.bottom = Ingredient.of(input).toJson()
		return this
	}

	/**
	 * 
	 * @param {ResourceLocation_} [id] 
	 * @returns 
	 */
	InscriberRecipe.prototype.press = function (id) {
		this.recipe.mode = "press"
		return id ? event.custom(this.recipe).id(id) : event.custom(this.recipe)
	}

	/**
	 * 
	 * @param {ResourceLocation_} [id] 
	 * @returns 
	 */
	InscriberRecipe.prototype.inscribe = function (id) {
		this.recipe.mode = "inscribe"
		return id ? event.custom(this.recipe).id(id) : event.custom(this.recipe)
	}

	// 压印模板	
	new InscriberRecipe("ae2:silicon_press")
		.top("ae2:silicon_press")
		.middle("#forge:plates/iron")
		.inscribe("ae2:inscriber/silicon_press")

	new InscriberRecipe("ae2:logic_processor_press")
		.top("ae2:logic_processor_press")
		.middle("#forge:plates/iron")
		.inscribe("ae2:inscriber/logic_processor_press")

	new InscriberRecipe("ae2:calculation_processor_press")
		.top("ae2:calculation_processor_press")
		.middle("#forge:plates/iron")
		.inscribe("ae2:inscriber/calculation_processor_press")
})