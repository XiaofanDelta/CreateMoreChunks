// priority: 1145

ServerEvents.recipes((event) => {

	let remove_output_list = [
		"extendedcrafting:black_iron_slate",
		"extendedcrafting:black_iron_nugget",
		"extendedcrafting:black_iron_ingot",
		"ae2:black_lumen_paint_ball",
		"sophisticatedbackpacks:stack_upgrade_tier_4",
		"appliedcreate:me_gearbox",
		"appliedcreate:andesite_stress_cell_housing",
		//"appliedcreate:brass_stress_cell_housing",
		"expatternprovider:ex_drive",
		"minecraft:furnace",
		"chunkbychunk:worldcore",
		"ae2:fluix_upgrade_smithing_template",
		"thermal_extra:augment_smithing_upgrade",
		"chunkbychunk:worldshard",
		"chunkbychunk:worldcrystal",
		"create:brass_hand",
		"create:electron_tube",
		"appliedcreate:advanced_stress_circuit_board",
		"appliedcreate:stress_circuit_board",
		"thermal:machine_frame",
		"create:precision_mechanism",
		"chunkbychunk:chunkspawner",
		"thermal:rf_coil",
		"extendedcrafting:basic_component",
		"supplementaries:faucet",
		"pipez:item_pipe",
		"pipez:fluid_pipe",
		"pipez:energy_pipe",
		"pipez:gas_pipe",
		"pipez:universal_pipe",
		"functionalstorage:configuration_tool",
		"functionalstorage:linking_tool",
		"#pipez:upgrades",
		"#thermal:crafting/casts",
		"cookingforblockheads:sink",
		"createaddition:alternator",
		"createaddition:capacitor",
		"thermal:energy_cell_frame",
		"thermal:fluid_cell_frame",
		"thermal:fluid_cell",
		"thermal:energy_cell",
		"thermal:redstone_servo",
		"#chunkbychunk:chunkspawners",
		"supplementaries:wrench",
		"extendedcrafting:pedestal",
		"thermal:drill_head",
		"thermal:saw_blade",
		"extendedcrafting:luminessence",
		"supplementaries:lumisene_bucket",
		"supplementaries:lumisene_bottle",
		"#chunkbychunk:chunk_machines",
		"create:mechanical_saw",
		"create:mechanical_drill",
		"#mekanism:upgrades",
		"#mekanism:tier_installers",
		"#thermal:dynamos",
		//"#thermal:machines"
	]

	let remove_input_list = [
		"appliedcreate:advanced_stress_processor",
		"appliedcreate:stress_processor",
		"appliedcreate:andesite_stress_cell_housing",
		"appliedcreate:brass_stress_cell_housing",
		"minecraft:fire_charge",
		"thermal_extra:abyssal_dust"
	]

	let remove_id_list = [
		"thermal_extra:abyssal_dust",
		"thermal:furnace_1471107840",
		"thermal_extra:machine/smelter/abyssal_ingot",
		"extendedcrafting:redstone_ingot",
		"extendedcrafting:ender_ingot",
		"create:mixing/brass_ingot",
		"create:crafting/materials/rose_quartz",
		"create:crafting/materials/andesite_alloy",
		"create:splashing/sand",
		"thermal:bronze_dust_4"
	]

	remove_output_list.forEach((remove_output) => {
		event.remove({ output: remove_output })
	})

	remove_input_list.forEach((remove_input) => {
		event.remove({ input: remove_input })
	})

	remove_id_list.forEach((remove_id) => {
		event.remove({ id: remove_id })
	})

})