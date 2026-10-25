ServerEvents.highPriorityData((event) => {

	let cropsList = ["potato", "carrot", "beetroot"]

	cropsList.forEach((crop) => {
		addUnification(`${crop}_crate`, [
			`#forge:storage_blocks/${crop}`
		], `farmersdelight:${crop}_crate`)
	})

	// 虚设蜂箱漏斗
	addUnification("dummy_hive_hopper_base", [
		"cmc:dummy_hive_hopper_base"
	], "thermal:device_hive_extractor")

	addUnification("dummy_hive_hopper_beehive", [
		"cmc:dummy_hive_hopper_beehive"
	], "minecraft:beehive")

	addUnification("dummy_hive_hopper_bee_nest", [
		"cmc:dummy_hive_hopper_bee_nest"
	], "minecraft:bee_nest")

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