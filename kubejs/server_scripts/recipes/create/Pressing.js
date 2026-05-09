ServerEvents.recipes((event) => {
    let { create } = event.recipes

    //锻造模版基板
    create.pressing(
        "cmc:basic_smithing_template",
        "#minecraft:planks"
    ).id("cmc:create/pressing/basic_smithing_template")

    //世界物质板
    create.pressing(
        "cmc:world_matter_plate",
        "cmc:world_matter_ingot"
    ).id("cmc:create/pressing/world_matter_plate")

    //黑铁板
    create.pressing(
        "extendedcrafting:black_iron_slate",
        "extendedcrafting:black_iron_ingot"
    ).id("extendedcrafting:create/pressing/black_iron_slate")
    
})