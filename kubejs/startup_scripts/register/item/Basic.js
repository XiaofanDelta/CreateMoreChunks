StartupEvents.registry("item", (event) => {

	// 锻造模板
	addItem("basic_smithing_template", "smithing_template")
		.ingredients(Component.translatable("item.cmc.smithing_template.basic.ingredients").getString())
		.appliesTo(Component.translatable("item.cmc.smithing_template.basic.applies_to").getString())
	addItem("andesite_upgrade_smithing_template", "smithing_template")
		.ingredients(Component.translatable("item.cmc.smithing_template.andesite.ingredients").getString())
		.appliesTo(Component.translatable("item.cmc.smithing_template.andesite.applies_to").getString())
	
	console.log(Component.translatable("item.cmc.smithing_template.andesite.applies_to"))
	console.log(String(Component.translatable("item.cmc.smithing_template.andesite.applies_to")))
	console.log(Component.translatable("item.cmc.smithing_template.andesite.applies_to").string)
	console.log(Component.translatable("item.cmc.smithing_template.andesite.applies_to").toString())
	console.log(Component.translatable("item.cmc.smithing_template.andesite.applies_to").getString())

	// 太阳
	addItem("sun_oneshot").texture("cmc:item/sun_oneshot")

	// %null%
	addItem("null", "basic").texture("cmc:item/missing/missingno")
	addItem("null_mechanism").texture("cmc:item/missing/mechanism")
	addItem("empty").texture("cmc:item/missing/empty")
	addItem("null_smithing_template", "smithing_template").texture("cmc:item/missing/smithing_template")
		.ingredients(Component.translatable("item.cmc.smithing_template.null.ingredients").getString())
		.appliesTo(Component.translatable("item.cmc.smithing_template.null.applies_to").getString())

	// 不毁肥皂
	addItem("unbreakable_soap").unstackable()

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