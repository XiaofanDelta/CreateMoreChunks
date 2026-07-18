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

	addInfinitySource("empty", 0xFFFFFF)
	addInfinitySource("redstone", 0xAA0F01)
	addInfinitySource("gold", 0xFAD64A)
	addInfinitySource("iron", 0xA8A8A8)
	addInfinitySource("diamond", 0x4AEDD9)
	addInfinitySource("copper", 0xC15A36)
	addInfinitySource("emerald", 0x41F384)
	addInfinitySource("coal", 0x2E2E2E)
	addInfinitySource("lapis_lazuli", 0x345EC3)
	addInfinitySource("lead", 0x323562)
	addInfinitySource("glow_stone", 0xffD38F)

	"#ffd38f"
})