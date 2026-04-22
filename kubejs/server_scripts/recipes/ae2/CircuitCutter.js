ServerEvents.recipes(event => {
    event.custom({
        "type": "expatternprovider:circuit_cutter",
        "fluid_input": {
            "amount": 1000,
            "ingredient": {
                "fluid": "minecraft:water"
            }
        },
        "item_input": {
            "amount": 1,
            "ingredient": {
                "item": "create:andesite_alloy_block"
            }
        },
        "output": {
            "count": 9,
            "item": "appliedcreate:stress_circuit_board"
        }
    })

    event.custom({
        "type": "expatternprovider:circuit_cutter",
        "fluid_input": {
            "amount": 1000,
            "ingredient": {
                "fluid": "minecraft:water"
            }
        },
        "item_input": {
            "amount": 1,
            "ingredient": {
                "item": "create:brass_block"
            }
        },
        "output": {
            "count": 9,
            "item": "appliedcreate:advanced_stress_circuit_board"
        }
    })
})