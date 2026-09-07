let $ClickEvent =
	Java.loadClass("net.minecraft.network.chat.ClickEvent")

let $ClickEvent$Action =
	Java.loadClass("net.minecraft.network.chat.ClickEvent$Action")

let $HoverEvent =
	Java.loadClass("net.minecraft.network.chat.HoverEvent")

let $HoverEvent$Action =
	Java.loadClass("net.minecraft.network.chat.HoverEvent$Action")

let $Style =
	Java.loadClass("net.minecraft.network.chat.Style")

ServerEvents.customCommand("item_tags_get", (event) => {
	let { player } = event

	// 主手物品
	let mainHandItem = player.getItemBySlot(0)

	// 检测是否为空
	if (mainHandItem.isEmpty()) {
		player.sendSystemMessage(Component.translatable("message.cmc.tag.no_item"))
		return
	}

	// 获取标签数组
	let itemTagsList = mainHandItem.getTags().toArray()

	// 检测是否无物品标签
	if (itemTagsList.length === 0) {
		player.sendSystemMessage(Component.translatable("message.cmc.tag.empty"))
		return 
	}
	
	// 发送开头
	player.sendSystemMessage(Component.translatable("message.cmc.tag"))
	
	// forEach 获取每个标签
	itemTagsList.forEach((itemTagKey) => {
		/**
		 * @type {string} 标签
		 */
		let itemTagString = itemTagKey.toString()

		// 转换为文字
		let itemTagColored = itemTagString
			.replace("TagKey[minecraft:item / ", "§a\"")
			.replace("]", "\"§r")
		
		// 需要复制的文字
		let itemTagCopy = itemTagString
			.replace("TagKey[minecraft:item / ", "\"")
			.replace("]", "\"")
		
		// 发送消息
		player.sendSystemMessage(
			Component.literal("§8 - ")
				.append(itemTagColored)
				.setStyle($Style.EMPTY
					.withHoverEvent(
						new $HoverEvent($HoverEvent$Action.SHOW_TEXT, Component.translatable("display.cmc.copy"))
					) // 悬停展示文本事件
					.withClickEvent(
						new $ClickEvent($ClickEvent$Action.COPY_TO_CLIPBOARD, itemTagCopy)
					)
				)
		)
	})

})