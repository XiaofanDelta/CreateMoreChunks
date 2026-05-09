ServerEvents.recipes((event) => {
    let { lychee } = event.recipes

    //世界宝石 => 世界核心
    lychee.block_interacting(
        "cmc:world_gem",
        "allthecompressed:cobblestone_3x")
        .post([
            Post.place("chunkbychunk:worldcore")
        ])
        .id("chunkbychunk:lychee/worldcore")

    //岩浆桶
    lychee.item_inside(
        "minecraft:water_bucket",
        "cmc:world_fluid")
        .post([
            Post.drop_item("minecraft:lava_bucket")
        ])
        .id("lychee:lava_bucket")

    //熔炉
    lychee.block_interacting(
        "minecraft:campfire",
        "allthecompressed:cobblestone_2x")
        .post([
            Post.place("minecraft:furnace")
        ])
        .id("lychee:furnace")
    
    //创造流休储罐
    lychee.block_interacting(
        "thermal:fluid_tank_creative_augment",
        "create:fluid_tank")
        .post([
            Post.place("cmc:creative_fiuld_tank")
        ])
        .id("create:lychee/creative_fluid_tank")

})