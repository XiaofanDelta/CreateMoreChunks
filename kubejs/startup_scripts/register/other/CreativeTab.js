StartupEvents.registry("creative_mode_tab", (event) => {

    //ae物品
    event.create("cmc:cmc_ae_items")
        .icon(() => "cmc:cell_creative_full")
        .content(() => [
            "cmc:cell_creative_basic",
            "cmc:cell_creative",
            "cmc:cell_creative_basic_full",
            "cmc:cell_creative_full",
            "cmc:infinity_lava_cell",
            "cmc:drive_part"
        ])

    //普通物品
    event.create("cmc:cmc_normal_items")
        .icon(() => "cmc:basic_smithing_template")
        .content(() => [
            "cmc:basic_smithing_template",
            "cmc:world_gem",
            "cmc:quartz_seed",
            "cmc:high_pure_quartz",
            "cmc:world_matter_ingot",
            "cmc:world_matter_nugget",
            "cmc:world_matter_plate",
            "cmc:world_matter_dust",
            "cmc:crushed_world_matter",
            "cmc:mechanism_part",
            "cmc:ringo_mechanism",
            "cmc:wooden_mechanism",
            "cmc:precision_mechanism_base",
            "cmc:brass_gear"
        ])

    //工具
    event.create("cmc:cmc_tools")
        .icon(() => "cmc:unbreakable_sandpaper")
        .content(() => [
            "cmc:unbreakable_sandpaper",
            "cmc:test",
            "cmc:creative_physics_staff"
        ])

    //流体
    event.create("cmc:cmc_fluid")
        .icon(() => "cmc:impurity_bucket")
        .content(() => [
            "cmc:impurity_bucket",
            "cmc:world_fluid_bucket",
            "cmc:glue_bucket"
        ])

    //普通方块
    event.create("cmc:cmc_normal_blocks")
        .icon(() => "cmc:me_equipment_casing")
        .content(() => [
            "cmc:creative_fiuld_tank",
            "cmc:me_equipment_casing",
            "cmc:me_machine_casing"
        ])

    //未完成物品
    event.create("cmc:cmc_incomplete_items")
        .icon(() => "cmc:incomplete_netherite_upgrade_smithing_template")
        .content(() => [
            "cmc:incomplete_netherite_upgrade_smithing_template",
            "cmc:incomplete_black_iron_ingot",
            "cmc:incomplete_machine_frame",
            "cmc:incomplete_diamond",
            "cmc:incomplete_drive_part",
            "cmc:incomplete_high_pure_quartz",
            "cmc:incomplete_thermal_machine"
        ])

    //彩蛋
    event.create("cmc:cmc_easter_eggs")
        .icon(() => "cmc:delta")
        .content(() => [
            "cmc:delta",
            "cmc:cmi",
            "cmc:rc",
            "cmc:c5",
            "cmc:nopai",
            "cmc:ticks",
            "cmc:cmc",
            "cmc:cmc_icon",
            "cmc:cmc_icon_black",
            "cmc:c_7cd520",
            "cmc:c_8f8f8f_with_ore",
            "cmc:c_8f8f8f",
            "cmc:c_82ff00",
            "cmc:c_d2d2d2",
            "cmc:c_fdaf40",
            "cmc:fallen_steve",
            "cmc:i_5be9b7",
            "cmc:m_b9855c_with_water",
            "cmc:m_b9855c",
            "cmc:m_ff81fa",
            "cmc:m_ffb13d",
            "cmc:sun",
            "cmc:symbol_cmi",
            "cmc:tree",
            "cmc:deleta"
        ])
})

StartupEvents.registry("creative_mode_tab", (event) => {

    //chunk by chunk
    event.create("cmc:chunk_by_chunk")
        .icon(() => "chunkbychunk:chunkspawner")
        .content(() => [
            "chunkbychunk:worldfragment",
            "chunkbychunk:worldshard",
            "chunkbychunk:worldcrystal",
            "cmc:world_gem",
            "chunkbychunk:worldcore",
            "chunkbychunk:worldforge",
            "chunkbychunk:worldscanner",
            "chunkbychunk:worldmender",
            "chunkbychunk:chunkspawner",
            "chunkbychunk:unstablechunkspawner",
            "chunkbychunk:plainschunkspawner",
            "chunkbychunk:snowchunkspawner",
            "chunkbychunk:desertchunkspawner",
            "chunkbychunk:swampchunkspawner",
            "chunkbychunk:badlandschunkspawner",
            "chunkbychunk:forestchunkspawner",
            "chunkbychunk:savannachunkspawner",
            "chunkbychunk:rockychunkspawner",
            "chunkbychunk:junglechunkspawner",
            "chunkbychunk:mushroomchunkspawner",
            "chunkbychunk:mountainchunkspawner"
        ])

    //ae things
    event.create("cmc:ae_things")
        .icon(() => "aeinfinitybooster:infinity_card")
        .content(() => [
            "aeinfinitybooster:infinity_card",
            "aeinfinitybooster:dimension_card",
            "ae2insertexportcard:insert_card",
            "ae2insertexportcard:export_card",
            "ae2wtlib:quantum_bridge_card",
            "ae2wtlib:magnet_card",
            "ae2wtlib:wireless_pattern_encoding_terminal",
            "ae2wtlib:wireless_pattern_access_terminal",
            "ae2wtlib:wireless_universal_terminal"
        ])
})