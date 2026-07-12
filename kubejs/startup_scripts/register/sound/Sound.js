StartupEvents.registry("sound_event", (event) => {
  
	/**
	 * 
	 * @param {string} name 注册id
	 * @returns 
	 */
	function addSoundEvent(name) {
		return event.create(`cmc:${name}`)
	}

	addSoundEvent("creative_physics_staff")
	addSoundEvent("chunk_spawn")

})