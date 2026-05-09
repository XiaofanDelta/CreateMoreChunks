ClientEvents.lang("zh_cn", (event) => {

    //物品
    addItemLang("drive_part", "驱动器组件")
    addItemLang("world_gem", "世界宝石")
    addItemLang("infinity_lava_cell", "无限熔岩元件")
    addItemLang("cell_creative", "创造ME组件")
    addItemLang("cell_creative_full", "创造ME组件 (完整)")
    addItemLang("cell_creative_basic", "基础创造ME组件")
    addItemLang("cell_creative_basic_full", "基础创造ME组件 (完整)")
    addItemLang("high_pure_quartz", "高纯石英")
    addItemLang("quartz_seed", "石英种子")
    addItemLang("mechanism_part", "构件零件")
    addItemLang("ringo_mechanism", "林檎 (苹果) 构件")
    addItemLang("wooden_mechanism", "木质构件")
    addItemLang("precision_mechanism_base", "精密构件基底")
    addItemLang("brass_gear", "黄铜齿轮")

    addItemLang("test", "测试")

    addItemLang("unbreakable_sandpaper", "不毁砂纸")
    addItemLang("creative_physics_staff", "创造模式物理手杖")

    //锻造模板
    addSmithingTemplateLang("basic", "基础")
    addSmithingTemplateLang("andesite", "安山")

    //未完成的物品
    addIncompleteItemLang("black_iron_ingot", "黑铁锭")
    addIncompleteItemLang("netherite_upgrade_smithing_template", "下界合金锻造模版")
    addIncompleteItemLang("machine_frame", "机器框架")
    addIncompleteItemLang("diamond", "钻石")
    addIncompleteItemLang("drive_part", "驱动器组件")
    addIncompleteItemLang("high_pure_quartz", "高纯石英")
    addIncompleteItemLang("thermal_machine", "热力机器")

    //材料
    addMaterialLang("world_matter", "世界物质")

    //流体
    addFluidLang("impurity", "杂质")
    addFluidLang("world_fluid", "世界流体")
    addFluidLang("glue", "粘合剂")

    //方块
    addBlockLang("me_machine_casing", "ME 机器外壳")
    addBlockLang("me_equipment_casing", "ME 设备外壳")
    addBlockLang("creative_fiuld_tank", "创造流休储罐")

    //气体
    addGasLang("world_matter", "世界物质")

    //tooltip
    addCommonTooltipLang("cmc:test","对这是个测试的物品\n如果你在合成配方中看见了这个，请一定要报告这个bug！")
    addCommonTooltipLang("cmc:creative_physics_staff", "对孩子们，我在 1.20.1 Forge 里弄出\"航空学\"了！真的！")
    addCommonTooltipLang("minecraft:kelp", "§a鼓风机水吹沙子")
    addCommonTooltipLang("minecraft:clay_ball", "§a鼓风机水吹沙子")
    addCommonTooltipLang("cmc:wooden_mechanism", "§m§o其实这是我从 CIM 里拿的")
    addCommonTooltipLang("cmc:glue_bucket", "太过于粘稠，以至于你不敢把这玩意倒出来，怕手被粘住")

    //JEIInfo
    addJEIInfoLang("cmc:test", "对这是个测试的物品\n如果你在合成配方中看见了这个，请一定要报告这个bug！")
    addJEIInfoLang("cmc:creative_physics_staff", "用于移动模拟动态结构的创造模式专用工具。\n \n对孩子们，我在 1.20.1 Forge 里弄出\"航空学\"了！\n真的！")

    //示例(,/?)
    addItemLang("rc", "Re_Constrction")
    addItemLang("nopai", "派派")
    addItemLang("c5", "create0501 (Miku)")
    addItemLang("ticks", "棍木")
    addItemLang("cmc", "Create: More Chunks")
    addItemLang("cmc_icon", "Create: More Chunks 标志")
    addItemLang("cmc_icon_black", "Create: More Chunks 黑底标志")
    function addLetterLang(letter, color) {
        const letterUpper = String(letter).toUpperCase()
        event.add(`item.cmc.${letter}_${color}`, `#${color}色的字母${letterUpper}`)
    }
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
    addItemLang("sun", "太阳")
    addItemLang("symbol_cmi", "CMI的符号")
    addItemLang("tree", "树")


    function addItemLang(key, value) {
        event.add(`item.cmc.${key}`, value)
    }

    function addBlockLang(key, value) {
        event.add(`block.cmc.${key}`, value)
    }

    function addGasLang(key, value) {
        event.add(`gas.cmc.${key}`, value)
        event.add(`infuse_type.cmc.${key}`, value)
    }

    function addFluidLang(key, value) {
        event.add(`fluid.cmc.${key}`, value)
        event.add(`block.cmc.${key}`, value)
        event.add(`item.cmc.${key}_bucket`, `${value}桶`)
        event.add(`fluid.cmc.flowing_${key}`, `下落中的${value}`)
    }

    function addIncompleteItemLang(key, value) {
        event.add(`item.cmc.incomplete_${key}`, `未完成的${value}`)
    }

    function addSmithingTemplateLang(key, value) {
        event.add(`item.cmc.${key}_smithing_template`, `${value}锻造模版`)
    }

    function addMaterialLang(key, value) {
        event.add(`item.cmc.crushed_${key}`, `粉碎${value}`)
        event.add(`item.cmc.${key}_ingot`, `${value}锭`)
        event.add(`item.cmc.${key}_plate`, `${value}板`)
        event.add(`item.cmc.${key}_nugget`, `${value}粒`)
        event.add(`item.cmc.${key}_dust`, `${value}粉`)
    }

    function addCommonTooltipLang(key, value) {
		event.add(`tooltip.${key}`.replace(":", "."), `§b${value}`)
	}

    function addJEIInfoLang(key, value) {
        event.add(`jei.info.${key}`.replace(":", "."), value)
    }

    function addCommonJadeTipLang(key, value) {
        event.add(`jade.info.cmi.${key}`.replace(":", "."), `${value}`)
    }

})