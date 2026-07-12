ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 铀增产
	create.emptying([
		Fluid.of("mekanism:uranium_oxide", 250),
		Item.of("mekanism:clump_uranium")],
		"mekanism:yellow_cake_uranium"
	).id("mekanism:create/emptying/yellow_cake_uranium")

	// 世界流体 (世界水晶制作)
	create.emptying([
		Fluid.of("cmc:world_fluid", 100),
		"chunkbychunk:worldfragment"],
		"chunkbychunk:worldcrystal"
	).id("cmc:create/emptying/world_fluid")

	// 荧光液
	create.emptying([
		Fluid.of("supplementaries:lumisene", 250),
		"minecraft:glass_bottle"
		],"supplementaries:lumisene_bottle" 
	).id("supplementaries:create/emptying/lumisene_from_bottle")
	create.emptying([
		Fluid.of("supplementaries:lumisene", 1000),
		"minecraft:bucket"
		],"supplementaries:lumisene_bucket" 
	).id("supplementaries:create/emptying/lumisene_from_bucket")

})