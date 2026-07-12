ServerEvents.recipes((event) => {
	
	let { minecraft } = event.recipes

	// 太阳的物品和方块相互转换
	/*
	minecraft.stonecutting(
		"cmc:sun_oneshot_item",
		"cmc:sun_oneshot"
	).id("cmc:sun_oneshot_item")
	minecraft.stonecutting(
		"cmc:sun_oneshot",
		"cmc:sun_oneshot_item"
	).id("cmc:sun_oneshot")
	*/

	// 配置工具
	minecraft.stonecutting(
		"functionalstorage:configuration_tool",
		"cmc:configuration_tool_base"
	).id("functionalstorage:configuration_tool")

	// 链接工具
	minecraft.stonecutting(
		"functionalstorage:linking_tool",
		"cmc:linking_tool_base"
	).id("functionalstorage:linking_tool")

	// 区块机器基底
	minecraft.stonecutting(
		"cmc:chunk_machine_base",
		"compressium:stone_1"
	).id("cmc:chunk_machine_base")

})