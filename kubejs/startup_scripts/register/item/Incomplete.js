StartupEvents.registry("item", (event) => {
	
	addIncompleteItem("machine_frame") // 未完成的机器框架
		.parentModel({
			"parent": "cmc:item/incomplete_machine_frame"
		})
	addIncompleteItem("thermal_machine") // 未完成的热力机器
		.parentModel({
			"parent": "cmc:item/incomplete_thermal_machine",
		})
	addIncompleteItem("diamond") // 未完成的钻石
	addIncompleteItem("black_iron_ingot") // 未完成的黑铁锭
	addIncompleteItem("drive_part") // 未完成的驱动器组件
	addIncompleteItem("netherite_upgrade_smithing_template") // 未完成的下界合金锻造板
	addIncompleteItem("high_pure_quartz") // 未完成的高纯石英
	addIncompleteItem("precision_core") // 未完成的精密核心
	addIncompleteItem("imperfect_creative_cell").rarity("rare").tag("cmc:cells") // 未完成的不完美的创造组件
	addIncompleteItem("creative_cell").rarity("rare").tag("cmc:cells") // 未完成的创造组件
	addIncompleteItem("blank_module") // 未完成的空白模块
	addIncompleteItem("scanner") // 未完成的扫描器

	/**
	 * 
	 * @param {string} name 
	 * @returns
	 */
	function addIncompleteItem(name) {
		let builder = event.create(`cmc:incomplete_${name}`, "basic")
		
		builder.texture(`cmc:item/incomplete/${name}`)
		builder.tag("cmc:incomplete_items")

		if (global.Dev["logRegisters"]) {
			console.log(`未完成物品 cmc:incomplete_${name} 已注册!`)
		}

		return builder
	}

})