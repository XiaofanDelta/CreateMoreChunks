ServerEvents.recipes((event) => {
    
    //安山合金
    event.shapeless(
        Item.of("minecraft:andesite", 8),
        [
            Item.of("minecraft:cobblestone", 8),
            "chunkbychunk:worldfragment"
        ]).id("minecraft:andesite_from_cobblestone")

    //石英种子
    event.shapeless(
        Item.of("cmc:quartz_seed", 2),
        [
            "minecraft:quartz",
            "#forge:sand"
        ]).id("cmc:quartz_seed")

    //世界物质粒
    event.shapeless(
        Item.of("cmc:world_matter_nugget", 9),
        "cmc:world_matter_ingot"
    ).id("cmc:world_nugget")

    //世界物质锭
    event.shapeless(
        "cmc:world_matter_ingot",
        Item.of("cmc:world_matter_nugget", 9)
    ).id("cmc:world_ingot_from_nuggets")

})