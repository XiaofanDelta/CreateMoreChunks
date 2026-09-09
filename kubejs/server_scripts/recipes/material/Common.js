ServerEvents.recipes((event) => {
	const { kubejs, thermal } = event.recipes

	/**
	 * 合成图案模板
	 * @type {{ "2x2": string[], "3x3": string[] }}
	 */
	const PATTERNS = {
		"2x2": ["XX", "XX"],
		"3x3": ["XXX", "XXX", "XXX"]
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

	/**
	 * 材料配方注册器
	 * @param {string} namespace - 配方命名空间
	 * @param {string} material - 材料名称
	 */
	function MaterialRecipe(namespace, material) {
		this.namespace = namespace
		this.material = material
	}

	/**
	 * 注册块与锭的互转
	 * @param {Object} [options] - 配置选项
	 * @param {boolean} [options.is2x2=false] - 是否使用 2x2 合成 (4 锭 = 1 块)
	 * @param {boolean} [options.registerPress=true] - 是否注册压块配方
	 * @returns {MaterialRecipe}
	 */
	MaterialRecipe.prototype.blockIngotConvert = function (options = {}) {

		let { is2x2 = false, registerPress = true } = options

		/**
		 * 
		 * @type {"2x2" | "3x3"}
		 */
		let size = is2x2 ? "2x2" : "3x3"

		let count = is2x2 ? 4 : 9

		/**
		 * 
		 * @type {string[]}
		 */
		let pattern = PATTERNS[size]

		// 合成: 锭 -> 块
		kubejs.shaped(
			`#forge:storage_blocks/${this.material}`,
			pattern,
			{
				X: `#forge:ingots/${this.material}`
			}
		).id(`${this.namespace}:${this.material}_block_from_ingot`)

		// 合成: 块 -> 锭
		kubejs.shapeless(
			`${count}x #forge:ingots/${this.material}`,
			`#forge:storage_blocks/${this.material}`
		).id(`${this.namespace}:${this.material}_ingot_from_block`)

		// 压缩/解压
		if (registerPress) {
			let die = PRESS_DIE[size]

			// 压缩
			thermal.press(
				`#forge:storage_blocks/${this.material}`,
				[
					`${count}x #forge:ingots/${this.material}`,
					die
				]
			).id(`${this.namespace}:thermal/press/${this.material}_block_from_ingot`)
				.keepIngredient(die)

			// 解压
			thermal.press(
				`${count}x #forge:ingots/${this.material}`,
				[
					`#forge:storage_blocks/${this.material}`,
					PRESS_DIE["un"]
				]
			).id(`${this.namespace}:thermal/press/${this.material}_block_from_ingot`)
				.keepIngredient(PRESS_DIE["un"])
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
	MaterialRecipe.prototype.ingotNuggetConvert = function (options = {}) {
		let { registerShapeless = true, registerPress = true } = options

		// 合成: 锭 -> 粒
		kubejs.shapeless(
			`9x #forge:nuggets/${this.material}`,
			`#forge:ingots/${this.material}`
		).id(`${this.namespace}:${this.material}_nugget_from_ingot`)

		// 合成: 粒 -> 锭
		if (registerShapeless) {
			kubejs.shaped(
				`#forge:ingots/${this.material}`,
				PATTERNS["3x3"],
				{
					X: `#forge:nuggets/${this.material}`
				}
			).id(`${this.namespace}:${this.material}_ingot_from_nugget`)
		}

		if (registerPress) {
			// 压缩: 粒 -> 锭
			thermal.press(
				`#forge:ingots/${this.material}`,
				[
					`9x #forge:nuggets/${this.material}`,
					PRESS_DIE["3x3"]
				]
			).id(`${this.namespace}:thermal/press/${this.material}_ingot_from_nugget`)
				.keepIngredient(PRESS_DIE["3x3"])

			// 解压: 锭 -> 粒
			thermal.press(
				`9x #forge:nuggets/${this.material}`,
				[
					`#forge:ingots/${this.material}`,
					PRESS_DIE["un"]
				]
			).id(`${this.namespace}:thermal/press/${this.material}_nugget_from_ingot`)
				.keepIngredient(PRESS_DIE["un"])
		}

		return this
	}

	new MaterialRecipe("cmc", "michan")
		.blockIngotConvert()
		.ingotNuggetConvert()

})