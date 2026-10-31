ServerEvents.recipes((event) => {
	let { thermal, thermal_extra } = event.recipes

	thermal.lapidary_fuel("cmc:world_gem", 20000).id("cmc:thermal/lapidary_fuel/world_gem")
	thermal.gourmand_fuel("cmc:ringo_mechanism", 114514).id("cmc:thermal/gourmand_fuel/ringo_mechanism")
})