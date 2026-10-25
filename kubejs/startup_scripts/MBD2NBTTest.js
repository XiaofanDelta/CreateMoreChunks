let CompoundTag = Java.loadClass("net.minecraft.nbt.CompoundTag")
let ListTag = Java.loadClass("net.minecraft.nbt.ListTag")
let StringTag = Java.loadClass("net.minecraft.nbt.StringTag")

let root = new CompoundTag()

// ==================== ui ====================
let ui = new CompoundTag()
ui.putString("layout", "NONE")

let uiSelfPos = new CompoundTag()
uiSelfPos.putInt("x", 0)
uiSelfPos.putInt("y", 0)
ui.put("selfPosition", uiSelfPos)

let uiSize = new CompoundTag()
uiSize.putInt("width", 0)
uiSize.putInt("height", 0)
ui.put("size", uiSize)

ui.putByte("isDynamicSized", 0)
ui.putByte("allowXEIIngredientOverMouse", 1)
ui.put("children", new ListTag())
ui.put("tooltipTexts", new ListTag())

let bgTexture = new CompoundTag()
let bgData = new CompoundTag()
bgData.putFloat("imageWidth", 1.0)
bgData.putFloat("yOffset", 0.0)
bgData.putFloat("xOffset", 0.0)
bgData.putInt("color", -1)
bgData.putFloat("rotation", 0.0)

let borderSize = new CompoundTag()
borderSize.putInt("width", 4)
borderSize.putInt("height", 4)
bgData.put("borderSize", borderSize)

bgData.putFloat("scale", 1.0)
bgData.putFloat("imageHeight", 1.0)
bgData.putString("imageLocation", "ldlib:textures/gui/background.png")
bgData.putFloat("offsetX", 0.0)
bgData.putString("mode", "FIT")
bgData.putFloat("offsetY", 0.0)

let imageSize = new CompoundTag()
imageSize.putInt("width", 16)
imageSize.putInt("height", 16)
bgData.put("imageSize", imageSize)

bgTexture.put("data", bgData)
bgTexture.putString("type", "border_texture")
ui.put("backgroundTexture", bgTexture)

ui.putInt("layoutPadding", 0)
ui.putString("id", "")
ui.putByte("drawBackgroundWhenHover", 1)
ui.putString("align", "NONE")
root.put("ui", ui)

// ==================== resources ====================
let resources = new CompoundTag()

let rendererGroup = new CompoundTag()
let model = new CompoundTag()
model.putString("modelLocation", "thermal:block/device_hive_extractor_active")
model.putString("_type", "json_model")
rendererGroup.put("model", model)
resources.put("ldlib.gui.editor.group.renderer", rendererGroup)

resources.put("ldlib.gui.editor.group.textures", new CompoundTag())
resources.put("ldlib.gui.editor.group.colors", new CompoundTag())
resources.put("ldlib.gui.editor.group.entries", new CompoundTag())
root.put("resources", resources)

// ==================== definition ====================
let definition = new CompoundTag()

// --- stateMachine ---
let stateMachine = new CompoundTag()

// 构建可复用的 shape 和 renderingBox
let createShapeNode = () => {
	let shape = new CompoundTag()
	shape.putByte("enable", 0)
	let valList = new ListTag()
	let box = new CompoundTag()
	box.putDouble("minY", 0.0)
	box.putDouble("minX", 0.0)
	box.putDouble("maxZ", 1.0)
	box.putDouble("maxY", 1.0)
	box.putDouble("maxX", 1.0)
	box.putDouble("minZ", 0.0)
	valList.add(box)
	shape.put("value", valList)
	return shape
}

let shapeEnabledNode = new CompoundTag()
shapeEnabledNode.putByte("enable", 1)
let valListEnabled = new ListTag()
let boxEnabled = new CompoundTag()
boxEnabled.putDouble("minY", 0.0)
boxEnabled.putDouble("minX", 0.0)
boxEnabled.putDouble("maxZ", 1.0)
boxEnabled.putDouble("maxY", 1.0)
boxEnabled.putDouble("maxX", 1.0)
boxEnabled.putDouble("minZ", 0.0)
valListEnabled.add(boxEnabled)
shapeEnabledNode.put("value", valListEnabled)

let createRenderingBox = () => {
	let rBox = new CompoundTag()
	rBox.putByte("enable", 0)
	let rBoxVal = new CompoundTag()
	rBoxVal.putDouble("minY", 0.0)
	rBoxVal.putDouble("minX", 0.0)
	rBoxVal.putDouble("maxZ", 1.0)
	rBoxVal.putDouble("maxY", 1.0)
	rBoxVal.putDouble("maxX", 1.0)
	rBoxVal.putDouble("minZ", 0.0)
	rBox.put("value", rBoxVal)
	return rBox
}

let createMachineSound = () => {
	let sound = new CompoundTag()
	sound.putFloat("volume", 1.0)
	sound.putInt("delay", 0)
	sound.putByte("enable", 0)
	sound.putByte("loop", 1)
	sound.putString("sound", "minecraft:block.furnace.fire_crackle")
	sound.putString("soundSource", "BLOCKS")
	sound.putByte("loopWithShuffle", 0)
	sound.putFloat("pitch", 1.0)
	return sound
}

