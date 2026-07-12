ClientEvents.lang("zh_cn", (event) => {
  
	// tooltip
	addCommonTooltipLang("cmc:test","对这是个测试的物品，如果你在合成配方中看见了这个，请一定要报告这个bug！")
	addCommonTooltipLang("cmc:creative_physics_staff", "对孩子们，我在 1.20.1 Forge 里弄出\"航空学\"了！真的！")
	addCommonTooltipLang("minecraft:kelp", "§a鼓风机水吹沙子")
	addCommonTooltipLang("minecraft:clay_ball", "§a鼓风机水吹沙子")
	addCommonTooltipLang("cmc:wooden_mechanism", "§7§o§m其实这是我从 CIM 里拿的")
	addCommonTooltipLang("cmc:glue_bucket", "太过于粘稠，以至于你不敢把这玩意倒出来，怕手被粘住")
	addCommonTooltipLang("cmc:sun_oneshot", "一颗灯泡，那是太阳……")
	addCommonTooltipLang("cmc:sun_oneshot_item", "一颗灯泡，那是太阳……")
	addCommonTooltipLang("cmc:chunk_spawner", "§c随机模块出现错误…已重置。")
	addCommonTooltipLang("cmc:empty_schematic", "可堆叠")

	// JEIInfo
	addJEIInfoLang("cmc:test", "对这是个测试的物品\n如果你在合成配方中看见了这个，请一定要报告这个bug！")
	addJEIInfoLang("cmc:creative_physics_staff", "用于移动模拟动态结构的创造模式专用工具。\n \n对孩子们，我在 1.20.1 Forge 里弄出\"航空学\"了！\n真的！")
	addJEIInfoLang("cmc:chunk_spawner", "§b随机与不随机，使区块生成器出了错…\n§c注意！\n使用后会直接替换方块生成\n谨慎使用！")

	/**
	 * 
	 * @param {string} key 有tooltip的物品id
	 * @param {string} value 本地化
	 */
	function addCommonTooltipLang(key, value) {
		event.add(`tooltip.${key}`.replace(":", "."), `§b${value}`)
	}

	/**
	 * 
	 * @param {string} key 有JEIInfo的物品id
	 * @param {string} value 本地化
	 */
	function addJEIInfoLang(key, value) {
		event.add(`jei.info.${key}`.replace(":", "."), value)
	}

	/**
	 * 
	 * @param {string} key 有JadeTip的物品id
	 * @param {string} value 本地化
	 */
	function addCommonJadeTipLang(key, value) {
		event.add(`jade.info.cmi.${key}`.replace(":", "."), `${value}`)
	}

})