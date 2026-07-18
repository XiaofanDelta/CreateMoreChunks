StartupEvents.modifyCreativeTab("create:base", (event) => {
	event.add([
		"create:chromatic_compound",
		"create:shadow_steel",
		"create:refined_radiance",
		"create:shadow_steel_casing",
		"create:refined_radiance_casing"
	])
})

StartupEvents.modifyCreativeTab("thermal_extra:resources", (event) => {
	event.add([
		"thermal_extra:polyolefin_plate"
	])
})

StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	event.setDisplayName(Component.translatable("itemGroup.cmc.all"))
})

StartupEvents.modifyCreativeTab("meinfinitycell:mic_tab", (event) => {
	event.remove([
		"meinfinitycell:infinity_cobblestone_cell",
		"meinfinitycell:infinity_water_cell"
	])
	event.add(Ingredient.of("#cmc:planets").itemIds)
	event.setDisplayName(Component.translatable("itemGroup.cmc.planets"))
	event.setIcon(() => Item.of("cmc:earth"))
})

StartupEvents.modifyCreativeTab("thermal:thermal.items", (event) => {
	event.add([
		"thermal_parallel:argument_parallel_2",
		"thermal_parallel:argument_parallel_3"
	])
})

StartupEvents.modifyCreativeTab("thermal_extra:machines", (event) => {
	event.add([
		"cmc:advanced_component_assembly",
		"cmc:dynamo_base"
	])
})