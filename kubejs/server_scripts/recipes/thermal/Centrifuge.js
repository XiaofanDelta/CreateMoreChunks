ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	// 创造流休储罐
	thermal.centrifuge([
		Fluid.of("cmc:impurity", 1000),
		Item.of("create:fluid_tank").withChance(0.8),
		Item.of("create:creative_fluid_tank").withChance(0.01)
	],
		"cmc:creative_fiuld_tank"
	).energy(50000)
		.id("thermal:machines/centrifuge/creative_fluid_tank")

	// 离心带有水的 M 字母
	thermal.centrifuge([
		Fluid.of("minecraft:water", 1000),
		"cmc:m_b9855c",
		Item.of("minecraft:wheat", 5),
		Item.of("minecraft:wheat", 2).withChance(0.2)
	],
		"cmc:m_b9855c_with_water"
	).energy(1000)
		.id("thermal:machines/centrifuge/m")

	// 离心 CMI
	thermal.centrifuge([
		"cmc:c_fdaf40",
		"cmc:m_ff81fa",
		"cmc:i_5be9b7",
		Item.of("cmc:symbol_cmi", 2)
	],
		"cmc:cmi"
	).energy(1000)
		.id("thermal:machines/centrifuge/cmi")

	// 离心 CMC 标志
	thermal.centrifuge([
		"cmc:cmc",
		"cmc:fallen_steve",
		"cmc:sun_cmc",
		"cmc:tree"
	],
		"cmc:cmc_icon"
	).energy(1000)
		.id("cmc:thermal/centrifuge/cmc_icon")

	// 离心 CMC 字母
	thermal.centrifuge([
		"cmc:c_7cd520",
		"cmc:m_b9855c_with_water",
		"cmc:c_8f8f8f_with_ore",
		"cmc:delta"
	],
		"cmc:cmc"
	).energy(1000)
		.id("cmc:thermal/centrifuge/cmc")

	// 离心 CMC 黑底标志
	thermal.centrifuge([
		"cmc:c_82ff00",
		"cmc:m_ffb13d",
		"cmc:c_d2d2d2",
		"cmc:delta",
		Fluid.of("cmc:impurity", 1000)
	],
		"cmc:cmc_icon_black"
	).energy(1000)
		.id("cmc:thermal/centrifuge/cmc_icon_black")

	// 离心 %null%
	let nullList = [
		["grass_block", 3, 0.8],
		["dirt", 1, 0.2],
		["stone", 5, 0.8],
		["bedrock", 6, 0.9]
	]
	nullList.forEach(([name, num, chance]) => {
		thermal.centrifuge([
			`minecraft:${name}`,
			Item.of("cmc:null", num),
			"ftbquests:missing_item",
			Item.of("cmc:null_block").withChance(chance)
		], `cmc:${name}`).energy(global.EnergyStage.getRandomEnergy(4000))
			.id(`cmc:thermal/centrifuge/${name}`)
	})

})