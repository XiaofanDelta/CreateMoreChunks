ServerEvents.recipes((event) => {
    let { create } = event.recipes

    //不稳红石
    create.mixing(
        Fluid.of("thermal:redstone", 80),
        "minecraft:redstone"
    ).heated()
        .id("thermal:create/mixing/redstone")

    //钢粉
    create.mixing(
        "mekanism:dust_steel", [
        "#forge:dusts/iron",
        Item.of("#forge:dusts/coal", 2)
    ]).heated()
        .id("mekanism:create/mixing/dust_steel")

    //黄铜锭
    create.mixing([
        Item.of("create:brass_ingot", 3),
        Item.of("chunkbychunk:worldcrystal").withChance(0.1)
    ], [
        "minecraft:copper_ingot",
        "minecraft:gold_ingot",
        "chunkbychunk:worldcore"
    ]).heated()
        .id("create:mixing/brass_ingot")

    //安山合金
    create.mixing(
        "create:andesite_alloy", [
        "minecraft:andesite",
        "chunkbychunk:worldfragment"
    ]).id("create:mixing/andesite_alloy")

    //世界宝石
    create.mixing(
        "cmc:world_gem", [
        Item.of("chunkbychunk:worldfragment", 4),
        Item.of("chunkbychunk:worldshard", 4),
        Item.of("chunkbychunk:worldcrystal", 4),
        Fluid.of("cmc:world_fluid", 1000)
    ]).id("cmc:create/mixing/world_gem")

    //世界流体 (普通加热)
    create.mixing(
        Fluid.of("cmc:world_fluid", 600),
        "chunkbychunk:worldcore"
    ).heated()
        .id("cmc:create/mixing/world_fluid")
    
    //世界段片
    create.mixing(
        "chunkbychunk:worldshard",
        Item.of("chunkbychunk:worldfragment",4)
    ).id("chunkbychunk:create/mixing/worldshard")
    
    //木质构件
    create.mixing("cmc:wooden_mechanism",[
        "#minecraft:wooden_pressure_plates",
        "#minecraft:wooden_buttons",
        "cmc:mechanism_part",
        Fluid.of("minecraft:water",500)
    ]).id("cmc:create/mixing/wooden_mechanism")

    //构件零件
    create.mixing("4x cmc:mechanism_part",[
        "minecraft:clay_ball",
        "minecraft:flint",
        Fluid.of("minecraft:water",100)
    ]).id("cmc:create/mixing/mechanism_part")

})