ServerEvents.recipes((event) => {
    let { create } = event.recipes

    create.mixing([
        Item.of("create:brass_ingot", 3),
        Item.of("chunkbychunk:worldcrystal").withChance(0.1)
    ], [
        "minecraft:copper_ingot",
        "minecraft:gold_ingot",
        "chunkbychunk:worldcore"
    ]).heated()

    create.filling(
        "create:rose_quartz", [
        "cmc:high_pure_quartz",
        Fluid.of("thermal:redstone", 800)
    ])

    create.deploying(
        "create:electron_tube", [
        "#forge:plates/iron",
        "create:polished_rose_quartz"
    ])

    create.mixing(
        "create:andesite_alloy", [
        "minecraft:andesite",
        "chunkbychunk:worldfragment"
    ])

    create.deploying(
        "cmc:cmc_icon_black", [
        "minecraft:black_concrete",
        "cmc:cmc"
    ])
})