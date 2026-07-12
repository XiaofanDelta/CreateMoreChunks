ServerEvents.recipes((event) => {
	let { create } = event.recipes
	create.mechanical_crafting("createaddition:alternator",[
			" PIP ",
			"PRRRP",
			"PSCSP",
			"PPOPP"
		], {
			I: "create:shaft",
			P: "#forge:plates/iron",
			R: "#forge:rods/iron",
			O: "cmc:small_rf_coil",
			C: "createaddition:capacitor",
			S: "#createaddition:spools"
		}).id("cmc:mechanical_crafting/test")

	create.mechanical_crafting("cmc:rc", [
		"DDDDEEEEE",
		"DEEEDEEEE",
		"DEEEDEEEE",
		"DEEEDEEEE",
		"DDDDDDDDD",
		"DDEEDEEEE",
		"DEDEDEEEE",
		"DEEDDEEEE",
		"DEEEDDDDD"], {
			D: "cmc:delta",
			E: "cmc:empty"
		}).id("cmc:mechanical_crafting/rc")

})