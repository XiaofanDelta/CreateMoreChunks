StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @param {Color} color 
	 * @returns 
	 */
	function addColorPlateItem(name, color) {
		let builder = event.create(`cmc:${name}_plate`)

		builder.texture("cmc:item/material/color/plate/plate")
		builder.color(0, color)
		builder.tag("forge:plates")
		builder.tag(`forge:plates/${name}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @param {string} type 
	 * @returns 
	 */
	function addNamedPlateItem(name, type) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/plate/${type}`)
		builder.tag("forge:plates")
		builder.tag(`forge:plates/${type}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addAlonePlateItem(name) {
		let builder = event.create(`cmc:${name}_plate`)

		builder.texture(`cmc:item/material/types/plate/${name}`)
		builder.tag("forge:plates")
		builder.tag(`forge:plates/${name}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addNonPlateItem(name) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/plate/${name}`)

		return builder
	}

	// 世界物质板
	addAlonePlateItem("world_matter")


})