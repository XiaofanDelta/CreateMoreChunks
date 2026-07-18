StartupEvents.registry("fluid",(event) => {
	
	/**
	 * 
	 * @param {string} name 注册id
	 * @param {Color_} bucket_color 桶颜色
	 * @returns 
	 */
	function addAloneFluid(name, bucket_color) {
		let builder = event.create(`cmc:${name}`)

		builder.flowingTexture(`cmc:fluid/${name}/flow`)
		builder.stillTexture(`cmc:fluid/${name}/still`)
		builder.renderType("translucent")
		builder.bucketColor(bucket_color)

		// FluidBucketItemModel.generate(name)
		
		if (global.Dev["logRegisters"]) {
			console.log(`流体 cmc:${name} 已注册!`)
		}


		return builder
	}

	addAloneFluid("world_fluid", 0x0097FF)
	addAloneFluid("impurity", 0x0F0F0F)
	addAloneFluid("glue", 0x76BE6D).noBlock()
	addAloneFluid("advanced_compound", 0x444444)
	

	"#0097ff", "#444"

	/**
	 * 
	 * @param {string} name 注册id
	 * @param {Color_} color 着色色号
	 * @returns 
	 */
	function addColorFluid(name, color) {
		let builder = event.create(`cmc:${name}`)

		builder.thinTexture(color)
		builder.bucketColor(color)
		builder.flowingTexture(`cmc:fluid/base/flow`)
		builder.stillTexture(`cmc:fluid/base/still`)
		builder.renderType("translucent")

		// FluidBucketItemModel.generate(name)
		if (global.Dev["logRegisters"]) {
			console.info(`着色流体 cmc:${name} 已注册!`)
		}
		

		return builder
	}

	addColorFluid("bronze", 0xF5920B)
	addColorFluid("invar", 0xA0B4B4)

})