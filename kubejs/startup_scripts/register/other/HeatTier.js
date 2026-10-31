CreateHeatJS.registerHeatEvent((event) => {
	event.registerHeat("cmc:world_affinity", (builder) => {
		builder.color(0x3333AA)
			.addBlockHeatSource(Block.getBlock("chunkbychunk:worldcore")) 
			.build()
	})
})