ServerEvents.recipes((event) => {
    
    event.campfireCooking(
        "3x minecraft:iron_nugget",
        "minecraft:raw_iron",
        0,
        20*30
    ).id("minecraft:campfire_cooking/iron_nuggets")
})