ServerEvents.recipes((event) => {
	/**
	 * 
	 * @param {Internal.JsonElement_} output 
	 */
	function ReactionRecipe(output) {
		this.recipe = {
			type: "advanced_ae:reaction",
			output: output,
			fluid: {
				fluidStack: {}
			},
			input_items: []
		}
	}

	/**
	 * 至少为1000
	 * 
	 * @param {number} energy 
	 * @returns 
	 */
	ReactionRecipe.prototype.energy = function (energy) {
		this.recipe.energy = energy
		return this
	}

	/**
	 * 
	 * @param {Internal.FluidStackJS_} fluid 
	 * @param {number} amount 
	 * @returns 
	 */
	ReactionRecipe.prototype.fluid = function (fluid, amount) {
		this.recipe.fluid = {
			fluidStack: {
				FluidName: fluid,
				Amount: amount
			}
		}
		return this
	}

	/**
	 * 
	 * @param {Internal.ItemStack_} input 
	 * @param {number} [count] 
	 * @returns 
	 */
	ReactionRecipe.prototype.input = function (input, count) {
		this.recipe.input_items.push({
			amount: count || 1,
			ingredient: Ingredient.of(input).toJson()
		})
		return this
	}

	/**
	 * 
	 * @param {ResourceLocation_} [id] 
	 * @returns 
	 */
	ReactionRecipe.prototype.build = function (id) {
		let recipe = event.custom(this.recipe)

		if (id) {
			recipe.id(id)
		}

		return recipe
	}

	/**
	 * 
	 * @param {Internal.ItemStack_} item 
	 * @param {number} [count] 
	 * @returns 
	 */
	function item(item, count) {
		return {
			"#c": "ae2:i",
			id: item,
			"#": count || 1
		}
	}

	/**
	 * 
	 * @param {Internal.FluidStackJS_} fluid 
	 * @param {number} [amount] 
	 * @returns 
	 */
	function fluid(fluid, amount) {
		return {
			"#c": "ae2:f",
			id: fluid,
			"#": amount || 1000
		}
	}
	
	new ReactionRecipe(item("cmc:infinity_lava_cell", 1))
		.energy(500000)
		.fluid("minecraft:lava", 16000)
		.input("cobblefordays:tier_5", 64)
		.input("thermal:machine_crucible", 8)
		.input("megacells:mega_fluid_cell_housing", 1)
		.build("cmc:advanced_ae/reaction/infinity_lava_cell")
	
})
// Item.of("expatternprovider:infinity_cell", "{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}")
