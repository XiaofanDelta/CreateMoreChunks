StartupEvents.registry("item", (event) => {

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addAloneGemItem(name) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/gem/${name}`)
		builder.tag("forge:gems")
		builder.tag(`forge:gems/${name}`)

		return builder
	}

	/**
	 * 
	 * @param {string} name 
	 * @returns 
	 */
	function addNonGemItem(name) {
		let builder = event.create(`cmc:${name}`)

		builder.texture(`cmc:item/material/types/gem/${name}`)

		return builder
	}

	// 世界宝石
	addAloneGemItem("world_gem")

	// 高纯石英
	addAloneGemItem("high_pure_quartz")

})