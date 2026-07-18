ServerEvents.recipes((event) => {
	let { thermal_extra } = event.recipes

	// 114514 cmc:ui.machine.aca.title
	thermal_extra.component_assembly("cmc:creative_cell", [
		Fluid.of("cmc:impurity", 8000),
		"megacells:cell_component_256m",
		"cmc:incomplete_creative_cell",
		"cmc:imperfect_creative_cell",
		"thermal:machine_efficiency_creative_augment",
		"thermal:machine_catalyst_creative_augment",
		"cmc:empty"
	]).energy(150000)
		.id("cmc:thermal_extra/component_assembly/creative_cell")

	thermal_extra.component_assembly("extendedcrafting:basic_component",[
		Fluid.of("cmc:advanced_compound", 100),
		"extendedcrafting:black_iron_slate",
		"extendedcrafting:luminessence",
		"thermal:iron_gear"
	]).energy(80000).id("extendedcrafting:thermal_extra/component_assembly/basic_component")

	thermal_extra.component_assembly("extendedcrafting:pedestal", [
		Fluid.of("cmc:advanced_compound", 100),
		"extendedcrafting:black_iron_block",
		"extendedcrafting:black_iron_slate",
		"extendedcrafting:black_iron_ingot"
	]).energy(80000).id("extendedcrafting:thermal_extra/component_assembly/pedestal")

	thermal_extra.component_assembly("16x extendedcrafting:luminessence", [
		Fluid.of("supplementaries:lumisene", 500),
		"thermal:lumium_dust",
		"minecraft:glowstone_dust",
		"minecraft:glow_berries",
		"create:refined_radiance",
		"minecraft:torchflower",
		"#ae2:lumen_paint_balls"
	]).energy(global.EnergyStage[4]).id("extendedcrafting:thermal_extra/component_assembly/luminessence")

	thermal_extra.component_assembly("cmc:mek_upgrade_base", [
		Fluid.of("cmc:advanced_compound", 10),
		"#forge:plates/steel",
		"#forge:wires/copper",
		"#forge:glass"
	]).energy(global.EnergyStage[4]).id("cmc:thermal_extra/component_assembly/mek_upgrade_base")

	thermal_extra.component_assembly("cmc:tier_installer_base", [
		Fluid.of("cmc:advanced_compound", 10),
		"mekanism:hdpe_sheet",
		"thermal_extra:polyolefin_plate"
	]).energy(global.EnergyStage[4]).id("cmc:thermal_extra/component_assembly/tier_installer_base")

	thermal_extra.component_assembly("thermal_extra:dynamo_frost", [
		Fluid.of("cmc:advanced_compound", 100),
		"cmc:dynamo_base",
		"#forge:gears/shellite",
		"#forge:gears/twinite",
		"#forge:gears/abyssal",
		"thermal:blizz_rod"
	]).energy(global.EnergyStage[4]).id("thermal_extra:component_assembly/dynamo_frost")
	
	thermal_extra.component_assembly("tiab:time_in_a_bottle", [
		Fluid.of("cmc:world_fluid", 5000),
		"minecraft:glass_bottle",
		"minecraft:clock",
		"#forge:gears/enderium",
		"#forge:gears/abyssal"
	]).energy(global.EnergyStage[4]).id("tiab:component_assembly/time_in_a_bottle")

})