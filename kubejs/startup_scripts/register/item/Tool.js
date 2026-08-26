let $Tiers =
	Java.loadClass("net.minecraft.world.item.Tiers")

StartupEvents.registry("item", (event) => {

	// 不毁砂纸
	addTool("unbreakable_sandpaper", true, "create:sandpaper")
		.tag("create:sandpaper")
		.maxDamage(9999999)
		.rarity("uncommon")

	// 创造模式物理权杖
	addBasicTool("creative_physics_staff", false)
		.parentModel({
			"parent": "cmc:item/creative_physics_staff"
		}).rarity("epic")

	// 传送器
	addBasicTool("teleporter", true)

	// 无限熔岩元件
	addMEInfinityCell("infinity_lava_cell", "fluid", "minecraft:lava").rarity("uncommon")

	// 不毁肥皂
	addBasicTool("unbreakable_soap", true)

	// 锤子
	addHammer("iron", 256, $Tiers.IRON, 2)
	addHammer("golden", 200, $Tiers.GOLD, 1).tag("forge:tools/gold")
	addHammer("diamond", 512, $Tiers.DIAMOND, 3)
	addHammer("netherite", 1024, $Tiers.NETHERITE, 4).fireResistant()

	addHammer("copper", 128, $Tiers.STONE, 1)
	addHammer("bronze", 333, $Tiers.IRON, 2)
	addHammer("invar", 400, $Tiers.DIAMOND, 2)
	addHammer("steel", 512, $Tiers.DIAMOND, 2)

	/**
	 * 
	 * @param {string} id 
	 * @param {boolean} useDefaultTextureLocation 
	 * @returns 
	 */
	function addBasicTool(id, useDefaultTextureLocation) {
		let builder = event.create(`cmc:${id}`, "basic")
		
		builder.unstackable()

		if (useDefaultTextureLocation) {
			builder.texture(`cmc:item/tool/${id}`)
		}

		if (global.Dev["logRegisters"]) {
			console.log(`基础工具 cmc:${id} 已注册!`)
		}

		return builder
	}

	/**
	 * 
	 * @param {string} id 
	 * @param {string} type 
	 * @param {Internal.Item_ | Internal.Fluid_} inf 
	 * @returns 
	 */
	function addMEInfinityCell(id, type, inf) {
		let builder = event.create(`cmc:${id}`, "meinfinitycell:infinity_cell")

		builder.unstackable()

		builder.texture(`cmc:item/tool/${id}`)

		switch(type) {
			case("item"):
				builder.itemType(inf)
				break
			case("fluid"):
				builder.fluidType(inf)
				break
			default:
				console.error("ME无限元件的type只能为item或fluid!")
				builder.itemType("minecraft:barrier")
				break
		}

		if (global.Dev["logRegisters"]) {
			console.log(`ME无限元件 cmc:${id} 已注册!`)
		}

		return builder
	}

	/**
	 * 
	 * @param {string} id 
	 * @param {string} type 
	 * @param {boolean} useDefaultTextureLocation 
	 * @returns 
	 */
	function addTool(id, useDefaultTextureLocation, type) {
		let builder = type?
		event.create(`cmc:${id}`, type):
		event.create(`cmc:${id}`, "basic")
		
		builder.unstackable()

		if (useDefaultTextureLocation) {
			builder.texture(`cmc:item/tool/${id}`)
		}

		if (global.Dev["logRegisters"]) {
			console.log(`工具 cmc:${id} 已注册!`)
		}

		return builder
	}

	/**
	 * 
	 * @param {string} id 
	 * @param {number} maxDamage 
	 * @param {Internal.Tier_} tier 工具等级
	 * @param {number} hTier 锤子的等级
	 * @returns 
	 */
	function addHammer(id, maxDamage, tier, hTier) {
		let builder = event.create(`cmc:${id}_hammer`, "pickaxe")

		builder.texture(`cmc:item/tool/hammer/${id}`)
		builder.maxDamage(maxDamage)
		builder.unstackable()
		builder.tier(tier)
		builder.tag("forge:tools")
		builder.tag("forge:tools/hammers")
		builder.tag("forge:hammers")
		builder.tag(`forge:tools/${id}`)
		builder.tag("minecraft:cluster_max_harvestables")
		builder.tag("minecraft:pickaxes")
		builder.tag("minecraft:breaks_decorated_pots")
		hTier === 1 || hTier === 2 || hTier === 3 || hTier === 4 ?
		builder.tag(`cmc:hammer_tier${hTier}`):
		console.error(`锤子的等级只能是1、2、3、4,${hTier}是非法值!`)

		if (global.Dev["logRegisters"]) {
			console.log(`锤子 cmc:${id}_hammer 已注册!`)
		}

		return builder
	}

})