StartupEvents.registry("item", event => {

    let example = [
        "delta",
        "rc",
        "cmi",
        "nopai",
        "c5",
        "ticks",
        "cmc",
        "cmc_icon",
        "c_7cd520",
        "c_8f8f8f_with_ore",
        "c_8f8f8f",
        "c_82ff00",
        "c_d2d2d2",
        "c_fdaf40",
        "fallen_steve",
        "i_5be9b7",
        "m_b9855c_with_water",
        "m_b9855c",
        "m_ff81fa",
        "m_ffb13d",
        "sun",
        "symbol_cmi",
        "tree",
        "cmc_icon_black",
        "deleta"
    ]

    example.forEach((examples) => {
        event.create(`cmc:${examples}`)
            .texture(`cmc:item/test/${examples}`)
            .tag("cmc:example")
    })

})