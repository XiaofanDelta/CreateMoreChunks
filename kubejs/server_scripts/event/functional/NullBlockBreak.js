BlockEvents.broken((event) => {
	let { block, level, player } = event

	if (level.isClientSide()) {
		return
	}

	const NULL_BLOCKS_ID = [
		"cmc:grass_block",
		"cmc:dirt",
		"cmc:stone",
		"cmc:bedrock"
	]

	if (NULL_BLOCKS_ID.includes(block.id) && !player.isCreative()) {
		event.cancel()
	}

})

BlockEvents.rightClicked("cmc:dirt", (event) => {
	let { block, item, player, level } = event
	let { pos } = block

	if (event.hand !== "MAIN_HAND" || !player || !item || (!item.hasTag("minecraft:hoes") && !item.hasTag("minecraft:shovels"))) {
		return false
	}

	if (item.hasTag("minecraft:hoes") || item.hasTag("minecraft:shovels")) {
		if (!player.isCreative()) {
			item.damageValue ++
		}

		player.swing()

		level.destroyBlock(pos, true)	

	}

})

BlockEvents.leftClicked("cmc:bedrock", (event) => {
	let { block, item, player, level } = event
	let { x, y, z } = block

	if (!player || !item) {
		return false
	}

	if (item.id === "mekanism:atomic_disassembler") {

		player.swing()

		level.runCommandSilent(`setblock ${x} ${y} ${z} cmc:stone destroy`)

	}

})