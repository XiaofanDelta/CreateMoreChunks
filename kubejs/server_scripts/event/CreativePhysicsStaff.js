ItemEvents.rightClicked((event) => {
	let { player, level, item } = event

	if (event.getItem() === "cmc:creative_physics_staff" ) {
		player.swing()

		if ( !player.isCreative() ) {
			item.shrink(1)
		}
		
		let tranKey = "message.cmc.creative_physics_staff"
		player.tell(Component.translatable(tranKey).yellow())

		level.playSound(
			null,
			player.x,
			player.y,
			player.z,
			"cmc:creative_physics_staff",
			"players",
			1.0,
			1.0
		)

	}
})
// && event.hand === InteractionHand.MAIN_HAND