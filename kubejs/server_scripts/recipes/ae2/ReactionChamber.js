ServerEvents.recipes((event) => {
    event.custom({
        "type": "advanced_ae:reaction",
        "energy": 500000,
        "fluid": {
            "fluidStack": {
                "Amount": 16000,
                "FluidName": "minecraft:lava",
            },
        },
        "input_items": [
            {
                "amount": 64,
                "ingredient": {item: "cobblefordays:tier_5"}
            },
            {
                "amount": 8,
                "ingredient": {item: "thermal:machine_crucible"},
            },
            {
                "amount": 1,
                "ingredient": {item: "megacells:mega_fluid_cell_housing"},
            },
        ],
        "output": {
            "#": 1,
            "#c": "ae2:i",
            "id": "cmc:infinity_lava_cell",
        },
    });
})
//Item.of("expatternprovider:infinity_cell", "{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}")
