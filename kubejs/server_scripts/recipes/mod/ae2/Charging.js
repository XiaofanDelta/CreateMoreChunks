ServerEvents.recipes(event => {
	function ChargerRecipe() {
		this.recipe = {
			type: "ae2:charger"
		}
	}

	/**
	 * 
	 * @param {Internal.ItemStack_} output 
	 * @returns 
	 */
	ChargerRecipe.prototype.output = function(output) {
		this.recipe.result = Item.of(output).toJson()
		return this
	}

	/**
	 * 
	 * @param {Internal.Ingredient_} input 
	 * @returns 
	 */
	ChargerRecipe.prototype.input = function(input) {
		this.recipe.ingredient = Ingredient.of(input).toJson()
		event.custom(this.recipe)
		return this
	}

})