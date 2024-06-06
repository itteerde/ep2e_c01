const gear = [
	{ name: "Explorenaut", gp: 3 },
	{ name: "Heavy Combat Armor", gp: 3, ware: "H" },
	{ name: "Robomule", gp: 2 },
	{ name: "DocBot", gp: 3 },
	{ name: "Ecto", gp: 1 },
	{ name: "Server", gp: 2, pg: 337 },
	{ name: "Laser/Microwave Link (Micro)", gp: 1, pg: 336 },
	{ name: "Weapon Mount", gp: 1, ware: "H", pg: 323 },
	{ name: "Refractive Glazing", gp: 1, ware: "H", pg: 217 },
	{ name: "Impact", gp: 1, ware: "H", pg: 217 },
	{ name: "Battle Laser", gp: 3, ware: "H", pg: 208, properties: ["Long"] }
];

const equipment = [
	{ name: "Explorenaut", gp: 3 },
	{ name: "Heavy Combat Armor", gp: 3, ware: "H" },
	{ name: "Robomule", gp: 2 },
	{ name: "DocBot", gp: 3 },
	{ name: "Ecto", gp: 1 },
	{ name: "Server", gp: 2, pg: 337 },
	{ name: "Laser/Microwave Link (Micro)", gp: 1, pg: 336 },
	{ name: "Weapon Mount", gp: 1, ware: "H", pg: 323 },
	{ name: "Refractive Glazing", gp: 1, ware: "H", pg: 217 },
	{ name: "Impact", gp: 1, ware: "H", pg: 217 },
	{ name: "Battle Laser", gp: 3, ware: "H", pg: 208, properties: ["Long"] }
];

const mission_gear = new Map();
mission_gear.set("EGR_2.71828", {
	sentinel: "EGR_2.71828",
	mp: 10,
	gp: 24,
	gear: [
		gear.find(i => i.name === "DocBot"),
		gear.find(i => i.name === "Server"),
		gear.find(i => i.name === "Robomule")
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
