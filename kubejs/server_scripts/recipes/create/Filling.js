ServerEvents.recipes((event) => {
    let { create } = event.recipes

    //玫瑰石英
    create.filling(
        "create:rose_quartz", [
        "cmc:high_pure_quartz",
        Fluid.of("thermal:redstone", 800)
    ]).id("create:filling/rose_quartz")

    //黑色光通染色球
    create.filling(
        "ae2:black_lumen_paint_ball",[
            "ae2:black_paint_ball",
            Fluid.of("mekanism:uranium_oxide",125)
    ]).id("ae2:create/filling/black_lumen_paint_ball")

})