StartupEvents.registry("item", (event) => {
    event.create("cmc:unbreakable_sandpaper", "create:sandpaper")
        .maxStackSize(1)
        .tag("create:sandpaper")
        .maxDamage(9999999)
        .rarity("uncommon")
        
    event.create("cmc:creative_physics_staff", "basic")
        .parentModel({
            "parent": "cmc:item/creative_physics_staff"
        })
        .maxStackSize(1)
        .rarity("epic")

    event.create("cmc:infinity_lava_cell", "meinfinitycell:infinity_cell")
        .fluidType("minecraft:lava")
        .maxStackSize(1)
        .rarity("uncommon")

})