StartupEvents.registry("item", (event) => {

	addMaterial("brass_gear") // 黄铜齿轮
	addMaterial("wooden_gear") // 木齿轮
	addMaterial("stone_gear") // 石齿轮
	addMaterial("quartz_seed") // 石英种子
	addMaterial("high_pure_quartz") // 高纯石英
	addMaterial("world_gem") // 世界宝石
	addMaterial("coal_chunk").burnTime(20*10*2) // 煤炭碎块
	addMaterial("iron_chunk") // 铁碎块
	addMaterial("steel_casing_part") // 钢质机壳部件
	addMaterial("small_rf_coil") // 小型红石通量线圈
	addMaterial("globe_frame") // 地球仪框架
	addMaterial("drawer_upgrade_base") // 抽屉升级基板
	addMaterial("configuration_tool_base") // 配置工具基板
	addMaterial("linking_tool_base") // 链接工具基板
	addMaterial("augment_base") // 升级组件基板
	addMaterial("creative_augment_base") // 创造组件基板
	addMaterial("filter_augment_base") // 过滤组件基板
	addMaterial("precision_core") // 精密核心
	addMaterial("empty_schematic") // 空白蓝图
	addMaterial("mek_upgrade_base") // mek 升级基板
	addMaterial("circuit_component") // 电路板组件
	addMaterial("ultimate_card") // 终极卡
	addMaterial("precision_mechanism_base") // 精密构件基底
	addMaterial("wooden_mechanism") // 木质构件
	addMaterial("mechanism_part") // 构件零件
	addMaterial("drive_part") // 驱动器组件
	addMaterial("imperfect_creative_cell").rarity("epic").tag("cmc:cells") // 不完美创造组件
	addMaterial("creative_cell").rarity("epic").tag("cmc:cells") // 创造组件
	addMaterial("unstable_singularity").maxStackSize(4) // 不稳奇点
	addMaterial("tier_installer_base") // 工厂安装器基板
	addMaterial("world_matter_ingot", "world_matter") // 世界物质锭
	addMaterial("world_matter_nugget", "world_matter") // 世界物质粒
	addMaterial("world_matter_plate", "world_matter") // 世界物质板
	addMaterial("world_matter_dust", "world_matter") // 世界物质粉
	addMaterial("crushed_world_matter", "world_matter") // 粉碎世界物质

	/**
	 * 
	 * @param {string} name 注册id
	 * @param {string} [tex] 使用 item/material/${tex}/ 文件夹下的图片
	 * @returns 
	 */
	function addMaterial(name, tex) {
		let builder = event.create(`cmc:${name}`, "basic")
		
		tex ?
		builder.texture(`cmc:item/material/${tex}/${name}`) :
		builder.texture(`cmc:item/material/${name}`)
		builder.tag("cmc:materials")
		if (global.Dev["logRegisters"]) {
			console.info(`材料 cmc:${name} 已注册!`)
		}

		return builder
	}

	/* *
	 * 
	 * @param {string} name 注册id
	 * @returns 
	 */
	/* function addMaterial(name) {
		event.create(`cmc:crushed_${name}`, "basic")
			.texture(`cmc:item/material/${name}/crushed`)
			.tag("create:crushed_raw_materials")
			.tag(`create:crushed_raw_materials/${name}`)

		let material_list = [
			"ingot",
			"plate",
			"dust",
			"nugget"
		]

		material_list.forEach((material) => {
			event.create(`cmc:${name}_${material}`, "basic")
				.texture(`cmc:item/material/${name}/${material}`)
				.tag(`forge:${material}s/${name}`)
				.tag(`forge:${material}s`)
		})
	}
	*/
})