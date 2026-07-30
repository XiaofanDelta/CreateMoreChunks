ServerEvents.highPriorityData((event) => {

	let MATERIAL_TYPES = [
		{ name: "ingot", tagSuffix: "ingots" },
		{ name: "nugget", tagSuffix: "nuggets" },
		{ name: "plate", tagSuffix: "plates" },
		{ name: "dust", tagSuffix: "dusts" }
	]

	let exampleMaterialList = ["材料ID", "modID", "是否有锭", "是否有粒", "是否有板", "是否有粉"]
	let materialList = [
		["lead", "thermal", true, true, true, true],
		["ender_pearl", "thermal", false, false, false, true],
		["diamond", "thermal", false, false, false, true],
		["obsidian", "thermal_extra", false, false, false, true],
		["tin", "thermal", true, true, true, true],
		["bronze", "thermal", true, true, true, true],
		["electrum", "thermal", true, true, true, true],
		["steel", "thermal", true, true, true, true],
		["gold", "thermal", false, false, true, true]
	]

	// 遍历材料
	for (const [id, mod, hasIngot, hasNugget, hasPlate, hasDust] of materialList) {
		// 用对象映射，方便按类型查找
		let MATERIAL_AVAILABILITY = {
			ingot: hasIngot,
			nugget: hasNugget,
			plate: hasPlate,
			dust: hasDust
		}

		// 遍历所有类型
		for (const { name, tagSuffix } of MATERIAL_TYPES) {
			if (MATERIAL_AVAILABILITY[name]) {
				let jsonFileName = `${id}_${name}`
				let tag = `#forge:${tagSuffix}/${id}`
				let item = `${mod}:${id}_${name}`
				addJsonFile(jsonFileName, addUnification(tag, item))
			}
		}
	}

	let rawMaterialList = ["tin", "lead"]

	rawMaterialList.forEach((rawMaterial) => {
		addJsonFile(`raw_${rawMaterial}`, addUnification(
			`#forge:raw_materials/${rawMaterial}`,
			`thermal:raw_${rawMaterial}`
		))
	})

	let materialRodList = ["copper", "iron", "gold", "electrum"]

	materialRodList.forEach((materialRod) => {
		addJsonFile(`${materialRod}_rod`, addUnification(
			`#forge:rods/${materialRod}`,
			`thermal_extra:${materialRod}_rod`
		))
	})

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