ClientEvents.lang("en_us", (event) => {

	// 不起作用，弃用

	function addItemLang(key, value) {
		event.add(`item.cmc.${key}`, value)
	}

	function addBlockLang(key, value) {
		event.add(`block.cmc.${key}`, value)
	}

})