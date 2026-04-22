ServerEvents.recipes(event => {
    let { thermal } = event.recipes

    thermal.smelter(
        'cmc:me_machine_casing',[
            'allthecompressed:iron_block_1x',
            'thermal:machine_frame',
            Item.of('ae2:fluix_crystal',2)
        ]
    )

    thermal.smelter(
        'cmc:me_equipment_casing',[
            Item.of('ae2:fluix_glass_cable',6),
            'cmc:me_machine_casing',
            'thermal:invar_gear'
        ]
    )
})