StartupEvents.registry("item", (event) => {

    event.create("cmc:drive_part", "basic")

    event.create("cmc:basic_smithing_template", "basic")
    event.create("cmc:andesite_upgrade_smithing_template", "basic")

    event.create("cmc:mechanism_part", "basic")
        .texture("cmc:item/mechanism/mechanism_part")
    event.create("cmc:wooden_mechanism", "basic")
        .texture("cmc:item/mechanism/wooden_mechanism")
    event.create("cmc:precision_mechanism_base", "basic")
        .texture("cmc:item/mechanism/precision_mechanism_base")

    event.create("cmc:cell_creative_basic", "basic")
        .rarity("rare")
        .tag("cmc:cells")

    event.create("cmc:cell_creative", "basic")
        .rarity("epic")
        .tag("cmc:cells")

    event.create("cmc:cell_creative_basic_full", "basic")
        .rarity("epic")
        .tag("cmc:cells")

    event.create("cmc:cell_creative_full", "basic")
        .rarity("epic")
        .tag("cmc:cells")
})