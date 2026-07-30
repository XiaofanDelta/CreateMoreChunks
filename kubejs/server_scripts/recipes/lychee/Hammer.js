ServerEvents.recipes((event) => {
	let { lychee, cmc } = event.recipes

	/**
	 * 
	 * @param {Internal.Block} block 锤子砸的方块
	 * @param {number_} hTier 锤子的等级（1、2、3、4）
	 */
	function HammerCrushRecipe(block, hTier) {

		this.defaultPost = [
			Post.place("minecraft:air"),
			Post.delay(0.1)
		]

		this.outputItems = []

		this.inputBlock = block

		this.hammerTag = `#cmc:hammer_tier${hTier}`
		
		this.recipe = lychee.block_clicking(
			this.hammerTag,
			block
		)

	}

	/**
	 * 
	 * @param {number_} [damage] 默认 1，必须是正整数
	 * 生成 Post
	 */
	HammerCrushRecipe.prototype.addHammerDamage = function (damage) {
		this.defaultPost.unshift(Post.damage_item(damage || 1))

		return this
	}

	/**
	 * 
	 * @param {Internal.ItemStack} itemStack 
	 * @param {number_} [number] 1~64
	 * @param {number_} [chance] >0 && <=1 
	 * @returns
	 */
	HammerCrushRecipe.prototype.addDropItemPost = function (itemStack, count, chance) {
		this.defaultPost.push(
			Post.drop_item(Item.of(itemStack, count || 1))
				.contextual([Contextual.chance(chance || 1)]))

		this.outputItems.push(Item.of(itemStack, count || 1))

		return this
	}

	/**
	 * 
	 * @param {ResourceLocation_} id 配方id
	 * @returns 
	 */
	HammerCrushRecipe.prototype.build = function (id) {
		this.recipe.post(this.defaultPost)

		if (id) {
			this.recipe.id(id)
			this.recipeID = id
		}

		return this
	}

	/**
	 * 
	 * @param {ResourceLocation_} id
	 */
	HammerCrushRecipe.prototype.jeiBuild = function (id) {
		
		this.jeiRecipe = cmc.hammer_crush()
			.inputItems(this.inputBlock)
			.inputItemsDurability(this.hammerTag)
			.outputItems(this.outputItems)
		
		if (this.recipeID) {
			this.jeiId = id || this.recipeID + "_jei"
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

})