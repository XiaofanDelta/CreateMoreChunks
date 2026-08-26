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

ServerEvents.customCommand("hotbar_get", (event) => {
	let { player } = event

	// 获取快捷栏物品列表
	let hotbarList = Utils.newList()

	// 分别获取从 0~8 号格子的物品 ID
	for (let i = 0; i <= 8; i++) {
		let ID = player.getSlot(i).get().getId()
		// 如果是空气则跳过
		if (ID === "minecraft:air") {
			continue
		}
		// 将 ID 加入列表里
		hotbarList.push(`\n    "${ID}"`)
	}

	// 初始快捷栏列表字符串
	let hotbar = hotbarList.toString().replace("]", "\n]")

	// 着色快捷栏列表字符串
	let hotbarColored = hotbar
		.replace("\"", "§a\"")
		.replace("§a\",", "\"§r,")
		.replace("§a\"\n]", "\"§r\n]")

	// 可复制快捷栏列表字符串
	let hotbarCopy = hotbar.replace("    ", "\t")

	// 发送消息
	player.sendSystemMessage(Component.translatable("message.cmc.hotbar")
		.append("\n")
		.append(hotbarColored)
		.append("§8 - §r")
		.append(
			Component.translatable("message.cmc.copy")
				.setStyle($Style.EMPTY
					.withClickEvent(
						new $ClickEvent($ClickEvent$Action.COPY_TO_CLIPBOARD, hotbarCopy)
					) // 点击复制事件
					.withHoverEvent(
							new $HoverEvent($HoverEvent$Action.SHOW_TEXT, Component.translatable("display.cmc.copy"))
					) // 悬停展示文字事件
			)
		)
	)

})