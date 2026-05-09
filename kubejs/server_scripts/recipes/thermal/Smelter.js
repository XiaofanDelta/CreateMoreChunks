ServerEvents.recipes((event) => {
    let { thermal } = event.recipes

    //ME 机器外壳
    thermal.smelter(
        "cmc:me_machine_casing",[
            "allthecompressed:iron_block_1x",
            "thermal:machine_frame",
            Item.of("ae2:fluix_crystal",2)
    ]).energy(4000)
        .id("cmc:thermal/smelter/me_machine_casing")

    //ME 设备外壳
    thermal.smelter(
        "cmc:me_equipment_casing",[
            Item.of("ae2:fluix_glass_cable",6),
            "cmc:me_machine_casing",
            "thermal:invar_gear"
    ]).energy(4000)
        .id("cmc:thermal/smelter/me_equipment_casing")

    //深渊粉
    thermal.smelter(
        "2x thermal_extra:abyssal_dust",[
            "2x thermal_extra:ancient_dust",
            "minecraft:echo_shard",
            "#forge:dusts/netherite"
    ]).energy(4000)
        .id("thermal_extra:thermal/smelter/abyssal_dust")

})