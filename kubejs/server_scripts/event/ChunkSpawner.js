let $IPLogic 
	= Java.loadClass("dev.celestiacraft.industrialplatform.api.IPLogic")

BlockEvents.rightClicked("cmc:chunk_spawner",(event) => {
	let { level, player, item, block } = event
	const SING = "cmc:unstable_singularity"
	
	let getDimension = block.level.getDimension().toString()
	
	// 判断是否在其他维度
	if ( getDimension !== "minecraft:overworld" ) {
		let tranKey = "display.cmc.chunk_spawner.dim"
		player.swing()
		player.displayClientMessage(Component.translatable(tranKey), true)
		return false
	}
	if ( getDimension === "minecraft:overworld" ) {
		// 判断主手是否为不稳奇点
		if (event.hand !== "MAIN_HAND" || !player || !item || item.isEmpty()) {
			return false
		}
		if (item.getId() !== SING) {
			let tranKey = "display.cmc.chunk_spawner.item"
			player.displayClientMessage(Component.translatable(tranKey),true)
			return false
		}
		if (item.is(SING)) {
			let pos = block.pos
			level.getBlock(pos).set("minecraft:air")
			player.swing()

			// 消耗不稳奇点
			if (!player.isCreative()) {
				item.shrink(1)
			}

			// 开始计算坐标
			console.log("Start to get pos")
			
			let block_x = block.x
			let block_z = block.z

			console.log(`Block X:${block_x}, Z:${block_z}`)

			// 判断方块坐标是否合法
			if ( !Number.isFinite(block_x) || !Number.isFinite(block_z) ) {
				console.log("Error!Block X/Z is a invalid value")
				return false
			}

			let chunk_x = Math.floor(block_x / 16)
			let chunk_z = Math.floor(block_z / 16)

			console.log(`Chunk X:${chunk_x}, Z:${chunk_z}`)
			
			let pos_x = chunk_x * 16
			let pos_z = chunk_z * 16

			console.log("Finished to get pos")

			// 放置结构
			$IPLogic.placeStructure(level, pos_x, -64, pos_z, "error_chunk")

			/* 旧版逻辑
			let pos_x1, pos_x2, pos_z1, pos_z2
			
			pos_x1 = chunk_x === 0 ? 15 : (chunk_x + 1) * 16 - 1
			pos_x2 = chunk_x === 0 ? 0 : chunk_x * 16
			pos_z1 = chunk_z === 0 ? 0 : (chunk_z + 1) * 16 - 1
			pos_z2 = chunk_z === 0 ? 15 : chunk_z * 16

			console.log(`pos_x1:${pos_x1}, pos_x2:${pos_x2}, pos_z1:${pos_z1}, pos_z2:${pos_z2}`)

			// 填充
			let fill_list = [
				["cmc:bedrock", -64],
				["cmc:stone", -63],
				["cmc:stone", -62],
				["cmc:stone", -61],
				["cmc:dirt", -60],
				["cmc:dirt", -59],
				["cmc:dirt", -58],
				["cmc:grass_block", -57]
			]

			fill_list.forEach(([fill_block, pos_y]) => {
				let fill_commond = `/fill ${pos_x1} ${pos_y} ${pos_z1} ${pos_x2} ${pos_y} ${pos_z2} ${fill_block}`
				level.runCommandSilent(fill_commond)
				console.log(`Ran command ${fill_commond}`)
			})
			

			console.log("Finished filling")

			*/

			// 播放音效
			level.playSound(
				null,
				player.x,
				player.y,
				player.z,
				"cmc:chunk_spawn",
				"blocks",
				1.0,
				1.0
			)

		}
	}
})
