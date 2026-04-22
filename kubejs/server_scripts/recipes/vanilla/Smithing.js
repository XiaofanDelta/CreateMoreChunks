ServerEvents.recipes(event => {
    event.smithing(
        'sophisticatedbackpacks:stack_upgrade_tier_4',
        'minecraft:netherite_upgrade_smithing_template',
        'sophisticatedbackpacks:stack_upgrade_tier_3',
        'minecraft:netherite_block'
    )

    /*整活用
    event.smithing(
        'cmc:andesite_upgrade_smithing_template',
        'cmc:basic_smithing_template',
        'create:cogwheel',
        'create:andesite_alloy'
    )

    event.smithing(
        'create:encased_fan',
        'cmc:andesite_upgrade_smithing_template',
        'create:andesite_casing',
        'create:propeller'
    )

    event.smithing(
        'create:mechanical_mixer',
        'cmc:andesite_upgrade_smithing_template',
        'create:andesite_casing',
        'create:whisk'
    )

    event.smithing(
        'create:millstone',
        'cmc:andesite_upgrade_smithing_template',
        'create:andesite_casing',
        '#forge:stone'
    )

    event.smithing(
        'create:speedometer',
        'cmc:andesite_upgrade_smithing_template',
        'create:andesite_casing',
        'minecraft:compass'
    )

    event.smithing(
        'create:mechanical_saw',
        'cmc:andesite_upgrade_smithing_template',
        'create:andesite_casing',
        'thermal:saw_blade'
    )

    
    //锻造模版预定（）
    event.smithing(
        'create:blaze_burner',
        'cmc:test',
        'create:empty_blaze_burner',
        'minecraft:blaze_rod'
    ).id("cmc:hyw")
    */
})