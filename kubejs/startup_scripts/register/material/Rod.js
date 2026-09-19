StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @param {Color} color 
	 * @returns 
	 */
	function addColorRodItem(name, color) {
		let builder = event.create(`cmc:${name}_rod`)

		builder.texture("cmc:item/material/color/rod/rod")
		builder.color(0, color)
		builder.tag("forge:rods")
		builder.tag(`forge:rods/${name}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @param {string} type 
	 * @returns 
	 */
	function addNamedRodItem(name, type) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/rod/${type}`)
		builder.tag("forge:rods")
		builder.tag(`forge:rods/${type}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addAloneRodItem(name) {
		let builder = event.create(`cmc:${name}_rod`)

		builder.texture(`cmc:item/material/types/rod/${name}`)
		builder.tag("forge:rods")
		builder.tag(`forge:rods/${name}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addNonRodItem(name) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/rod/${name}`)

		return builder
	}

})