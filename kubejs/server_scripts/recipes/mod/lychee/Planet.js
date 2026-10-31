ServerEvents.recipes((event) => {
	let { lychee } = event.recipes

	const EMPTY_PLANET = "cmc:empty_planet"

	/**
	 * 快速生成右键交互的行星配方
	 * 
	 * @param {string} planet - 行星名称 (如 "earth")
	 * @param {string} targetBlock - 右键交互的方块
	 * @param {string} remainBlock - 消耗后剩下的方块
	 * @param {string} [recipeId] - 自定义配方 ID (默认使用 planet 名称)
	 */
	function addInteractPlanet(planet, targetBlock, remainBlock, recipeId) {
		let finalId = recipeId === undefined ? planet : recipeId

		lychee.block_interacting(
			EMPTY_PLANET,
			targetBlock
		).post([
			Post.drop_item(`cmc:${planet}`),
			Post.place(remainBlock)
		]).id(`cmc:lychee/${finalId}`)
	}

	// 地球、木星、土星、金星交互配置表
	const INTERACT_CONFIGS = [
		{
			planet: "earth",
			target: "supplementaries:globe",
			remain: "supplementaries:globe_sepia"
		},
		{
			planet: "jupiter",
			target: "#minecraft:logs",
			remain: "minecraft:air"
		},
		{
			planet: "saturn",
			target: "#minecraft:dirt",
			remain: "minecraft:air"
		},
		{
			planet: "venus",
			target: "minecraft:gold_ore",
			remain: "minecraft:stone",
			id: "venus_from_gold_ore"
		},
		{
			planet: "venus",
			target: "minecraft:deepslate_gold_ore",
			remain: "minecraft:deepslate",
			id: "venus_from_deepslate_gold_ore"
		},
		{
			planet: "venus",
			target: "minecraft:nether_gold_ore",
			remain: "minecraft:netherrack",
			id: "venus_from_nether_gold_ore"
		}
	]

	// 遍历注册统一格式的行星配方
	INTERACT_CONFIGS.forEach((config) => {
		addInteractPlanet(
			config.planet,
			config.target,
			config.remain,
			config.id
		)
	})

	// 太阳
	lychee.block_interacting(
		EMPTY_PLANET,
		"minecraft:torch"
	).post([
		Post.drop_item("cmc:sun"),
		Post.place("minecraft:air").withChance(0.75),
		Post.place("supplementaries:stick").withChance(0.25)
	]).id("cmc:lychee/sun")

	// 水星
	lychee.item_inside(
		EMPTY_PLANET,
		"minecraft:water"
	).post([
		Post.drop_item("cmc:mercury"),
		Post.place("minecraft:air")
	]).id("cmc:lychee/mercury")

	// 海王星 (物品在水中，且周围 8 格全是水时触发)
	lychee.item_inside(
		EMPTY_PLANET,
		"minecraft:water"
	).post([
		Post.drop_item("cmc:neptune").contextual(
			Contextual.and([
				Contextual.execute("execute if block ~1 ~ ~1 minecraft:water"),
				Contextual.execute("execute if block ~ ~ ~1 minecraft:water"),
				Contextual.execute("execute if block ~-1 ~ ~1 minecraft:water"),
				Contextual.execute("execute if block ~1 ~ ~ minecraft:water"),
				Contextual.execute("execute if block ~-1 ~ ~ minecraft:water"),
				Contextual.execute("execute if block ~1 ~ ~-1 minecraft:water"),
				Contextual.execute("execute if block ~ ~ ~-1 minecraft:water"),
				Contextual.execute("execute if block ~-1 ~ ~-1 minecraft:water")
			])
		)
	]).id("cmc:lychee/neptune")

	// 火星 (燃烧)
	lychee.item_burning(
		EMPTY_PLANET
	).post([
		Post.drop_item("cmc:mars"),
		Post.place("minecraft:air")
	]).id("cmc:lychee/mars")

	// 天王星 (空气中延迟 3 秒)
	lychee.item_inside(
		EMPTY_PLANET,
		"minecraft:air"
	).post([
		Post.delay(3),
		Post.drop_item("cmc:uranus")
	]).id("cmc:lychee/uranus")
})