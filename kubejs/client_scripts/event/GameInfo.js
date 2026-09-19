ClientEvents.loggedIn((event) => {
	let { player } = event

	let paintData = {}

	paintData.versionTip = {
		type: "text",
		x: 10,
		y: "$screenH - 20",
		alignX: "left",
		text: global.modPackMainVersion,
		scale: 1.0
	}

	player.paint(paintData)
})