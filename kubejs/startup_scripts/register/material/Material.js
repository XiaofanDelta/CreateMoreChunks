NebulaEvents.registerMaterial((event) => {
	event.namespace("cmc")

	event.creativeTab("kubejs:tab")

	// 高级合金
	event.register("advanced_alloy", MiningLevels.DIAMOND)
		.color(0x444444, 0x555555)
		.isMetal()
		.ingot(false)
		.plate(false)
		.nugget(false)
		.dust()
		.rod(false)
		.block()
		.gear(false)

	// 安山合金
	event.register("andesite_alloy", MiningLevels.WOOD)
		.color(0xC7C8B8, 0x809587)
		.isMetal()
		.nugget()
		.dust()

	// 光辉石
	event.register("refined_radiance", MiningLevels.DIAMOND)
		.color(0xFFFFFF, 0xDBDDDE)
		.isMetal()
		.nugget()

	// 磨制石英
	event.register("polished_quartz", MiningLevels.WOOD)
		.color(0xAE9E7F, 0xFFFFFF)
		.prism()

	// 械金
	event.register("michan", MiningLevels.IRON)
		.color(0x7B8686, 0x667373)
		.isMetal()
		.ingot()
		.nugget()
		.block()
		.gear()
		.dust()
		.plate()

	// 钢
	event.register("steel", MiningLevels.IRON)
		.color(0xA7A7A7, 0x121C37)
		.ingot()
		.plate()
		.nugget()
		.dust()
		.gear()
		.block()
		.isMetal()
		.rod()

	// 铸铁
	event.register("cast_iron", MiningLevels.IRON)
		.color(0x454545, 0x343434)
		.isMetal()
		.ingot(false)
		.dust(false)
		.nugget(false)
		.gear(false)
		.block()

	// 暗影钢
	event.register("shadow_steel", MiningLevels.DIAMOND)
		.color(0x5F5D6A, 0x3F364C)
		.isMetal()
		.nugget()
})