StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @param {Color} color 
	 * @returns 
	 */
	function addColorIngotItem(name, color) {
		let builder = event.create(`cmc:${name}_ingot`)

		builder.texture("cmc:item/material/color/ingot/ingot")
		builder.color(0, color)
		builder.tag("forge:ingots")
		builder.tag(`forge:ingots/${name}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @param {string} type 
	 * @returns 
	 */
	function addNamedIngotItem(name, type) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/ingot/${type}`)
		builder.tag("forge:ingots")
		builder.tag(`forge:ingots/${type}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addAloneIngotItem(name) {
		let builder = event.create(`cmc:${name}_ingot`)

		builder.texture(`cmc:item/material/types/ingot/${name}`)
		builder.tag("forge:ingots")
		builder.tag(`forge:ingots/${name}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addNonIngotItem(name) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/ingot/${name}`)

		return builder
	}

	// 世界物质锭
	addAloneIngotItem("world_matter")

})