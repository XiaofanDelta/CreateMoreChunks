declare class global {
	"NowDate": {
		month: number,
		day: number,
		is41: boolean
	};
	"dev": {
		testing41: boolean,
		testingChunkSpawner: boolean,
		recipesMaking: boolean,
		logRegisters: boolean
	};
	"EnergyStage": {
		1: number,
		2: number,
		3: number,
		4: number,
		5: number,
		6: number,
		getRandomEnergy(max: number): number
	};
	"modPackMainVersion": string;
	"BUCKET_CAPACITY": number;
	"WRENCH_PICKUP": string;
	"MiningLevel": {
		wooden: "minecraft:needs_wooden_tool",
		stone: "minecraft:needs_stone_tool",
		iron: "minecraft:needs_iron_tool",
		gold: "forge:needs_gold_tool",
		diamond: "minecraft:needs_diamond_tool",
		nether: "forge:needs_netherite_tool"
	};
	"ToolType": {
		sword: "forge:mineable/sword",
		pickaxe: "minecraft:mineable/pickaxe",
		axe: "minecraft:mineable/axe",
		shovel: "minecraft:mineable/shovel",
		hoe: "minecraft:mineable/hoe"
	};
	"dyeColorGroup": [
		"black",
		"blue",
		"brown",
		"cyan",
		"gray",
		"green",
		"light_blue",
		"light_gray",
		"lime",
		"magenta",
		"orange",
		"pink",
		"purple",
		"red",
		"white",
		"yellow"
	];
	"planetList": [
		"sun",
		"mercury",
		"venus",
		"earth",
		"mars",
		"jupiter",
		"saturn",
		"uranus",
		"neptune",
	];
	"mekTiers": [
		"basic",
		"advanced",
		"elite",
		"ultimate"
	]
}