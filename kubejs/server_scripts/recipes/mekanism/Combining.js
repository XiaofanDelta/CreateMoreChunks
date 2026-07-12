ServerEvents.recipes((event) => {
	let { mekanism } = event.recipes

	// 速度升级
	mekanism.combining(
		"mekanism:upgrade_speed",
		"cmc:mek_upgrade_base",
		"thermal_extra:abyssal_machine_speed_augment"
	).id("mekanism:combining/upgrade_speed")

	// 能量升级
	mekanism.combining(
		"mekanism:upgrade_energy",
		"cmc:mek_upgrade_base",
		"thermal_extra:abyssal_rf_coil_xfer_augment"
	).id("mekanism:combining/upgrade_energy")

	// 气体升级
	mekanism.combining(
		"mekanism:upgrade_gas",
		"cmc:mek_upgrade_base",
		"mekanism:advanced_chemical_tank"
	).id("mekanism:combining/upgrade_gas")

	// 降噪升级
	mekanism.combining(
		"mekanism:upgrade_muffling",
		"cmc:mek_upgrade_base",
		"#minecraft:wool"
	).id("mekanism:combining/upgrade_muffling")

	// 过滤升级
	mekanism.combining(
		"mekanism:upgrade_filter",
		"cmc:mek_upgrade_base",
		"mekanism:advanced_control_circuit"
	).id("mekanism:combining/upgrade_filter")

	// 锚升级
	mekanism.combining(
		"mekanism:upgrade_anchor",
		"cmc:mek_upgrade_base",
		"ae2:spatial_anchor"
	).id("mekanism:combining/upgrade_anchor")

	// 造石机升级
	mekanism.combining(
		"mekanism:upgrade_stone_generator",
		"cmc:mek_upgrade_base",
		"cobblefordays:tier_5"
	).id("mekanism:combining/upgrade_stone_generator")

	// 工厂升级
	global.mekTiers.forEach((tier) => {
		mekanism.combining(
		`mekanism:${tier}_tier_installer`,
		"cmc:tier_installer_base",
		`4x mekanism:${tier}_control_circuit`
		).id(`mekanism:combining/${tier}_tier_installer`)
	})


})