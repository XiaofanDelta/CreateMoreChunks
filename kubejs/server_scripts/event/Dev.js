let deving = global.Dev["recipesMaking"]

// 扳手获取 id
ItemEvents.rightClicked("create:wrench",(event) => {
	let { player, hand } = event
	if (hand === "OFF_HAND" && deving) {
		if (player.mainHandItem !== "minecraft:air" && player.crouching) {
			player.runCommand("/bookshelf hand ID")
		}
	}
})

// 命名牌获取 tags
ItemEvents.rightClicked("minecraft:name_tag",(event) => {
	let { player, hand } = event
	if (hand === "OFF_HAND" && deving) {
		if (player.mainHandItem !== "minecraft:air" && player.crouching) {
			player.runCommand("/bookshelf hand TAGS")
		}
	}
})

// 紫色染料使用 kjs hand
ItemEvents.rightClicked("minecraft:purple_dye",(event) => {
	let { player, hand } = event
	if (hand === "OFF_HAND" && deving) {
		if (player.mainHandItem !== "minecraft:air" && player.crouching) {
			player.runCommandSilent("/kjs hand")
		}
	}
})