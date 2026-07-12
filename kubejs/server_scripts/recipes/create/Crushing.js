ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 粉碎煤
	create.crushing([
		Item.of("cmc:coal_chunk", 1),
		Item.of("cmc:coal_chunk", 1).withChance(0.2),
		Item.of("mekanism:dust_coal", 1).withChance(0.01)
		],"minecraft:coal"
	).id("cmc:create/crushing/coal_chunk")

	// 粉碎铁
	create.crushing([
		Item.of("cmc:iron_chunk", 1),
		Item.of("cmc:iron_chunk", 1).withChance(0.2),
		Item.of("thermal:iron_dust", 1).withChance(0.01)
		],"minecraft:iron_ingot"
	).id("cmc:create/crushing/iron_chunk")

	// 粉碎世界物质
	create.crushing("cmc:crushed_world_matter",
		"cmc:world_matter_ingot"
	).id("cmc:create/crusing/crushed_world_matter")
	
})