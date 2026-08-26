ServerEvents.tags("block", (event) => {

	event.get("thermal:machines")
		.add([
			"thermal_extra:nitratic_igniter",
			"thermal_extra:fluid_mixer",
			"thermal_extra:endothermic_dehydrator",
			"thermal_extra:component_assembly",
			"thermal_extra:advanced_refinery",
			"cmc:advanced_component_assembly"
	])

	event.get("create:wrench_pickup")
		.add([
			"#thermal:dynamos",
			"#thermal:machines",
			"#thermal:devices",
			"thermal:machine_frame",
			"supplementaries:cog_block"
	])

	addAloneBlockTag("thermal:dynamos", "thermal_extra:dynamo_frost")
	addAloneBlockTag("thermal:dynamos", "cmc:dynamo_base")

	/**
	 * 
	 * @param {string} tag 标签
	 * @param {string} item 物品
	 * @returns
	 */
	function addAloneBlockTag(tag, item) {
		event.get(tag).add(item)
	}

})