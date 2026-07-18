ClientEvents.lang("zh_cn", (event) => {

	// 普通方块
	addBlockLang("me_machine_casing", "ME 机器外壳")
	addBlockLang("me_device_casing", "ME 设备外壳")
	addBlockLang("creative_fiuld_tank", "创造流休储罐")
	addBlockLang("creative_create", "创造版条箱")
	addBlockLang("chunk_machine_base", "区块机器基底")
	addBlockLang("creative_casing", "创造机壳")

	// 太阳
	addBlockLang("sun_oneshot", "太阳")

	// 机器
	addBlockLang("advanced_component_assembly", "高级部件装配机")
	addBlockLang("dynamo_base", "能源炉基底")

	// %null%
	addBlockLang("chunk_spawner", "%s 区块生成器")
	addBlockLang("grass_block", "§m§o草方块")
	addBlockLang("dirt", "§m§o泥土")
	addBlockLang("stone", "§m§o石头")
	addBlockLang("bedrock", "§m§o基岩")

	/**
	 * 
	 * @param {string} key 方块id
	 * @param {string} value 本地化
	 */
	function addBlockLang(key, value) {
		event.add(`block.cmc.${key}`, value)
	}
	
})