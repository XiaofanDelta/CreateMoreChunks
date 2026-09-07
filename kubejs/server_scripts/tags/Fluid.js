// priority: 11
ServerEvents.tags("fluid", (event) => {

    // 颜料
	event.get("forge:dyes")
		.add("railways:paint")

    // 水
	removeTagAllId("minecraft:water")
		.add("minecraft:water")
		.add("minecraft:flowing_water")

	function removeTagAllId(tag) {
		return event.get(tag)
			.removeAll()
	}

})