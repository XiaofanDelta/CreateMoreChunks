ClientEvents.lang("en_us", (event) => {
    function addItemLang(key, value) {
		event.add(`item.cmc.${key}`, value)
	}

    function addFluidLang(key, value) {
		event.add(`fluid.cmc.${key}`, value)
		event.add(`block.cmc.${key}`, value)
		event.add(`item.cmc.${key}_bucket`, `Bucket of ${value}`)
        event.add(`fluid.cmc.flowing_${key}`, `Flowing ${value}`)
	}

/*

*/
    addItemLang("cmi","Create: Mechanism and Innovation")
    addItemLang("rc","Re_Constrction")
    addItemLang("c5","create0501 (Miku)")
    addItemLang("cmc", "Create: More Chunks")
    addItemLang("cmc_icon", "Icon of Create: More Chunks")
    addItemLang("cmc_icon_black", "Icon with Black Background of Create: More Chunk")
    function addLetterLang(letter, color) {
        const letterUpper = String(letter).toUpperCase()
        event.add(`item.cmc.${letter}_${color}`, `Letter ${letterUpper} Colored #${color}`)
    }
    addItemLang("c_8f8f8f_with_ore", "Letter C Colored #8f8f8f (With Ore)")
    addItemLang("m_b9855c_with_water", "Letter M Colored #b9855c (With Water)")
    addLetterLang("c", "7cd520")
    addLetterLang("c", "8f8f8f")
    addLetterLang("c", "82ff00")
    addLetterLang("c", "d2d2d2")
    addLetterLang("c", "fdaf40")
    addLetterLang("i", "5be9b7")
    addLetterLang("m", "b9855c")
    addLetterLang("m", "ff81fa")
    addLetterLang("m", "ffb13d")
    addItemLang("symbol_cmi", "Symbol of CMI")

    addItemLang("cell_creative","Creative ME Cell")
    addItemLang("cell_creative_full","Creative ME Cell (Full)")
    addItemLang("cell_creative_basic","Basic Creative ME Cell")
    addItemLang("cell_creative_basic_full","Basic Creative ME Cell (Full)")
    
    addFluidLang("world_fluid","World Fluid")
    addFluidLang("impurity","Impurity")

})