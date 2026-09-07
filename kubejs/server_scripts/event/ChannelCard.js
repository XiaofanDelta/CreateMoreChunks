ItemEvents.rightClicked((event) => {
	let { player, item, level } = event

	// 判断物品
	if (event.hand !== "MAIN_HAND" || !player || !item || item.isEmpty()) {
		return false
	}

	if (item.hasTag("cmc:channel_card") && player.isCrouching()) {
		
		// 使用
		player.swing()

		// 分别判断不同的频道卡
		switch(item.getId()) {
			case("cmc:channel_x2_card"):
				level.runCommand("ae2 channelmode x2")
				break
			case("cmc:channel_x3_card"):
				level.runCommand("ae2 channelmode x3")
				break
			case("cmc:channel_x4_card"):
				level.runCommand("ae2 channelmode x4")
				break
			case("cmc:channel_infinite_card"):
				level.runCommand("ae2 channelmode infinite")
				break
			case("cmc:channel_default_card"):
				level.runCommand("ae2 channelmode default")
				break
		}
		
		// 消耗物品
		if ( !player.isCreative() ) {
			item.shrink(1)
		}

	}

})