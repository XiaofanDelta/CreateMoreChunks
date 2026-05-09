ServerEvents.recipes((event) => {
    let { thermal } = event.recipes

    //热力组件锻造模版
    thermal.press(
        "thermal_extra:augment_smithing_upgrade",
        "cmc:basic_smithing_template"
    ).energy(3000)
        .id("thermal_extra:thermal/press/augment_smiting_upgrade")

    //世界物质板
    thermal.press(
        "cmc:world_matter_plate",
        "cmc:world_matter_ingot"
    ).energy(3000)
        .id("cmc:thermal/press/world_matter_plate")

    //精密构件基底
    thermal.press("cmc:precision_mechanism_base",
        "create:brass_ingot"
    ).energy(3000)
        .id("cmc:thermal/press/precision_mechanism_base")

    //黄铜齿轮
    thermal.press("cmc:brass_gear",[
        "4x create:brass_ingot",
        "thermal:press_gear_die"
    ]).energy(5000)
        .keepIngredient("thermal:press_gear_die")
        .id("cmc:thermal/press/brass_gear")

})