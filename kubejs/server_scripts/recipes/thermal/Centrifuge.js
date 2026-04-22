ServerEvents.recipes((event) => {
    let { thermal } = event.recipes

    thermal.centrifuge([
        Fluid.of("cmc:impurity", 1000),
        Item.of("create:fluid_tank").withChance(0.8),
        Item.of("create:creative_fluid_tank").withChance(0.01)
    ],
        "cmc:creative_fiuld_tank"
    ).energy(50000)

    thermal.centrifuge([
        Fluid.of("minecraft:water", 1000),
        "cmc:m_b9855c",
        Item.of("minecraft:wheat", 5),
        Item.of("minecraft:wheat", 2).withChance(0.2)
    ],
        "cmc:m_b9855c_with_water"
    ).energy(10000)

    thermal.centrifuge([
        "cmc:c_fdaf40",
        "cmc:m_ff81fa",
        "cmc:i_5be9b7",
        Item.of("cmc:symbol_cmi", 2)
    ],
        "cmc:cmi"
    ).energy(10000)

    thermal.centrifuge([
        "cmc:cmc",
        "cmc:fallen_steve",
        "cmc:sun",
        "cmc:tree"
    ],
        'cmc:cmc_icon'
    ).energy(10000)

    thermal.centrifuge([
        "cmc:c_7cd520",
        "cmc:m_b9855c_with_water",
        "cmc:c_8f8f8f_with_ore",
        "cmc:delta"
    ],
        "cmc:cmc"
    ).energy(10000)

    thermal.centrifuge([
        "cmc:c_82ff00",
        "cmc:m_ffb13d",
        "cmc:c_d2d2d2",
        "cmc:delta",
        Fluid.of("cmc:impurity", 1000)
    ],
        "cmc:cmc_icon_black"
    ).energy(10000)
})