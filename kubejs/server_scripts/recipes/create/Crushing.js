ServerEvents.recipes((event) => {
    let { create } = event.recipes

    create.crushing("mekanism:dust_coal",
        "minecraft:coal"
    )

    create.crushing("thermal:iron_dust",
        "minecraft:iron_ingot"
    )
})