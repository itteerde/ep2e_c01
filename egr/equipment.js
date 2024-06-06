const gear = new Map();

gear.set("Explorenaut", { name: "Explorenaut", gp: 3, pg: 346 });
gear.set("Heavy Combat Armor", { name: "Heavy Combat Armor", gp: 3, ware: ["H"], pg: 214 });
gear.set("Robomule", { name: "Robomule", gp: 2 });
gear.set("DocBot", { name: "DocBot", gp: 3, type: ["Robot"] });
gear.set("Ecto", { name: "Ecto", gp: 1 });
gear.set("Server", { name: "Server", gp: 2, pg: 337 });
gear.set("Laser/Microwave Link (Micro)", { name: "Laser/Microwave Link (Micro)", gp: 1, pg: 336 });
gear.set("Weapon Mount", { name: "Weapon Mount", gp: 1, ware: "H", pg: 323 });
gear.set("Refractive Glazing", { name: "Refractive Glazing", gp: 1, ware: "H", pg: 217 });
gear.set("Impact", { name: "Impact", gp: 1, ware: "H", pg: 217 });
gear.set("Battle Laser", { name: "Battle Laser", gp: 3, ware: "H", pg: 208, properties: ["Long"] });


const mission_gear = new Map();
mission_gear.set("EGR_2.71828", {
	sentinel: "EGR_2.71828",
	mp: 10,
	gp: 24,
	gear: [
		structuredClone(gear.get("DocBot")),
		gear.get("Server"),
		gear.get("Robomule"),
		structuredClone(gear.get("Heavy Combat Armor"))
	],
	morph: []
});

for (let [key, value] of mission_gear) {
	console.log({
		sentinel: key,
		gear: value.gear,
		gp_left: value.gp - value.gear.reduce((acc, i) => acc + i.gp, 0),
		mp_left: value.mp - value.morph.reduce((acc, i) => acc + i.mp, 0)
	});
}
