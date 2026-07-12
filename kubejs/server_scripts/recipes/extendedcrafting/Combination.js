ServerEvents.recipes((event) => {

	let { extendedcrafting } = event.recipes

	// 无限源质 &0!&1I&2n&3f&4i&5n&6i&7t&8y&9 S&ao&bu&cr&dc&ee&f!
	addInfinitySourceRecipe("redstone", "5x appflux:charged_redstone")
	addInfinitySourceRecipe("iron", "#minecraft:anvil")
	addInfinitySourceRecipe("copper", "5x create:copper_casing")
	addInfinitySourceRecipe("gold", "2x minecraft:enchanted_golden_apple")
	addInfinitySourceRecipe("coal", "create:blaze_burner")
	addInfinitySourceRecipe("lapis_lazuli", "thermal:xp_crystal")
	addInfinitySourceRecipe("diamond", "scannable:rare_ores_module")
	addInfinitySourceRecipe("emerald", "5x #forge:coins")
	

	function addInfinitySourceRecipe(name, extra) {
		extendedcrafting.combination(`cmc:${name}_infinity_source`,
			"cmc:empty_infinity_source", [
			Item.of("extendedcrafting:singularity").withNBT({
				Id: "extendedcrafting:world_matter"
			}).strongNBT().withCount(5),
			Item.of("extendedcrafting:singularity").withNBT({
				Id: `extendedcrafting:${name}`
			}).strongNBT().withCount(2),
			extra
		],1000000).id(`cmc:extendedcrafting/combination/${name}_infinity_source`)
	}

})