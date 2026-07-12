ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 黏土、海带
	create.splashing([
		Item.of("minecraft:kelp").withChance(0.8),
		Item.of("minecraft:clay_ball").withChance(0.6)
	], "minecraft:sand"
	).id("create:splashing/sand")
	
})