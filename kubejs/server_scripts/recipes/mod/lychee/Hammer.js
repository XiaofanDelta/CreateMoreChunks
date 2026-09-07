ServerEvents.recipes((event) => {
	let { lychee, cmc } = event.recipes

	/**
	 * 
	 * @param {Internal.Block} block 锤子砸的方块
	 * @param {number_} hTier 锤子的等级（1、2、3、4）
	 */
	function HammerCrushRecipe(block, hTier) {

		/**
		 * @type {Post_[]}
		 */
		this.defaultPost = [
			Post.place("minecraft:air"),
			Post.delay(0.1)
		]

		/**
		 * @type {Internal.Item[]}
		 */
		this.outputItems = []

		/**
		 * @type {Internal.Block} 锤子砸的方块
		 */
		this.inputBlock = block

		/**
		 * @type {Internal.Ingredient} 锤子的等级 tag
		 */
		this.hammerTag = `#cmc:hammer_tier${hTier}`

		/**
		 * @type {Special.Recipes.BlockClickingLychee} Lychee 配方本体
		 */
		this.recipe = lychee.block_clicking(this.hammerTag, this.inputBlock)

	}

	/**
	 * 
	 * @param {number_} [damage] 默认 1，必须是正整数
	 * 生成 Post
	 */
	HammerCrushRecipe.prototype.addHammerDamage = function (damage) {
		this.defaultPost.unshift(Post.damage_item(damage ?? 1))

		return this
	}

	/**
	 * 
	 * @param {Internal.ItemStack} itemStack 
	 * @param {number_} [count] 1~64
	 * @param {number_} [chance] >0 && <=1 
	 * @returns
	 */
	HammerCrushRecipe.prototype.addDropItemPost = function (itemStack, count, chance) {
		this.defaultPost.push(
			Post.drop_item(Item.of(itemStack, count ?? 1))
				.contextual([Contextual.chance(chance ?? 1)]))

		this.outputItems.push(Item.of(itemStack, count ?? 1).withChance(chance ?? 1))

		return this
	}

	/**
	 * 
	 * @param {ResourceLocation_} [id] 配方id
	 * @param {boolean} [hideJEI] 是否在 JEI 中隐藏，默认 true
	 * @returns 
	 */
	HammerCrushRecipe.prototype.build = function (id, hideJEI) {
		this.recipe.post(this.defaultPost).hide_in_viewer(hideJEI ?? true)

		if (id) {
			this.recipe.id(id)

			/**
			 * @type {ResourceLocation_} Lychee 配方 id
			 */
			this.recipeID = id
		}

		return this
	}

	/**
	 * 
	 * @param {ResourceLocation_} id
	 */
	HammerCrushRecipe.prototype.jeiBuild = function (id) {

		/**
		 * @type {Special.Recipes.CMc}
		 */
		this.jeiRecipe = cmc.hammer_crush()
			.inputItems(this.inputBlock)
			.inputItemsDurability(this.hammerTag)
			.outputItems(this.outputItems)

		if (this.recipeID) {
			this.jeiId = id ?? this.recipeID + "_jei"
			this.jeiRecipe.id(this.jeiId)
		}

		return this

	}

	new HammerCrushRecipe("minecraft:cobblestone", 2)
		.addHammerDamage()
		.addDropItemPost("minecraft:gravel", 1)
		.build("minecraft:hammer/gravel")
		.jeiBuild()

	new HammerCrushRecipe("minecraft:gravel", 2)
		.addHammerDamage()
		.addDropItemPost("minecraft:sand", 1)
		.build("minecraft:hammer/sand")
		.jeiBuild()

	new HammerCrushRecipe("minecraft:glowstone", 2)
		.addHammerDamage()
		.addDropItemPost("minecraft:glowstone_dust", 4)
		.build("minecraft:hammer/glowstone_dust")
		.jeiBuild()

	new HammerCrushRecipe("#forge:sandstone", 2)
		.addHammerDamage()
		.addDropItemPost("minecraft:sand", 2)
		.build("minecraft:hammer/sandstone")
		.jeiBuild()

	new HammerCrushRecipe("minecraft:dripstone_block", 2)
		.addHammerDamage()
		.addDropItemPost("minecraft:pointed_dripstone", 4)
		.build("minecraft:hammer/dripstone_block")
		.jeiBuild()

	new HammerCrushRecipe("#minecraft:logs", 1)
		.addHammerDamage()
		.addDropItemPost("thermal:sawdust", 4)
		.addDropItemPost("thermal:sawdust", 2, 0.5)
		.build("thermal:hammer/sawdust")
		.jeiBuild()

	new HammerCrushRecipe("extendedcrafting:redstone_ingot_block", 3)
		.addHammerDamage(4)
		.addDropItemPost("minecraft:redstone", 9)
		.build("minecraft:hammer/redstone")
		.jeiBuild()

	new HammerCrushRecipe("#forge:stone", 1)
		.addHammerDamage()
		.addDropItemPost("minecraft:cobblestone", 1)
		.build("minecraft:hammer/stone")
		.jeiBuild()

	let compressBlockHammerCrushRecipeList = [["stone", "cobblestone"], ["cobblestone", "gravel"], ["gravel", "sand"]]

	compressBlockHammerCrushRecipeList.forEach(([block, result]) => {
		for (let i = 1; i <= 3; i++) {
			new HammerCrushRecipe(`compressium:${block}_${i}`, i + 1)
			.addHammerDamage(9 ** i)
			.addDropItemPost(`minecraft:${result}`, 9 ** i)
			.build(`minecraft:hammer/compressium_${block}_${i}`)
			.jeiBuild()
			.recipe.block_in(Block.getBlock(`compressium:${block}_${i}`))			
		}
	})

})