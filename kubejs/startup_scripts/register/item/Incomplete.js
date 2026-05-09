StartupEvents.registry("item", (event) => {
    
    event.create("cmc:incomplete_machine_frame", "basic")
        .parentModel({
            "parent": "cmc:item/incomplete_machine_frame"
        })
        .tag("cmc:incomplete_items")

    event.create("cmc:incomplete_thermal_machine", "basic")
        .parentModel({
            "parent": "cmc:item/incomplete_thermal_machine",
        })
        .tag("cmc:incomplete_items")

    let incomplete_item_list = [
        "diamond",
        "black_iron_ingot",
        "drive_part",
        "netherite_upgrade_smithing_template",
        "high_pure_quartz"
    ]

    incomplete_item_list.forEach((incomplete) => {
        event.create(`cmc:incomplete_${incomplete}`, "basic")
            .texture(`cmc:item/incomplete_item/${incomplete}`)
            .tag("cmc:incomplete_items")
    })

})