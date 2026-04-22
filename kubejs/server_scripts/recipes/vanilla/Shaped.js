ServerEvents.recipes(event => {
    event.shaped(
        Item.of('create:andesite_alloy',),[
            'BA ',
            'AB ',
            '   '
        ],{
            A: 'minecraft:andesite',
            B: 'chunkbychunk:worldfragment' })
    
    event.shaped(
        Item.of('create:brass_hand'),[
            ' A ',
            'BCB',
            ' B '
        ],{
            A: 'createdeco:andesite_sheet',
            B: 'create:brass_sheet',
            C: 'create:shaft'
        })

    event.shaped(
        Item.of('create:electron_tube'),[
            'A',
            'B',
            'C'
        ],{
            A:'create:polished_rose_quartz',
            B:'#forge:wires/copper',
            C:'#forge:plates/iron'
        }
    )
})
