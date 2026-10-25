let $ICheckModLoaded = 
	Java.loadClass("dev.celestiacraft.industrialplatform.api.ICheckModLoaded")

StartupEvents.registry("item", (event) => {
	let blacklistModIds = ["test", "2"]
	let foundMods = []

	blacklistModIds.forEach((modId) => {
		if ($ICheckModLoaded.hasMod(modId)) {
			foundMods.push(modId)
		}
	})

	if (foundMods.length > 0) {
		// event.create("So, why do you want to add this mod to this modpack?")
		// 直接把违规的模组名写在异常里
		throw new Error(`\n==================================================\n` +
			`[整合包防破坏系统]: 检测到违禁模组: ${foundMods.join(", ")}\n` +
			`请立即删除这些模组, 否则你永远别想玩这个包!\n` +
			`Never gonna give you up, never gonna let you down~\n` +
			`==================================================`)
	}
})