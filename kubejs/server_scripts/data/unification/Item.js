ServerEvents.highPriorityData((event) => {


	addJsonFile("dough", addUnification(
		"#forge:dough/wheat",
		"farmersdelight:wheat_dough"
	))

	addJsonFile("sawdust", addUnification(
		"#forge:sawdust",
		"thermal:sawdust"
	))


    /**
	 * @example addJsonFile("coal_coke", addUnification("#forge:coal_coke", "thermal:coal_coke"))
	 * @param {Internal.Item | Internal.Ingredient} match 
	 * @param {Internal.Item | Internal.Ingredient} item 
	 * @returns 
	 */
	function addUnification(match, item) {
		if (match == null) {
			console.error("Match cannot be null")
		}

		if (item == null) {
			console.error("Item cannot be null")
		}

		return {
			matchItems: [match],
			resultItems: item
		}
	}

	/**
	 * 
	 * @param {string} name 文件名称
	 * @param {Internal.JsonElement_} unification json
	 */
	function addJsonFile(name, unification) {
		if (name == null || name.trim() === "") {
			console.error("File name cannot be null or empty")
		}

		if (unification == null) {
			console.error("Unification json cannot be null")
		}

		event.addJson(`oei:replacements/${name}.json`, unification)
	}

})