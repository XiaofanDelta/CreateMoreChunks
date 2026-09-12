ServerEvents.recipes((event) => {
	const { kubejs, thermal, create } = event.recipes

	/**
	 * 合成图案模板
	 * @type {{ "2x2": string[], "3x3": string[], "gear": string[] }}
	 */
	const PATTERNS = {
		"2x2": ["XX", "XX"],
		"3x3": ["XXX", "XXX", "XXX"],
		"gear": [" X ", "XOX", " X "]
	}

	/**
	 * Thermal 压块模具映射
	 * @type {{ "3x3": Internal.ItemStack_, "2x2": Internal.ItemStack_, "un": Internal.ItemStack_ }}
	 */
	const PRESS_DIE = {
		"3x3": "thermal:press_packing_3x3_die",
		"2x2": "thermal:press_packing_2x2_die",
		"un": "thermal:press_unpacking_die"
	}

	const AVAILABLE_TYPE = [
		"ingot",
		"gem",
		"alloy"
	]

	/**
	 * 材料配方注册器
	 * @param {string} namespace - 配方命名空间
	 * @param {string} material - 材料名称
	 * @param {string} [type = "ingot" ] - 材料类型
	 */
	function MaterialRecipe(namespace, material, type) {
		/**
		 * 配方 id 的命名空间
		 * @type {string}
		 */
		this.namespace = namespace

		/**
		 * 材料名称
		 * @type {string}
		 */
		this.material = material

		/**
		 * 配方调用
		 * $type {{key: {key: {key: Special.Recipes.*}}}}
		 */
		this.recipes = {
			blockToIngot: {
				crafting: undefined,
				press: undefined
			},
			ingotToBlock: {
				crafting: undefined,
				press: undefined
			},
			ingotToNugget: {
				crafting: undefined,
				press: undefined
			},
			nuggetToIngot: {
				crafting: undefined,
				press: undefined
			},
			plate: {
				create: undefined,
				press: undefined
			}
		}

		/**
		 * 压模
		 * @type {{ pack: Internal.ItemStack_, unpack: Internal.ItemStack_, nuggetPack: Internal.ItemStack}}
		 */
		this.dies = {
			pack: PRESS_DIE["3x3"],
			unpack: PRESS_DIE["un"]
		}

		/**
		 * 材料类型
		 * @type {string}
		 */
		this.type = AVAILABLE_TYPE.includes(type) ? type : "ingot"

		/**
		 * 基础材料 tag
		 * @type {Internal.Ingredient_}
		 */
		this.itemTag = `#forge:${this.type}s/${material}`

		/**
		 * 基础材料 tag
		 * @type {Internal.Ingredient_}
		 */
		this.blockTag = `#forge:storage_blocks/${material}`

		/**
		 * 材料粒 tag
		 * @type {Internal.Ingredient_}
		 */
		this.nuggetTag = `#forge:nuggets/${material}`

		/**
		 * 材料粉 tag
		 * @type {Internal.Ingredient_}
		 */
		this.dustTag = `#forge:dusts/${material}`

		/**
		 * 材料板 tag
		 * @type {Internal.Ingredient_}
		 */
		this.plateTag = `#forge:plates/${material}`

		/**
		 * 材料齿轮 tag
		 * @type {Internal.Ingredient_}
		 */
		this.gearTag = `#forge:gears/${material}`

		/**
		 * 合成使用的 pattern
		 * @type {string[]}
		 */
		this.pattern = PATTERNS["3x3"]

		/**
		 * 合成使用的物品数量
		 * @type {number}
		 */
		this.craftCount = 9

		/**
		 * 合成使用的 key
		 * @type {{ item: { key: Internal.Ingredient_ }, block: { key: Internal.Ingredient_ }, nugget: {key: Internal.Ingredient_} }}
		 */
		this.craftKey = {
			item: {
				"X": this.itemTag
			},
			block: {
				"X": this.blockTag
			},
			nugget: {
				"X": this.nuggetTag
			}
		}

		/**
		 * 各种原料
		 * $type { key : Internal.Ingredient_ }
		 */
		this.ingredients = {
			item: Ingredient.of(this.itemTag),
			block: Ingredient.of(this.blockTag),
			nugget: Ingredient.of(this.nuggetTag),
			dust: Ingredient.of(this.dustTag),
			plate: Ingredient.of(this.plateTag),
			gear: Ingredient.of(this.gearTag)
		}

	}

	/**
	 * 设置存储块是否用4个原料合成
	 * @param {boolean} is2x2 - 是2x2合成
	 * @returns {MaterialRecipe}
	 */
	MaterialRecipe.prototype.set2x2Craft = function (is2x2) {
		if (is2x2) {
			this.pattern = PATTERNS["2x2"]
			this.dies.pack = PRESS_DIE["2x2"]
			this.craftCount = 4
		} else {
			this.pattern = PATTERNS["3x3"]
			this.dies.pack = PRESS_DIE["3x3"]
			this.craftCount = 9
		}

		return this
	}

	/**
	 * 注册块与锭的互转
	 * @param {Object} [options] - 配置选项
	 * @param {boolean} [options.registerPress=true] - 是否注册压块配方
	 * @returns {MaterialRecipe}
	 */
	MaterialRecipe.prototype.blockIngotConvert = function (options) {

		options = options ?? {}

		// 合成: 锭 -> 块
		this.recipes.ingotToBlock.crafting = kubejs.shaped(
			this.blockTag,
			this.pattern,
			this.craftKey.item
		).id(`${this.namespace}:${this.material}_block_from_ingot`)

		// 合成: 块 -> 锭
		this.recipes.blockToIngot.crafting = kubejs.shapeless(
			this.ingredients.item.first.withCount(this.craftCount),
			this.ingredients.block
		).id(`${this.namespace}:${this.material}_ingot_from_block`)

		// 压缩/解压
		if (options["registerPress"] ?? true) {
			// 压缩: 锭 -> 块
			this.recipes.ingotToBlock.press = thermal.press(
				this.ingredients.block.first,
				[
					this.ingredients.item.withCount(this.craftCount),
					this.dies.pack
				]
			).id(`${this.namespace}:thermal/press/${this.material}_block_from_ingot`)
				.keepIngredient(this.dies.pack)

			// 解压: 块 -> 锭
			this.recipes.blockToIngot.press = thermal.press(
				this.ingredients.item.first.withCount(this.craftCount),
				[
					this.ingredients.block,
					this.dies.unpack
				]
			).id(`${this.namespace}:thermal/press/${this.material}_ingot_from_block`)
				.keepIngredient(this.dies.unpack)
		}

		return this
	}

	/**
	 * 注册锭与粒的互转
	 * @param {Object} [options] - 配置选项
	 * @param {boolean} [options.registerShapeless=true] - 是否注册粒 -> 锭的有序合成
	 * @param {boolean} [options.registerPress=true] - 是否注册压块配方 (粒 <-> 锭)
	 * @returns {MaterialRecipe}
	 */
	MaterialRecipe.prototype.ingotNuggetConvert = function (options) {

		options = options ?? {}

		// 合成: 锭 -> 粒
		this.recipes.ingotToNugget.crafting = kubejs.shapeless(
			this.ingredients.nugget.first.withCount(9),
			this.ingredients.item
		).id(`${this.namespace}:${this.material}_nugget_from_ingot`)

		// 合成: 粒 -> 锭
		if (options["registerShapeless"] ?? true) {
			this.recipes.nuggetToIngot.crafting = kubejs.shaped(
				this.ingredients.item,
				PATTERNS["3x3"],
				this.craftKey.nugget
			).id(`${this.namespace}:${this.material}_ingot_from_nugget`)
		}

		// 压缩/解压
		if (options["registerPress"] ?? true) {
			// 压缩: 粒 -> 锭
			this.recipes.nuggetToIngot.press = thermal.press(
				this.ingredients.item.first,
				[
					this.ingredients.nugget.withCount(9),
					PRESS_DIE["3x3"]
				]
			).id(`${this.namespace}:thermal/press/${this.material}_ingot_from_nugget`)
				.keepIngredient(PRESS_DIE["3x3"])

			// 解压: 锭 -> 粒
			this.recipes.ingotToNugget.press = thermal.press(
				this.ingredients.nugget.first.withCount(9),
				[
					this.ingredients.item,
					this.dies.unpack
				]
			).id(`${this.namespace}:thermal/press/${this.material}_nugget_from_ingot`)
				.keepIngredient(this.dies.unpack)
		}

		return this
	}

	/**
	 * 注册板的转换
	 * @param {Object} [options] - 配置选项
	 * @param {boolean} [options.registerThermal=true] - 是否注册热力冲压配方
	 * @param {boolean} [options.registerCreate=true] - 是否注册机械动力冲压配方
	 * @returns {MaterialRecipe}
	 */
	MaterialRecipe.prototype.plateConvert = function (options) {

		options = options ?? {}

		// 机械动力压板
		if (options["registerCreate"] ?? true) {
			this.recipes.plate.create = create.pressing(
				this.ingredients.plate.first,
				this.itemTag
			).id(`${this.namespace}:create/pressing/${this.material}_plate`)
		}

		// 热力压板
		if (options["registerThermal"] ?? true) {
			this.recipes.plate.press = thermal.press(
				this.ingredients.plate.first,
				this.itemTag
			).id(`${this.namespace}:thermal/press/${this.material}_plate`)
		}
		

		return this
	}

	new MaterialRecipe("cmc", "michan")
		.blockIngotConvert()
		.ingotNuggetConvert()
		.plateConvert()

	new MaterialRecipe("cmc", "advanced_alloy")
		.blockIngotConvert()
		.ingotNuggetConvert()

	new MaterialRecipe("create", "andesite_alloy")
		.ingotNuggetConvert()
	
	new MaterialRecipe("cmc", "world_matter")
		.ingotNuggetConvert()
		.plateConvert()

	new MaterialRecipe("extendedcrafting", "black_iron")
		.plateConvert()

})