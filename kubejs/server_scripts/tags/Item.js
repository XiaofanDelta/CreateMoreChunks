// priority: 1145

ServerEvents.tags("item", (event) => {

	// 钥匙
	event.get("supplementaries:keys")
		.add("functionalstorage:configuration_tool")

	// 球型物
	event.get("cmc:balls")
		.add([
			"minecraft:fire_charge",
			"minecraft:ender_pearl",
			"minecraft:ender_eye",
			"minecraft:snowball",
			"amendments:dragon_charge",
			"minecraft:egg",
			"minecraft:heart_of_the_sea",
			"minecraft:slime_ball",
			"minecraft:clay_ball",
			"supplementaries:cannonball",
			"minecraft:sniffer_egg",
			"minecraft:turtle_egg",
			"minecraft:magma_cream",
			"minecraft:firework_star",
			"thermal_extra:paraffin_wax",
			"ae2:fluix_pearl",
			"thermal_extra:sticky_ball",
			"thermal:tar",
			"thermal:florb",
			"thermal:earth_charge",
			"thermal:ice_charge",
			"thermal:lightning_charge",
			"#cmc:planets"
		])

	// 压印模版
	event.get("ae2:inscriber_presses")
		.add([
			"ae2:name_press",
			"appflux:energy_processor_press",
			"megacells:accumulation_processor_press",
			"advanced_ae:quantum_processor_press",
			"cmc:blank_print_press"
		])

	// 抽屉
	event.get("functionalstorage:drawer")
		.add([
			"#functionalstorage:fluid_drawer",
			"#functionalstorage:item_drawer",
			"functionalstorage:ender_drawer"
		])

	event.get("functionalstorage:item_drawer")
		.add([
			"#functionalstorage:drawer/wood",
			"#functionalstorage:compacting_drawer",
			"functionalstorage:framed_1",
			"functionalstorage:framed_2",
			"functionalstorage:framed_4"
		])

	event.get("functionalstorage:fluid_drawer")
		.add([
			"functionalstorage:fluid_1",
			"functionalstorage:fluid_2",
			"functionalstorage:fluid_4"
		])

	event.get("functionalstorage:compacting_drawer")
		.add([
			"functionalstorage:compacting_drawer",
			"functionalstorage:simple_compacting_drawer",
			"functionalstorage:compacting_framed_drawer",
			"functionalstorage:framed_simple_compacting_drawer"
		])

	let drawerMaterialWoods = [
		"oak",
		"spruce",
		"birch",
		"jungle",
		"acacia",
		"dark_oak",
		"cherry",
		"mangrove",
		"crimson",
		"warped",
	]
	drawerMaterialWoods.forEach((woodName) => {
		let woodId =
			woodName.includes(":") ? woodName : `functionalstorage:${woodName}`

		let woodType = woodName.split(":").pop()

		let drawerType = [1, 2, 4]

		drawerType.forEach((type) => {
			let drawerId = `${woodId}_${type}`
			event.get(`functionalstorage:drawers/${woodType}/${type}`)
				.add(drawerId)

			event.get("functionalstorage:drawer/wood")
				.add(drawerId)
		})
	})

	// 伪装方块
	event.get("create:copycats")
		.add([
			"create:copycat_panel",
			"copycats:copycat_flat_pane",
			"copycats:copycat_vertical_slice",
			"copycats:copycat_vertical_stairs",
			"copycats:copycat_vertical_step",
			"create_connected:copycat_vertical_step",
			"copycats:copycat_vertical_half_layer",
			"copycats:copycat_half_layer",
			"copycats:copycat_half_panel",
			"create_connected:copycat_block",
			"copycats:copycat_block",
			"copycats:copycat_large_cogwheel",
			"copycats:copycat_cogwheel",
			"copycats:copycat_shaft",
			"copycats:copycat_layer",
			"create_connected:copycat_board",
			"copycats:copycat_board",
			"create:copycat_step",
			"copycats:copycat_wooden_button",
			"create_connected:copycat_stairs",
			"copycats:copycat_stairs",
			"copycats:copycat_fluid_pipe",
			"copycats:copycat_beam",
			"create_connected:copycat_beam",
			"copycats:copycat_stacked_half_layer",
			"copycats:copycat_board",
			"create_connected:copycat_board",
			"copycats:copycat_wooden_pressure_plate",
			"copycats:copycat_pane",
			"copycats:copycat_wall",
			"create_connected:copycat_wall",
			"copycats:copycat_corner_slice",
			"copycats:copycat_slice",
			"copycats:copycat_light_weighted_pressure_plate",
			"copycats:copycat_stone_button",
			"copycats:copycat_stone_pressure_plate",
			"create_connected:copycat_slab",
			"copycats:copycat_slab",
			"copycats:copycat_ladder",
			"copycats:copycat_iron_trapdoor",
			"copycats:copycat_board",
			"create_connected:copycat_board",
			"copycats:copycat_byte",
			"copycats:copycat_byte_panel",
			"copycats:copycat_ghost_block",
			"create_connected:copycat_fence",
			"copycats:copycat_fence",
			"create_connected:copycat_fence_gate",
			"copycats:copycat_fence_gate",
			"copycats:copycat_heavy_weighted_pressure_plate",
			"copycats:copycat_iron_door",
			"copycats:copycat_door",
			"copycats:copycat_trapdoor",
			"copycats:copycat_vertical_slope",
			"copycats:copycat_slope_layer",
			"copycats:copycat_folding_door",
			"copycats:copycat_sliding_door",
			"copycats:copycat_slope",
			"railways:copycat_headstock_split_knuckle_coupler",
			"railways:copycat_headstock_buffer",
			"railways:copycat_headstock_link_and_pin",
			"railways:copycat_headstock_link_and_pin_linkless",
			"railways:copycat_headstock_knuckle_coupler",
			"railways:copycat_headstock_screwlink_coupler"
		])

	// mek 化学品储罐
	event.get("mekanism:chemical_tanks")
		.add([
			"mekanism:basic_chemical_tank",
			"mekanism:elite_chemical_tank",
			"mekanism:ultimate_chemical_tank",
			"mekanism:creative_chemical_tank"
		])

	// 建筑手杖
	event.get("constructionwand:wand")
		.add([
			"constructionwand:stone_wand",
			"constructionwand:iron_wand",
			"constructionwand:diamond_wand",
			"constructionwand:infinity_wand"
		])

	// 板
	event.get("forge:plates")
		.add([
			"createdeco:zinc_sheet",
			"createdeco:andesite_sheet",
			"createdeco:netherite_sheet",
			"createdeco:industrial_iron_sheet",
			"mekanism:hdpe_sheet",
			"thermal_extra:polyolefin_plate",
			"cmc:world_matter_plate"
		])

	// 齿轮
	event.get("forge:gears")
		.add([
			"cmc:brass_gear",
			"cmc:stone_gear",
			"cmc:wooden_gear"
		])

	// 锭
	event.get("forge:ingots")
		.add([
			"createdeco:industrial_iron_ingot",
			"megacells:sky_steel_ingot",
			"cmc:world_matter_ingot"
		])

	// 粒
	event.get("forge:nuggets")
		.add([
			"createdeco:industrial_iron_nugget",
			"createdeco:netherite_nugget",
			"cmc:world_matter_nugget"
		])

	// 宝石
	event.get("forge:gems")
		.add([
			"create:polished_rose_quartz",
			"create:rose_quartz",
			"cmc:world_gem"
		])

	// 粉
	event.get("forge:dusts")
		.add([
			"thermal_extra:soul_sand_dust",
			"cmc:world_matter_dust",
			"fluxnetworks:flux_dust"
		])

	// Mek 升级
	event.get("mekanism:upgrades")
		.add([
			"mekanism:upgrade_speed",
			"mekanism:upgrade_energy",
			"mekanism:upgrade_filter",
			"mekanism:upgrade_muffling",
			"mekanism:upgrade_gas",
			"mekanism:upgrade_anchor",
			"mekanism:upgrade_stone_generator"
		])

	// Mek 工厂升级
	event.get("mekanism:tier_installers")
		.add([
			"mekanism:basic_tier_installer",
			"mekanism:advanced_tier_installer",
			"mekanism:elite_tier_installer",
			"mekanism:ultimate_tier_installer"
		])

	// 终极锭合成原料
	event.get("cmc:ultimate_ingot_ingredients")
		.add([
			"#forge:alloys",
			"create:chromatic_compound",
			"create:refined_radiance",
			"create:shadow_steel",
			"create:polished_rose_quartz",
			"#forge:ingots"
		])

	event.get("cmc:ultimate_ingot_ingredients").remove([
		"extendedcrafting:the_ultimate_ingot"
	])

	// 区块机器
	event.get("chunkbychunk:chunk_machines")
		.add([
			"chunkbychunk:worldmender",
			"chunkbychunk:worldforge",
			"chunkbychunk:worldscanner"
		])

	// 硬币
	event.get("forge:coins")
		.add([
			"createdeco:copper_coin",
			"createdeco:industrial_iron_coin",
			"createdeco:zinc_coin",
			"createdeco:brass_coin",
			"createdeco:iron_coin",
			"createdeco:gold_coin",
			"createdeco:netherite_coin"
		])

	// 热力机器
	event.get("thermal:machines")
		.add([
			"thermal_extra:nitratic_igniter",
			"thermal_extra:fluid_mixer",
			"thermal_extra:endothermic_dehydrator",
			"thermal_extra:component_assembly",
			"thermal_extra:advanced_refinery",
			"cmc:advanced_component_assembly"
		])

	addAloneItemTag("cmc:hammer_tier1", "#cmc:hammer_tier2")
	addAloneItemTag("cmc:hammer_tier2", "#cmc:hammer_tier3")

	event.get("cmc:hammer_tier3")
		.add([
			"thermal_extra:signalum_hammer",
			"thermal_extra:lumium_hammer",
			"thermal_extra:enderium_hammer",
			"thermal_extra:soul_infused_hammer",
			"#cmc:hammer_tier4"
		])

	event.get("cmc:hammer_tier4")
		.add([
			"thermal_extra:dragonsteel_hammer",
			"thermal_extra:abyssal_hammer",
			"thermal_extra:twinite_hammer",
			"thermal_extra:shellite_hammer",
		])

	// 抽屉升级
	event.get("functionalstorage:upgrades")
		.add([
			"functionalstorage:copper_upgrade",
			"functionalstorage:gold_upgrade",
			"functionalstorage:diamond_upgrade",
			"functionalstorage:netherite_upgrade",
			"functionalstorage:iron_downgrade",
			"functionalstorage:pusher_upgrade",
			"functionalstorage:max_storage_upgrade",
			"functionalstorage:collector_upgrade",
			"functionalstorage:puller_upgrade",
			"functionalstorage:void_upgrade",
			"functionalstorage:redstone_upgrade",
			"functionalstorage:creative_vending_upgrade"
		])

	// Pipez 升级
	event.get("pipez:upgrades")
		.add([
			"pipez_optimizer:atm_upgrade",
			"pipez_optimizer:vibranium_upgrade",
			"pipez_optimizer:unobtainium_upgrade"
		])

	// 过滤器
	event.get("create:filters")
		.add([
			"create:filter",
			"create:attribute_filter",
			"create:package_filter"
		])

	event.get("cmc:filters")
		.add([
			"#itemfilters:filters",
			"#modularrouters:filters",
			"#create:filters"
		])

	// 组件
	event.get("thermal:filter_augments")
		.add([
			"thermal:fluid_filter_augment",
			"thermal:item_filter_augment",
			"thermal_extra:av_item_filter_augment"
		])

	event.get("thermal:machine_augments")
		.add([
			"thermal:xp_storage_augment",
			"thermal:side_config_augment",
			"thermal:machine_null_augment",
			"thermal:machine_cycle_augment",
			"thermal:dynamo_throttle_augment",
			"thermal:rs_control_augment"
		])

	event.get("thermal:augments")
		.add([
			"#thermal:filter_augments",
			"#thermal:machine_augments"
		])

	addAloneItemTag("forge:plates/andesite_alloy", "createdeco:andesite_sheet")
	addAloneItemTag("forge:plates/zinc", "createdeco:zinc_sheet")
	addAloneItemTag("forge:plates/netherite", "createdeco:netherite_sheet")
	addAloneItemTag("forge:plates/industrial_iron", "createdeco:industrial_iron_sheet")
	addAloneItemTag("forge:ingots/industrial_iron", "createdeco:industrial_iron_ingot")
	addAloneItemTag("forge:nuggets/industrial_iron", "createdeco:industrial_iron_nugget")
	addAloneItemTag("forge:nuggets/netherite", "createdeco:netherite_nugget")
	addAloneItemTag("forge:coins/copper", "createdeco:copper_coin")
	addAloneItemTag("forge:coins/industrial", "createdeco:industrial_iron_coin")
	addAloneItemTag("forge:coins/zinc", "createdeco:zinc_coin")
	addAloneItemTag("forge:coins/brass", "createdeco:brass_coin")
	addAloneItemTag("forge:coins/iron", "createdeco:iron_coin")
	addAloneItemTag("forge:coins/gold", "createdeco:gold_coin")
	addAloneItemTag("forge:coins/netherite", "createdeco:netherite_coin")
	addAloneItemTag("forge:plates/black_iron", "extendedcrafting:black_iron_slate")
	addAloneItemTag("forge:ingots/quantum", "advanced_ae:quantum_alloy")
	addAloneItemTag("thermal:dynamos", "thermal_extra:dynamo_frost")
	addAloneItemTag("forge:gears/brass", "cmc:brass_gear")
	addAloneItemTag("forge:gears/stone", "cmc:stone_gear")
	addAloneItemTag("forge:gears/wooden", "cmc:wooden_gear")
	addAloneItemTag("forge:ingots/world_matter", "cmc:world_matter_ingot")
	addAloneItemTag("forge:plates/world_matter", "cmc:world_matter_plate")
	addAloneItemTag("forge:dusts/world_matter", "cmc:world_matter_dust")
	addAloneItemTag("forge:nuggets/world_matter", "cmc:world_matter_nugget")
	addAloneItemTag("create:crushed_raw_materials", "cmc:crushed_world_matter")
	addAloneItemTag("forge:ingots/redstone", "extendedcrafting:redstone_ingot")
	addAloneItemTag("forge:storage_blocks/redstone", "extendedcrafting:redstone_ingot_block")
	addAloneItemTag("forge:nuggets/redstone", "extendedcrafting:redstone_nugget")
	addAloneItemTag("thermal:dynamos", "cmc:dynamo_base")
	addAloneItemTag("forge:dusts/flux", "fluxnetworks:flux_dust")

	global.dyeColorGroup.forEach((color) => {
		addAloneItemTag("ae2:lumen_paint_balls", `ae2:${color}_lumen_paint_ball`)
		addAloneItemTag(`ae2:lumen_paint_balls/${color}`, `ae2:${color}_lumen_paint_ball`)
		addAloneItemTag(`ae2:paint_balls/${color}`, `ae2:${color}_paint_ball`)
	})

	// 削皮木
	event.get("forge:stripped_logs")
		.add("thermal:stripped_rubberwood_log")

	event.get("forge:stripped_logs/rubberwood")
		.add("thermal:stripped_rubberwood_wood")
		.add("thermal:stripped_rubberwood_log")

	// 遍历粗矿粒
	let rawNuggetMetals = [
		"copper",
		"iron",
		"gold",
		"tin",
		"lead",
		"silver",
		"nickel",
		"aluminum",
		"uranium",
		"osmium",
		"zinc"
	]
	rawNuggetMetals.forEach((metal) => {
		event.get(`forge:raw_nuggets/${metal}`)
			.add(`thermal_extra:${metal}_ore_chunk`)

		event.get(`forge:raw_nuggets`)
			.add(`thermal_extra:${metal}_ore_chunk`)
	})

	// 遍历装备
	let armorTypes = [
		{ armor: "helmet", tag: "helmets" },
		{ armor: "chestplate", tag: "chestplates" },
		{ armor: "leggings", tag: "leggings" },
		{ armor: "boots", tag: "boots" },
	]
	armorTypes.forEach((armorType) => {
		let { armor, tag } = armorType
		// 锁链装备
		event.get("minecraft:armors/chainmail")
			.add(`minecraft:chainmail_${armor}`)
	})

	/**
	 * 
	 * @param {string} tag 标签
	 * @param {string} item 物品
	 * @returns
	 */
	function addAloneItemTag(tag, item) {
		event.get(tag).add(item)
	}

})