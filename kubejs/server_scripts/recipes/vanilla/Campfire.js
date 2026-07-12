ServerEvents.recipes((event) => {
	
	let { minecraft } = event.recipes

	// 铁粒
	minecraft.campfire_cooking(
		"3x minecraft:iron_nugget",
		"minecraft:raw_iron",
		0,
		20*30
	).id("minecraft:iron_nuggets_from_campfire_cooking")
  
})