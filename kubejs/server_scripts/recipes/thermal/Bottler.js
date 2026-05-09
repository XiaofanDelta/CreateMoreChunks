ServerEvents.recipes((event) => {
    let { thermal } = event.recipes

    thermal.bottler(
        "cmc:unbreakable_sandpaper", [
        Fluid.of("cmc:world_fluid", 1000),
        "createaddition:diamond_grit_sandpaper"
    ]).energy(4000)
        .id("cmc:thermal/bottler/unbreakable_sandpaper")

    thermal.bottler(
        "create:rose_quartz", [
        Fluid.of("thermal:redstone", 500),
        "cmc:high_pure_quartz"
    ]).energy(1000)
        .id("create:thermal/bottler/rose_quartz")

    thermal.bottler(
        "extendedcrafting:ender_ingot", [
            Fluid.of("thermal:ender",250),
            "extendedcrafting:black_iron_ingot"
        ]
    ).energy(4000)
        .id("extendedcrafting:thermal/bottler/ender_ingot")

    thermal.bottler(
        "extendedcrafting:redstone_ingot", [
            Fluid.of("thermal:redstone",250),
            "extendedcrafting:black_iron_ingot"
    ]).energy(4000)
        .id("extendedcrafting:thermal/bottler/redstone_ingot")

    thermal.bottler(
        "thermal_extra:abyssal_block",[
            Fluid.of("thermal_extra:abyssal",900),
            "minecraft:note_block"
    ]).energy(4000)
        .id("thermal_extra:thermal/bottler/abyssal_block")

    thermal.crystallizer(
        "cmc:high_pure_quartz", [
        Fluid.of("minecraft:water", 1000),
        "cmc:quartz_seed"
    ]).energy(1000)
        .id("cmc:thermal/crystallizer/high_pure_quartz")

})