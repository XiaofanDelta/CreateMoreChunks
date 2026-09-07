ServerEvents.recipes((event) => {
	let { kubejs } = event.recipes
	
	function addMaterialRecipe(namespace, material) {
		this.namespace = namespace
		this.material = material
	}

	addMaterialRecipe.prototype.blockIngotConvert = function () {
		this.ingotToBlockRecipe = 
			kubejs.shaped(`#forge:storage_blocks/${this.material}`, [
				"XXX",
				"XXX",
				"XXX"
			], {
				X: `#forge:ingots/${this.material}`
			}).id(`${this.namespace}:${this.material}_block_from_ingot`)

		this.blockToIngotRecipe = 
			kubejs.shapeless(
				`9x #forge:ingots/${this.material}`,
				`#forge:storage_blocks/${this.material}`
			).id(`${this.namespace}:${this.material}_ingot_from_block`)

		return this
	}

	addMaterialRecipe.prototype.ingotNuggetConvert = function () {

		this.IngotToNuggetRecipe = 
			kubejs.shapeless(
				`9x #forge:nuggets/${this.material}`,
				`#forge:ingots/${this.material}`
			).id(`${this.namespace}:${this.material}_nugget_from_ingot`)

		return this
	}

})