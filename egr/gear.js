class Blueprint {

}


await game.actors.getName("EGR_2.71828").setFlag("tablerules", "blueprints", [{
    name: "Superthermite Charge",
    page: 340,
    type: "multi",
    ego_id: "EGR_2.71828",
    storage: "EGR_2.71828"
}]);

await game.actors.getName("EGR_2.71828").setFlag("tablerules", "blueprints", [{
    name: "Heavy Combat Armor",
    page: 220,
    type: "multi",
    ego_id: "EGR_2.71828",
    storage: "Mitre"
}, ...(game.actors.getName("EGR_2.71828").getFlag("tablerules", "blueprints"))]);


function software2gp(s) {
    if (s === "minor") return 1;
    if (s === "moderate") return 2;
    if (s === "major") return 3;
}
game.actors.getName("EGR_2.71828").items.contents.filter(i => i.type === "software").map(function (s) { return { name: s.name, complexity: software2gp(s.system.complexity) } })
game.actors.getName("EGR_2.71828").items.contents.filter(i => i.type === "software").map(function (s) { return { name: s.name, complexity: software2gp(s.system.complexity) } }).reduce((acc, v) => acc + v.complexity, -4)