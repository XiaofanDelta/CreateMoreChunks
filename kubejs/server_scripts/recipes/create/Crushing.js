ServerEvents.recipes((event) => {
    let { create } = event.recipes

    //煤粉
    create.crushing("mekanism:dust_coal",
        "minecraft:coal"
    ).id("mekanism:create/crushing/dust_coal")

    //铁粉
    create.crushing("thermal:iron_dust",
        "minecraft:iron_ingot"
    ).id("thermal:create/crushing/iron_dust")

    //粉碎世界物质
    create.crushing("cmc:crushed_world_matter",
        "cmc:world_matter_ingot"
    ).id("cmc:create/crusing/crushed_world_matter")
    
})