ServerEvents.recipes((event) => {
	let { thermal, kubejs } = event.recipes

	// 蓝宝石
	thermal.pulverizer("thermal:sapphire_dust", [
		"#forge:gems/sapphire"
	]).energy(4000)
		.id("thermal:machines/pulverizer/sapphire_dust")

	kubejs.shaped("thermal:sapphire_gear", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:gems/sapphire",
		B: "#forge:nuggets/iron"
	}).id("thermal:sapphire_gear")

	// 红宝石
	thermal.pulverizer("thermal:ruby_dust", [
		"#forge:gems/ruby"
	]).energy(4000)
		.id("thermal:machines/pulverizer/ruby_dust")

	kubejs.shaped("thermal:ruby_gear", [
		" A ",
		"ABA",
		" A "
	], {
		A: "#forge:gems/ruby",
		B: "#forge:nuggets/iron"
	}).id("thermal:ruby_gear")

	thermal.pulverizer("cmc:world_matter_dust",
		"cmc:world_matter_ingot"
	).energy(4000)
		.id("thermal:machines/pulverizer/world_matter_dust")
})