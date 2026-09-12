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

StartupEvents.modifyCreativeTab("thermal:thermal.items", (event) => {
	event.addBefore("thermal:rf_coil", [
		"thermal:laser_diode"
	])
})

StartupEvents.modifyCreativeTab("thermal:thermal.devices", (event) => {
	event.addBefore("thermal:device_tree_extractor", [
		"thermal:device_hive_extractor"
	])
})

StartupEvents.modifyCreativeTab("kubejs:tab", (event) => {
	event.setDisplayName(Component.translatable("itemGroup.cmc.all"))
	
	event.remove([
		"cmc:press_shift",
		"cmc:null",
		"cmc:null_mechanism",
		"cmc:empty",
		"cmc:test",
		"#cmc:example",
		"#cmc:incomplete_items",
		"#cmc:materials"
	])
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

StartupEvents.modifyCreativeTab("thermal_extra:machines", (event) => {
	event.add([
		"cmc:advanced_component_assembly",
		"cmc:dynamo_base"
	])
})

StartupEvents.modifyCreativeTab("minecraft:tools_and_utilities", (event) => {
	event.remove([
		"@mekanism",
		"@chunkbychunk",
		"@mekanismtools"
	])

	event.add([
		"mbd2:mbd_gadgets"
	])
})
StartupEvents.modifyCreativeTab("minecraft:redstone_blocks", (event) => {
	event.remove([
		"@mekanism",
		"@mekanismgenerators",
		"@mekanismadditions",
		"mbd2:mbd_gadgets"
	])
})
StartupEvents.modifyCreativeTab("minecraft:functional_blocks", (event) => {
	event.remove([
		"@mekanism",
		"@mekanismadditions",
		"@mekanismgenerators"
	])
})
StartupEvents.modifyCreativeTab("minecraft:ingredients", (event) => {
	event.remove([
		"@mekanism",
		"@mekanismadditions",
		"@mekanismtools",
		"@create",
		"@thermal"
	])
})
StartupEvents.modifyCreativeTab("minecraft:combat", (event) => {
	event.remove([
		"@mekanism",
		"@mekanismadditions",
		"@mekanismtools"
	])
})