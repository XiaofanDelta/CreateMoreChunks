StartupEvents.registry("item",(event) => {
    
    //苹果构件
    event.create("cmc:ringo_mechanism", "basic")
        .texture("cmc:item/mechanism/ringo_mechanism")
        .food((foodBuild) => {
            foodBuild.hunger(5)
            foodBuild.saturation(0.8)
            foodBuild.alwaysEdible()
            foodBuild.fastToEat()
            foodBuild.eaten((foodEaten) => {
                /**
                 * @type {$Player}
                 */
                let player = foodEaten.getPlayer()
                if (player != null) {
                    player.give("cmc:mechanism_part")
                }
            })
        })

})