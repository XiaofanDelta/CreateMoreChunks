JEIEvents.information((event) => {
	/** 
	 * @param {Internal.Ingredient_} name 
	 */
	function addJEIInfo(name) {
		let itemInfoTranslateKey = `jei.info.${name}`.replace(":", ".")
		event.addItem(name, Component.translatable(itemInfoTranslateKey))
	}

	addJEIInfo("cmc:test")
	addJEIInfo("cmc:chunk_spawner")
	addJEIInfo("cmc:creative_physics_staff")

})