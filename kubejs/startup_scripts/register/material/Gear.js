StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @param {Color} color 
	 * @returns 
	 */
	function addColorGearItem(name, color) {
		let builder = event.create(`cmc:${name}_gear`)

		builder.texture("cmc:item/material/color/gear/gear")
		builder.color(0, color)
		builder.tag("forge:gears")
		builder.tag(`forge:gears/${name}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @param {string} type 
	 * @returns 
	 */
	function addNamedGearItem(name, type) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/gear/${type}`)
		builder.tag("forge:gears")
		builder.tag(`forge:gears/${type}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addAloneGearItem(name) {
		let builder = event.create(`cmc:${name}_gear`)

		builder.texture(`cmc:item/material/types/gear/${name}`)
		builder.tag("forge:gears")
		builder.tag(`forge:gears/${name}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addNonGearItem(name) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/gear/${name}`)

		return builder
	}

	// 黄铜齿轮
	addAloneGearItem("brass")

	// 木质齿轮
	addAloneGearItem("wooden")

	// 石质齿轮
	addAloneGearItem("stone")

})