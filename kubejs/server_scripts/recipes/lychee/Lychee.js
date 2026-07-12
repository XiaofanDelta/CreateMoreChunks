ServerEvents.recipes((event) => {
	let { lychee } = event.recipes

	// 世界宝石 => 世界核心
	lychee.block_interacting(
		"cmc:world_gem",
		"compressium:cobblestone_3")
		.post([
			Post.place("chunkbychunk:worldcore")
		])
		.id("chunkbychunk:lychee/worldcore")

	// 岩浆桶
	lychee.item_inside(
		"minecraft:water_bucket",
		"cmc:world_fluid")
		.post([
			Post.drop_item("minecraft:lava_bucket")
		])
		.id("lychee:lava_bucket")

	// 岩浆桶
	lychee.block_interacting(
		"cmc:sun_cmc",
		"#forge:storage_blocks/lumium")
		.post([
			Post.place("cmc:sun_oneshot")
		])
		.id("cmc:lychee/sun_oneshot")

	// 熔炉
	lychee.block_interacting(
		"minecraft:campfire",
		"compressium:cobblestone_2")
		.post([
			Post.place("minecraft:furnace")
		])
		.id("lychee:furnace")
	
	// 创造流休储罐
	lychee.block_interacting(
		"thermal:fluid_tank_creative_augment",
		"create:fluid_tank"
	).post([
		Post.place("cmc:creative_fiuld_tank")
	]).id("create:lychee/creative_fluid_tank")

	// %null% 区块生成器
	lychee.block_crushing([
		"chunkbychunk:chunkspawner",
		"chunkbychunk:unstablechunkspawner"
	]).falling_block("minecraft:anvil")
	.landing_block("minecraft:bedrock")
	.post([
		Post.drop_item("cmc:chunk_spawner")
	]).id("cmc:lychee/chunk_spawner")

	// 棍木
	lychee.block_interacting(
		"cmc:null_mechanism",
		"supplementaries:stick"
	).post([
		Post.damage_item(0),
		Post.drop_item("cmc:ticks"),
		Post.place("minecraft:air")
	]).id("cmc:lychee/ticks")

	// 地球仪
	lychee.block_interacting(
		"cmc:unbreakable_soap",
		"supplementaries:globe_sepia"
	).post([
		Post.place("supplementaries:globe"),
		Post.damage_item(0)
	]).id("supplementaries:lychee/globe")

})