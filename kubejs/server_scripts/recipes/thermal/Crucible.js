ServerEvents.recipes((event) => {
    let { thermal } = event.recipes

    thermal.crucible(
        Fluid.of("cmc:world_fluid", 900),
        "chunkbychunk:worldcore"
    ).energy(4000)
        .id("cmc:thermal/crucible/worldcore_to_world_fluid")

    thermal.crucible(
        Fluid.of("cmc:glue", 250),
        "minecraft:slime_ball"
    ).energy(4000)
        .id("cmc:thermal/crucible/slime_ball_to_glue")

    thermal.crucible(
        Fluid.of("cmc:glue", 1000),
        "minecraft:slime_block"
    ).energy(4000)
        .id("cmc:thermal/crucible/slime_block_to_glue")

    thermal.crucible(
        Fluid.of("thermal_extra:abyssal", 100),
        "thermal_extra:abyssal_dust"
    ).energy(4000)
        .id("thermal_extra:thermal/crucible/abyssal_to_fluid")
      
})