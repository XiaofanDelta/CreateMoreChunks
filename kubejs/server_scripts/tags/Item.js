// priority: 1145

ServerEvents.tags("item", (event) => {
	
	event.get("supplementaries:keys")
		.add("functionalstorage:configuration_tool")

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

	event.get("ae2:inscriber_presses")
		.add([
			"ae2:name_press",
			"appflux:energy_processor_press",
			"megacells:accumulation_processor_press",
			"advanced_ae:quantum_processor_press"
	])

	event.get("forge:plates")
		.add([
			"createdeco:zinc_sheet",
			"createdeco:andesite_sheet",
			"createdeco:netherite_sheet",
			"createdeco:industrial_iron_sheet",
			"mekanism:hdpe_sheet",
			"thermal_extra:polyolefin_plate"
	])

	event.get("forge:gears")
		.add([
			"cmc:brass_gear",
			"cmc:stone_gear",
			"cmc:wooden_gear"
	])

	event.get("forge:ingots")
		.add([
			"createdeco:industrial_iron_ingot",
			"megacells:sky_steel_ingot",
			"cmc:refined_redstone_ingot"
	]).remove(["extendedcrafting:the_ultimate_ingot"])

	event.get("forge:nuggets")
		.add([
			"createdeco:industrial_iron_nugget",
			"createdeco:netherite_nugget"
	])

	event.get("forge:gems")
		.add([
			"create:polished_rose_quartz",
			"create:rose_quartz",
			"cmc:world_gem"
	])

	event.get("forge:dusts")
		.add([
			"thermal_extra:soul_sand_dust"
	])

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

	event.get("mekanism:tier_installers")
		.add([
			"mekanism:basic_tier_installer",
			"mekanism:advanced_tier_installer",
			"mekanism:elite_tier_installer",
			"mekanism:ultimate_tier_installer"
	])

	
	event.get("cmc:ultimate_ingot_ingredients")
		.add([
			"#forge:alloys",
			"create:chromatic_compound",
			"create:refined_radiance",
			"create:shadow_steel",
			"create:polished_rose_quartz",
			"#forge:ingots"
	])

	event.get("chunkbychunk:chunk_machines")
		.add([
			"chunkbychunk:worldmender",
			"chunkbychunk:worldforge",
			"chunkbychunk:worldscanner"
	])

	event.get("forge:coins")
		.add([
			"createdeco:copper_coin",
			"createdeco:industrial_iron_coin",
			"createdeco:zinc_coin",
			"createdeco:brass_coin",
			"createdeco:iron_coin",
			"createdeco:gold_coin"
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
	addAloneItemTag("forge:plates/black_iron", "extendedcrafting:black_iron_slate")
	addAloneItemTag("thermal:dynamos", "thermal_extra:dynamo_frost")
	addAloneItemTag("forge:gears/brass", "cmc:brass_gear")
	addAloneItemTag("forge:ingots/redstone", "cmc:refined_redstone_ingot")
	addAloneItemTag("forge:gears/stone", "cmc:stone_gear")
	addAloneItemTag("forge:gears/wooden", "cmc:wooden_gear")

	global.dyeColorGroup.forEach((color) => {
		addAloneItemTag("ae2:lumen_paint_balls", `ae2:${color}_lumen_paint_ball`)
		addAloneItemTag(`ae2:lumen_paint_balls/${color}`, `ae2:${color}_lumen_paint_ball`)
		addAloneItemTag(`ae2:paint_balls/${color}`, `ae2:${color}_paint_ball`)
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

/*
就是怎么说呢，在下午第一节课下课之后，天色突然灰了下来…
空气有些闷，我感觉有细微的小雨点，我觉得要下雨了
就在第二节上课！
那雨啊，哗啦啦就下开了！
课上到一半雨有点小了，我没当回事，但是…
没几分钟，雨又大了起来。
下课时，雨非常的大
怎么回家？！
“我现在在男生女生向前冲挑战现场，这里是现场记者 Delta，我会随机采访几位挑战者”
嗯对就是我太无聊了…
我不管了！我直接骑上车赶回家，眼镜湿了就不带
*/