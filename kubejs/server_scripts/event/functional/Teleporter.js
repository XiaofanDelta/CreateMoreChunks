ItemEvents.rightClicked("cmc:teleporter", (event) => {
	let { player, level, item } = event

	if (level.isClientSide()) {
		return
	}

	player.runCommand("jump")

	player.swing()

	level.playSound(
		null,
		player.x,
		player.y,
		player.z,
		"minecraft:entity.enderman.teleport",
		"players",
		1.0,
		1.0
	)

})