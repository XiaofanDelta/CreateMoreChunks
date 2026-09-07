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
	addCommonTooltipLang("cmc:press_shift", "§b需要按下 Shift 键")
	addCommonTooltipLang("cmc:teleporter", "目之所及，皆可传送!")
	addCommonTooltipLang("cmc:channel_x2_card", "§aShift+右击将ae2频道模式改为x2")
	addCommonTooltipLang("cmc:channel_x3_card", "§aShift+右击将ae2频道模式改为x3")
	addCommonTooltipLang("cmc:channel_x4_card", "§aShift+右击将ae2频道模式改为x4")
	addCommonTooltipLang("cmc:channel_infinite_card", "§aShift+右击将ae2频道模式改为infinite(无限)")
	addCommonTooltipLang("cmc:channel_default_card", "§aShift+右击将ae2频道模式改为default(默认)")
	addCommonTooltipLang("#forge:buckets/dye", "此模组的{create:mechanical_mixer, 1}混合搅拌染色配方已被隐藏，你可以用{create_dragons_plus:white_dye_bucket, 1}白色染色配方类推其他被隐藏的染色配方")
	addCommonTooltipLang("#railways:filled_paint_pitchers", "此模组的{create:mechanical_mixer, 1}混合搅拌染色配方已被隐藏，你可以用{railways:white_paint_pitcher, 1}白色染色配方类推其他被隐藏的染色配方")

	// JEIInfo
	addJEIInfoLang("cmc:test", "对这是个测试的物品\n如果你在合成配方中看见了这个，请一定要报告这个bug！")
	addJEIInfoLang("cmc:creative_physics_staff", "用于移动模拟动态结构的创造模式专用工具。\n \n对孩子们，我在 1.20.1 Forge 里弄出\"航空学\"了！\n真的！")
	addJEIInfoLang("cmc:chunk_spawner", "§b随机与不随机，使区块生成器出了错…\n§c注意！\n使用后会直接替换方块生成\n谨慎使用！")
	addJEIInfoLang("#forge:buckets/dye", "此模组的混合搅拌染色配方已被隐藏，仅保留白色染色配方\n你可以用白色染色配方类推其他被隐藏的染色配方")
	addJEIInfoLang("#railways:filled_paint_pitchers", "此模组的混合搅拌染色配方已被隐藏，仅保留白色染色配方\n你可以用白色染色配方类推其他被隐藏的染色配方")

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