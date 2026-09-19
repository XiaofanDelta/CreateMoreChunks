// priority: 10
let $MekanismAPI =
	Java.loadClass("mekanism.api.MekanismAPI")
let $Slurry =
	Java.loadClass("mekanism.api.chemical.slurry.Slurry")
let $Gas =
	Java.loadClass("mekanism.api.chemical.gas.Gas")
let $InfuseType =
	Java.loadClass("mekanism.api.chemical.infuse.InfuseType")
let $Chemical =
	Java.loadClass("mekanism.api.chemical.Chemical")
let $Pigment =
	Java.loadClass("mekanism.api.chemical.pigment.Pigment")
let $FluidIngredient = 
	Java.loadClass("com.lowdragmc.mbd2.api.recipe.ingredient.FluidIngredient")
let $FluidTags = 
	Java.loadClass("net.minecraft.tags.FluidTags")

/**
 * 设置命名空间优先级
 * 越往前的命名空间优先级越高
 */
let namespacePriority = [
	"cmc",
	"thermal",
	"thermal_extra",
	"create",
	"createdeco",
	"ae2",
	"createaddition",
	"mekanism",
	"minecraft"
]

/**
 * 
 * @param {Internal.Ingredient_} tag 
 * 
 * @returns 
 */
function getHighPriorityItem(tag) {
	/**
	 * @type {string}
	 */
	let currentNamespace = null
	/**
	 * @type {string}
	 */
	let outputId = null
	/**
	 * @type {string}
	 */
	let priorityValue = null

	if (!Ingredient.isNotNull(tag)) {
		return "cmi:cmi_icon"
	}

	let ids = null

	/*
	 * count 对本函数无用(返回的是物品 id 字符串), 且 withCount 返回的
	 * IngredientWithCount 没有 getItemIds 方法, 统一走 getItemIds()
	 */
	ids = Ingredient.of(tag)
		.getItemIds()
		.toArray()

	// 遍历获取到的tag下每个物品的命名空间
	if (ids.length > 0) {
		ids.forEach((id) => {
			const itemId = String(id)

			if (itemId !== "minecraft:barrier") {
				currentNamespace = ResourceLocation.parse(itemId).getNamespace()

				for (let i = 0; i < namespacePriority.length; i++) {
					if (currentNamespace === namespacePriority[i]) {
						if (priorityValue == null || i < priorityValue) {
							outputId = itemId
							priorityValue = i
						}
						break
					}
				}
			}
		})
		return outputId
	}
	return "cmi:cmi_icon"
}

/**
 * 
 * @param {Internal.Ingredient_} ingredient 
 * @param {number} [count] 
 * @returns 
 */
function highPriorityItem(ingredient, count) {
	if (count == null) {
		return Item.of(getHighPriorityItem(ingredient))
	}
	return Item.of(getHighPriorityItem(ingredient), count)
}

/**
 * @param {"slurry" | "gas" | "infuse_type" | "pigment"} type
 * @param {Internal.ResourceKey<Internal.Registry>} registryName
 * @param {*} clazz
 */
function makeType(type, registryName, clazz) {
	let of = makeOf(type)

	return {
		/**
		 * @param {ResourceLocation_} id
		 * @returns {boolean}
		 */
		exists(id) {
			return RegistryInfo.of(registryName, clazz).hasValue(id)
		},

		/**
		 * @param {string} id
		 * @param {number} [amount=1000]
		 * @returns {Object}
		 */
		of(id, amount) {
			return of(id, amount)
		}
	}
}

let MekType = {
	Slurry: makeType(
		"slurry",
		$MekanismAPI.SLURRY_REGISTRY_NAME,
		$Slurry
	),
	Gas: makeType(
		"gas",
		$MekanismAPI.GAS_REGISTRY_NAME,
		$Gas
	),
	InfuseType: makeType(
		"infuse_type",
		$MekanismAPI.INFUSE_TYPE_REGISTRY_NAME,
		$InfuseType
	),
	Pigment: makeType(
		"pigment",
		$MekanismAPI.PIGMENT_REGISTRY_NAME,
		$Pigment
	)
}

/**
 * @param {string} type
 * @returns {(id: string, amount?: number) => Object}
 */
function makeOf(type) {
	return function (id, amount) {
		let obj = {}
		obj[type] = id
		obj.amount = amount == null ? 1000 : amount
		return obj
	}
}

