StartupEvents.registry("item", (event) => {

    event.create("cmc:brass_gear", "basic")
        .texture("cmc:item/material/brass_gear")
        .tag("forge:gears")
        .tag("forge:gears/brass")

    materialRegistryNormal("quartz_seed")
    materialRegistryNormal("high_pure_quartz")
    materialRegistryNormal("world_gem")

    materialRegistry("world_matter")

    function materialRegistryNormal(name) {
        event.create(`cmc:${name}`, "basic")
            .texture(`cmc:item/material/${name}`)
    }


    function materialRegistry(name) {
        event.create(`cmc:crushed_${name}`, "basic")
            .texture(`cmc:item/material/${name}/crushed`)
            .tag("create:crushed_raw_materials")
            .tag(`create:crushed_raw_materials/${name}`)

        let material_list = [
            "ingot",
            "plate",
            "dust",
            "nugget"
        ]

        material_list.forEach((material) => {
            event.create(`cmc:${name}_${material}`, "basic")
                .texture(`cmc:item/material/${name}/${material}`)
                .tag(`forge:${material}s/${name}`)
                .tag(`forge:${material}s`)
        })
    }
})