ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 锻造模版基板
	create.pressing(
		"cmc:basic_smithing_template",
		"#minecraft:planks"
	).id("cmc:create/pressing/basic_smithing_template")
	
	// %null%
	create.pressing(
		Item.of("cmc:null",4),
		"cmc:null_block"
	).id("cmc:create/pressing/null")
	
	// 抽屉升级基板
	create.pressing(
		"cmc:drawer_upgrade_base",
		"#forge:stone"
	).id("cmc:create/pressing/drawer_upgrade_base")

})