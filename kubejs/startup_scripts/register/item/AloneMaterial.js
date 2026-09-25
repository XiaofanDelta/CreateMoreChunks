StartupEvents.registry("item", (event) => {

	addMaterial("quartz_seed") // 石英种子
	addMaterial("coal_chunk").burnTime(20*10*2) // 煤炭碎块
	addMaterial("iron_chunk") // 铁碎块
	addMaterial("steel_casing_part") // 钢质机壳部件
	addMaterial("small_rf_coil") // 小型红石通量线圈
	addMaterial("globe_frame") // 地球仪框架
	addMaterial("drawer_upgrade_base") // 抽屉升级基板
	addMaterial("configuration_tool_base") // 配置工具基板
	addMaterial("linking_tool_base") // 链接工具基板
	addMaterial("augment_base") // 升级组件基板
	addMaterial("machine_augment_base") // 机器组件基底
	addMaterial("creative_augment_base") // 创造组件基板
	addMaterial("filter_augment_base") // 过滤组件基板
	addMaterial("precision_core") // 精密核心
	addMaterial("empty_schematic") // 空白蓝图
	addMaterial("mek_upgrade_base") // mek 升级基板
	addMaterial("circuit_component") // 电路板组件
	addMaterial("ultimate_card") // 终极卡
	addMaterial("parallel_card") // 并行卡
	addMaterial("blank_print_press") // 空白压印模板
	addMaterial("precision_mechanism_base") // 精密构件基底
	addMaterial("wooden_mechanism") // 木质构件
	addMaterial("mechanism_part") // 构件零件
	addMaterial("drive_part") // 驱动器组件
	addMaterial("imperfect_creative_cell").rarity("epic").tag("cmc:cells") // 不完美创造组件
	addMaterial("creative_cell").rarity("epic").tag("cmc:cells") // 创造组件
	addMaterial("unstable_singularity").maxStackSize(4) // 不稳奇点
	addMaterial("tier_installer_base") // 工厂安装器基板
	addMaterial("entro_alloy").texture("expatternprovider:item/entro_ingot") // 恩特罗合金
	addMaterial("entro_crystal").texture("expatternprovider:item/entro_crystal").tag("forge:gems/entro").tag("forge:gems") // 恩特罗水晶
	addMaterial("concurrent_processor").texture("expatternprovider:item/concurrent_processor") // 并发处理器
	addMaterial("printed_concurrent_processor").texture("expatternprovider:item/concurrent_processor_print") // 并发电路板
	addMaterial("concurrent_processor_press").texture("expatternprovider:item/concurrent_processor_press") // 并发压印模板

	/**
	 * 
	 * @param {string} name 注册id
	 * @returns 
	 */
	function addMaterial(name) {
		let builder = event.create(`cmc:${name}`, "basic")
	
		builder.texture(`cmc:item/material/${name}`)
		builder.tag("cmc:materials")
		if (global.Dev["logRegisters"]) {
			console.info(`材料 cmc:${name} 已注册!`)
		}

		return builder
	}

})