ServerEvents.recipes((event) => {
		/**
	 * @constructor
	 * @param {Internal.ItemStack_} output
	 */
	function CircuitCutterRecipe(output) {
		this.recipe = {
			type: "expatternprovider:circuit_cutter",
			output: Item.of(output).toJson()
		}
	}

	/**
	 * @param {Internal.Ingredient_} ingredient
	 * @param {number} [amount]
	 * @returns {CircuitCutterRecipe}
	 */
	CircuitCutterRecipe.prototype.item = function (ingredient, amount) {
		this.recipe.item_input = {
			amount: amount || 1,
			ingredient: Ingredient.of(ingredient).toJson()
		}
		return this
	}

	/**
	 * @param {Internal.FluidStackJS_} fluid
	 * @param {number} amount
	 * @returns {CircuitCutterRecipe}
	 */
	CircuitCutterRecipe.prototype.fluid = function (fluid, amount) {
		this.recipe.fluid_input = {
			amount: amount,
			ingredient: {
				fluid: Fluid.of(fluid).id
			}
		}
		return this
	}

	/**
	 * @param {ResourceLocation_} [id]
	 * @returns
	 */
	CircuitCutterRecipe.prototype.build = function (id) {
		let recipe = event.custom(this.recipe)

		if (id) {
			recipe.id(id)
		}

		return recipe
	}

	new CircuitCutterRecipe(Item.of("appliedcreate:stress_circuit_board", 9))
		.item("create:andesite_alloy_block")
		.fluid("minecraft:water", 1000)
		.build("appliedcreate:expatternprovider/circuit_cutter/stress_circuit_board")

	new CircuitCutterRecipe(Item.of("appliedcreate:advanced_stress_circuit_board", 9))
		.item("create:brass_block")
		.fluid("minecraft:water", 1000)
		.build("appliedcreate:expatternprovider/circuit_cutter/advanced_stress_circuit_board")

})