// root 节点
let smRoot = new CompoundTag()
smRoot.putInt("renderingRadius", 64)

let smRootLight = new CompoundTag()
smRootLight.putByte("enable", 1)
smRootLight.putInt("value", 0)
smRoot.put("lightLevel", smRootLight)

let smRootRenderer = new CompoundTag()
smRootRenderer.putByte("enable", 1)
let smRootRendererVal = new CompoundTag()
smRootRendererVal.putString("_type", "ui_resource")
let smRootRendererKey = new CompoundTag()
smRootRendererKey.putString("type", "builtin")
smRootRendererKey.putString("key", "model")
smRootRendererVal.put("key", smRootRendererKey)
smRootRenderer.put("value", smRootRendererVal)
smRoot.put("renderer", smRootRenderer)

smRoot.putByte("isGlobalVisible", 0)
smRoot.put("shape", shapeEnabledNode)

let rootChildren = new ListTag()

// working 节点
let working = new CompoundTag()
working.putInt("renderingRadius", 64)
let workLight = new CompoundTag()
workLight.putByte("enable", 0)
workLight.putInt("value", 0)
working.put("lightLevel", workLight)

let workRenderer = new CompoundTag()
workRenderer.putByte("enable", 0)
workRenderer.put("value", new CompoundTag())
working.put("renderer", workRenderer)
working.putByte("isGlobalVisible", 0)
working.put("shape", createShapeNode())

let workChildren = new ListTag()
// waiting 节点
let waiting = new CompoundTag()
waiting.putInt("renderingRadius", 64)
let waitLight = new CompoundTag()
waitLight.putByte("enable", 0)
waitLight.putInt("value", 0)
waiting.put("lightLevel", waitLight)

let waitRenderer = new CompoundTag()
waitRenderer.putByte("enable", 0)
waitRenderer.put("value", new CompoundTag())
waiting.put("renderer", waitRenderer)
waiting.putByte("isGlobalVisible", 0)
waiting.put("shape", createShapeNode())
waiting.put("children", new ListTag())
waiting.put("renderingBox", createRenderingBox())
waiting.putString("name", "waiting")
waiting.put("machineSound", createMachineSound())
workChildren.add(waiting)

working.put("children", workChildren)
working.put("renderingBox", createRenderingBox())
working.putString("name", "working")
working.put("machineSound", createMachineSound())
rootChildren.add(working)

// suspend 节点
let suspend = new CompoundTag()
suspend.putInt("renderingRadius", 64)
let susLight = new CompoundTag()
susLight.putByte("enable", 0)
susLight.putInt("value", 0)
suspend.put("lightLevel", susLight)

let susRenderer = new CompoundTag()
susRenderer.putByte("enable", 0)
susRenderer.put("value", new CompoundTag())
suspend.put("renderer", susRenderer)
suspend.putByte("isGlobalVisible", 0)
suspend.put("shape", createShapeNode())
suspend.put("children", new ListTag())
suspend.put("renderingBox", createRenderingBox())
suspend.putString("name", "suspend")
suspend.put("machineSound", createMachineSound())
rootChildren.add(suspend)

// formed 节点
let formed = new CompoundTag()
formed.putInt("renderingRadius", 64)
let formLight = new CompoundTag()
formLight.putByte("enable", 0)
formLight.putInt("value", 0)
formed.put("lightLevel", formLight)

let formRenderer = new CompoundTag()
formRenderer.putByte("enable", 0)
formRenderer.put("value", new CompoundTag())
formed.put("renderer", formRenderer)
formed.putByte("isGlobalVisible", 0)
formed.put("shape", createShapeNode())
formed.put("children", new ListTag())
formed.put("renderingBox", createRenderingBox())
formed.putString("name", "formed")
formed.put("machineSound", createMachineSound())
rootChildren.add(formed)

smRoot.put("children", rootChildren)
smRoot.put("renderingBox", createRenderingBox())
smRoot.putString("name", "base")
smRoot.put("machineSound", createMachineSound())

stateMachine.put("root", smRoot)
definition.put("stateMachine", stateMachine)

// --- partSettings ---
let partSettings = new CompoundTag()
partSettings.putByte("enable", 0)
partSettings.put("recipeModifiers", new ListTag())
partSettings.putByte("canShare", 1)

let proxyList = new ListTag()
let proxy = new CompoundTag()
proxy.putString("traitNameFilter", "reinforced_coke_oven_input")

let autoIO = new CompoundTag()
autoIO.putByte("enable", 1)
autoIO.putString("leftIO", "NONE")
autoIO.putInt("interval", 20)
autoIO.putString("frontIO", "IN")
autoIO.putString("backIO", "NONE")
autoIO.putString("rightIO", "NONE")
autoIO.putString("topIO", "NONE")
autoIO.putString("bottomIO", "NONE")
proxy.put("autoIO", autoIO)

