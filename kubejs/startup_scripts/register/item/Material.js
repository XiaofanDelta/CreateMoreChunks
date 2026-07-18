// 高级合金
new Material("advanced_alloy", "diamond")
	.color(0x363636, 0x444444)
	.isMetal()
	.ingot(false)
	.plate(false)
	.nugget(false)
	.dust()
	.rod(false)
	.block()
	.gear(false)

// 精炼红石
new Material("refined_redstone", "iron")
	.color(0xB80000, 0x9A0000)
	.isMetal()
	.ingot()
	.plate()
	.nugget()
	.prism()

// 安山合金
new Material("andesite_alloy", "wooden")
	.color(0xC7C8B8, 0x809587)
	.isMetal()
	.nugget()

// 光辉石
new Material("refined_radiance", "diamond")
	.color(0xFFFFFF, 0xDBDDDE)
	.isMetal()
	.nugget()

// 磨制石英
new Material("polished_quartz", "wooden")
	.color(0xAE9E7F, 0xFFFFFF)
	.prism()

/* 我屈服了，还是用cmi的轮子吧😭😭😭
let example = [[
	"注册名", 
	{ true: "使用已有材质", false: "使用着色材质"},
	"底层颜色",
	"叠加层颜色",
	"锭", 
	"粒", 
	"块", 
	"齿轮", 
	"板", 
	"熔融液体", 
	"粉", 
	"粉碎,1~5 为可用材质", 
	"粗矿,1~5 为可用材质", 
	"杆", 
	// mek 暂时不使用
	"mek 碎片", 
	"mek 碎块", 
	"mek 结晶", 
	"mek 污浊粉",
	"mek 浆液"
]]

let materialList = [
	["world_matter", true, 0x000000, 0x000000 , true, true, true, false, true, false, true, true, false, false],
	["advanced_alloys", false, 0x333333, 0x444444 , true, true, true, true, true, false, true, false, false, true]
]
*/


/**
 * 模型定义
 * 根据 overlay 决定 2 / 3 层
 * 
 * @param {string} type 
 * @param {boolean} overlay 
 * @returns 
 */
/* function defineModels(type, overlay) {
	let textures = {
		layer0: `cmc:item/material/color/${type}/${type}`,
		layer1: `cmc:item/material/color/${type}/${type}_secondary`,
		layer2: "cmc:item/material/color/empty"
	}

	if (overlay) {
		textures.layer2 = `cmc:item/material/color/${type}/${type}_overlay`
	}

	return {
		parent: "minecraft:item/generated",
		textures: textures
	}
}
*/
/*
materialList.forEach(([id, tex, color, color_, ingot, nugget, block, gear, plate, liquid, dust, crushed, raw, rod]) => {
	
	// 物品
	StartupEvents.registry("item", (event) => {

		// builders 判断
		let ingot_builder, nugget_builder, gear_builder, plate_builder, dust_builder, crushed_builder, raw_builder, rod_builder, liquid_builder
		ingot_builder = ingot ? event.create(`cmc:${id}_ingot`) : false
		nugget_builder = nugget ? event.create(`cmc:${id}_nugget`) : false
		gear_builder = gear ? event.create(`cmc:${id}_gear`) : false
		plate_builder = plate ? event.create(`cmc:${id}_plate`) : false
		dust_builder = dust ? event.create(`cmc:${id}_dust`) : false
		crushed_builder = crushed ? event.create(`cmc:crushed_${id}`) : false
		raw_builder = raw ? event.create(`cmc:raw_${id}`) : false
		rod_builder = rod ? event.create(`cmc:${id}_rod`) : false

		// builders 
		if (ingot_builder) {
			tex ? 
			ingot_builder.texture(`cmc:item/material/${id}/ingot`) : 
			ingot_builder.modelJson(defineModels("ingot", true)).color(0, color).color(1, color_)
			ingot_builder.tag(`forge:ingots/${id}`).tag("forge:ingots")
		}
		if (nugget_builder) {
			tex ? 
			nugget_builder.texture(`cmc:item/material/${id}/nugget`) : 
			nugget_builder.modelJson(defineModels("nugget", true)).color(0, color).color(1, color_)
			nugget_builder.tag(`forge:nuggets/${id}`).tag("forge:nuggets")
		}
		if (gear_builder) {
			tex ? 
			gear_builder.texture(`cmc:item/material/${id}/gear`) : 
			gear_builder.modelJson(defineModels("gear", true)).color(0, color).color(1, color_)
			gear_builder.tag(`forge:gears/${id}`).tag("forge:gears")
		}
		if (plate_builder) {
			tex ? 
			plate_builder.texture(`cmc:item/material/${id}/plate`) : 
			plate_builder.modelJson(defineModels("plate", true)).color(0, color).color(1, color_)
			plate_builder.tag(`forge:plates/${id}`).tag("forge:plates")
		}
		if (dust_builder) {
			tex ? 
			dust_builder.texture(`cmc:item/material/${id}/dust`) : 
			dust_builder.modelJson(defineModels("dust", true)).color(0, color).color(1, color_)
			dust_builder.tag(`forge:dusts/${id}`).tag("forge:dusts")
		}
		if (crushed_builder) {
			tex ? 
			crushed_builder.texture(`cmc:item/material/${id}/crushed`) : 
			crushed_builder.texture(`cmc:item/material/crushed_raw_${crushed}`).color(color)
			crushed_builder.tag(`create:crushed_raw_materials/${id}`).tag("create:crushed_raw_materials")
		}
		if (raw_builder) {
			tex ? 
			raw_builder.texture(`cmc:item/material/${id}/raw`) : 
			raw_builder.texture(`cmc:item/material/raw_ore_${raw}`).color(color)
			raw_builder.tag(`forge:raw_materials/${id}`).tag("forge:raw_materials")
		}
		if (rod_builder) {
			tex ? 
			rod_builder.texture(`cmc:item/material/${id}/rod`) : 
			rod_builder.model(defineModels("rod", true)).color(0, color).color(1, color_)
			rod_builder.tag(`forge:rods/${id}`).tag("forge:rods")
		}

	})

	// 方块
	StartupEvents.registry("block", (event) => {
		block_builder = block ? event.create(`cmc:${id}_block`) : false

		if (block_builder) {
			tex ?
			block_builder.textureAll(`cmc:block/material/${id}/side`) : 
			block_builder.textureAll(`cmc:block/material/color/storage_blocks`).color(color)
			block_builder.tagBlock(`forge:storage_blocks/${id}`).tagBlock("forge:storage_blocks")
			block_builder.soundType(SoundType.METAL)
		}
	})

	// 流体
	StartupEvents.registry("fluid", (event) => {
		liquid_builder = liquid ? event.create(`cmc:molten_${id}`) : false

		if (liquid_builder) {
			liquid_builder.thinTexture(color)
			liquid_builder.bucketColor(color)
			liquid_builder.textureStill(`cmc:fluid/base/still`)
			liquid_builder.textureFlowing(`cmc:fluid/base/flow`)
			liquid_builder.renderType("translucent")
		}
	})
})
*/