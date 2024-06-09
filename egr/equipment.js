const fs = require('fs');

function getGearData() {
	const gear = new Map();

	gear.set("Battle Laser", { name: "Battle Laser", gp: 3, ware: ["H"], pg: 208, properties: ["Long"] });
	gear.set("DocBot", {
		name: "DocBot", gp: 3, pg: 349, type: ["Robot"],
		description: 'These wheeled medical robots are designed to tend to and transport injured or sick people. They carry a fabber for medical supplies and pharmaceuticals, miscellaneous medical gear, a secure container for carrying heads, and 4–8 articulated arms for conducting remote surgery. They are often loaded up with healing spray and meds (acquired separately).'
	});
	gear.set("Dwarf", {
		name: "Dwarf", complexity: "Maj", restricted: false, gp: 3, size: "L", pg: 349, description: 'These large industrial bots are named not just for their primary use — mining, excavation, tunneling, and construction — but because the default AIs they shipped with had a programmed tendency to happily whistle as they worked. Dwarfs are quadrupedal walkers, equipped with massive modular industrial tools like boring drills, shovels, hydraulic jacks, jackhammers, scooping arms, acid sprays, and so on.'
	});
	gear.set("Ecto", { name: "Ecto", gp: 1 });
	gear.set("Emergency Bubble", {
		name: "Emergency Bubble", complexity: "Maj", restricted: false, gp: 3, pg: 341,
		description: 'Used as a last-resort life raft on spaceships, an emergency bubble is made of advanced smart materials and comes in a large but portable package that can be quickly inflated around you in 1 action turn, usually inside an airlock. The bubble has a 5-meter diameter and can comfortably accommodate 4 people for 1 week. It maintains 1 atmosphere of pressure in a vacuum, protects the inhabitants from temperatures ranging from −175 to 140 C, and provides light and breathable air. A built-in autocook ▶343 provides food and liquids. It features a simple airlock, carries an emergency distress beacon, and can be transparent, opaque, or polarized. It is powered by a nuclear battery and includes comfortable inflatable furniture. This bubble can also be partially inflated as a dome and staked down to a surface to serve as an emergency shelter on asteroids or other surfaced environments.'
	});
	gear.set("Envirosuit", {
		name: "Envirosuit", complexity: "Maj", restricted: false, gp: 3, pg: 351, description: `These shells feature both increased radiation shielding and thermal regulation systems to withstand extreme environments such as deep undersea and the surfaces of Mercury and Venus. They can withstand temperatures from −270 to 1,000 C.`
	});
	gear.set("Explorenaut", {
		name: "Explorenaut", complexity: "Maj", restricted: false, gp: 3, pg: 346,
		description: 'These small-sized bots travel on smart treads or with thrust-vector jets. They are loaded with sensors and favored for gatecrashing and similar exploration ops.  A pair of manipulator arms are used for taking samples.'
	});
	gear.set("Fake Ego ID", {
		name: "Fake Ego ID", complexity: "Maj", restricted: true, gp: 3, pg: 315, description: `This forged ID will pass in most inner system and Jovian Republic habitats, and sometimes others. It gives you a rep score in one network with that ID at 10.`
	});
	gear.set("Fixer Swarm", {
		name: "Fixer Swarm", complexity: "Mod", restricted: false, gp: 2, pg: 345, description: 'Fixers repair objects and restore them to their original specifications. They must be programmed with the item’s nanofabrication blueprints or given time (~an hour) to scan an identical object; they are not smart enough to recognize and repair damage on their own. A fixer swarm repairs 1d10 [6] damage per hour. Once all damage is repaired, it will restore 1 wound per day. Fixers also clean and polish items, returning them to a new, pristine state. Fixer swarms cannot effect repairs on objects with more than 3 wounds, but they will apply a +30 modifier to Hardware Tests for repair.'
	});
	gear.set("Gas-Jet System", {
		name: "Gas-Jet System", complexity: "Mod", restricted: false, gp: 2, pg: 324, description: 'Maneuver in microgravity with embedded nozzles. Gain the Movement Rate Thrust Vector (Gas Jet) at 4/12 (biomorphs) or 8/40 (synthmorphs).'
	});
	gear.set("Ghostrider Module", {
		name: "Ghostrider Module", complexity: "Min", restricted: false, gp: 1, pg: 320, ware: ["C", "H"], description: 'This implant is a host for carrying another infomorph. This infomorph can be another muse, an ALI, a backed-up ego, or a fork. The module is linked to your mesh inserts, so the ghost-rider can mentally communicate with you, access the mesh, and connect to other parts of your PAN, depending on what access privileges you allow. You may install multiple modules.'
	});
	gear.set("Heavy Combat Armor", { name: "Heavy Combat Armor", gp: 3, ware: ["H"], pg: 214 });
	gear.set("Impact", { name: "Impact", gp: 1, ware: "H", pg: 217 });
	gear.set("Large Fabber", {
		name: "Large Fabber", complexity: "Maj", restricted: false, gp: 3, pg: 343, description: 'Large-sized fabbers are non-portable, unless mounted on a bot or vehicle, with a volume of 80 liters. They can manufacture most medium-sized items, or two or more of the same small-sized items at a time, or four or more identical very small objects at once.'
	});
	gear.set("Laser/Microwave Link (Micro)", { name: "Laser/Microwave Link (Micro)", gp: 1, pg: 336 });
	gear.set("Medium Fabber", {
		name: "Medium Fabber", complexity: "Mod", restricted: false, gp: 2, pg: 343, description: 'These desktop fabbers can manufacture up to small-sized items. They may be able to print multiple of the same very small items at once. They have a maximum volume of 40 liters.'
	});
	gear.set("Pressure Tent", {
		name: "Pressure Tent", complexity: "Mod", restricted: false, gp: 2, pg: 341,
		description: 'This pack self-unfolds in 3 action turns into a pressurized shelter for up to 4 medium-sized people plus gear. A built-in breather will convert carbon dioxide from the atmosphere (if any) indefinitely. It also packs itself.'
	});
	gear.set("Reactive", {
		name: "Reactive", complexity: "Min", restricted: false, gp: 1, pg: 217, description: ``
	});
	gear.set("Refractive Glazing", { name: "Refractive Glazing", gp: 1, ware: "H", pg: 217 });
	gear.set("Robomule", {
		name: "Robomule", complexity: "Mod", gp: 2, pg: 349, description: 'These six-legged cargo drones are designed to carry large, non-portable gear, such as servers, healing vats, tool shops, etc. They also serve as general-purpose supply drones, with smart-material straps and webbing to hold items and an envirosealed pod to protect its load from the environment.'
	});
	gear.set("Rocket Pack", {
		name: "Rocket Pack", complexity: "Mod", restricted: false, gp: 2, pg: 352, description: 'This is a miniature metallic hydrogen rocket that you strap to your back, with two rocket exhausts extending out to either side, away from your body or legs. To prevent burns, a biomorph must be wearing a heat resistant garment such as a vacsuit. Also, to prevent harm, the thrust must be kept sufficiently low that it can only take off on Mars or moons with even lower gravity. A rocket pack can keep you airborne for up to 15 minutes in Mars gravity, or 30 minutes on Luna, Titan, and smaller moons and asteroids. It can be used to reach orbit and land again on Luna, Titan, and other similarly small bodies like the Jovian moons.'
	});
	gear.set("Satnet-in-a-Can", {
		name: "Satnet-in-a-Can", complexity: "Maj", restricted: false, gp: 3, pg: 336, description: 'This medium-sized metallic-hydrogen missile can be launched on any world with a gravity of 2 g or less. A smart-material launch tube automatically extends struts and aims it at the proper trajectory. It deploys 32 small satellites into orbit, which after 1–2 days will be in position to cover the planet with GPS data, low-resolution hyperspectral imaging (down to 100 meters), and communication/mesh relay between anyone on the planet with a radio booster. The satellites can map the planet and provide weather data using Know: Meteorology 60.'
	});
	gear.set("Self-Healing", {
		name: "Self-Healing", complexity: "Min", restricted: false, gp: 1, pg: 217, description: 'This mod can only be applied to armor. When activated, it repairs the armor at a rate of 1d10 per hour.'
	});
	gear.set("Server", { name: "Server", gp: 2, pg: 337, size: "L" });
	gear.set("Shield Drone", {
		name: "Shield Drone", complexity: "Min", gp: 1, restricted: false, pg: 347, size: "S",
		description: 'These tracked drones essentially function as large ballistic shields and movable cover for special ops teams. They provide AV +6/+12 to anyone using them for cover. The bot itself is little more than a platform (treat as small size if targeted directly).'
	});
	gear.set("Skillsoft", {
		name: "Skillsoft", complexity: "Mod", restricted: false, gp: 2, pg: 320, description: 'These are skills encoded in software form. Used with a skillware system, they provide you with a rating of up to 40 in a single active skill or 80 in a Know skill (your aptitudes do not effect this rating; if you already possess the skill, use the highest value).'
	});
	gear.set("Small Fabber", {
		name: "Small Fabber", complexity: "Min", restricted: false, gp: 1, pg: 343, description: 'These small and portable fabbers can produce objects up to a very small size with the appropriate blueprint. They have a maximum volume of 2 liters.'
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
	gear.set("Structural Enhancement", {
		name: "Structural Enhancement", complexity: "Maj", restricted: false, gp: 3, pg: 323, description: 'This modification bolsters the shell’s structural integrity, increasing its toughness and ability to take damage. Increase Wound Threshold by 2, Durability by 10, and Death Rating by 20.'
	});
	gear.set("TacNet", {
		name: "TacNet", complexity: "Mod", restricted: false, gp: 2, pg: 327, description: `Tacnets allow a group and their muses/gear to share real-time tactical situational and sensory data over encrypted mesh channels. They are used by sports teams, security/military units, gamers, and anyone else that needs to coordinate actions. Tacnets  provide the following functions: 
		• Maps: Tacnets present maps from a bird’s eye, three-dimensional interactive, or first-person entoptic view, tagging notable features and marking distances. They can also plot maps based on sensory input, positioning systems, and other data.
		• Positioning: Tacnets indicate the position of known people, bots, vehicles, and other features according to sensory input or their calculated trajectories. Friend-or-foe tags highlight allies and opponents, noting their lines of sight and fields of fire and alerting the user to areas of potential cover or danger.
		• Sensory Input: Tacnets share all sensory input available from members and linked devices. This includes data from physical senses, portable sensors, smartlink guncams, XP feeds, etc. Users can immediately call up and access the sensor feeds of others as needed.
		• Communications Management: Tacnets maintain an encrypted VPN between users. They actively monitor for dropped signals and hacking/sniffing/jamming attempts. Treat as a system defender with Infosec 40 and Interface 40..
		• Smartlink/Weapon Data: Tacnets monitor the status of weapons, accessories, and other gear, bringing damage, shortages, ammo counts, and other issues to the user’s attention.
		• Medical Data: Tacnets monitor the health of their users via medichines, implants, and other sensors. Users can call up health reports on their allies. • Overwatch: Tacnets keep an eye out for potential threats. They provide a +10 modifier to Perceive Tests against surprise ▶227.
		• Indirect Fire: Members of a tacnet can provide targeting data to each other for purposes of indirect fire ▶206. • Analysis: Tacnets can analyze real-time situations to provide suggestions and warnings. The app's god’s-eye view of a situation helps it to identify facts and details that individuals overlook. For example, a tacnet can analyze an opposing team's weapons, shots fired, and potential injuries and suggest tactical maneuvers. Querying a tacnet for advice is a quick action; treat as Know: Tactics 80.

		Many tacnet features are immediately accessible to the user via their AR display; other data can be accessed with a quick action. The GM determines when the tacnet provides important alerts to the user. At the GM’s discretion, some of these features may apply modifiers to the character’s tests. Tacnets are designed to be overseers, not to take action. They will not hack opponents, pilot vehicles, or interface with weapon systems.`
	});
	gear.set("Thruster Pack", {
		name: "Thruster Pack", complexity: "Min", restricted: false, gp: 1, pg: 352, description: 'Worn for micrograv operations or EVA in vacuum, this thruster pack uses vectored thrust nozzles to maneuver.'
	});
	gear.set("Weapon Mount", { name: "Weapon Mount", gp: 1, ware: ["C", "H"], pg: 323 });

	return gear;
}

function biomorphSupportRockNoHabitat(){
	return [
		structuredClone(gear.get("Pressure Tent")),
		structuredClone(gear.get("Spindle"))
	];
}

function docBotTank(options={}){
	let tank = [
		{ ...gear.get("DocBot"), notes: `can print Explorenaut`},
	];

	if(!(options?.ghostriderModule===false)){
		tank.push(
			{ ...gear.get("Ghostrider Module"), notes: `installed@DocBot`},
		);
	}

	if(options?.armed){
		tank.push(
			{ ...gear.get("Weapon Mount"), notes: `installed@DocBot`},
			{ ...gear.get("Battle Laser"), notes: `installed@DocBot`}
		);
	}

	if(!(options?.armored===false)){
		tank.push(
			{ ...gear.get("Heavy Combat Armor"), notes: `installed@DocBot`},
			{ ...gear.get("Structural Enhancement"), notes: `installed@DocBot` },
		);	
	}

	if(!(options?.selfRepair===false)){
		tank.push(
			{ ...gear.get("Self-Healing"), notes: "installed@DocBot" },
			{ ...gear.get("Fixer Swarm"), name: gear.get("Fixer Swarm").name + " (Hive)", gp: gear.get("Fixer Swarm").gp + 1, notes: "installed@DocBot" },
		);
	}

	if(options?.uparmored){
		tank.push(
			{ ...gear.get("Reactive"), notes: `installed@DocBot`},
			{ ...gear.get("Impact"), notes: `installed@DocBot`},
			{ ...gear.get("Refractive Glazing"), notes: `installed@DocBot`},
		);
	}

	return tank;
}

function dwarfTank(options={}){

	let tank = [
		{ ...gear.get("Dwarf"), notes: `Large, Disassembly Tools`},
	];

	if(!(options?.ghostriderModule===false)){
		tank.push(
			{ ...gear.get("Ghostrider Module"), notes: `installed@Dwarf`},
		);
	}

	if(options?.armed){
		tank.push(
			{ ...gear.get("Weapon Mount"), notes: `installed@Dwarf`},
			{ ...gear.get("Battle Laser"), notes: `installed@Dwarf`}
		);
	}

	if(!(options?.armored===false)){
		tank.push(
			{ ...gear.get("Heavy Combat Armor"), notes: `installed@Dwarf`},
		);	
	}

	if(!(options?.selfRepair===false)){
		tank.push(
			{ ...gear.get("Self-Healing"), notes: "installed@Dwarf" },
			{ ...gear.get("Fixer Swarm"), name: gear.get("Fixer Swarm").name + " (Hive)", gp: gear.get("Fixer Swarm").gp + 1, notes: "installed@Dwarf" },
		);
	}

	if(options?.uparmored){
		tank.push(
			{ ...gear.get("Structural Enhancement"), notes: `installed@Dwarf` },
			{ ...gear.get("Reactive"), notes: `installed@Dwarf`},
			{ ...gear.get("Impact"), notes: `installed@Dwarf`},
			{ ...gear.get("Refractive Glazing"), notes: `installed@Dwarf`},
		);
	}

	return tank;
}

function explorenautTank(options={}){
	let tank = [
		{ ...gear.get("Explorenaut"), notes: `Small, no Long weapons`},
	];

	if(!(options?.ghostriderModule===false)){
		tank.push(
			{ ...gear.get("Ghostrider Module"), notes: `installed@Explorenaut`},
		);
	}

	if(!(options?.armored===false)){
		tank.push(
			{ ...gear.get("Heavy Combat Armor"), notes: `installed@Explorenaut`},
		);	
	}

	if(!(options?.structuralEnhancement===false)){
		tank.push(
			{ ...gear.get("Structural Enhancement"), notes: `installed@Explorenaut` },
		);	
	}

	if(!(options?.selfRepair===false)){
		tank.push(
			{ ...gear.get("Self-Healing"), notes: "installed@Explorenaut" },
			{ ...gear.get("Fixer Swarm"), name: gear.get("Fixer Swarm").name + " (Hive)", gp: gear.get("Fixer Swarm").gp + 1, notes: "installed@Explorenaut" },
		);
	}

	if(options?.uparmored){
		tank.push(
			{ ...gear.get("Reactive"), notes: `installed@Explorenaut`},
			{ ...gear.get("Impact"), notes: `installed@Explorenaut`},
			{ ...gear.get("Refractive Glazing"), notes: `installed@Explorenaut`},
		);
	}

	return tank;
}

function rocketry(){
	return [
		{ ...gear.get("Rocket Pack"), name: gear.get("Rocket Pack").name + " (Blueprint unlimited)", gp: gear.get("Rocket Pack").gp + 1 },
	];
}

const gear = getGearData();
const mission_gear = new Map();

mission_gear.set("EGR_2.71828", {
	sentinel: "EGR_2.71828",
	mp: 10,
	gp: 24,
	gear: [
		{ name: "converting mp to gp", gp: -10 },
		structuredClone(gear.get("Fake Ego ID")),
		//{ ...gear.get("Gas-Jet System"), name: gear.get("Gas-Jet System").name + " (Blueprint unlimited)", gp: gear.get("Gas-Jet System").gp + 1 },
		//structuredClone(gear.get("Server")),
		//structuredClone(gear.get("Robomule")),
		//{ ...gear.get("Spindle Climber"), name: gear.get("Spindle Climber").name + " (Blueprint unlimited)", gp: gear.get("Spindle Climber").gp + 1 },
		//{ ...gear.get("Impact"), name: gear.get("Impact").name + " (Blueprint unlimited)", gp: gear.get("Impact").gp + 1 },
		//{ ...gear.get("Refractive Glazing"), name: gear.get("Refractive Glazing").name + " (Blueprint unlimited)", gp: gear.get("Refractive Glazing").gp + 1 },
		//{ ...gear.get("Shield Drone"), name: gear.get("Shield Drone").name + " (Blueprint unlimited)", gp: gear.get("Shield Drone").gp + 1 }
	]
		.concat(biomorphSupportRockNoHabitat())
		.concat(docBotTank({armed: true, uparmored: true}))
		//.concat(dwarfTank({armed: false}))
		.concat(explorenautTank({selfRepair: false, structuralEnhancement: false, armored: false}))
		.concat(rocketry())
		,
	morph: [
		{ name: "converting mp to gp", mp: 10 }
	]
});

mission_gear.set("SysRig.exe", {
	sentinel: "SysRig.exe",
	mp: 6,
	gp: 20,
	gear: [
		structuredClone(gear.get("Large Fabber")),
		structuredClone(gear.get("Robomule")),
		structuredClone(gear.get("Fake Ego ID")),
		//structuredClone(gear.get("TacNet"))
	],
	morph: []
});

function scenario_battle_medic(){
	mission_gear.get("EGR_2.71828").gear = [
		{ name: "converting mp to gp", gp: -10 },
		structuredClone(gear.get("Fake Ego ID")),
	]
	.concat(biomorphSupportRockNoHabitat())
	.concat(docBotTank({armed: true, uparmored: true}))
	.concat(rocketry())

	mission_gear.get("EGR_2.71828").gear.push(
		{ ...gear.get("Dwarf"), notes: `Disassembly Tools (pg. 340)` }
	);
}
scenario_battle_medic();
console.clear();

function report_mission_gear(options={mg:mission_gear, json: false}){
	for (let [key, value] of options.mg) {
		if(!(options?.json)){
			console.log({
				sentinel: key,
				gear: value.gear.map(i => `${i.name} (pg. ${i.pg})${i.notes ? " : " : ""}${i.notes ? i.notes : ""}`),
				gp_left: value.gp - value.gear.reduce((acc, i) => acc + i.gp, 0),
				mp_left: value.mp - value.morph.reduce((acc, i) => acc + i.mp, 0)
			});
		}else{// is json
			fs.writeFileSync(`${key}.json`, JSON.stringify({
				sentinel: key,
				gear: value.gear.map(i => `${i.name} (pg. ${i.pg})${i.notes ? " : " : ""}${i.notes ? i.notes : ""}`),
				gp_left: value.gp - value.gear.reduce((acc, i) => acc + i.gp, 0),
				mp_left: value.mp - value.morph.reduce((acc, i) => acc + i.mp, 0)
			}, null, 2));
		}
	}
}

report_mission_gear();
report_mission_gear({mg: mission_gear, json: true});
// fs.writeFileSync('file.json', JSON.stringify(jsonVariable));