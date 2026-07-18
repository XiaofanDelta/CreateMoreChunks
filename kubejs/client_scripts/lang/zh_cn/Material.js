ClientEvents.lang("zh_cn", (event) => {

    addMaterialLang("world_matter", "世界物质")
    addMaterialLang("advanced_alloy", "高级合金")
    addMaterialLang("refined_redstone", "精炼红石")

    /**
	 * 
	 * @param {String} key id
	 * @param {String} value 本地化
	 */
	function addMaterialLang(key, value) {
		event.add(`item.cmc.${key}_ingot`, `${value}锭`)
		event.add(`item.cmc.${key}_nugget`, `${value}粒`)
		event.add(`item.cmc.${key}_plate`, `${value}板`)
		event.add(`item.cmc.${key}_dust`, `${value}粉`)
		event.add(`item.cmc.${key}_gear`, `${value}齿轮`)
		event.add(`item.cmc.${key}_rod`, `${value}杆`)

		event.add(`item.cmc.dirty_${key}_dust`, `污浊${value}粉`)
		event.add(`item.cmc.${key}_clump`, `${value}碎块`)
		event.add(`item.cmc.${key}_shard`, `${value}碎片`)
		event.add(`item.cmc.${key}_crystal`, `${value}晶体`)
		event.add(`item.cmc.${key}_prism`, `${value}棱镜`)

		event.add(`slurry.cmc.dirty_${key}_slurry`, `污浊${value}浆液`)
		event.add(`slurry.cmc.${key}_slurry`, `纯净${value}浆液`)

		event.add(`block.cmc.${key}_block`, `${value}块`)

		event.add(`block.cmc.molten_${key}`, `熔融${value}`)
		event.add(`fluid.cmc.molten_${key}`, `熔融${value}`)
		event.add(`item.cmc.molten_${key}_bucket`, `熔融${value}桶`)

		event.add(`item.cmc.raw_${key}`, `粗${value}`)
		event.add(`block.cmc.raw_${key}_block`, `粗${value}块`)
		event.add(`item.cmc.crushed_raw_${key}`, `粉碎${value}矿石`)
        event.add(`item.cmc.crushed_${key}`, `粉碎${value}`)

		event.add(`block.cmc.${key}_ore`, `${value}矿石`)
		event.add(`block.cmc.deepslate_${key}_ore`, `深层${value}矿石`)
	}

})