ServerEvents.recipes((event) => {
	let { botanypots } = event.recipes

	botanypots.soil(
		"chunkbychunk:worldcore", // 土壤物品
		{ block: "chunkbychunk:worldcore" },  // 显示的方块
		[ "world_matter" ], //类型
		20*10, // 默认刻 (?)
		2 // 速度，1 为普通
	).id("chunkbychunk:soil/worldcore")

})