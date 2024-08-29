console.log(
    game.folders.find(f => f.name === "_Player Characters").contents.map((a) => {
        return { character: a.name, restricted: a.items.filter(i => i.system.restricted).map((i) => i.name) };
    })
);