ServerEvents.recipes((event) => {
	let { botanypots } = event.recipes

	botanypots.soil(
		"chunkbychunk:worldcore", // 土壤物品
		{ block: "chunkbychunk:worldcore" },  // 显示的方块
		[ "world_matter" ], // 类型
		20*10, // 每次生长 tick 的间隔
		2 // 速度1为普通
	).id("chunkbychunk:soil/worldcore")

})