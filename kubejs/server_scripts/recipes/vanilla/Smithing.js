ServerEvents.recipes((event) => {
	
	let { minecraft } = event.recipes

	// 堆叠升级 T4 (精妙背包)
	minecraft.smithing_transform(
		"sophisticatedbackpacks:stack_upgrade_tier_4",
		"minecraft:netherite_upgrade_smithing_template",
		"sophisticatedbackpacks:stack_upgrade_tier_3",
		"minecraft:netherite_block"
	).id("sophisticatedbackpacks:stack_upgrade_tier_4")

	// %null% 锻造模版
	minecraft.smithing_transform(
		"cmc:null_smithing_template",
		"cmc:basic_smithing_template",
		"ftbquests:missing_item",
		"cmc:null"
	).id("cmc:null_smithing_template")

	// %null% 构件
	minecraft.smithing_transform(
		"cmc:null_mechanism",
		"cmc:null_smithing_template",
		"cmc:wooden_mechanism",
		"cmc:empty"
	).id("cmc:null_mechanism")
	
	// 区块生成器
	const CHUNK_SPAWNER_LIST = [
		["unstable", "cmc:world_matter_plate", "cmc:crushed_world_matter"],
		["badlands", "minecraft:red_sand", "minecraft:clay"],
		["desert", "minecraft:sand", "#forge:sandstone"],
		["forest", "minecraft:grass_block", "#minecraft:logs"],
		["jungle", "minecraft:grass_block", "#minecraft:saplings"],
		["mountain", "#forge:stone", "#forge:gems"],
		["mushroom", "minecraft:mycelium", "#forge:mushrooms"],
		["plains", "minecraft:grass_block", "#supplementaries:flower_box_plantable"],
		["rocky", "#forge:stone", "#forge:cobblestone"],
		["savanna", "minecraft:grass_block", "#minecraft:villager_plantable_seeds"],
		["snow", "minecraft:grass_block", "minecraft:snow_block"],
		["swamp", "minecraft:grass_block", "minecraft:water_bucket"]
	]

	CHUNK_SPAWNER_LIST.forEach(([name, base, addtion]) => {
		const CHUNK_SPAWNER_NAME = `chunkbychunk:${name}chunkspawner`
		minecraft.smithing_transform(
		CHUNK_SPAWNER_NAME,
		"chunkbychunk:chunkspawner", 
		base,
		addtion
		).id(CHUNK_SPAWNER_NAME)
	})

	// 区块机器
	minecraft.smithing_transform(
		"chunkbychunk:worldforge",
		"cmc:chunk_machine_base",
		"chunkbychunk:worldcrystal",
		"chunkbychunk:worldshard"
	).id("chunkbychunk:worldforge")
	minecraft.smithing_transform(
		"chunkbychunk:worldscanner",
		"cmc:chunk_machine_base",
		"scannable:scanner",
		"#scannable:modules"
	).id("chunkbychunk:worldscanner")
	minecraft.smithing_transform(
		"chunkbychunk:worldmender",
		"cmc:chunk_machine_base",
		"minecraft:dropper",
		"minecraft:dispenser"
	).id("chunkbychunk:worldmender")

})