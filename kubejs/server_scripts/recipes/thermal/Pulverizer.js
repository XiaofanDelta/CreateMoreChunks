ServerEvents.recipes((event) => {
	let { thermal, kubejs } = event.recipes

	//  蓝宝石粉
	thermal.pulverizer("thermal:sapphire_dust", [
		"#forge:gems/sapphire"
	]).energy(global.EnergyStage[1])
		.id("thermal:machines/pulverizer/sapphire_dust")

	//  红宝石粉
	thermal.pulverizer("thermal:ruby_dust", [
		"#forge:gems/ruby"
	]).energy(global.EnergyStage[1])
		.id("thermal:machines/pulverizer/ruby_dust")


	// 世界物质粉
	thermal.pulverizer("cmc:world_matter_dust",
		"cmc:world_matter_ingot"
	).energy(global.EnergyStage[1])
		.id("thermal:machines/pulverizer/world_matter_dust")

})