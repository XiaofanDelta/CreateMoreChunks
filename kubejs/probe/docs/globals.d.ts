declare class global {
	"NowDate": {
		month: number,
		day: number,
		is41: boolean
	};
	"dev": {
		testing41: boolean,
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
	"MiningLevel": { key: ResourceLocation_ };
	"ToolType": { key: ResourceLocation_ };
	"dyeColorGroup": string[];
	"planetList": string[];
	"mekTiers": string[]
}