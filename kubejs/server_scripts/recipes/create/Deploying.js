ServerEvents.recipes((event) => {
	let { create } = event.recipes

	// 电子管
	create.deploying(
		"create:electron_tube", [
		"#forge:plates/iron",
		"create:polished_rose_quartz"
	]).id("create:deploying/electron_tube")

	// CMC 黑底标志
	create.deploying(
		"cmc:cmc_icon_black", [
		"minecraft:black_concrete",
		"cmc:cmc"
	]).id("cmc:create/deploying/oh_what_is_this")

	// 黑铁粒
	create.deploying(
		"extendedcrafting:black_iron_nugget",
		[
			"createdeco:industrial_iron_nugget",
			"ae2:black_lumen_paint_ball"
	]).id("extendedcrafting:create/deploying/black_iron_nugget")

	// 世界核心
	create.deploying(
		"chunkbychunk:worldcore", [
		"compressium:cobblestone_1",
		"chunkbychunk:worldcrystal"
	]).id("chunkbychunk:create/deloying/worldcore")

	// 福鲁伊克斯锻造模版
	create.deploying(
		"ae2:fluix_upgrade_smithing_template",
		[
			"cmc:basic_smithing_template",
			"ae2:fluix_crystal"
	]).id("ae2:create/deploying/fluix_upgrade_smithing_template")

	// 苹果构件
	create.deploying("cmc:ringo_mechanism",[
		"cmc:wooden_mechanism",
		"minecraft:apple"
	]).id("cmc:create/deploying/ringo_mechanism")

	// 空星球
	create.deploying("cmc:empty_planet",[
		"#forge:glass",
		"thermal:chiller_ball_cast"
	]).keepHeldItem()
		.id("cmc:create/deploying/empty_planet")

	// 斯特林能源炉
	create.deploying("thermal:dynamo_stirling", [
		"cmc:dynamo_base",
		"#forge:gears/stone"
	]).id("thermal:create/deploying/dynamo_stirling")

})