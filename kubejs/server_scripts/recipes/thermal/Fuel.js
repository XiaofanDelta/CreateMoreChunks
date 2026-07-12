ServerEvents.recipes((event) => {
	let { thermal, thermal_extra } = event.recipes

	thermal.lapidary_fuel("cmc:world_gem", 20000)
	thermal.gourmand_fuel("cmc:ringo_mechanism", 114514)



})