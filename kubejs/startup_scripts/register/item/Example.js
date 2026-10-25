StartupEvents.registry("item", (event) => {

	if (global.Dev["logRegisters"]) {
		console.log("example物品 cmc:??? 已注册!")
	}

	/**
	 * @param {string} id
	 * @param {string} [name]
	 * @returns
	 */
	function addExampleItem(id, name) {
		let builder = event.create(`cmc:${id}`)

		builder.texture(`cmc:item/test/${id}`)
		builder.tag("cmc:examples")

		if (name) {
			builder.displayName(name)
		}

		return builder
	}

	addExampleItem("delta")
	addExampleItem("rc", "Re_Construction")
	addExampleItem("cmi", "Create: Mechanism and Innovation")
	addExampleItem("nopai")
	addExampleItem("c5", "create0501")
	addExampleItem("ticks")
	addExampleItem("cmc", "Create: More Chunks")
	addExampleItem("cmc_icon", "Icon of Create: More Chunks")
	addExampleItem("c_7cd520", "Letter C Colored #7cd520")
	addExampleItem("c_8f8f8f_with_ore", "Letter C Colored #8f8f8f (With Ore)")
	addExampleItem("c_8f8f8f", "Letter C Colored #8f8f8f")
	addExampleItem("c_82ff00", "Letter C Colored #82ff00")
	addExampleItem("c_d2d2d2", "Letter C Colored #d2d2d2")
	addExampleItem("c_fdaf40", "Letter C Colored #fdaf40")
	addExampleItem("fallen_steve")
	addExampleItem("i_5be9b7", "Letter I Colored #5be9b7")
	addExampleItem("m_b9855c_with_water", "Letter M Colored #b9855c (With Water)")
	addExampleItem("m_b9855c", "Letter M Colored #b9855c")
	addExampleItem("m_ff81fa", "Letter M Colored #ff81fa")
	addExampleItem("m_ffb13d", "Letter M Colored #ffb13d")
	addExampleItem("sun_cmc", "Sun")
	addExampleItem("symbol_cmi", "Symbol in CMI Icon")
	addExampleItem("tree")
	addExampleItem("cmc_icon_black", "Icon with Black Background of Create: More Chunk")
	addExampleItem("deleta")
})