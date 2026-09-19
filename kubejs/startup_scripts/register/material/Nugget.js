StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @param {Color} color 
	 * @returns 
	 */
	function addColorNuggetItem(name, color) {
		let builder = event.create(`cmc:${name}_nugget`)

		builder.texture("cmc:item/material/color/nugget/nugget")
		builder.color(0, color)
		builder.tag("forge:nuggets")
		builder.tag(`forge:nuggets/${name}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @param {string} type 
	 * @returns 
	 */
	function addNamedNuggetItem(name, type) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/nugget/${type}`)
		builder.tag("forge:nuggets")
		builder.tag(`forge:nuggets/${type}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addAloneNuggetItem(name) {
		let builder = event.create(`cmc:${name}_nugget`)

		builder.texture(`cmc:item/material/types/nugget/${name}`)
		builder.tag("forge:nuggets")
		builder.tag(`forge:nuggets/${name}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addNonNuggetItem(name) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/nugget/${name}`)

		return builder
	}

	// 世界物质粒
	addAloneNuggetItem("world_matter")

})