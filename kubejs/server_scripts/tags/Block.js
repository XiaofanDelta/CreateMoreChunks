ServerEvents.tags("block", (event) => {
    

    addAloneBlockTag("thermal:dynamos", "thermal_extra:dynamo_frost")

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