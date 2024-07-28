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