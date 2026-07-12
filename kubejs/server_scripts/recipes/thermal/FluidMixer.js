ServerEvents.recipes((event) => {
    let { thermal_extra } = event.recipes

    // 高级混合液
    thermal_extra.fluid_mixer([
        Fluid.of("cmc:advanced_compound", 200),
        Fluid.of("cmc:impurity", 20).withChance(0.3)
    ],[
        Fluid.of("thermal_extra:polyolefin", 100),
        Fluid.of("advanced_ae:quantum_infusion_source", 100)
    ]).energy(100000).id("cmc:thermal_extra/fluid/mixer/advanced_compound")

})