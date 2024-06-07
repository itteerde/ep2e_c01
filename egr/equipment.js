
function getGearData() {
	const gear = new Map();

	gear.set("Battle Laser", { name: "Battle Laser", gp: 3, ware: ["H"], pg: 208, properties: ["Long"] });
	gear.set("DocBot", {
		name: "DocBot", gp: 3, type: ["Robot"],
		description: 'These wheeled medical robots are designed to tend to and transport injured or sick people. They carry a fabber for medical supplies and pharmaceuticals, miscellaneous medical gear, a secure container for carrying heads, and 4–8 articulated arms for conducting remote surgery. They are often loaded up with healing spray and meds (acquired separately).'
	});
	gear.set("Ecto", { name: "Ecto", gp: 1 });
	gear.set("Emergency Bubble", {
		name: "Emergency Bubble", complexity: "Maj", restricted: false, gp: 3, pg: 341,
		description: 'Used as a last-resort life raft on spaceships, an emergency bubble is made of advanced smart materials and comes in a large but portable package that can be quickly inflated around you in 1 action turn, usually inside an airlock. The bubble has a 5-meter diameter and can comfortably accommodate 4 people for 1 week. It maintains 1 atmosphere of pressure in a vacuum, protects the inhabitants from temperatures ranging from −175 to 140 C, and provides light and breathable air. A built-in autocook ▶343 provides food and liquids. It features a simple airlock, carries an emergency distress beacon, and can be transparent, opaque, or polarized. It is powered by a nuclear battery and includes comfortable inflatable furniture. This bubble can also be partially inflated as a dome and staked down to a surface to serve as an emergency shelter on asteroids or other surfaced environments.'
	})
	gear.set("Explorenaut", {
		name: "Explorenaut", gp: 3, pg: 346,
		description: 'These small-sized bots travel on smart treads or with thrust-vector jets. They are loaded with sensors and favored for gatecrashing and similar exploration ops.  A pair of manipulator arms are used for taking samples.'
	});
	gear.set("Heavy Combat Armor", { name: "Heavy Combat Armor", gp: 3, ware: ["H"], pg: 214 });
	gear.set("Impact", { name: "Impact", gp: 1, ware: "H", pg: 217 });
	gear.set("Laser/Microwave Link (Micro)", { name: "Laser/Microwave Link (Micro)", gp: 1, pg: 336 });
	gear.set("Pressure Tent", {
		name: "Pressure Tent", complexity: "Mod", restricted: false, gp: 2, pg: 341,
		description: 'This pack self-unfolds in 3 action turns into a pressurized shelter for up to 4 medium-sized people plus gear. A built-in breather will convert carbon dioxide from the atmosphere (if any) indefinitely. It also packs itself.'
	}),
		gear.set("Refractive Glazing", { name: "Refractive Glazing", gp: 1, ware: "H", pg: 217 });
	gear.set("Robomule", { name: "Robomule", gp: 2 });
	gear.set("Server", { name: "Server", gp: 2, pg: 337, size: "L" });
	gear.set("Shield Drone", {
		name: "Shield Drone", complexity: "Min", gp: 1, restricted: false, pg: 347, size: "S",
		description: 'These tracked drones essentially function as large ballistic shields and movable cover for special ops teams. They provide AV +6/+12 to anyone using them for cover. The bot itself is little more than a platform (treat as small size if targeted directly).'
	});
	gear.set("Smart Anchors", {
		name: "Smart Anchors", complexity: "Min", restricted: false, gp: 1, pg: 341, description: 'When activated, this worn harness fires out up to 6 anchoring cables with a length of 10 meters. These cables spike into ice, dirt, or rock, or use grip pads to adhere to an appropriate surface. This prevents you from drifting into space, accidentally kicking off with terminal velocity, or falling off a cliff face. The device’s ALI targets and deploys anchors, and can be instructed to do so under certain conditions'
	});
	gear.set("Spindle", {
		name: "Spindle", complexity: "Mod", restricted: false, gp: 2, pg: 341, description: 'Spindles are wound lengths of thin (0.2 millimeters) but super-strong fullerene cable. It can extend 250 meters of cable capable of supporting 5,000 kilograms of weight at 1 g. The spindle also contains a specialized fabber that can manufacture more cable and extend it indefinitely, at a rate of 1 meter per minute, as long as it is fed with raw materials. The spindle can cut the cables it produces at any length. If fixed in place with built-in grip pads, it can also retract the cable at a rate of 50 meters per action turn, or re-absorb cables at the rate of 5 meters per minute. Spindle cables can be cut by inflicting 30 points of damage.'
	});
	gear.set("Spindle Climber", {
		name: "Spindle Climber", complexity: "Min", restricted: false, gp: 1, pg: 341, description: 'This device attaches to a spindle and transforms it into a highly effective climbing device. The spindle climber has two functions. First, it attaches hardened tips to the spindle’s cable and fires it at high speed, up to 50 meters, with sufficient force to imbed the tip into almost any sufficiently durable surface (if used as a weapon, it inflicts DV 2d10). Second, the spindle climber can pull itself and up to 250 kg up the cable at a speed of 12 meters per turn.'
	});
	gear.set("Weapon Mount", { name: "Weapon Mount", gp: 1, ware: ["C", "H"], pg: 323 });

	return gear;
}

const gear = getGearData();
const mission_gear = new Map();

mission_gear.set("EGR_2.71828", {
	sentinel: "EGR_2.71828",
	mp: 10,
	gp: 24,
	gear: [
		structuredClone(gear.get("Emergency Bubble")),
		{ ...gear.get("DocBot"), restricted: false },
		{ ...gear.get("Weapon Mount"), ware: ["H"] },
		structuredClone(gear.get("Battle Laser")),
		structuredClone(gear.get("Server")),
		structuredClone(gear.get("Robomule")),
		structuredClone(gear.get("Heavy Combat Armor")),
		{ ...gear.get("Spindle"), name: gear.get("Spindle").name + " (Blueprint unlimited)", gp: gear.get("Spindle").gp + 1 },
		{ ...gear.get("Spindle Climber"), name: gear.get("Spindle Climber").name + " (Blueprint unlimited)", gp: gear.get("Spindle Climber").gp + 1 },
		//{ ...gear.get("Impact"), name: gear.get("Impact").name + " (Blueprint unlimited)", gp: gear.get("Impact").gp + 1 },
		//{ ...gear.get("Refractive Glazing"), name: gear.get("Refractive Glazing").name + " (Blueprint unlimited)", gp: gear.get("Refractive Glazing").gp + 1 },
		//{ ...gear.get("Shield Drone"), name: gear.get("Shield Drone").name + " (Blueprint unlimited)", gp: gear.get("Shield Drone").gp + 1 }
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
