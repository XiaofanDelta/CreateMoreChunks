ClientEvents.lang("zh_cn", (event) => {
  
	// 气体
	addGasLang("world_matter", "世界物质")
	
	/**
	 * 
	 * @param {string} key 气体id
	 * @param {string} value 本地化
	 */
	function addGasLang(key, value) {
		event.add(`gas.cmc.${key}`, value)
		event.add(`infuse_type.cmc.${key}`, value)
	}

})