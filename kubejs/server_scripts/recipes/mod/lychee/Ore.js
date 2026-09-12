ServerEvents.recipes((event) => {
    let { lychee } = event.recipes

    lychee.block_crushing(["minecraft:raw_copper", ], BlockPredicate.of("compressium:gravel_2"),BlockPredicate.of("compressium:cobblestone_2"))
    .post([Post.drop_item(Item.of("minecraft:copper_ingot"))])

})