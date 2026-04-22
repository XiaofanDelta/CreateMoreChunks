ServerEvents.recipes((event) => {
    let { create } = event.recipes

    create.mixing(
        Fluid.of("thermal:redstone", 80),
        "minecraft:redstone"
    ).heated()

    create.mixing(
        "mekanism:dust_steel", [
        "#forge:dusts/iron",
        Item.of("#forge:dusts/coal", 2)
    ]).heated()
})