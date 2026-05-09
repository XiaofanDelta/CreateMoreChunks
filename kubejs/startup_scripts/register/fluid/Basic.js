StartupEvents.registry("fluid",(event) => {
    event.create("cmc:impurity")
    .thickTexture(0x0f0f0f)

    event.create("cmc:world_fluid")
    .thickTexture(0x0097ff)

    event.create("cmc:glue")
    .thickTexture(0x76be6d)
    .noBlock()

    "#0097ff"
})