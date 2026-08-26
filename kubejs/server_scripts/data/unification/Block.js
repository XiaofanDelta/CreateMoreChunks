ServerEvents.highPriorityData((event) => {

	let cropsList = ["potato", "carrot", "beetroot"]

	cropsList.forEach((crop) => {
		addUnification(`${crop}_crate`, [
			`#forge:storage_blocks/${crop}`
		], `farmersdelight:${crop}_crate`)
	})

	/**
	 * 
	 * @example 	addUnification("potato_crate", [ "#forge:storage_blocks/potato" ], "farmersdelight:potato_crate")
	 * @param {string} name 
	 * @param {Internal.Block_[]} match 
	 * @param {Internal.Block_} block 
	 * @returns 
	 */
	function addUnification(name, match, block) {
		let itemUnification = {
			matchItems: match,
			resultItems: block
		}
		event.addJson(`oei:replacements/${name}.json`, itemUnification)
		return this
	}
})