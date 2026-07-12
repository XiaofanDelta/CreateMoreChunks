StartupEvents.registry("creative_mode_tab", (event) => {
	function addCreativeTab(name) {
		return event.create(`cmc:${name}`)
	}

	// 资源
	addCreativeTab("resources")
		.icon(() => Item.of("cmc:brass_gear"))
		.content(() => Ingredient.of("#cmc:materials").itemIds
	).displayName(Component.translatable("itemGroup.cmc.resources"))

	// 特殊物品
	addCreativeTab("special_items")
		.icon(() => Item.of("cmc:drive_part"))
		.content(() => Ingredient.of("#cmc:infinity_source").itemIds
			.concat(Ingredient.of("#cmc:cells").itemIds)
			.concat([
				"cmc:ringo_mechanism"
			])
	).displayName(Component.translatable("itemGroup.cmc.special_items"))

	// 工具
	addCreativeTab("tools")
		.icon(() => Item.of("cmc:unbreakable_sandpaper"))
		.content(() => [
			"cmc:unbreakable_sandpaper",
			"cmc:creative_physics_staff",
			"cmc:unbreakable_soap",
			"cmc:infinity_lava_cell",
			"cmc:sun_oneshot_item"
	]).displayName(Component.translatable("itemGroup.cmc.tools"))

	// 流体
	addCreativeTab("fluid_buckets")
		.icon(() => Item.of("cmc:world_fluid_bucket"))
		.content(() => [
			"cmc:impurity_bucket",
			"cmc:world_fluid_bucket",
			"cmc:glue_bucket",
			"cmc:bronze_bucket",
			"cmc:invar_bucket",
			"cmc:advanced_compound_bucket"
	]).displayName(Component.translatable("itemGroup.cmc.fluid_buckets"))

	// 方块
	addCreativeTab("blocks")
		.icon(() => Item.of("cmc:me_device_casing"))
		.content(() => [
			"cmc:creative_fiuld_tank",
			"cmc:creative_create",
			"cmc:me_device_casing",
			"cmc:me_machine_casing",
			"cmc:sun_oneshot",
			"cmc:chunk_machine_base"
	]).displayName(Component.translatable("itemGroup.cmc.blocks"))

	// 未完成物品
	addCreativeTab("incomplete_items")
		.icon(() => Item.of("cmc:incomplete_netherite_upgrade_smithing_template"))
		.content(() => Ingredient.of("#cmc:incomplete_items").itemIds)
		.displayName(Component.translatable("itemGroup.cmc.incomplete_items"))

	// 彩蛋
	addCreativeTab("easter_eggs")
		.icon(() => Item.of("cmc:delta"))
		.content(() => Ingredient.of("#cmc:examples").itemIds)
		.displayName(Component.translatable("itemGroup.cmc.easter_eggs"))

	// %null%
	addCreativeTab("empties")
		.icon(() => Item.of("cmc:null_mechanism"))
		.content(() => [
			"cmc:null",
			"cmc:null_block",
			"cmc:null_mechanism",
			"cmc:null_smithing_template",
			"cmc:empty",
			"cmc:chunk_spawner",
			"cmc:grass_block",
			"cmc:dirt",
			"cmc:stone",
			"cmc:bedrock"
	]).displayName(Component.translatable("itemGroup.cmc.empties"))

	// chunk by chunk
	addCreativeTab("chunk_by_chunk")
		.icon(() => Item.of("chunkbychunk:chunkspawner"))
		.content(() => Ingredient.of("#chunkbychunk:chunkspawners").itemIds
			.concat([
				"chunkbychunk:worldfragment",
				"chunkbychunk:worldshard",
				"chunkbychunk:worldcrystal",
				"cmc:world_gem",
				"chunkbychunk:worldcore",
				"chunkbychunk:worldforge",
				"chunkbychunk:worldscanner",
				"chunkbychunk:worldmender",
				"chunkbychunk:bedrockchest"
			])
			.concat(Ingredient.of("#cmc:planets").itemIds)
	).displayName(Component.translatable("itemGroup.cmc.chunk_by_chunk"))

})