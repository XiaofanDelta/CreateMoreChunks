ServerEvents.recipes((event) => {
	let { create } = event.getRecipes()

	/**
	 * 
	 * @param {OutputItem_} output 
	 * @param {InputItem_} input 
	 * @param {InputItem_} tran 
	 * @returns 
	 */
	function getSequencedObject(output, input, tran) {
		return {
			RES: output,
			ING: input,
			TRANS: tran
		}
	}

	/**
	 * 
	 * @param {{
	 *		RES: OutputItem_,
	 *		ING: InputItem_,
	 *  	TRANS: InputItem_
	 *  }} item
	 * @returns 
	 */
	function SequencedAssemblyRecipe(item) {
		let { RES, ING, TRANS } = item

		this.result = RES
		this.transit = TRANS
		this.ingredient = ING
		this.$sequences = []
		this.loops = 1
		return this
	}

	SequencedAssemblyRecipe.prototype.cutting = function () {
		let sequence = create.cutting(
			this.transit,
			this.transit
		)

		this.$sequences.push(sequence)
		return this
	}

	SequencedAssemblyRecipe.prototype.pressing = function () {
		let sequence = create.pressing(
			this.transit,
			this.transit
		)

		this.$sequences.push(sequence)
		return this
	}

	/**
	 * 
	 * @param {InputItem_} input 
	 * @returns 
	 */
	SequencedAssemblyRecipe.prototype.deploying = function (input) {
		let sequence = create.deploying(
			this.transit,
			[this.transit, input]
		)

		this.$sequences.push(sequence)
		return this
	}

	/**
	 * 
	 * @param {Fluid_} fluid
	 * @returns 
	 */
	SequencedAssemblyRecipe.prototype.filling = function (fluid) {
		let sequence = create.filling(
			this.transit,
			[this.transit, fluid]
		)

		this.$sequences.push(sequence)
		return this
	}
	/**
	 * 
	 * @param {number} loops 
	 */
	SequencedAssemblyRecipe.prototype.loop = function (loops) {
		this.loops = loops
		return this
	}

	/**
	 * 
	 * @param {ResourceLocation_} [id]
	 */
	SequencedAssemblyRecipe.prototype.build = function (id) {
		let sequences = this.$sequences
		let result = this.result
		let input = this.ingredient
		let loops = this.loops
		let transit = this.transit

		let recipe = create.sequenced_assembly(
			result,
			input,
			sequences
		).loops(loops).transitionalItem(transit)

		return (id === undefined) ? recipe : recipe.id(id)
	}

	// 黑铁锭
	new SequencedAssemblyRecipe(getSequencedObject(
		"extendedcrafting:black_iron_ingot",
		"createdeco:industrial_iron_ingot",
		"cmc:incomplete_black_iron_ingot"
	))
		.deploying("extendedcrafting:black_iron_nugget")
		.pressing()
		.loop(9)
		.build("extendedcrafting:create/sequenced_assembly/black_iron_ingot")

	// 驱动器组件
	new SequencedAssemblyRecipe(getSequencedObject(
		"cmc:drive_part",
		"#ae2:glass_cable",
		"cmc:incomplete_drive_part"
	))
		.deploying("megacells:cell_dock")
		.loop(10)
		.build("cmc:create/sequenced_assembly/drive_part")

	// 下界合金锻造模版
	new SequencedAssemblyRecipe(getSequencedObject(
		"minecraft:netherite_upgrade_smithing_template",
		"cmc:basic_smithing_template",
		"cmc:incomplete_netherite_upgrade_smithing_template"
	))
		.deploying("compressium:netherrack_2")
		.deploying("#forge:gears/diamond")
		.deploying("createdeco:netherite_coin")
		.cutting()
		.filling(Fluid.of("cmc:world_fluid", 1000))
		.pressing()
		.loop(1)
		.build("create:sequenced_assembly/netherite_upgrade_smithing_template")

	// 机器框架
	new SequencedAssemblyRecipe(getSequencedObject(
		"thermal:machine_frame",
		"#forge:storage_blocks/michan",
		"cmc:incomplete_machine_frame"
	))
		.cutting()
		.deploying("#forge:storage_blocks/iron")
		.deploying("#forge:glass")
		.deploying("#forge:glass")
		.filling(Fluid.of("minecraft:lava", 1000))
		.pressing()
		.loop(1)
		.build("thermal:create/sequenced_assembly/machine_frame")

	// CMC 标志
	new SequencedAssemblyRecipe(getSequencedObject(
		"cmc:cmc_icon",
		"cmc:delta",
		"cmc:deleta"
	))
		.deploying("#chunkbychunk:chunkspawners")
		.loop(8)
		.build("cmc:create/sequenced_assembly/cmc_icon")

	// 钻石
	new SequencedAssemblyRecipe(getSequencedObject(
		"minecraft:diamond",
		"compressium:coal_2",
		"cmc:incomplete_diamond"
	))
		.pressing()
		.loop(1145)
		.build("create:sequenced_assembly/diamond")

	// 高纯石英
	new SequencedAssemblyRecipe(getSequencedObject(
		"cmc:high_pure_quartz",
		"cmc:quartz_seed",
		"cmc:incomplete_high_pure_quartz"
	))
		.filling(Fluid.of("minecraft:water", 1000))
		.loop(20)
		.build("cmc:create/sequenced_assembly/high_pure_quartz")

	// 精密构件
	new SequencedAssemblyRecipe(getSequencedObject(
		[
			Item.of("create:precision_mechanism").withChance(0.8),
			Item.of("createdeco:brass_coinstack", 4).withChance(0.03),
			Item.of("create:brass_sheet").withChance(0.05),
			Item.of("create:brass_nugget", 9).withChance(0.05),
			Item.of("create:golden_sheet").withChance(0.04),
			Item.of("cmc:wooden_mechanism").withChance(0.02),
			Item.of("cmc:ringo_mechanism").withChance(0.01)
		],
		"cmc:precision_mechanism_base",
		"create:incomplete_precision_mechanism"
	))
		.filling(Fluid.of("cmc:glue", 100))
		.deploying("#forge:gears/brass")
		.deploying("#forge:gears/gold")
		.deploying("cmc:mechanism_part")
		.pressing()
		.loop(1)
		.build("create:sequenced_assembly/precision_mechanism")

	// 热力机器
	new SequencedAssemblyRecipe(getSequencedObject(
		"thermal:machine_crucible",
		"thermal:machine_frame",
		"cmc:incomplete_thermal_machine"
	))
		.deploying("minecraft:nether_bricks")
		.deploying("#forge:gears/steel")
		.filling(Fluid.of("minecraft:lava", 1000))
		.deploying("#forge:glass")
		.deploying("createaddition:capacitor")
		.loop(1)
		.build("thermal:create/sequenced_assembly/machine_crucible")

	new SequencedAssemblyRecipe(getSequencedObject(
		"thermal:machine_chiller",
		"thermal:machine_frame",
		"cmc:incomplete_thermal_machine"
	))
		.deploying("minecraft:blue_ice")
		.deploying("#forge:gears/quartz")
		.filling(Fluid.of("minecraft:water", 1000))
		.deploying("#forge:glass")
		.deploying("createaddition:capacitor")
		.loop(1)
		.build("thermal:create/sequenced_assembly/machine_chiller")

	new SequencedAssemblyRecipe(getSequencedObject(
		"thermal:machine_bottler",
		"thermal:machine_frame",
		"cmc:incomplete_thermal_machine"
	))
		.deploying("minecraft:bucket")
		.deploying("#forge:gears/copper")
		.filling(Fluid.of("minecraft:water", 1000))
		.deploying("#forge:glass")
		.deploying("createaddition:capacitor")
		.loop(1)
		.build("thermal:create/sequenced_assembly/machine_bottler")

	new SequencedAssemblyRecipe(getSequencedObject(
		"thermal:machine_pulverizer",
		"thermal:machine_frame",
		"cmc:incomplete_thermal_machine"
	))
		.deploying("create:millstone")
		.deploying("#forge:gears/iron")
		.filling(Fluid.of("minecraft:water", 1000))
		.deploying("#forge:glass")
		.deploying("createaddition:capacitor")
		.loop(1)
		.build("thermal:create/sequenced_assembly/machine_pulverizer")
})