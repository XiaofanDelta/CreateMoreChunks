StartupEvents.registry("item", (event) => {
	
	/**
	 * 
	 * @param {string} material 无限源质对应的材料
	 * @param {Color_} [color] 无限源质的着色
	 * @returns 
	 */
	function addInfinitySource(material, color) {
		
		let builder = event.create(`cmc:${material}_infinity_source`, "basic")
		
		builder.texture("cmc:item/empty_infinity_source")
		builder.tag("cmc:infinity_source")
		builder.tag(`cmc:infinity_source/${material}`)
		builder.color(color)

		if (global.Dev["logRegisters"]) {
			console.log(`无限源质 cmc:${material}_infinity_source 已注册!`)
		}

		return builder
	}

	addInfinitySource("empty", 0xffffff)
	addInfinitySource("redstone", 0xaa0f01)
	addInfinitySource("gold", 0xfad64a)
	addInfinitySource("iron", 0xa8a8a8)
	addInfinitySource("diamond", 0x4aedd9)
	addInfinitySource("copper", 0xc15a36)
	addInfinitySource("emerald", 0x41f384)
	addInfinitySource("coal", 0x2e2e2e)
	addInfinitySource("lapis_lazuli", 0x345ec3)
	addInfinitySource("lead", 0x323562)
	addInfinitySource("glow_stone", 0xffd38f)

	"#ffd38f"
})