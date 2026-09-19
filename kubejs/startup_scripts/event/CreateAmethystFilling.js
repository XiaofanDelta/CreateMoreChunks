CreateEvents.spoutHandler((event) => {
	const FLUID = "cmc:world_fluid"

	/**
	 * 注册晶簇成长逻辑
	 * @param {string} path 注册ID
	 * @param {string} block 当前方块
	 * @param {string} nextId 下个阶段方块
	 * @param {boolean} [checkAir=false] 是否需要检查空气生成(仅 budding 用)
	 */
	function addBudGrowth(path, block, nextId, checkAir) {
		// 待编写
	}

	// 紫水晶
	addBudGrowth("cmc:amethyst_spawn", "minecraft:budding_amethyst", "minecraft:small_amethyst_bud", true)
	addBudGrowth("cmc:small_amethyst_bud", "minecraft:small_amethyst_bud", "minecraft:medium_amethyst_bud")
	addBudGrowth("cmc:medium_amethyst_bud", "minecraft:medium_amethyst_bud", "minecraft:large_amethyst_bud")
	addBudGrowth("cmc:large_amethyst_bud", "minecraft:large_amethyst_bud", "minecraft:amethyst_cluster")

	// 赛特斯石英
	addBudGrowth("cmc:certus_spawn", "ae2:flawless_budding_quartz", "ae2:small_quartz_bud", true)
	addBudGrowth("cmc:small_certus_bud", "ae2:small_quartz_bud", "ae2:medium_quartz_bud")
	addBudGrowth("cmc:medium_certus_bud", "ae2:medium_quartz_bud", "ae2:large_quartz_bud")
	addBudGrowth("cmc:large_certus_bud", "ae2:large_quartz_bud", "ae2:quartz_cluster")

})