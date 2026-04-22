StartupEvents.registry("item", event => {
    event.create("cmc:cell_creative_basic", "basic")
        .tooltip('貌似只是基础款的')
        .rarity("rare")
})

StartupEvents.registry("item", event => {
    event.create("cmc:cell_creative", "basic")
        .tooltip('成色可以，但还差些什么')
        .rarity("epic")
})

StartupEvents.registry("item", event => {
    event.create("cmc:cell_creative_basic_full", "basic")
        .tooltip('升级后的基础款')
        .rarity("epic")
})

StartupEvents.registry("item", event => {
    event.create("cmc:cell_creative_full", "basic")
        .tooltip('创造！')
        .rarity("epic")
})


StartupEvents.registry("item", event => {
    event.create("cmc:infinity_lava_cell", "meinfinitycell:infinity_cell")
        .fluidType("minecraft:lava")
        .maxStackSize(1)
        .rarity("uncommon")
})