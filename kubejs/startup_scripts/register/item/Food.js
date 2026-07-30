StartupEvents.registry("item", (event) => {

	// 苹果构件
	addFood("ringo_mechanism").food((foodBuild) => {
		foodBuild.hunger(5)
		foodBuild.saturation(0.8)
		foodBuild.alwaysEdible()
		foodBuild.fastToEat()
		foodBuild.eaten((foodEaten) => {
			let player = foodEaten.getPlayer()
			let level = foodEaten.getLevel()
			if (player !== null || !player.isCreative()) {
				player.give("cmc:mechanism_part")
				player.getHealth() <= 3 ?
				player.heal(114514) :
				level.runCommandSilent(`damage ${player.username} ${player.health - 1}`)
				level.runCommandSilent("/say One Apple a Day Keeps a Doctor away!")
			}
		})
	})

	/**
	 * 
	 * @param {string} id 
	 * @returns 
	 */
	function addFood(id) {
		let builder = event.create(`cmc:${id}`, "basic")

		builder.texture(`cmc:item/food/${id}`)

		if (global.Dev["logRegisters"]) {
			console.log(`物品 cmc:${id} 已注册!`)
		}

		return builder
	}
})