// priority: 111

ServerEvents.recipes((event) => {

	if (
		(
			(
				(	
					(
						(
							(
								(
									(
										(
											(
												(
													(
														(
															(
																(
																	(
																		(
																			(
																				(
																					(
																						(
																							(
																								(
																									(
																										(
																											(
																												1 + 1 === 3
																											)
																										)
																									)
																								)
																							)
																						)
																					)
																				)
																			)
																		)
																	)
																)
															)
														)
													)
												)
											)
										)
									)
								)
							)
						)
					)
				)
			)
		)
	) {console.log("hyw?????")}

	console.log("hyw...".length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString().length.toString())

	let { minecraft } = event.recipes


	if (global.NowDate["is41"] === true || global.Dev["testing41"] === true ) {

		event.shaped("cmc:basic_smithing_template",[
			"ABA",
			"BCB",
			"DDD"
		],{
			A: "minecraft:stick",
			B: "#minecraft:planks",
			C: "#minecraft:wooden_buttons",
			D: "#minecraft:logs"
		}).id("cmc:hyw/41/114514")

		// 移除本来的配方
		event.remove({ output: "create:encased_fan" })
		event.remove({ output: "create:mechanical_mixer" })
		event.remove({ output: "create:millstone" })
		event.remove({ output: "create:speedometer" })
		// event.remove({ output: "create:empty_blaze_burner" })
		event.remove({ output: "create:mechanical_saw" })
		event.remove({ output: "create:mechanical_drill" })
		event.remove({ output: "create:mechanical_press" })

		// 神秘锻造模版配方
		minecraft.smithing_transform(
			"cmc:andesite_upgrade_smithing_template",
			"cmc:basic_smithing_template",
			"create:cogwheel",
			"create:andesite_alloy"
		).id("cmc:hyw/41/0")
		minecraft.smithing_transform(
			"create:encased_fan",
			"cmc:andesite_upgrade_smithing_template",
			"create:andesite_casing",
			"create:propeller"
		).id("cmc:hyw/41/1")
		minecraft.smithing_transform(
			"create:mechanical_mixer",
			"cmc:andesite_upgrade_smithing_template",
			"create:andesite_casing",
			"create:whisk"
		).id("cmc:hyw/41/2")
		minecraft.smithing_transform(
			"create:millstone",
			"cmc:andesite_upgrade_smithing_template",
			"create:andesite_casing",
			"#forge:stone"
		).id("cmc:hyw/41/3")
		minecraft.smithing_transform(
			"create:speedometer",
			"cmc:andesite_upgrade_smithing_template",
			"create:andesite_casing",
			"minecraft:compass"
		).id("cmc:hyw/41/4")
		minecraft.smithing_transform(
			"create:mechanical_saw",
			"cmc:andesite_upgrade_smithing_template",
			"create:andesite_casing",
			"thermal:saw_blade"
		).id("cmc:hyw/41/5")
		minecraft.smithing_transform(
			"create:mechanical_drill",
			"cmc:andesite_upgrade_smithing_template",
			"create:andesite_casing",
			"thermal:drill_head"
		).id("cmc:hyw/41/6")
		minecraft.smithing_transform(
			"create:mechanical_press",
			"cmc:andesite_upgrade_smithing_template",
			"create:andesite_casing",
			"#forge:storage_blocks/iron"
		).id("cmc:hyw/41/7")

	}

})