// priority: 18

// 处理器
let Print = Object.freeze({
	LOGIC: "ae2:printed_logic_processor",
	CALCULATION: "ae2:printed_calculation_processor",
	ENGINEERING: "ae2:printed_engineering_processor",
	ENERGY: "appflux:printed_energy_processor",
	CONCURRENT: "cmc:printed_concurrent_processor",
	ACCUMULATION: "megacells:printed_accumulation_processor"
})

let Processor = Object.freeze({
	CONTROL: "create_connected:control_chip",
	LOGIC: "ae2:logic_processor",
	CALCULATION: "ae2:calculation_processor",
	ENGINEERING: "ae2:engineering_processor",
	ENERGY: "appflux:energy_processor",
	CONCURRENT: "cmc:concurrent_processor",
	ACCUMULATION: "megacells:accumulation_processor"
})

// 机壳系列
let Casing = Object.freeze({
	ANDESITE: "create:andesite_casing",
	COPPER: "create:copper_casing",
	BRASS: "create:brass_casing",
	RAILWAY: "create:railway_casing",
	THERMAL: "thermal:machine_frame",
	STEEL: "mekanism:steel_casing",
})

// 木材系列
let Wood = Object.freeze({
	OAK: Object.freeze({
		NAME: "oak",
		SAPLING: "minecraft:oak_sapling",
		LEAVE: "minecraft:oak_leaves",
		LOG: "minecraft:oak_log",
		STRIPPED_LOG: "minecraft:stripped_oak_log",
		WOOD: "minecraft:oak_wood",
		STRIPPED_WOOD: "minecraft:stripped_oak_wood",
		PLANKS: "minecraft:oak_planks"
	}),
	SPRUCE: Object.freeze({
		NAME: "spruce",
		SAPLING: "minecraft:spruce_sapling",
		LEAVE: "minecraft:spruce_leaves",
		LOG: "minecraft:spruce_log",
		STRIPPED_LOG: "minecraft:stripped_spruce_log",
		WOOD: "minecraft:spruce_wood",
		STRIPPED_WOOD: "minecraft:stripped_spruce_wood",
		PLANKS: "minecraft:spruce_planks"
	}),
	BIRCH: Object.freeze({
		NAME: "birch",
		SAPLING: "minecraft:birch_sapling",
		LEAVE: "minecraft:birch_leaves",
		LOG: "minecraft:birch_log",
		STRIPPED_LOG: "minecraft:stripped_birch_log",
		WOOD: "minecraft:birch_wood",
		STRIPPED_WOOD: "minecraft:stripped_birch_wood",
		PLANKS: "minecraft:birch_planks"
	}),
	JUNGLE: Object.freeze({
		NAME: "jungle",
		SAPLING: "minecraft:jungle_sapling",
		LEAVE: "minecraft:jungle_leaves",
		LOG: "minecraft:jungle_log",
		STRIPPED_LOG: "minecraft:stripped_jungle_log",
		WOOD: "minecraft:jungle_wood",
		STRIPPED_WOOD: "minecraft:stripped_jungle_wood",
		PLANKS: "minecraft:jungle_planks"
	}),
	ACACIA: Object.freeze({
		NAME: "acacia",
		SAPLING: "minecraft:acacia_sapling",
		LEAVE: "minecraft:acacia_leaves",
		LOG: "minecraft:acacia_log",
		STRIPPED_LOG: "minecraft:stripped_acacia_log",
		WOOD: "minecraft:acacia_wood",
		STRIPPED_WOOD: "minecraft:stripped_acacia_wood",
		PLANKS: "minecraft:acacia_planks"
	}),
	DARK_OAK: Object.freeze({
		NAME: "dark_oak",
		SAPLING: "minecraft:dark_oak_sapling",
		LEAVE: "minecraft:dark_oak_leaves",
		LOG: "minecraft:dark_oak_log",
		STRIPPED_LOG: "minecraft:stripped_dark_oak_log",
		WOOD: "minecraft:dark_oak_wood",
		STRIPPED_WOOD: "minecraft:stripped_dark_oak_wood",
		PLANKS: "minecraft:dark_oak_planks"
	}),
	MANGROVE: Object.freeze({
		NAME: "mangrove",
		SAPLING: "minecraft:mangrove_propagule",
		LEAVE: "minecraft:mangrove_leaves",
		LOG: "minecraft:mangrove_log",
		STRIPPED_LOG: "minecraft:stripped_mangrove_log",
		WOOD: "minecraft:mangrove_wood",
		STRIPPED_WOOD: "minecraft:stripped_mangrove_wood",
		PLANKS: "minecraft:mangrove_planks"
	}),
	CHERRY: Object.freeze({
		NAME: "cherry",
		SAPLING: "minecraft:cherry_sapling",
		LEAVE: "minecraft:cherry_leaves",
		LOG: "minecraft:cherry_log",
		STRIPPED_LOG: "minecraft:stripped_cherry_log",
		WOOD: "minecraft:cherry_wood",
		STRIPPED_WOOD: "minecraft:stripped_cherry_wood",
		PLANKS: "minecraft:cherry_planks"
	}),
	CRIMSON: Object.freeze({
		NAME: "crimson",
		SAPLING: "minecraft:crimson_fungus",
		LEAVE: "minecraft:nether_wart_block",
		LOG: "minecraft:crimson_stem",
		STRIPPED_LOG: "minecraft:stripped_crimson_stem",
		WOOD: "minecraft:crimson_hyphae",
		STRIPPED_WOOD: "minecraft:stripped_crimson_hyphae",
		PLANKS: "minecraft:crimson_planks"
	}),
	WARPED: Object.freeze({
		NAME: "warped",
		SAPLING: "minecraft:warped_fungus",
		LEAVE: "minecraft:warped_wart_block",
		LOG: "minecraft:warped_stem",
		STRIPPED_LOG: "minecraft:stripped_warped_stem",
		WOOD: "minecraft:warped_hyphae",
		STRIPPED_WOOD: "minecraft:stripped_warped_hyphae",
		PLANKS: "minecraft:warped_planks"
	}),
	RUBBERWOOD: Object.freeze({
		NAME: "rubberwood",
		SAPLING: "thermal:rubberwood_sapling",
		LEAVE: "thermal:rubberwood_leaves",
		LOG: "thermal:rubberwood_log",
		STRIPPED_LOG: "thermal:stripped_rubberwood_log",
		WOOD: "thermal:rubberwood_wood",
		STRIPPED_WOOD: "thermal:stripped_rubberwood_wood",
		PLANKS: "thermal:rubberwood_planks"
	})
})

let WoodMaterials = [
	Wood.OAK,
	Wood.SPRUCE,
	Wood.BIRCH,
	Wood.JUNGLE,
	Wood.ACACIA,
	Wood.DARK_OAK,
	Wood.MANGROVE,
	Wood.CHERRY,
	Wood.RUBBERWOOD
]