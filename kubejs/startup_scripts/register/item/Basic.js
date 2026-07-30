StartupEvents.registry("item", (event) => {

	// %null%
	addItem("null", "basic").texture("cmc:item/missing/missingno")
	addItem("null_mechanism").texture("cmc:item/missing/mechanism")
	addItem("empty").texture("cmc:item/missing/empty")

	// 星球
	addItem("empty_planet").texture("cmc:item/planet/empty")
		.tag("cmc:planets")
		.tag("cmc:planets/empty")
	
	global.planetList.forEach((planets) => {
		addItem(planets).texture(`cmc:item/planet/${planets}`)
			.tag("cmc:planets")
			.tag(`cmc:planets/${planets}`)
	})

	/**
	 * 
	 * @param {string} name 注册名
	 * @param {string} type 类型
	 * @returns 
	 */
	function addItem(name, type) {
		if (global.Dev["logRegisters"]) {
			console.log(`物品 cmc:${name} 已注册!`)
		}
		if (type === undefined) {
			return event.create(`cmc:${name}`, "basic")
		} else {
			return event.create(`cmc:${name}`, type)
		}
	}

})