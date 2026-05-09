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
	event.remove([
		"cmc:infinity_lava_cell",
		"cmc:basic_smithing_template",
		"cmc:world_gem",
		"cmc:drive_part",
		"cmc:andesite_upgrade_smithing_template",
		"cmc:test",
		"cmc:impurity_bucket",
		"cmc:creative_fiuld_tank",
		"cmc:world_fluid_bucket",
		"cmc:me_equipment_casing",
		"cmc:me_machine_casing",
		"cmc:high_pure_quartz",
		"cmc:quartz_seed",
		"cmc:unbreakable_sandpaper",
		"cmc:world_matter_ingot",
		"cmc:world_matter_nugget",
		"cmc:world_matter_plate",
		"cmc:world_matter_dust",
		"cmc:crushed_world_matter",
		"cmc:creative_physics_staff",
		"cmc:ringo_mechanism",
		"cmc:wooden_mechanism",
		"cmc:mechanism_part",
		"cmc:precision_mechanism_base",
		"cmc:brass_gear",
		"cmc:glue_bucket"
	])

	event.remove("#cmc:examples")
	event.remove("#cmc:incomplete_items")
	event.remove("#cmc:cells")

})