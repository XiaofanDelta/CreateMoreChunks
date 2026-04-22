ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:andesite', 8),
        [
            Item.of('minecraft:cobblestone', 8),
            'chunkbychunk:worldfragment'
        ]
    )

    event.shapeless(
        Item.of("cmc:quartz_seed", 2),
        [
            "minecraft:quartz",
            "#forge:sand"
        ]
    )
})