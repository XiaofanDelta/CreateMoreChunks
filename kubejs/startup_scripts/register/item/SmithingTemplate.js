StartupEvents.registry("item", (event) => {

	addSmithingTemplate("basic", false)
		.ingotIcon()
		.texture("cmc:item/material/basic_smithing_template")
	
	addSmithingTemplate("andesite", true)
		.addAppliesToSlotIcon("cmc:item/empty_slot_casing")
		.texture("cmc:item/material/andesite_upgrade_smithing_template")

	addSmithingTemplate("null", false)
		.texture("cmc:item/missing/smithing_template")


	/**
	 * 
	 * @param {string} id 
	 * @param {boolean} isUpgrade 
	 * @returns 
	 */
	function addSmithingTemplate(id, isUpgrade) {
		let itemID = isUpgrade? `${id}_upgrade_smithing_template` : `${id}_smithing_template`

		let builder = event.create(`cmc:${itemID}`, "smithing_template")

		builder.ingredientsText = Component.translatable(`item.cmc.smithing_template.${id}.ingredients`)
		builder.appliesToText = Component.translatable(`item.cmc.smithing_template.${id}.applies_to`)
		builder.ingredientSlotDescriptionText = Component.translatable(`item.cmc.smithing_template.${id}.ingredients_slot`)
		builder.appliesToSlotDescriptionText = Component.translatable(`item.cmc.smithing_template.${id}.applies_to_slot`)

		if (global.Dev["logRegisters"]) {
			console.log(`锻造模版 cmc:${itemID} 已注册!`)
		}

		return builder
	}

})