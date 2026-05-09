ServerEvents.recipes((event) => {
	let { thermal_extra } = event.recipes

	thermal_extra.component_assembly("cmc:cell_creative_full", [
		Fluid.of("cmc:impurity", 8000),
		"megacells:cell_component_256m",
        "cmc:cell_creative",
        "cmc:cell_creative_basic_full",
		"thermal:machine_efficiency_creative_augment",
		"thermal:machine_catalyst_creative_augment",
		"cmc:test"
	])
    .energy(150000)
	.id("cmc:thermal_extra/component_assembly/cell_creative_full")
})