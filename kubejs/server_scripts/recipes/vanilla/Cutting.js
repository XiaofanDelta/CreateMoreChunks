ServerEvents.recipes((event) => {
	
	let { minecraft } = event.recipes

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
	).id("cmc:chunk_machine_base_from_stone")
	minecraft.stonecutting(
		"cmc:chunk_machine_base",
		"compressium:cobblestone_1"
	).id("cmc:chunk_machine_base")

})