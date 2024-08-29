function searchBlueprint(itemName) {
    let results = [];

    game.folders.getName("_Player Characters").contents.forEach(function (c) {
        results.push({ sentinel: c, items: c.items.filter(i => i.name.startsWith(itemName)) });
    })

    return results;
}

