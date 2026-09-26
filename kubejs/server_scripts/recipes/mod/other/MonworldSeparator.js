ServerEvents.tags("item", (event) => {
	event.get("cmc:monworld_separator/catalyst/0")
		.add([
			"minecraft:blaze_rod"
		])
	
	event.get("cmc:monworld_separator/catalyst/1")
		.add("thermal:blitz_rod"
		)

	event.get("cmc:monworld_separator/catalyst/2")
		.add("thermal:basalz_rod"
		)
	
	event.get("cmc:monworld_separator/catalyst/3")
		.add("thermal:blizz_rod"
		)

	event.get("cmc:monworld_separator/fuel")
		.add("chunkbychunk:worldfragment")

	event.get("cmc:monworld_separator/input")
		.add("cmc:world_matter_dust")
	

})