// 高级合金
new Material("advanced_alloy", "diamond")
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

// 械金
new Material("michan", "iron")
	.color(0x7B8686, 0x667373)
	.isMetal()
	.ingot()
	.nugget()
	.block()
	.gear()
	.dust()
	.plate()