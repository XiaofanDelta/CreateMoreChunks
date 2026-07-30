ServerEvents.highPriorityData((event) => {

	let materialBlockList = ["lead", "tin", "bronze", "steel", "electrum"]
	
	materialBlockList.forEach((materialBlock) => {
		addUnification(`${materialBlock}_block`, [
			`#forge:storage_blocks/${materialBlock}`
		], `thermal:${materialBlock}_block`)
	})

	/**
	 * 
	 * @example 	addUnification("potato_crate", [ "#forge:storage_blocks/potato" ], "farmersdelight:potato_crate")
	 * @param {string} name 
	 * @param {Internal.Block[]} match 
	 * @param {Internal.Block} block 
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