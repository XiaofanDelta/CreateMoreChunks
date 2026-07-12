ClientEvents.lang("zh_cn", (event) => {
  
	// 流体
	addFluidLang("impurity", "杂质")
	addFluidLang("world_fluid", "世界流体")
	addFluidLang("glue", "粘合剂")
	addFluidLang("bronze", "熔融青铜")
	addFluidLang("invar", "熔融殷钢")
	addFluidLang("advanced_compound", "高级混合液")

	/**
	 * 
	 * @param {string} key 流体id
	 * @param {string} value 本地化
	 */
	function addFluidLang(key, value) {
		event.add(`fluid.cmc.${key}`, value)
		event.add(`block.cmc.${key}`, value)
		event.add(`item.cmc.${key}_bucket`, `${value}桶`)
		event.add(`fluid.cmc.flowing_${key}`, `下落中的${value}`)
	}

})