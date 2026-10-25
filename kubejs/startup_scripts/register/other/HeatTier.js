// ignored: true
CreateHeatJS.registerHeatEvent((event) => {
	event.registerHeat("cmc:primordial_heat", 0xff8c00)
		.addHeatSource("chunkbychunk:worldcore")
		.register()
})