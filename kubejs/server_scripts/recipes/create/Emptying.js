ServerEvents.recipes((event) => {
    let { create } = event.recipes

    //铀增产
    create.emptying([
        Fluid.of("mekanism:uranium_oxide", 250),
        Item.of("mekanism:clump_uranium")],
        "mekanism:yellow_cake_uranium"
    ).id("mekanism:create/emptying/yellow_cake_uranium")

    //世界流体 (世界水晶制作)
    create.emptying([
        Fluid.of("cmc:world_fluid", 100),
        "chunkbychunk:worldfragment"],
        "chunkbychunk:worldcrystal"
    ).id("cmc:create/emptying/world_fluid")

})