let SmeltingRecipes = {
	/**
	 * 添加熔炼配方: 熔炉+高炉+烟熏
	 *
	 * @param {Internal.RecipesEventJS} event 配方事件
	 * @param {OutputItem_} output 输出产物
	 * @param {InputItem_} input 输入成分
	 * @returns
	 */
	all(event, output, input) {
		let { minecraft } = event.getRecipes()

		let smelting = minecraft
			.smelting(output, input)
			.cookingTime(20 * 10)

		let blasting = minecraft
			.blasting(output, input)
			.cookingTime(20 * 5)

		let smoking = minecraft
			.smoking(output, input)
			.cookingTime(20 * 5)

		return {
			smelting: smelting,
			blasting: blasting,
			smoking: smoking
		}
	},

	/**
	 * 注册: 高炉 + 熔炉
	 *
	 * @param {Internal.RecipesEventJS} event 配方事件
	 * @param {OutputItem_} output 输出产物
	 * @param {InputItem_} input 输入成分
	 * @returns 
	 */
	blasting(event, output, input) {
		let { minecraft } = event.getRecipes()

		let blasting = minecraft
			.blasting(output, input)
			.cookingTime(20 * 5)

		let smelting = minecraft
			.smelting(output, input)
			.cookingTime(20 * 10)

		return {
			blasting: blasting,
			smelting: smelting
		}
	},

	/**
	 * 注册: 烟熏 + 熔炉
	 *
	 * @param {Internal.RecipesEventJS} event 配方事件
	 * @param {OutputItem_} output 输出产物
	 * @param {InputItem_} input 输入成分
	 * @returns 
	 */
	smoking(event, output, input) {
		let { minecraft } = event.getRecipes()

		let smelting = minecraft
			.smelting(output, input)
			.cookingTime(20 * 10)

		let smoking = minecraft
			.smoking(output, input)
			.cookingTime(20 * 5)

		return {
			smelting: smelting,
			smoking: smoking
		}
	}
}

/**
 * 
 * @param {Internal.Ingredient_} tag 
 * @returns 
 */
function getItemsUnderTag(tag) {
	if (!Ingredient.isNotNull(tag)) {
		console.error("Tag item search error")
		return null
	}
	let ids = Ingredient.of(tag).getItemIds()
	if (ids.length < 1) {
		console.error("Tag item search error")
		return null
	}
	return ids
}

let removedRecipesSet = new Set()

function removedRecipes() {
	return removedRecipesSet
}

/**
 * 
 *  同时兼容正常配方ID和 EMI Copy 出来的假ID
 *
 *  @example
 *  removeRecipe(event, "treetap:water_from_crying_obsidian")
 *  removeRecipe(event, [
 *     "treetap:water_from_crying_obsidian",
 *     "minecraft:iron_ingot"
 *  ])
 * @param {Internal.RecipesEventJS} event 
 * @param {string | string[]} ids 
 */
function removeRecipe(event, ids) {
	(ids instanceof Array ? ids : [ids])
		.forEach((id) => {
			let realId = id

			// EMI/JEI Copy ID 修正
			if (id.startsWith("jei:/")) {
				realId = id
					.replace("jei:/", "")
					.replace("/", ":")
			}

			removedRecipes().add(realId)
			event.remove({
				id: realId
			})
		})
}

/**
 * 用于修正 EMI 返回的配方 ID.
 *
 * 主要用于调用 `RecipeJS#id(ResourceLocation_)` 直接替换配方时
 * 
 * EMI 所复制的的 ID 可能为 `jei:/namespace/path`
 * 
 * 无法直接作为 `RecipeJS#id(ResourceLocation_)` 的参数使用, 因此需要先进行转换.
 *
 * @example
 * ServerEvents.recipes((event) => {
 * 	let { kubejs } = event.getRecipes()
 *
 * 	kubejs.shapeless("minecraft:stone", [
 * 		"minecraft:apple",
 * 		"minecraft:gold_ingot"
 * 	]).id(useEmiId("jei:/minecraft/stone"))
 * })
 *
 * @param {ResourceLocation_} id 配方 ID.
 * @returns {ResourceLocation_} 转换后的配方 ID.
 */
function useEmiId(id) {
	id = String(id)

	if (id.startsWith("jei:/")) {
		id = id.substring(5)
		id = id.replace("/", ":")
	}

	return ResourceLocation.tryParse(id)
}

let MBDUtils = {
	/**
	 * 创建流体标签配料
	 *
	 * @param {Special.FluidTag} tag 
	 * @param {number} amount
	 * @param {Internal.CompoundTag_} [nbt]
	 * @returns 
	 */
	withFluidTag(tag, amount, nbt) {
		amount = amount == null ? 1000 : amount

		let tagId = String(tag)

		// 去掉可能存在的 # 前缀
		if (tagId.startsWith("#")) {
			tagId = tagId.slice(1)
		}

		let tagKey = $FluidTags.create(ResourceLocation.parse(tagId))
		let ingredient = $FluidIngredient["of(net.minecraft.tags.TagKey,long)"](tagKey, amount)

		if (nbt != null) {
			console.warn(`[MBDUtils] withFluidTag 暂不支持 nbt，已忽略: ${tag}`)
		}

		return ingredient
	},
	/**
	 * 
	 * @param {Internal.MBDMachine_} machine 
	 * @param {ResourceLocation_} name 
	 */
	isMachine(machine, name) {
		let definition = machine.getDefinition()
		let id = definition.id()

		return id.equals(name)
	}
}

const NativeEvent = {
	/**
	  * 
	  * @template T
	  * @param {T} event 
	  * @param {Internal.Consumer_<InstanceType<T>>} handler 
	  * @returns
	  */
	of(event, handler) {
		NativeEvents.onEvent(event, handler)
	}
}