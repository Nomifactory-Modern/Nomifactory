REIEvents.hide('item', event => {
    //Hides useless items
    event.hide(['ae2:vibration_chamber', 'hammerlib:gears/netherite', 'hammerlib:gears/gold', 'hammerlib:gears/copper'])

    //i really hate these kind of mods
    event.hide('ironfurnaces:million_furnace')
    event.hide(['ironfurnaces:crystal_furnace', 'ironfurnaces:emerald_furnace', 'ironfurnaces:item_spooky', 'ironfurnaces:item_xmas', 'ironfurnaces:item_copy', 'ironfurnaces:item_linker', 'ironfurnaces:rainbow_core', 'ironfurnaces:rainbow_plating', 'ironfurnaces:rainbow_coal', 'ironfurnaces:upgrade_iron', 'ironfurnaces:upgrade_gold', 'ironfurnaces:upgrade_diamond', 'ironfurnaces:upgrade_emerald', 'ironfurnaces:upgrade_obsidian', 'ironfurnaces:upgrade_crystal', 'ironfurnaces:upgrade_netherite', 'ironfurnaces:upgrade_copper', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_silver', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_iron2', 'ironfurnaces:upgrade_gold2', 'ironfurnaces:upgrade_silver2', 'ironfurnaces:allthemodium_furnace', 'ironfurnaces:vibranium_furnace', 'ironfurnaces:unobtainium_furnace', 'ironfurnaces:upgrade_allthemodium', 'ironfurnaces:upgrade_vibranium', 'ironfurnaces:upgrade_unobtainium', 'ironfurnaces:item_heater', 'ironfurnaces:augment_blasting', 'ironfurnaces:augment_smoking', 'ironfurnaces:heater', 'ironfurnaces:augment_generator'])

    //literally compressium
    event.hide(['compressium:netherite_1', 'compressium:dirt_1', 'compressium:redstone_1', 'compressium:andesite_1', 'compressium:diorite_1', 'compressium:copper_1', 'compressium:granite_1', 'compressium:stone_1', 'compressium:netherrack_1', 'compressium:soulsand_1', 'compressium:iron_1', 'compressium:gravel_1', 'compressium:snow_1', 'compressium:gold_1', 'compressium:diamond_1', 'compressium:emerald_1', 'compressium:clay_1', 'compressium:coal_1', 'compressium:redsand_1', 'compressium:endstone_1', 'compressium:obsidian_1', 'compressium:lapis_1', 'compressium:quartz_1'])
})

REIEvents.removeCategories(event => {
    //FIXME HELP
    event.remove('minecraft:plugins/tag')
})

REIEvents.groupEntries(event => {

    const useNbt = ['chiselsandbits:block_bit']

    useNbt.forEach(id => {
        const item = Item.of(id)
        const { namespace, path } = Utils.id(item.id)
        event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.name, item)
    })


})

//I hate compressium