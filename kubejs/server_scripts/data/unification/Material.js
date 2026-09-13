ServerEvents.highPriorityData((event) => {

	/**
	   *
	 * @param {string} name 
	   */
	function MaterialUnification(name) {
		/** 
		 * @type {string} 材料名称 
		 */
		this.materialName = name

		/** 
		 * @type {string[]} 已注册的 unification 名称列表（用于防重复） 
		 */
		this.registered = []
	}

	/**
	 * 内部方法: 执行注册，并防重复
	 * @param {string} name - 文件名
	 * @param {string} match - 要匹配的标签
	 * @param {Internal.Item_} item - 替换为的物品
	 * @private
	 */
	MaterialUnification.prototype._addUnification = function (name, match, item) {
		if (this.registered.includes(name)) {
			console.warn(`[MaterialUnification] 已存在: ${name}，跳过重复注册。`)
			return
		}
		addUnification(name, match, item)
		this.registered.push(name)
	}

	/**
	 * 替换锭
	 * @param {Internal.Item_} ingotId - 替换为的锭物品
	 * @returns {MaterialUnification} 返回自身，支持链式调用
	 */
	MaterialUnification.prototype.replaceIngot = function (ingotId) {
		this._addUnification(
			`${this.materialName}_ingot`,
			`#forge:ingots/${this.materialName}`,
			ingotId
		)
		return this
	}

	/**
	 * 替换粒
	 * @param {Internal.Item_} nuggetId - 替换为的粒物品
	 * @returns {MaterialUnification}
	 */
	MaterialUnification.prototype.replaceNugget = function (nuggetId) {
		this._addUnification(
			`${this.materialName}_nugget`,
			`#forge:nuggets/${this.materialName}`,
			nuggetId
		)
		return this
	}

	/**
	 * 替换方块
	 * @param {Internal.Item_} blockId - 替换为的方块物品
	 * @returns {MaterialUnification}
	 */
	MaterialUnification.prototype.replaceBlock = function (blockId) {
		this._addUnification(
			`${this.materialName}_block`,
			`#forge:storage_blocks/${this.materialName}`,
			blockId
		)
		return this
	}

	/**
	 * 替换板
	 * @param {Internal.Item_} plateId - 替换为的板物品
	 * @returns {MaterialUnification}
	 */
	MaterialUnification.prototype.replacePlate = function (plateId) {
		this._addUnification(
			`${this.materialName}_plate`,
			`#forge:plates/${this.materialName}`,
			plateId
		)
		return this
	}

	/**
	 * 替换粉
	 * @param {Internal.Item_} dustId - 替换为的粉物品
	 * @returns {MaterialUnification}
	 */
	MaterialUnification.prototype.replaceDust = function (dustId) {
		this._addUnification(
			`${this.materialName}_dust`,
			`#forge:dusts/${this.materialName}`,
			dustId
		)
		return this
	}

	/**
	 * 替换杆
	 * @param {Internal.Item_} rodId - 替换为的杆物品
	 * @returns {MaterialUnification}
	 */
	MaterialUnification.prototype.replaceRod = function (rodId) {
		this._addUnification(
			`${this.materialName}_rod`,
			`#forge:rods/${this.materialName}`,
			rodId
		)
		return this
	}

	/**
	 * 替换粗矿
	 * @param {Internal.Item_} rawOreId - 替换为的粗矿物品
	 * @returns {MaterialUnification}
	 */
	MaterialUnification.prototype.replaceRawOre = function (rawOreId) {
		this._addUnification(
			`raw_${this.materialName}`,
			`#forge:raw_materials/${this.materialName}`,
			rawOreId
		)
		return this
	}

	/**
	 * 替换粗矿块
	 * @param {Internal.Item_} rawOreBlockId - 替换为的粗矿块物品
	 * @returns {MaterialUnification}
	 */
	MaterialUnification.prototype.replaceRawOreBlock = function (rawOreBlockId) {
		this._addUnification(
			`raw_${this.materialName}_block`,
			`#forge:storage_blocks/raw_${this.materialName}`,
			rawOreBlockId
		)
		return this
	}

	/**
	 * 通用替换方法，支持自定义类型
	 * @param {string} suffix - 文件名后缀（如 "foil"）
	 * @param {string} tagSuffix - Forge 标签后缀（如 "foils"），将拼接为 "#forge:{tagSuffix}/{name}"
	 * @param {Internal.Item_} itemId - 替换为的物品
	 * @returns {MaterialUnification}
	 */
	MaterialUnification.prototype.replaceType = function (suffix, tagSuffix, itemId) {
		this._addUnification(
			`${this.materialName}_${suffix}`,
			`#forge:${tagSuffix}/${this.materialName}`,
			itemId
		)
		return this
	}

	/**
	 * 批量注册常见类型（锭、粒、块、板、粉、杆）
	 * @param {Object} items - 键值对，键为类型名（ingot|nugget|block|plate|dust|rod），值为物品ID
	 * @returns {MaterialUnification}
	 * @example
	 * new MaterialUnification("iron").registerAll({
	 *     ingot: "minecraft:iron_ingot",
	 *     nugget: "minecraft:iron_nugget",
	 *     block: "minecraft:iron_block",
	 *     plate: "thermal:iron_plate"
	 * })
	 */
	MaterialUnification.prototype.registerAll = function (items) {
		// 类型映射表: 键 -> { suffix, tag }
		const typeMap = {
			ingot: { suffix: "ingot", tag: "ingots" },
			nugget: { suffix: "nugget", tag: "nuggets" },
			block: { suffix: "block", tag: "storage_blocks" },
			plate: { suffix: "plate", tag: "plates" },
			dust: { suffix: "dust", tag: "dusts" },
			rod: { suffix: "rod", tag: "rods" }
		}

		for (const [type, itemId] of Object.entries(items)) {
			const config = typeMap[type]
			if (config) {
				// 调用通用替换方法
				this.replaceType(config.suffix, config.tag, itemId)
			} else {
				console.warn(`[MaterialUnification] 未知类型 "${type}"，已跳过。`)
			}
		}
		return this
	}

	/**
	 * 
	 * @example add("coal_coke", addUnification("#forge:coal_coke", "thermal:coal_coke"))
	 * @param {string} name 文件名称
	 * @param {Internal.Item_ | Internal.Ingredient_} match 
	 * @param {Internal.Item_ | Internal.Ingredient_} item 
	 * @returns 
	 */
	function addUnification(name, match, item) {
		if (name == null || name.trim() === "") {
			console.error("File name cannot be null or empty")
		}

		if (match == null) {
			console.error("Match cannot be null")
		}

		if (item == null) {
			console.error("Item cannot be null")
		}

		let itemUnification = {
			matchItems: [match],
			resultItems: item
		}

		event.addJson(`oei:replacements/${name}.json`, itemUnification)
		return this
	}

	new MaterialUnification("lead")
		.replaceIngot("thermal:lead_ingot")
		.replaceBlock("thermal:lead_block")
		.replaceNugget("thermal:lead_nugget")
		.replaceDust("thermal:lead_dust")
		.replaceRawOre("thermal:raw_lead")
		.replaceRawOreBlock("thermal:raw_lead_block")
	
	new MaterialUnification("ender_pearl")
		.replaceDust("ae2:ender_dust")
	
	new MaterialUnification("gold")
		.replaceDust("thermal:gold_dust")
		.replacePlate("create:golden_sheet")
		.replaceRod("thermal_extra:gold_rod")

	new MaterialUnification("obsidian")
		.replaceDust("create:powdered_obsidian")

	new MaterialUnification("diamond")
		.replaceDust("createaddition:diamond_grit")
	
	new MaterialUnification("copper")
		.replaceNugget("thermal:copper_nugget")
		.replacePlate("create:copper_sheet")
		.replaceRod("thermal_extra:copper_rod")
		.replaceDust("thermal:copper_dust")

	new MaterialUnification("iron")
		.replacePlate("create:iron_sheet")
		.replaceDust("thermal:iron_dust")
		.replaceRod("thermal_extra:iron_rod")
	
	new MaterialUnification("tin")
		.replaceRawOre("thermal:raw_tin")
		.replaceRawOreBlock("thermal:raw_tin_block")
		.replaceDust("thermal:tin_dust")
		.replaceIngot("thermal:tin_ingot")
		.replaceNugget("thermal:tin_nugget")
		.replaceBlock("thermal:tin_block")
	
	new MaterialUnification("steel")
		.replaceBlock("thermal:steel_block")
		.replaceIngot("thermal:steel_ingot")
		.replaceNugget("thermal:steel_nugget")
		.replaceDust("thermal:steel_dust")

	new MaterialUnification("electrum")
		.replaceIngot("thermal:electrum_ingot")
		.replaceRod("thermal_extra:electrum_rod")
		.replaceNugget("thermal:electrum_nugget")
		.replacePlate("createaddition:electrum_sheet")
		.replaceBlock("thermal:electrum_block")

	new MaterialUnification("bronze")
		.replaceIngot("thermal:bronze_ingot")
		.replaceDust("thermal:bronze_dust")
		.replaceNugget("thermal:bronze_nugget")
		.replaceBlock("thermal:bronze_block")

	new MaterialUnification("charcoal")
		.replaceBlock("thermal:charcoal_block")
	
	new MaterialUnification("zinc")
		.replacePlate("createaddition:zinc_sheet")

	new MaterialUnification("netherite")
		.replacePlate("createdeco:netherite_sheet")
		.replaceDust("thermal:netherite_dust")
	
	new MaterialUnification("wood")
		.replaceDust("thermal:sawdust")

	new MaterialUnification("quartz")
		.replaceDust("thermal:quartz_dust")
	
	new MaterialUnification("lapis")
		.replaceDust("thermal:lapis_dust")
	
	new MaterialUnification("emerald")
		.replaceDust("thermal:emerald_dust")

})