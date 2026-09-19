StartupEvents.registry("item", (event) => {
	/**
	 * 
	 * @param {string} name 
	 * @param {Color} color 
	 * @returns 
	 */
	function addColorDustItem(name, color) {
		let builder = event.create(`cmc:${name}_dust`)

		builder.texture("cmc:item/material/color/dust/dust")
		builder.color(0, color)
		builder.tag("forge:dusts")
		builder.tag(`forge:dusts/${name}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @param {string} type 
	 * @returns 
	 */
	function addNamedDustItem(name, type) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/dust/${type}`)
		builder.tag("forge:dusts")
		builder.tag(`forge:dusts/${type}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addAloneDustItem(name) {
		let builder = event.create(`cmc:${name}_dust`)

		builder.texture(`cmc:item/material/types/dust/${name}`)
		builder.tag("forge:dusts")
		builder.tag(`forge:dusts/${name}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addNonDustItem(name) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/dust/${name}`)

		return builder
	}

	// 安山岩粉
	addAloneDustItem("andesite")

	// 世界物质粉
	addAloneDustItem("world_matter")

	// 安山混合物
	addNonDustItem("andesite_mixture")

})