ServerEvents.recipes((event) => {
    let { create } = event.recipes

    //黑铁锭
    const incomplete_black_ingot = "cmc:incomplete_black_iron_ingot"
    create.sequenced_assembly(
        "extendedcrafting:black_iron_ingot",
        "createdeco:industrial_iron_ingot", [
        create.deploying(
            incomplete_black_ingot, [
            incomplete_black_ingot,
            "extendedcrafting:black_iron_nugget"]),
        create.pressing(
            incomplete_black_ingot,
            incomplete_black_ingot)])
        .transitionalItem(incomplete_black_ingot)
        .loops(9)
        .id("extendedcrafting:create/sequenced_assembly/blakc_iron_ingot")

    /*扩展驱动器
        const incomplete_ex_drive = "ae2:drive"
        create.sequenced_assembly(
            "expatternprovider:ex_drive",
            "ae2:drive",[
                create.deploying(
                    incomplete_ex_drive,[
                        incomplete_ex_drive,
                        "ae2:capacity_card"]),
                create.deploying(
                    incomplete_ex_drive,[
                        incomplete_ex_drive,
                        "#ae2:glass_cable"]),
                create.deploying(
                    incomplete_ex_drive,[
                        incomplete_ex_drive,
                        "cmc:drive_part"]),
                create.pressing(
                    incomplete_ex_drive,
                    incomplete_ex_drive)
                ])
        .transitionalItem(incomplete_ex_drive)
        .loops(1)
    */

    //驱动器组件
    create.sequenced_assembly(
        "cmc:drive_part",
        "#ae2:glass_cable", [
        create.deploying(
            "cmc:incomplete_drive_part", [
            "cmc:incomplete_drive_part",
            "megacells:cell_dock"
        ])]
    ).transitionalItem("cmc:incomplete_drive_part")
        .loops(10)
        .id("cmc:create/sequenced_assembly/drive_part")


    //下界合金锻造模版
    const incomplete_netherite_upgrade = "cmc:incomplete_netherite_upgrade_smithing_template"
    create.sequenced_assembly(
        "minecraft:netherite_upgrade_smithing_template",
        "cmc:basic_smithing_template", [
        create.deploying(
            incomplete_netherite_upgrade, [
            incomplete_netherite_upgrade,
            "allthecompressed:netherrack_2x"]
        ),
        create.deploying(
            incomplete_netherite_upgrade, [
            incomplete_netherite_upgrade,
            "#forge:gears/diamond"
        ]),
        create.deploying(
            incomplete_netherite_upgrade, [
            incomplete_netherite_upgrade,
            "createdeco:netherite_coin"
        ]),
        create.cutting(
            incomplete_netherite_upgrade,
            incomplete_netherite_upgrade
        ),
        create.filling(
            incomplete_netherite_upgrade, [
            incomplete_netherite_upgrade,
            Fluid.of("cmc:world_fluid", 1000)
        ]),
        create.pressing(
            incomplete_netherite_upgrade,
            incomplete_netherite_upgrade
        )]).transitionalItem(incomplete_netherite_upgrade)
        .loops(1)
        .id("create:sequenced_assembly/netherite_upgrade_smithing_template")

    //机器框架
    const incomplete_machine_frame = "cmc:incomplete_machine_frame"
    create.sequenced_assembly(
        "thermal:machine_frame",
        "#forge:storage_blocks/steel", [
        create.cutting(
            incomplete_machine_frame,
            incomplete_machine_frame
        ),
        create.deploying(
            incomplete_machine_frame, [
            incomplete_machine_frame,
            "#forge:storage_blocks/iron"
        ]),
        create.deploying(
            incomplete_machine_frame, [
            incomplete_machine_frame,
            "#forge:glass"
        ]),
        create.deploying(
            incomplete_machine_frame, [
            incomplete_machine_frame,
            "#forge:glass"
        ]),
        create.filling(
            incomplete_machine_frame, [
            incomplete_machine_frame,
            Fluid.of("minecraft:lava", 1000)
        ]),
        create.pressing(
            incomplete_machine_frame,
            incomplete_machine_frame
        )
    ]).transitionalItem(incomplete_machine_frame)
        .loops(1)
        .id("thermal:create/sequenced_assembly/machine_frame")

    //CMC 标志
    create.sequenced_assembly(
        "cmc:cmc_icon",
        "cmc:delta", [
        create.deploying(
            "cmc:deleta", [
            "cmc:deleta",
            "#chunkbychunk:chunkspawners"
        ])
    ]).transitionalItem("cmc:deleta")
        .loops(8)
        .id("cmc:create/sequenced_assembly/cmc_icon")

    //钻石
    create.sequenced_assembly(
        "minecraft:diamond",
        "allthecompressed:coal_block_1x", [
        create.pressing(
            "cmc:incomplete_diamond",
            "cmc:incomplete_diamond")
    ]).transitionalItem("cmc:incomplete_diamond")
        .loops(1145)
        .id("create:sequenced_assembly/diamond")

    //高纯石英
    create.sequenced_assembly(
        "cmc:high_pure_quartz",
        "cmc:quartz_seed", [
        create.filling(
            "cmc:incomplete_high_pure_quartz", [
            "cmc:incomplete_high_pure_quartz",
            Fluid.of("minecraft:water", 1000)
        ])
    ]).transitionalItem("cmc:incomplete_high_pure_quartz")
        .loops(20)
        .id("cmc:create/sequenced_assembly/high_pure_quartz")

    //精密构件
    const incomplete_precision_mechanism = "create:incomplete_precision_mechanism"
    create.sequenced_assembly([
        Item.of("create:precision_mechanism").withChance(0.8),
        Item.of("createdeco:brass_coinstack",4).withChance(0.1),
        Item.of("create:brass_sheet").withChance(0.1),
        Item.of("create:brass_nugget",9).withChance(0.1),
        Item.of("create:golden_sheet").withChance(0.1),
        Item.of("cmc:wooden_mechanism").withChance(0.1),
        Item.of("cmc:ringo_mechanism").withChance(0.1)],
        "cmc:precision_mechanism_base",[
            create.filling(incomplete_precision_mechanism,[
                incomplete_precision_mechanism,
                Fluid.of("cmc:glue", 100)
            ]),
            create.deploying(incomplete_precision_mechanism,[
                incomplete_precision_mechanism,
                "cmc:brass_gear"
            ]),
            create.deploying(incomplete_precision_mechanism,[
                incomplete_precision_mechanism,
                "#forge:gears/gold"
            ]),
            create.deploying(incomplete_precision_mechanism,[
                incomplete_precision_mechanism,
                "cmc:mechanism_part"
            ]),
            create.pressing(incomplete_precision_mechanism,
                incomplete_precision_mechanism
            )
    ]).transitionalItem(incomplete_precision_mechanism)
        .loops(1)
        .id("create:sequenced_assembly/precision_mechanism")

    
    //热力物品
    const incomplete_thermal_machine = "cmc:incomplete_thermal_machine"
    //熔岩炉
    create.sequenced_assembly(
        "thermal:machine_crucible",
        "thermal:machine_frame",[
            create.deploying(incomplete_thermal_machine,[
                incomplete_thermal_machine,
                "minecraft:nether_bricks"
            ]),
            create.deploying(incomplete_thermal_machine,[
                incomplete_thermal_machine,
                "minecraft:nether_bricks"
            ]),
            create.deploying(incomplete_thermal_machine,[
                incomplete_thermal_machine,
                "#forge:gears/invar"
            ]),
            create.deploying(incomplete_thermal_machine,[
                incomplete_thermal_machine,
                "#forge:gears/invar"
            ]),
            create.filling(incomplete_thermal_machine,[
                incomplete_thermal_machine,
                Fluid.of("minecraft:lava",1000)
            ]),
            create.deploying(incomplete_thermal_machine,[
                incomplete_thermal_machine,
                "#forge:glass"
            ]),
            create.deploying(incomplete_thermal_machine,[
                incomplete_thermal_machine,
                "thermal:rf_coil"
            ])
        ]).transitionalItem(incomplete_thermal_machine)
            .loops(1)
            .id("thermal:create/sequenced_assembly/machine_crucible")

})