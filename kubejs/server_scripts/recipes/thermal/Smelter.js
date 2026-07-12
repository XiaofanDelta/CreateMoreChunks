ServerEvents.recipes((event) => {
	let { thermal } = event.recipes

	// ME 机器外壳
	thermal.smelter(
		"cmc:me_machine_casing",[
			"compressium:iron_1",
			"thermal:machine_frame",
			Item.of("ae2:fluix_crystal",2)
	]).energy(global.EnergyStage[1])
		.id("cmc:thermal/smelter/me_machine_casing")

	// ME 设备外壳
	thermal.smelter(
		"cmc:me_device_casing",[
			Item.of("ae2:fluix_glass_cable",6),
			"cmc:me_machine_casing",
			"thermal:invar_gear"
	]).energy(global.EnergyStage[1])
		.id("cmc:thermal/smelter/me_device_casing")

	// 深渊粉
	thermal.smelter(
		"2x thermal_extra:abyssal_dust",[
			"2x thermal_extra:ancient_dust",
			"minecraft:echo_shard",
			"#forge:dusts/netherite"
	]).energy(global.EnergyStage[1])
		.id("thermal_extra:thermal/smelter/abyssal_dust")
	
	// 不稳奇点
	thermal.smelter("4x cmc:unstable_singularity",[
		Item.of("extendedcrafting:singularity").withNBT({
				Id: "extendedcrafting:world_matter"
		}).strongNBT().withCount(2),
		"2x ae2:singularity"
	]).energy(global.EnergyStage[3])
		.id("cmc:thermal/smelter/unstable_singularity")

	// 压缩能源炉
	thermal.smelter("thermal:dynamo_compression", [
		"cmc:dynamo_base",
		"2x #forge:plates/bronze",
		"#forge:gears/bronze"
	]).energy(global.EnergyStage[3]).id("thermal:smelter/dynamo_compression")

	// 热力能源炉
	thermal.smelter("thermal:dynamo_magmatic", [
		"cmc:dynamo_base",
		"2x #forge:plates/invar",
		"#forge:gears/invar"
	]).energy(global.EnergyStage[3]).id("thermal:smelter/dynamo_magmatic")

})