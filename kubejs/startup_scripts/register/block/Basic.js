StartupEvents.registry("block", (event) => {

	/**
	 * 
	 * @param {String} name 注册id
	 * @param {String} [type] 类型
	 * @returns
	 */
	function addBlock(name, type) {
		if (global.Dev["logRegisters"]) {
			console.log(`方块 cmc:${name} 已注册!`)
		}
		if (type === undefined) {
			return event.create(`cmc:${name}`)
		}
		
		return event.create(`cmc:${name}`, type)
	}


	// 创造流休储罐
	addBlock("creative_fiuld_tank")
		.model("cmc:block/creative_fiuld_tank")
		.hardness(5)
		.requiresTool(true)
		.tagBlock(global.WRENCH_PICKUP)
		.tagBlock(global.MiningLevel["iron"])
		.tagBlock(global.ToolType["pickaxe"])
		.soundType(SoundType.METAL)
	
	// 创造版条箱
	addBlock("creative_create")
		.model("cmc:block/creative_create")
		.hardness(5)
		.requiresTool(true)
		.tagBlock(global.WRENCH_PICKUP)
		.tagBlock(global.MiningLevel["iron"])
		.tagBlock(global.ToolType["pickaxe"])
		.soundType(SoundType.METAL)
	
	// 创造机壳
	addBlock("creative_casing", "basic")
		.textureAll("cmc:block/casing/creative/side")
		.hardness(5)
		.requiresTool(true)
		.tagBlock(global.WRENCH_PICKUP)
		.tagBlock(global.MiningLevel["iron"])
		.tagBlock(global.ToolType["pickaxe"])
		.soundType(SoundType.METAL)

	// ME 设备外壳
	addBlock("me_device_casing", "cardinal")
		.model("cmc:block/me_device_casing")
		.hardness(5)
		.requiresTool(true)
		.tagBlock(global.WRENCH_PICKUP)
		.tagBlock(global.MiningLevel["iron"])
		.tagBlock(global.ToolType["pickaxe"])
		.soundType(SoundType.METAL)

	// ME 机器外壳
	addBlock("me_machine_casing")
		.textureAll("cmc:block/casing/me_device_casing/top")
		.hardness(5)
		.requiresTool(true)
		.tagBlock(global.WRENCH_PICKUP)
		.tagBlock(global.MiningLevel["iron"])
		.tagBlock(global.ToolType["pickaxe"])
		.soundType(SoundType.METAL)

	// 太阳
	addBlock("sun_oneshot")
		.model("cmc:block/sun_oneshot")
		.tagBlock(global.WRENCH_PICKUP)
		.soundType(SoundType.LANTERN)
		.fullBlock(false)
		.lightLevel(15)
		.defaultCutout()
		.hardness(1)
		.requiresTool(true)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["iron"])
		.renderType("cutout")
		.opaque(false)
		.waterlogged()
		.notSolid()
		.item((item) => {
			item.unstackable()
			item.parentModel({
				"parent": "item/generated",
				"textures": {
					"layer0": "cmc:item/sun_oneshot"
				}
			})
		})

	// %null%
	addBlock("chunk_spawner")
		.model("cmc:block/missing/chunk_spawner")
		.tagBoth("chunkbychunk:chunkspawners")
		.soundType(SoundType.STONE)
		.hardness(1)
		.requiresTool(true)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["stone"])
	addBlock("null_block")
		.textureAll("block/missing/missingno")
		.soundType(SoundType.GLOW_LICHEN)
		.hardness(0.05)
		.requiresTool(false)
	addBlock("grass_block")
		.model("cmc:block/missing/grass_block")
		.soundType(SoundType.GRASS)
		.hardness(1)
		.requiresTool(false)
		.tagBlock(global.ToolType["shovel"])
		.tagBoth("minecraft:dirt")
	addBlock("dirt")
		.textureAll("cmc:block/missing/dirt")
		.soundType(SoundType.GRAVEL)
		.hardness(1)
		.requiresTool(false)
		.tagBlock(global.ToolType["shovel"])
		.tagBoth("minecraft:dirt")
	addBlock("stone")
		.textureAll("cmc:block/missing/stone")
		.soundType(SoundType.STONE)
		.hardness(2)
		.requiresTool(true)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["wooden"])
		.tagBoth("forge:stone")
	addBlock("bedrock")
		.textureAll("cmc:block/missing/bedrock")
		.soundType(SoundType.STONE)
		.hardness(10)
		.requiresTool(true)
		.tagBlock(global.ToolType["pickaxe"])
		.tagBlock(global.MiningLevel["diamond"])
	
	// 区块机器基底
	addBlock("chunk_machine_base")
		.model("cmc:block/chunk_machine_base")
		.soundType(SoundType.STONE)
		.hardness(1)
		.requiresTool(true)
		.tagBlock(global.MiningLevel["stone"])
		.tagBlock(global.ToolType["pickaxe"])
	
})