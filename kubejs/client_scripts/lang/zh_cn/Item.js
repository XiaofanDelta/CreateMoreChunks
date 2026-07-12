// priority: 1225

ClientEvents.lang("zh_cn", (event) => {
  
	// 材料
	addItemLang("drive_part", "驱动器组件")
	addItemLang("world_gem", "世界宝石")
	addItemLang("creative_cell", "创造ME组件")
	addItemLang("imperfect_creative_cell", "不完美的创造ME组件")
	addItemLang("high_pure_quartz", "高纯石英")
	addItemLang("quartz_seed", "石英种子")
	addItemLang("mechanism_part", "构件零件")
	addItemLang("ringo_mechanism", "林檎 (苹果) 构件")
	addItemLang("wooden_mechanism", "木质构件")
	addItemLang("precision_mechanism_base", "精密构件基底")
	addItemLang("brass_gear", "黄铜齿轮")
	addItemLang("steel_casing_part", "钢质机壳部件")
	addItemLang("refined_redstone_ingot", "精炼红石锭")
	addItemLang("small_rf_coil", "小型红石通量线圈")
	addItemLang("globe_frame", "地球仪框架")
	addItemLang("unstable_singularity", "不稳奇点")
	addItemLang("drawer_upgrade_base", "抽屉升级基板")
	addItemLang("configuration_tool_base", "配置工具基板")
	addItemLang("linking_tool_base", "链接工具基板")
	addItemLang("augment_base", "组件基板")
	addItemLang("creative_augment_base", "创造组件基板")
	addItemLang("filter_augment_base", "过滤组件基板")
	addItemLang("precision_core", "精密核心")
	addItemLang("empty_schematic", "空白蓝图")
	addItemLang("mek_upgrade_base", "Mek 升级基板")
	addItemLang("circuit_component", "电路组件板")
	addItemLang("coal_chunk", "煤炭碎块")
	addItemLang("iron_chunk", "铁碎块")
	addItemLang("ultimate_card", "终极卡")
	addItemLang("tier_installer_base", "工厂升级器基板")
	addItemLang("wooden_gear", "木齿轮")
	addItemLang("stone_gear", "石齿轮")
	addItemLang("null_mechanism","%s 构件")

	// 测试
	addItemLang("test", "测试")

	// 工具
	addItemLang("unbreakable_sandpaper", "不毁砂纸")
	addItemLang("creative_physics_staff", "创造模式物理手杖")
	addItemLang("sun_oneshot_item", "太阳")
	addItemLang("unbreakable_soap", "不毁肥皂")
	addItemLang("infinity_lava_cell", "无限熔岩元件")

	// 星球
	addItemLang("empty_planet","空星球外壳")
	addItemLang("sun", "太阳")
	addItemLang("mercury", "水星")
	addItemLang("venus", "金星")
	addItemLang("earth", "地球")
	addItemLang("mars", "火星")
	addItemLang("jupiter", "木星")
	addItemLang("saturn", "土星")
	addItemLang("uranus", "天王星")
	addItemLang("neptune", "海王星")

	// 源质
	addInfinitySourceLang("empty", "空")
	addInfinitySourceLang("redstone", "红石")
	addInfinitySourceLang("gold", "金")
	addInfinitySourceLang("iron", "铁")
	addInfinitySourceLang("diamond", "钻石")
	addInfinitySourceLang("copper", "铜")
	addInfinitySourceLang("emerald", "绿宝石")
	addInfinitySourceLang("coal", "煤炭")
	addInfinitySourceLang("lapis_lazuli", "青金石")
	addInfinitySourceLang("lead", "铅")

	// 锻造模板
	addSmithingTemplateLang("basic", "基础", "材料", "基础材料")
	addSmithingTemplateLang("andesite_upgrade", "安山", "安山机壳", "安山机器")
	addSmithingTemplateLang("null", "%s", " ", "%s")

	// 未完成的物品
	addIncompleteItemLang("black_iron_ingot", "黑铁锭")
	addIncompleteItemLang("netherite_upgrade_smithing_template", "下界合金锻造模版")
	addIncompleteItemLang("machine_frame", "机器框架")
	addIncompleteItemLang("diamond", "钻石")
	addIncompleteItemLang("drive_part", "驱动器组件")
	addIncompleteItemLang("high_pure_quartz", "高纯石英")
	addIncompleteItemLang("thermal_machine", "热力机器")
	addIncompleteItemLang("precision_core", "精密核心")
	addIncompleteItemLang("creative_cell", "创造ME组件")
	addIncompleteItemLang("imperfect_creative_cell", "不完美的创造ME组件")
	addIncompleteItemLang("blank_module", "空白模块")
	addIncompleteItemLang("scanner", "扫描器")
	
	// 示例(,/?)
	addItemLang("nopai", "派派")
	addItemLang("ticks", "棍木")
	addItemLang("cmc_icon", "Create: More Chunks 标志")
	addItemLang("cmc_icon_black", "Create: More Chunks 黑底标志")
	addItemLang("c_8f8f8f_with_ore", "#8f8f8f色的字母C (含有矿物)")
	addItemLang("m_b9855c_with_water", "#b9855c色的字母M (含有水)")
	addLetterLang("c", "7cd520")
	addLetterLang("c", "8f8f8f")
	addLetterLang("c", "82ff00")
	addLetterLang("c", "d2d2d2")
	addLetterLang("c", "fdaf40")
	addLetterLang("i", "5be9b7")
	addLetterLang("m", "b9855c")
	addLetterLang("m", "ff81fa")
	addLetterLang("m", "ffb13d")
	addItemLang("fallen_steve", "坠落史蒂夫")
	addItemLang("sun_cmc", "太阳")
	addItemLang("symbol_cmi", "CMI的符号")
	addItemLang("tree", "树")

	/**
	 * 
	 * @param {string} key 物品id
	 * @param {string} value 本地化
	 */
	function addItemLang(key, value) {
		event.add(`item.cmc.${key}`, value)
	}

	/**
	 * 
	 * @param {string} key 未完成物品id
	 * @param {string} value 本地化，无需加上“半成品”“未完成”等字样
	 */
	function addIncompleteItemLang(key, value) {
		event.add(`item.cmc.incomplete_${key}`, `${value} （半成品）`)
	}

	/**
	 * 
	 * @param {string} key 锻造模版id
	 * @param {string} value 本地化
	 * @param {string} ingredients 原材料
	 * @param {string} applies_to 应用于
	 */
	function addSmithingTemplateLang(key, value, ingredients, applies_to) {
		event.add(`item.cmc.${key}_smithing_template`, `${value}锻造模版`)
		event.add(`item.cmc.smithing_template.${key}.applies_to`, applies_to)
		event.add(`item.cmc.smithing_template.${key}.ingredients`, ingredients)
	}

	/**
	 * 
	 * @param {string} key 无限源质对应的材料名称
	 * @param {string} value 本地化
	 */
	function addInfinitySourceLang(key,value) {
		event.add(`item.cmc.${key}_infinity_source`, `${value}无限源质`)
	}

	/**
	 * 
	 * @param {string} letter 字母
	 * @param {string} color 颜色
	 */
	function addLetterLang(letter, color) {
		let letterUpper = letter.toUpperCase()
		event.add(`item.cmc.${letter}_${color}`, `#${color}色的字母${letterUpper}`)
	}

})