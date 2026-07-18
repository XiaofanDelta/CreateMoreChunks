ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 世界流体 (超级加热)
	create.compacting(
		Fluid.of("cmc:world_fluid",810),
		"chunkbychunk:worldcore"
	).superheated()
		.id("cmc:create/compacting/world_fluid")

	// 世界水晶
	create.compacting(
		"chunkbychunk:worldcrystal",
		Item.of("chunkbychunk:worldshard",4)
	).id("chunkbychunk:create/compacting/worldcrystal")

	// 世界碎片 (泥土制作)
	create.compacting(
		"chunkbychunk:worldfragment",
		"32x #minecraft:dirt"
	).id("chunkbychunk:create/compacting/worldfragment_from_dirts")

	// 世界碎片 (石头制作)
	create.compacting(
		"chunkbychunk:worldfragment",
		"64x #forge:stone"
	).id("chunkbychunk:create/compacting/worldfragment")

	// %null%
	create.compacting(
		"cmc:null_block",
		"6x cmc:null"
	).id("cmc:create/compacting/null_block")

	// 斯特林能源炉
	create.deploying("thermal:dynamo_stirling", [
		"cmc:dynamo_base",
		"2x #forge:gears/stone",
		"2x #forge:gears/wooden"
	]).id("thermal:create/compacting/dynamo_stirling")

})