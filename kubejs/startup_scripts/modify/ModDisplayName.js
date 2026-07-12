// Platform.mods.cmc.name = "Create: More Chunks"

/** 
 * 
 * @param {string} modid
 * @param {string} name
*/
function modifyDisplayName(modid, name) {
	Platform.getInfo(modid).setName(name)
}

modifyDisplayName("cmc", "Create: More Chunks")