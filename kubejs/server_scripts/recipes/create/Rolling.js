ServerEvents.recipes((event) => {
    let { createaddition } = event.recipes

    createaddition.rolling("2x cmc:advanced_alloy_rod", "cmc:advanced_alloy_ingot").id("cmc:createaddition/rolling/advanced_alloy_rod")

})