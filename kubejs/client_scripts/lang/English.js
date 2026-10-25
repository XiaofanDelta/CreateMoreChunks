ClientEvents.lang("en_us", (event) => {

	// 并非不起作用, 只是加载顺序比kjs默认命名的低

	/**
	 * 
	 * @param {string} key 
	 * @param {string} value 
	 */
	function addBlockLang(key, value) {
		event.add(`block.cmc.${key}`, value)
	}

	/**
	 * 
	 * @param {string} key 
	 * @param {string} value 
	 */
	function addRecipeTypeLang(key, value) {
		event.add(key.replace(":", "."), value)
	}

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

	// mbd2 机器
	addBlockLang("advanced_component_assembly", "Advanced Component Assembly")
	addBlockLang("dynamo_base", "Dynamo Base")
	addBlockLang("biomass_machine", "Biomass Maker")
	addBlockLang("biomass_machine_io", "Biomass Maker IO Porter")
	addBlockLang("monworld_separator", "Monworld Separator")

	// 配方类型
	addRecipeTypeLang("thermal:hive_hopper", "Hive Hopper")
	addRecipeTypeLang("cmc:advanced_component_assemble", "Advanced Component Assemble")
	addRecipeTypeLang("cmc:hammer_crush", "Hammer Crushing")
	addRecipeTypeLang("cmc:biomass_create", "Biomass Making")
	addRecipeTypeLang("cmc:monworld_separate", "Monworld Separate")

	// tooltip
	addCommonTooltipLang("cmc:test", "Yes, this is a test item. If you see this in a recipe, please report this bug!")
	addCommonTooltipLang("cmc:creative_physics_staff", "Yes indeed, I made \"Aeronautics\" in 1.20.1 Forge! Really!")
	addCommonTooltipLang("minecraft:kelp", "§aFan with water blowing sand")
	addCommonTooltipLang("minecraft:clay_ball", "§aFan with water blowing sand")
	addCommonTooltipLang("cmc:wooden_mechanism", "§7§o§mActually I took this from CIM")
	addCommonTooltipLang("cmc:glue_bucket", "Too sticky to dare pour it out, for fear of getting your hands stuck")
	addCommonTooltipLang("cmc:sun_oneshot", "A light bulb, that is the sun...")
	addCommonTooltipLang("cmc:chunk_spawner", "§cRandom module error... reset")
	addCommonTooltipLang("cmc:empty_schematic", "Stackable")
	addCommonTooltipLang("cmc:press_shift", "§bPress Shift")
	addCommonTooltipLang("cmc:teleporter", "Wherever the eye can see, it can teleport!")
	addCommonTooltipLang("cmc:channel_x2_card", "§aShift+Right-click to set AE2 channel mode to x2")
	addCommonTooltipLang("cmc:channel_x3_card", "§aShift+Right-click to set AE2 channel mode to x3")
	addCommonTooltipLang("cmc:channel_x4_card", "§aShift+Right-click to set AE2 channel mode to x4")
	addCommonTooltipLang("cmc:channel_infinite_card", "§aShift+Right-click to set AE2 channel mode to infinite")
	addCommonTooltipLang("cmc:channel_default_card", "§aShift+Right-click to set AE2 channel mode to default")
	addCommonTooltipLang("#railways:filled_paint_pitchers", "This mod's {create:mechanical_mixer, 1} mixing dyeing recipe has been hidden. You can use the {railways:white_paint_pitcher, 1} white dyeing recipe to infer other hidden dyeing recipes")

	// JEIInfo
	addJEIInfoLang("cmc:test", "Yes, this is a test item\nIf you see this in a crafting recipe, please report this bug!")
	addJEIInfoLang("cmc:creative_physics_staff", "Creative-only tool for moving simulated dynamic structures\n \nYes indeed, I made \"Aeronautics\" in 1.20.1 Forge!\nReally!")
	addJEIInfoLang("cmc:chunk_spawner", "§bRandom and non-random, causing the chunk spawner to error...\n§cWarning!\nAfter use, it will directly replace block generation\nUse with caution!")
	addJEIInfoLang("#railways:filled_paint_pitchers", "This mod's mixing dyeing recipe has been hidden, only the white dyeing recipe is kept\nYou can use the white dyeing recipe to infer other hidden dyeing recipes")
})