ServerEvents.recipes((event) => {
    let { create } = event.recipes
    const incomplete_black_ingot = "cmc:incomplete_black_iron_ingot"


    create.sequenced_assembly(
        'extendedcrafting:black_iron_ingot',
        'createdeco:industrial_iron_ingot', [
        create.deploying(
            incomplete_black_ingot, [
            incomplete_black_ingot,
            'extendedcrafting:black_iron_nugget']),
        create.pressing(
            incomplete_black_ingot,
            incomplete_black_ingot)])
        .transitionalItem(incomplete_black_ingot)
        .loops(9)

    /*
        const incomplete_ex_drive = 'ae2:drive'
        create.sequenced_assembly(
            'expatternprovider:ex_drive',
            'ae2:drive',[
                create.deploying(
                    incomplete_ex_drive,[
                        incomplete_ex_drive,
                        'ae2:capacity_card']),
                create.deploying(
                    incomplete_ex_drive,[
                        incomplete_ex_drive,
                        '#ae2:glass_cable']),
                create.deploying(
                    incomplete_ex_drive,[
                        incomplete_ex_drive,
                        'cmc:drive_part']),
                create.pressing(
                    incomplete_ex_drive,
                    incomplete_ex_drive)
                ])
        .transitionalItem(incomplete_ex_drive)
        .loops(1)
    */

    create.sequenced_assembly(
        'cmc:drive_part',
        '#ae2:glass_cable', [
        create.deploying(
            "cmc:incomplete_drive_part", [
            "cmc:incomplete_drive_part",
            'megacells:cell_dock'
        ]
        )
    ]
    ).transitionalItem("cmc:incomplete_drive_part")
        .loops(10)


    const incomplete_netherite_upgrade = 'cmc:incomplete_netherite_upgrade_smithing_template'
    create.sequenced_assembly(
        'minecraft:netherite_upgrade_smithing_template',
        'cmc:basic_smithing_template', [
        create.deploying(
            incomplete_netherite_upgrade, [
            incomplete_netherite_upgrade,
            'allthecompressed:netherrack_2x']
        ),
        create.deploying(
            incomplete_netherite_upgrade, [
            incomplete_netherite_upgrade,
            '#forge:gears/diamond'
        ]
        ),
        create.deploying(
            incomplete_netherite_upgrade, [
            incomplete_netherite_upgrade,
            'createdeco:netherite_coin'
        ]
        ),
        create.cutting(
            incomplete_netherite_upgrade,
            incomplete_netherite_upgrade
        ),
        create.filling(
            incomplete_netherite_upgrade, [
            incomplete_netherite_upgrade,
            Fluid.of("cmc:world_fluid", 1000)
        ]
        ),
        create.pressing(
            incomplete_netherite_upgrade,
            incomplete_netherite_upgrade
        )
    ]
    ).transitionalItem(incomplete_netherite_upgrade)
        .loops(1)

    const incomplete_machine_frame = "cmc:incomplete_machine_frame"

    create.sequenced_assembly(
        "thermal:machine_frame",
        "minecraft:iron_block", [
        create.cutting(
            incomplete_machine_frame,
            incomplete_machine_frame
        ),
        create.deploying(
            incomplete_machine_frame, [
            incomplete_machine_frame,
            "#forge:storage_blocks/steel"
        ]
        ),
        create.deploying(
            incomplete_machine_frame, [
            incomplete_machine_frame,
            "#forge:glass"
        ]
        ),
        create.deploying(
            incomplete_machine_frame, [
            incomplete_machine_frame,
            "#forge:glass"
        ]
        ),
        create.filling(
            incomplete_machine_frame, [
            incomplete_machine_frame,
            Fluid.of("minecraft:lava", 1000)
        ]
        ),
        create.pressing(
            incomplete_machine_frame,
            incomplete_machine_frame
        )
    ]
    ).transitionalItem(incomplete_machine_frame)
        .loops(1)

    const incomplete_cmc_icon = "cmc:deleta"

    create.sequenced_assembly(
        "cmc:cmc_icon",
        "cmc:delta", [
        create.deploying(
            incomplete_cmc_icon, [
            incomplete_cmc_icon,
            "#chunkbychunk:chunkspawners"
        ])
    ]).transitionalItem(incomplete_cmc_icon)
        .loops(8)

    create.sequenced_assembly(
        "minecraft:diamond",
        "allthecompressed:coal_block_1x", [
        create.pressing(
            "cmc:incomplete_diamond",
            "cmc:incomplete_diamond")
    ]).transitionalItem("cmc:incomplete_diamond")
        .loops(1145)

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

})