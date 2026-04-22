ServerEvents.recipes((event) => {
    let { thermal } = event.recipes

    thermal.crucible(
        Fluid.of("cmc:world_fluid", 1000),
        "chunkbychunk:worldcore"
    )


})