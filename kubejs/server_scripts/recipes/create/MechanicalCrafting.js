ServerEvents.recipes((event) => {
	let { create } = event.recipes
    create.mechanical_crafting('minecraft:spawner',

        [
            "IBBI",
            "B  B",
            "B  B",
            "IBBI"
        ],

        {
            I:"minecraft:iron_ingot",
            B:"minecraft:iron_bars"
        }

    )

    create.mechanical_crafting('cmc:rc',[
            "DDDD     ",
            "D   D    ",
            "D   D    ",
            "D   D    ",
            "DDDDDDDDD",
            "DD  D    ",
            "D DSD    ",
            "D  DD    ",
            "D   DDDDD"],
            {
                D:"cmc:delta",
                S:"cmc:ticks"
            }
    )
})