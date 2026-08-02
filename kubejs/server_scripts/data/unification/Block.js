ServerEvents.highPriorityData((event) => {

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