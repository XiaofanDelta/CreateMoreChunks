ServerEvents.recipes((event) => {
	let { botanypots } = event.recipes

	botanypots.crop(
		"cmc:world_matter_dust",
		[ "world_matter" ],
		{ block: "chunkbychunk:chunkspawner" },
		[
			Item.of("cmc:world_matter_ingot").withChance(0.8).withRolls(1, 2)
		],
		20*100,
		1
	).id("cmc:botanypots/world_matter")
	

})