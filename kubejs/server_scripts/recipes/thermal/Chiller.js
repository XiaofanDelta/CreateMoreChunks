ServerEvents.recipes((event) => {
    let { thermal } = event.recipes

    thermal.chiller(
        "cmc:world_matter_ingot",
        [Fluid.of("cmc:world_fluid", 100),
            "thermal:chiller_ingot_cast"
        ]
    ).energy(4000)
        .keepIngredient("thermal_extra:chiller_plate_cast")
        .id("cmc:thermal/chiller/world_matter_ingot")

    thermal.chiller(
        "minecraft:slime_ball",[
        Fluid.of("cmc:glue", 250),
        "thermal:chiller_ball_cast"
    ]).energy(4000)
        .keepIngredient("thermal:chiller_ball_cast")
        .id("thermal:thermal/chiller/glue_to_slime_ball")
        
})