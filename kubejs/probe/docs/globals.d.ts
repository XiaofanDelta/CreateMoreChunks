declare class global {
	"NowDate": {
		month: number;
		day: number;
		is41: boolean;
	};
	"Dev": {
		testing41: boolean;
		recipesMaking: boolean;
		logRegisters: boolean;
	};
	"EnergyStage": {
		1: number;
		2: number;
		3: number;
		4: number;
		5: number;
		6: number;
		getRandomEnergy(max: number): number;
	};
	"modPackMainVersion": string;
	"BUCKET_CAPACITY": number;
	"WRENCH_PICKUP": string;
	"MiningLevel": {
		wooden: ResourceLocation_;
		stone: ResourceLocation_;
		iron: ResourceLocation_;
		gold: ResourceLocation_;
		diamond: ResourceLocation_;
		nether: ResourceLocation_;
	};
	"ToolType": {
		sword: ResourceLocation_;
		pickaxe: ResourceLocation_;
		axe: ResourceLocation_;
		shovel: ResourceLocation_;
		hoe: ResourceLocation_;
	};
	"dyeColorGroup": string[];
	"planetList": string[];
	"mekTiers": string[];
	"heatLevel": {
		WORLD_AFFINITY: ResourceLocation_;
	};
}