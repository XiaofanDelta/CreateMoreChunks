CreateHeatJS.registerHeatEvent((event) => {
	event.registerHeat("cmc:world_affinity", (builder) => {
		builder.color(0x3333AA).build()
			["addHeatSource(net.minecraft.world.level.block.Block[])"]([
				Block.getBlock("chunkbychunk:worldcore")
			])
	})
})