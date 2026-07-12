JEIAddedEvents.registerCategories((event) => {
//    let { data: { jeiHelpers: { guiHelper } } } = event
    
    event.custom("cmc:test_category", (category) => {
        const guiHelper = category.getJeiHelpers().getGuiHelper()
        const jeiHelpers = category.getJeiHelpers()
        category
            .title(Component.translatable("recipe.jei.recipeType.cmc.test"))
            .background(guiHelper.createBlankDrawable(0, 0))
            .setHeight(120)
            .setWidth(120)
            .icon(guiHelper.createDrawableItemStack(Item.of("cmc:test")))
            .handleLookup((builder, recipe) => {
                builder.setShapeless()
                builder.addInputSlot(21, 48)
                builder.addOutputSlot(100, 48)
            })
    })
})