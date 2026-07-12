ServerEvents.recipes((event) => {
	let { lychee } = event.recipes

	// 地球
	lychee.block_interacting(
		"cmc:empty_planet",
		"supplementaries:globe"
	).post([
		Post.drop_item("cmc:earth"),
		Post.place("supplementaries:globe_sepia")
	]).id("cmc:lychee/earth")

	// 太阳
	lychee.block_interacting(
		"cmc:empty_planet",
		"minecraft:torch"
	).post([
		Post.drop_item("cmc:sun"),
		Post.place("minecraft:air").withChance(0.75),
		Post.place("supplementaries:stick").withChance(0.25)
	]).id("cmc:lychee/sun")

	// 水星 (海王星)
	lychee.item_inside(
		 "cmc:empty_planet",
		"minecraft:water"
	).post([
		Post.drop_item("cmc:mercury"),
		Post.drop_item("cmc:neptune").withChance(0.1),
		Post.place("minecraft:air")
	]).id("cmc:lychee/mercury_and_neptune")

	// 金星
	lychee.block_interacting(
		"cmc:empty_planet",
		"minecraft:gold_ore"
	).post([
		Post.drop_item("cmc:venus"),
		Post.place("minecraft:stone")
	]).id("cmc:lychee/venus_from_gold_ore")
	lychee.block_interacting(
		"cmc:empty_planet",
		"minecraft:deepslate_gold_ore"
	).post([
		Post.drop_item("cmc:venus"),
		Post.place("minecraft:deepslate")
	]).id("cmc:lychee/venus_from_deepslate_gold_ore")
	lychee.block_interacting(
		"cmc:empty_planet",
		"minecraft:nether_gold_ore"
	).post([
		Post.drop_item("cmc:venus"),
		Post.place("minecraft:netherrack")
	]).id("cmc:lychee/venus_from_nether_gold_ore")

	// 火星
	lychee.item_burning(
		"cmc:empty_planet"
	).post([
		Post.drop_item("cmc:mars"),
		Post.place("minecraft:air")
	]).id("cmc:lychee/mars")

	// 木星
	lychee.block_interacting(
		"cmc:empty_planet",
		"#minecraft:logs"
	).post([
		Post.drop_item("cmc:jupiter"),
		Post.place("minecraft:air")
	]).id("cmc:lychee/jupiter")

	// 土星
	lychee.block_interacting(
		"cmc:empty_planet",
		"#minecraft:dirt"
	).post([
		Post.drop_item("cmc:saturn"),
		Post.place("minecraft:air")
	]).id("cmc:lychee/saturn")

	// 天王星
	lychee.item_inside(
		"cmc:empty_planet",
		"minecraft:air"
	).post([
		Post.delay(3),
		Post.drop_item("cmc:uranus"),
		Post.place("minecraft:void_air")
	]).id("cmc:lychee/uranus")

	/*
	// 海王星 (测试配方)
	lychee.item_inside(
		"cmc:empty_planet",
		"minecraft:water"
	).post([
		Post.if([Contextual.and([
			Contextual.execute("execute if block ~1 ~ ~1 minecraft:water"),
			Contextual.execute("execute if block ~ ~ ~1 minecraft:water"),
			Contextual.execute("execute if block ~-1 ~ ~1 minecraft:water"),
			Contextual.execute("execute if block ~1 ~ ~ minecraft:water"),
			Contextual.execute("execute if block ~-1 ~ ~ minecraft:water"),
			Contextual.execute("execute if block ~1 ~ ~-1 minecraft:water"),
			Contextual.execute("execute if block ~ ~ ~-1 minecraft:water"),
			Contextual.execute("execute if block ~-1 ~ ~1 minecraft:water"),
		]),
		Post.drop_item("cmc:neptune")],[])
	]).id("cmc:lychee/neptune")
	*/

})