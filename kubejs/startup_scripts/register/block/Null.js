StartupEvents.registry("block", (event) => {

	/**
	 * 
	 * @param {string} name 注册id
	 * @param {string} display 显示名称
	 * @returns
	 */
	function addNullBlock(name, display) {
		let builder = 
			event.create(`cmc:${name}`)
				.resistance(404404)

		if (global.Dev["logRegisters"]) {
			console.log(`???方块 cmc:${name} 已注册!`)
		}

		return builder
	}

	addNullBlock("chunk_spawner", "§kNULL§r Chunk Spawner")
		.model("cmc:block/missing/chunk_spawner")
		.tagBoth("chunkbychunk:chunkspawners")
		.soundType(SoundType.STONE)
		.hardness(1)
		.requiresTool(true)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["stone"])

	addNullBlock("null_block", "§kNULL§r Block")
		.textureAll("cmc:block/missing/missingno")
		.soundType(SoundType.GLOW_LICHEN)
		.hardness(0.05)
		.requiresTool(false)
	
	addNullBlock("grass_block", "§m§oGrass Block§r")
		.model("cmc:block/missing/grass_block")
		.soundType(SoundType.GRASS)
		.hardness(1)
		.requiresTool(false)
		.tagBlock(global.ToolType["shovel"])
		.tagBoth("minecraft:dirt")
		.randomTick((randomTickEvent) => {
			let { block, level } = randomTickEvent

			if (level.isClientSide()) {
				return
			}

			if (block.up.id !== "minecraft:air") {
				level.destroyBlock(block.pos, true)
			}

		})

	addNullBlock("dirt", "§m§oDirt§r")
		.textureAll("cmc:block/missing/dirt")
		.soundType(SoundType.GRAVEL)
		.hardness(1)
		.requiresTool(false)
		.tagBlock(global.ToolType["shovel"])
		.tagBoth("minecraft:dirt")

	addNullBlock("stone", "§m§oStonr§r")
		.textureAll("cmc:block/missing/stone")
		.soundType(SoundType.STONE)
		.hardness(2)
		.requiresTool(true)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["wooden"])
		.tagBoth("forge:stone")

	addNullBlock("bedrock", "§m§oBedrock§r")
		.textureAll("cmc:block/missing/bedrock")
		.soundType(SoundType.STONE)
		.unbreakable()
})