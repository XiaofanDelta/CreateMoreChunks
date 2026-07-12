ServerEvents.recipes((event) => {
	
	event.custom({
		"type": "functionalstorage:custom_compacting",
		"higher_input": {
			"count": 1,
			"item": "minecraft:obsidian"
		},
		"lower_input": {
			"count": 128,
			"item": "minecraft:bedrock"
		}
	}).id("minecraft:wtf_what_is_this")

})