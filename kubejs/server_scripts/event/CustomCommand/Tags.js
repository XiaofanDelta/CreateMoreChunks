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

ServerEvents.customCommand("tags_get", (event) => {
	let { player } = event

	let tagsMessage = Component.translatable("message.cmc.tag").append("\n")

	for (let itemTag of player.getItemBySlot(0).getTags()) {
		tagsMessage.append("§8 - §a").append(itemTag).append("§r\n")
	}

	player.sendSystemMessage(tagsMessage)

})