let capIO = new CompoundTag()
capIO.putString("internal", "IN")
capIO.putString("leftIO", "NONE")
capIO.putString("frontIO", "IN")
capIO.putString("backIO", "NONE")
capIO.putString("rightIO", "NONE")
capIO.putString("topIO", "NONE")
capIO.putString("bottomIO", "NONE")
proxy.put("capabilityIO", capIO)

proxyList.add(proxy)
partSettings.put("proxyControllerCapabilities", proxyList)
definition.put("partSettings", partSettings)

// --- machineEvents ---
let machineEvents = new CompoundTag()
machineEvents.put("eventGraphs", new CompoundTag())
definition.put("machineEvents", machineEvents)

// --- recipeLogicSettings ---
let recipeLogicSettings = new CompoundTag()
recipeLogicSettings.putInt("recipeDampingValue", 2)
recipeLogicSettings.putByte("consumeInputsAfterWorking", 0)
recipeLogicSettings.putString("recipeType", "thermal:hive_hopper")
recipeLogicSettings.putByte("enable", 0)
recipeLogicSettings.putByte("alwaysModifyRecipe", 0)
recipeLogicSettings.put("recipeModifiers", new ListTag())
recipeLogicSettings.putByte("alwaysSearchRecipe", 0)
definition.put("recipeLogicSettings", recipeLogicSettings)

// --- blockProperties ---
let blockProperties = new CompoundTag()
blockProperties.putByte("ignitedByLava", 0)
blockProperties.putByte("isSuffocating", 0)

let blockSound = new CompoundTag()
blockSound.putFloat("volumeIn", 1.0)
blockSound.putFloat("pitchIn", 1.0)
blockSound.putString("placeSound", "minecraft:block.stone.place")
blockSound.putString("stepSound", "minecraft:block.stone.step")
blockSound.putString("breakSound", "minecraft:block.stone.break")
blockSound.putString("hitSound", "minecraft:block.stone.hit")
blockSound.putString("fallSound", "minecraft:block.stone.fall")
blockProperties.put("blockSound", blockSound)

blockProperties.putByte("emissive", 0)
blockProperties.putFloat("explosionResistance", 6.0)

let renderTypes = new CompoundTag()
renderTypes.putByte("translucent", 0)
renderTypes.putByte("solid", 0)
renderTypes.putByte("cutout", 1)
renderTypes.putByte("cutoutMipped", 0)
blockProperties.put("renderTypes", renderTypes)

blockProperties.putByte("replaceable", 0)
blockProperties.putByte("noParticleOnBreak", 0)
blockProperties.putFloat("speedFactor", 1.0)
blockProperties.putFloat("friction", 0.6)
blockProperties.putByte("transparent", 0)
blockProperties.putString("rotationState", "NON_Y_AXIS")
blockProperties.putByte("canOcclude", 1)
blockProperties.putFloat("destroyTime", 3.0)
blockProperties.putByte("useAO", 1)
blockProperties.putByte("isAir", 0)
blockProperties.putByte("canBeWaterlogged", 0)
blockProperties.putByte("forceSolid", 0)
blockProperties.putByte("hasCollision", 1)
blockProperties.putByte("collisionShapeFullBlock", 1)
blockProperties.putFloat("jumpFactor", 1.0)
definition.put("blockProperties", blockProperties)

// --- itemProperties ---
let itemProperties = new CompoundTag()
itemProperties.put("itemTooltips", new ListTag())

let itemRenderer = new CompoundTag()
itemRenderer.putByte("enable", 0)
itemRenderer.put("value", new CompoundTag())
itemProperties.put("renderer", itemRenderer)

itemProperties.putInt("maxStackSize", 64)

let creativeTab = new CompoundTag()
creativeTab.putByte("enable", 0)
creativeTab.putString("value", "cmi:machines")
itemProperties.put("creativeTab", creativeTab)

itemProperties.putByte("isGui3d", 1)
itemProperties.putByte("useBlockLight", 1)
itemProperties.putString("rarity", "COMMON")
definition.put("itemProperties", itemProperties)

definition.putString("id", "cmc:test_machine")

// --- machineSettings ---
let machineSettings = new CompoundTag()
machineSettings.putInt("machineLevel", 0)
machineSettings.put("traitDefinitions", new ListTag())
machineSettings.putByte("hasUI", 0)

let signalConn = new CompoundTag()
signalConn.putByte("leftConnection", 0)
signalConn.putByte("backConnection", 0)
signalConn.putByte("topConnection", 0)
signalConn.putByte("frontConnection", 0)
signalConn.putByte("bottomConnection", 0)
signalConn.putByte("rightConnection", 0)
machineSettings.put("signalConnection", signalConn)
machineSettings.putByte("dropMachineItem", 1)
definition.put("machineSettings", machineSettings)

// 将 definition 放入根节点
root.put("definition", definition)

// ==================== 保存文件 ====================
NBTIO.write("ldlib/assets/mbd2/machine/test_machine.nbt", root)

console.info("✅ NBT 文件已保存")