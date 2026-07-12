StartupEvents.registry("item",(event) => {
	
	// 苹果构件
	event.create("cmc:ringo_mechanism", "basic")
		.food((foodBuild) => {
			foodBuild.hunger(5)
			foodBuild.saturation(0.8)
			foodBuild.alwaysEdible()
			foodBuild.fastToEat()
			foodBuild.eaten((foodEaten) => {
				let player = foodEaten.getPlayer()
				let level = foodEaten.getLevel()
				if ( player !== null || !player.isCreative() ) {
					player.give("cmc:mechanism_part")
					player.getHealth() <= 3 ?
					player.heal(114514) : 
					level.runCommandSilent(`damage ${player.getName()} 15`) // player.addEffect("minecraft:instant_damage")
					level.runCommandSilent("/say One Apple a Day Keeps a Doctor away!")
				}
			})
		})
})