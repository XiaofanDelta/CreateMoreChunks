ServerEvents.recipes((event) => {
    let { thermal } = event.recipes

    thermal.bottler(
        "cmc:unbreakable_sandpaper", [
        Fluid.of("cmc:world_fluid", 1000),
        "createaddition:diamond_grit_sandpaper"
    ])

    thermal.bottler(
        "create:rose_quartz", [
        Fluid.of("thermal:redstone", 500),
        "cmc:high_pure_quartz"
    ])

    thermal.crystallizer(
        "cmc:high_pure_quartz", [
        Fluid.of("minecraft:water", 1000),
        "cmc:quartz_seed"
    ])
})