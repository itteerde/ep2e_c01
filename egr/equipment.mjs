import fs from 'fs';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

function getGearData() {
	const gear = new Map();

	gear.set("App-Lock", {
		name: "App-Lock", complexity: "Min", restricted: false, gp: 1, description: `App-lock makes it more difficult for an installed app to be removed without proper authentication (apply a −30 modifier). This is useful for infomorphs/cyberbrains that are brainhacked and modified against their will. The protected apps must be designated in advance (when app-lock is installed or reconfigured).`
	});
	gear.set("Auto-Erase", {
		name: "Auto-Erase", complexity: "Min", restricted: false, gp: 1, description: `This app will automatically erase the infomorph (or the ego within a cyberbrain) if certain pre-programmed conditions are met. This is useful if you are worried about brainhacking, forknapping, or being trapped in a lockbox. Common trigger conditions include detected brainhacking, a codephrase, psychosurgery, a designated time period, or upon failure to receive a periodic message. Some people use this app to keep forks from going errant; many polities legally require forks to be equipped to delete themselves after a set number of hours. Auto-erase functions even if the infomorph does not have privileges on that system.`
	});
	gear.set("Battle Laser", {
		name: "Battle Laser", complexity: "Maj", restricted: true, gp: 3, ware: ["H"], pg: 208, properties: ["Long"], description: `This heavy laser pulser is typically mounted and used for battlefield support, firing more powerful beams than the standard laser pulser.`
	});
	gear.set("Breadcrumb System", {
		name: "Breadcrumb System", complexity: "Min", restricted: false, gp: 1, pg: 336, description: `This worn device leaves micro-sized “breadcrumb” motes behind as you move, roughly every 25 meters. These devices mesh with each other and other devices, allowing you to map your position in relation to the breadcrumb trail, and creating a mesh connection all the way back to the trail’s source. This is for tracking your movement, finding your way back, and keeping meshed with your camp or ship in derelict habitats, wilderness, and other areas where there is no local functioning mesh.`
	});
	gear.set("Cauterizer", {
		name: "Cauterizer", complexity: "Mod", restricted: true, gp: 2, pg: 327, description: `This scorch app rips into the ego with destructive neurofeedback routines. Against a cyberbrained ego, the cauterizer inflicts DV 1d10 + 5, +1d6 per superior success, to the target's morph (this is physical damage, not mesh damage). Against an infomorph, the cauterizer inflicts a DV 3d10 mesh attack of digitized neurological damage.`
	});
	gear.set("Cleaner", {
		name: "Cleaner", complexity: "Min", restricted: false, gp: 1, pg: 345, description: `This nanoswarm cleans, polishes, and removes dirt and stains. You may deploy it to sanitize an area, specific objects, or people. Some facilities employ permanent cleaner swarms to keep their area spotless. Cleaners are especially useful for decontaminating an area of hazardous toxins or chemicals. Covert operatives and criminals use cleaners to eliminate potential forensic evidence, such as blood, hair, or anything that could be DNA-typed.`
	});
	gear.set("Defrag", {
		name: "Defrag", complexity: "Mod", restricted: false, gp: 2, pg: null, description: `This app monitors your digital mental-state and takes measures to keep it in prime condition and optimize its performance. Whenever you take a short rest, you recover an additional pool point.`
	});
	gear.set("Disassembler", {
		name: "Disassember", complexity: "Mod", restricted: true, gp: 2, pg: 345, description: `Also known as smart corrosives, these nanobots break down matter. They can be programmed to take apart specific materials while ignoring others, leaving them intact. They are sometimes used as an anti-matériel weapon, eating away at synthmorphs, weapons, and gear while ignoring biomorphs (or vice versa). Upon contact, disassemblers inflict DV 1d6 per action turn. Accumulated damage counts as a wound when your Wound Threshold is reached. Worn armor (both energy and kinetic) protects against this damage (unless the swarm is programmed to ignore it), but is also eaten away; reduce the AV by the damage inflicted, splitting it between armor types (i.e., a disassembler inflicting DV 2 turns AV 4/2 into 3/1).`
	});
	gear.set("DocBot", {
		name: "DocBot", complexity: "Maj", restricted: false, gp: 3, pg: 347, type: ["Robot"],
		description: 'These wheeled medical robots are designed to tend to and transport injured or sick people. They carry a fabber for medical supplies and pharmaceuticals, miscellaneous medical gear, a secure container for carrying heads, and 4–8 articulated arms for conducting remote surgery. They are often loaded up with healing spray and meds (acquired separately).'
	});
	gear.set("Drone Rig", {
		name: "Drone Rig", complexity: "Mod", restricted: false, gp: 2, pg: 320, ware: ["C", "H", "M"], description: `This simsense augmentation gives you better control when jamming drones (Remote Operations ▶346). You ignore the −10 modifier for jamming.`
	});
	gear.set("Dwarf", {
		name: "Dwarf", complexity: "Maj", restricted: false, gp: 3, size: "L", pg: 349, description: 'These large industrial bots are named not just for their primary use — mining, excavation, tunneling, and construction — but because the default AIs they shipped with had a programmed tendency to happily whistle as they worked. Dwarfs are quadrupedal walkers, equipped with massive modular industrial tools like boring drills, shovels, hydraulic jacks, jackhammers, scooping arms, acid sprays, and so on.'
	});
	gear.set("E-Veil", {
		name: "E-Veil", complexity: "Min", restricted: true, gp: 1, pg: 326, description: `E-veil obfuscates the presence of designated apps within the infomorph’s code. Any attempt to scan the infomorph using Interface is opposed with a Program skill of 80. The hidden apps must be designated when e-veil is activated.`
	});
	gear.set("Ecto", { name: "Ecto", gp: 1 });
	gear.set("Ego Bridge", {
		name: "Ego Bridge", complexity: "Mod", restricted: false, gp: 2, pg: 342, description: `Ego Bridge: Ego bridges are devices used for uploading from and downloading to biological brains (Backups & Uploading ▶286). The bridge’s cranial sensors unfold around your head when in use, imaging and scanning your brain. Needles in the neck rest deploy nanobots that either measure your mind and neural connections (uploading) or physically re-map them (downloading).`
	});
	gear.set("Emergency Bubble", {
		name: "Emergency Bubble", complexity: "Maj", restricted: false, gp: 3, pg: 341,
		description: 'Used as a last-resort life raft on spaceships, an emergency bubble is made of advanced smart materials and comes in a large but portable package that can be quickly inflated around you in 1 action turn, usually inside an airlock. The bubble has a 5-meter diameter and can comfortably accommodate 4 people for 1 week. It maintains 1 atmosphere of pressure in a vacuum, protects the inhabitants from temperatures ranging from −175 to 140 C, and provides light and breathable air. A built-in autocook ▶343 provides food and liquids. It features a simple airlock, carries an emergency distress beacon, and can be transparent, opaque, or polarized. It is powered by a nuclear battery and includes comfortable inflatable furniture. This bubble can also be partially inflated as a dome and staked down to a surface to serve as an emergency shelter on asteroids or other surfaced environments.'
	});
	gear.set("Energy Efficiency", {
		name: "Energy Efficiency", complexity: "Maj", restricted: false, gp: 3, pg: 323, description: `The bioware version of this ware boosts your metabolism. The hardware version optimizes your shell’s energy usage. The meshware version optimizes code. This gives you 1 extra short recharge per day.`
	});
	gear.set("Engineer", {
		name: "Engineer", complexity: "Min", restricted: false, gp: 1, pg: 345, description: `Engineer microswarms are used for construction purposes: erecting walls, digging tunnels, sealing holes, reinforcing foundations, and so on. Though they work slower than robots, they are useful for hard-to-get areas, complex designs, or handling difficult materials.`
	});
	gear.set("Enhanced Security", {
		name: "Enhanced Security", complexity: "Mod", restricted: false, gp: 2, pg: 326, description: `This meshware installs additional firewall and security layers, making the infomorph/cyberbrain harder to hack. Apply a −10 modifier to attempts to brainhack your digital mind. You can also use this meshware to enter a heightened state of security — Defensive Mode. When activated with a quick action, the modifier to brainhack you is increased to −30. This lock-down status impairs your functions, however; you cannot use Insight pool while it is active and suffer a −3 Initiative modifier.`
	});
	gear.set("Envirosuit", {
		name: "Envirosuit", complexity: "Maj", restricted: false, gp: 3, pg: 351, description: `These shells feature both increased radiation shielding and thermal regulation systems to withstand extreme environments such as deep undersea and the surfaces of Mercury and Venus. They can withstand temperatures from −270 to 1,000 C.`
	});
	gear.set("Exploit", {
		name: "Exploit", complexity: "Mod", restricted: true, gp: 2, pg: 326,
		description: 'A hacker library/tool for taking advantage of known software vulnerabilities. Required for hacking.'
	});
	gear.set("Explorenaut", {
		name: "Explorenaut", complexity: "Maj", restricted: false, gp: 3, pg: 346,
		description: 'These small-sized bots travel on smart treads or with thrust-vector jets. They are loaded with sensors and favored for gatecrashing and similar exploration ops.  A pair of manipulator arms are used for taking samples.'
	});
	gear.set("Fake Brainprint", {
		name: "Fake Brainprint", complexity: "Maj", restricted: true, gp: 3, pg: -1, description: ``
	});
	gear.set("Fake Ego ID", {
		name: "Fake Ego ID", complexity: "Maj", restricted: true, gp: 3, pg: 315, description: `This forged ID will pass in most inner system and Jovian Republic habitats, and sometimes others. It gives you a rep score in one network with that ID at 10.`
	});
	gear.set("Fault Tolerance", {
		name: "Fault Tolerance", complexity: "Mod", restricted: false, gp: 2, pg: 326, description: `This module provides redundancy and loadsharing functions. You receive AV 5 against mesh attacks.`
	});
	gear.set("Fixer", {
		name: "Fixer", complexity: "Mod", restricted: false, gp: 2, pg: 345, description: 'Fixers repair objects and restore them to their original specifications. They must be programmed with the item’s nanofabrication blueprints or given time (~an hour) to scan an identical object; they are not smart enough to recognize and repair damage on their own. A fixer swarm repairs 1d10 [6] damage per hour. Once all damage is repaired, it will restore 1 wound per day. Fixers also clean and polish items, returning them to a new, pristine state. Fixer swarms cannot effect repairs on objects with more than 3 wounds, but they will apply a +30 modifier to Hardware Tests for repair.'
	});
	gear.set("Gas-Jet System", {
		name: "Gas-Jet System", complexity: "Mod", restricted: false, gp: 2, pg: 324, description: 'Maneuver in microgravity with embedded nozzles. Gain the Movement Rate Thrust Vector (Gas Jet) at 4/12 (biomorphs) or 8/40 (synthmorphs).'
	});
	gear.set("Ghostrider Module", {
		name: "Ghostrider Module", complexity: "Min", restricted: false, gp: 1, pg: 320, ware: ["C", "H"], description: 'This implant is a host for carrying another infomorph. This infomorph can be another muse, an ALI, a backed-up ego, or a fork. The module is linked to your mesh inserts, so the ghost-rider can mentally communicate with you, access the mesh, and connect to other parts of your PAN, depending on what access privileges you allow. You may install multiple modules.'
	});
	gear.set("Guardian Angel", {
		name: "Guardian Angel", complexity: "Mod", restricted: false, gp: 2, pg: 347, description: `Similar to gnats, guardian angels are larger rotorcraft used for defensive purposes. They hover around their charges, keeping a watchful eye out to protect them from threats.`
	});
	gear.set("Hand Laser", {
		name: "Hand Laser", complexity: "Mod", restricted: true, gp: 2, pg: 208, ware: ["C", "H"], description: `The morph has a weapon-grade laser implanted in its forearm, with a flexible waveguide leading to a lens located between the first two knuckles on the morph’s dominant hand. The laser’s batteries are implanted and not easily swapped out in biomorphs.`
	});
	gear.set("Hardened Skeleton", {
		name: "Hardened Skeleton", complexity: "Maj", restricted: false, gp: 3, pg: 322, ware: ["C", "H"], description: `The morph’s skeleton is laced with strengthening amorphous metals and fullerenes. Increase your Wound Threshold by 1, Durability by 5, Death Rating by 8 (biomorphs) or 10 (synthmorphs), and your SOM Check by 10.`
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
	gear.set("Machine Gun", {
		name: "Machine Gun", complexity: "Maj", restricted: true, gp: 3, pg: 210, description: `Machine guns are heavy weapons, typically mounted, and intended to provide continuous fire for support or suppressive purposes.`
	});
	gear.set("Medichines", {
		name: "Medichines", complexity: "Maj", restricted: true, gp: 3, pg: 322, description: `An implanted hive circulates nanobots throughout your system, monitoring your health at the cellular level and fixing any problems. Medichines allow you to ignore the effect of 1 wound (cumulative with other mods, up to a max of 3 ignored wounds). They also accelerate your natural healing (Biomorph Healing ▶221). If damage taken exceeds your Durability, or you take 5 or more wounds in an hour, the medichines automatically stabilize you, prevent you from bleeding out, place you into a medical stasis (during which you are unconscious and unable to act), and broadcast for emergency services via your mesh inserts. Medichines also reduce the duration and effects of drugs, toxins, and pathogens by half (cumulative with toxin filters). You can override this protection to permit intoxication or other effects, but unless you activate a second override, medichines prevent the toxins from accumulating to lethal or permanently harmful levels. Medichines provide health status reports to your mesh inserts and muse. Medichines for synthmorphs and bots consist of nanobots that monitor and repair the shell’s integrity and internal system functions. Note that the synthmorph version of medichines allows the synthmorph to self-repair in the same manner by which a biomorph with medichines would naturally heal (1d10 per hour, 1 wound per day).`
	});
	gear.set("Mind Amp", {
		name: "Mind Amp", complexity: "Maj", restricted: false, gp: 3, pg: 320, description: `Mind amp alters your neural architecture and augments neuronal functions. This accelerates your mental faculties and ability to receive and process sensory information. Time subjectively slows down for you, allowing you to discern things happening too quickly for others to perceive, such as the individual frames of an old analog film or an accelerated audio recording. Mind amp increases your Insight pool by 2.`
	});
	gear.set("Mnemonics", {
		name: "Mnemonics", complexity: "Min", restricted: false, gp: 1, pg: 316, description: `The electronic minds of cyberbrains and infomorphs mimic biological brains in how they store memories — as networked but scattered groups of neurons. Despite being computerized, their memory recall is not any more efficient than bio brains. Mnemonics systems, however, allow memories to be tagged and roughly indexed. This improves memory recall, though it remains far from perfect. Mnemonics applies a +20 modifier to COG Checks for memory recall. Mnemonic data can be transferred with an ego when it resleeves, but the modifier applies only for memories that were recorded when mnemonics ware is present. Mnemonics systems are included in all cyberbrains.`
	});
	gear.set("Mobility System", {
		name: "Mobility System", complexity: "Mod", restricted: false, gp: 2, pg: 324, description: `Your morph is upgraded with an additional means of getting around (Movement Types ▶231). Any movement type can be chosen that works with your shell’s design, with approval from the GM. You may have multiple (different) systems.`
	});
	gear.set("Multi-Focus", {
		name: "Multi-Focus", complexity: "Min", restricted: false, gp: 1, pg: null, description: `This mod is available to morphs with multi-tasking ware. You can either focus your detailed perception on one additional thing with the same quick action or maintain one mental-based task action that turn (e.g., research, hacking, programming, psychosurgery) for free. This does not provide bonus actions. You may take this mod multiple times.`
	});
	gear.set("Multi-Tasking", {
		name: "Multi-Tasking", complexity: "Mod", restricted: false, gp: 2, pg: 320, description: `This cybernetic or software module enables your brain to focus on two things at the same time — something our minds cannot usually handle — without any context-switching confusion or increased error rates from inattention. Multi-Tasking increases your Insight Pool by 1.`
	});
	gear.set("Nuclear Battery", {
		name: "Nuclear Battery", complexity: "Min", restricted: false, gp: 1, pg: 317, description: `These micro-sized batteries generate power from radio-isotope decay, storing it for use. They can produce power for years or even decades. They are often used to recharge standard batteries.`
	});
	gear.set("Oracles", {
		name: "Orcales", complexity: "Mod", restricted: false, gp: 2, pg: 318, ware: ["C", "H", "M"], description: `This neural macrosensing processor helps you pay attention to sensory input you are not focusing on, alerting you to important things you might otherwise overlook. Oracles provide a +10 bonus to Perceive and negate the distraction modifier for Perceive Tests.`
	});
	gear.set("Persistence", {
		name: "Persistence", complexity: "Mod", restricted: false, gp: 2, pg: 326, description: `This meshware uses rootkit techniques to keep the digital mind active despite attempts to crash it. Increase the infomorph’s Durability by 10 and Wound Threshold by 2.`
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
	gear.set("Scout", {
		name: "Scout", complexity: "Min", restricted: false, gp: 1, pg: 345, description: `A scout nanoswarm will systematically map and explore an area, sampling and chemically analyzing all materials and substances it encounters. Scouts can thoroughly map a room, identify all of the objects, and collect forensic evidence about who recently visited and what has gone on there. Scouts have Know: Chemistry 60 and Medicine: Forensics at 60. They can identify DNA, gunpowder residue from firearms, clothing fibers, smart animal dander, and similar evidence up to 2 weeks old. Scouts can penetrate inside drawers, closets, clothing, and other areas that are not air-tight.`
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
	gear.set("Skillware", {
		name: "Skillware", complexity: "Maj", restricted: false, gp: 3, pg: 321, description: `Your brain is laced with a network of artificial neurons that can be formatted with information. This allows you to download skillsofts ▶below into your brain, gaining the use of those programmed skills until the skillsoft is erased or replaced. Skillware systems are only capable of handling 120 total skill points worth of skillsofts at a time. Switching out a skillsoft is a complex action.`
	});
	gear.set("Small Fabber", {
		name: "Small Fabber", complexity: "Min", restricted: false, gp: 1, pg: 343, description: 'These small and portable fabbers can produce objects up to a very small size with the appropriate blueprint. They have a maximum volume of 2 liters.'
	});
	gear.set("Smart Anchors", {
		name: "Smart Anchors", complexity: "Min", restricted: false, gp: 1, pg: 341, description: 'When activated, this worn harness fires out up to 6 anchoring cables with a length of 10 meters. These cables spike into ice, dirt, or rock, or use grip pads to adhere to an appropriate surface. This prevents you from drifting into space, accidentally kicking off with terminal velocity, or falling off a cliff face. The device’s ALI targets and deploys anchors, and can be instructed to do so under certain conditions'
	});
	gear.set("Sniper Rifle", {
		name: "Sniper Rifle", complexity: "Maj", restricted: true, gp: 3, pg: 210, description: ``
	});
	gear.set("Spindle", {
		name: "Spindle", complexity: "Mod", restricted: false, gp: 2, pg: 341, description: 'Spindles are wound lengths of thin (0.2 millimeters) but super-strong fullerene cable. It can extend 250 meters of cable capable of supporting 5,000 kilograms of weight at 1 g. The spindle also contains a specialized fabber that can manufacture more cable and extend it indefinitely, at a rate of 1 meter per minute, as long as it is fed with raw materials. The spindle can cut the cables it produces at any length. If fixed in place with built-in grip pads, it can also retract the cable at a rate of 50 meters per action turn, or re-absorb cables at the rate of 5 meters per minute. Spindle cables can be cut by inflicting 30 points of damage.'
	});
	gear.set("Spindle Climber", {
		name: "Spindle Climber", complexity: "Min", restricted: false, gp: 1, pg: 341, description: 'This device attaches to a spindle and transforms it into a highly effective climbing device. The spindle climber has two functions. First, it attaches hardened tips to the spindle’s cable and fires it at high speed, up to 50 meters, with sufficient force to imbed the tip into almost any sufficiently durable surface (if used as a weapon, it inflicts DV 2d10). Second, the spindle climber can pull itself and up to 250 kg up the cable at a speed of 12 meters per turn.'
	});
	gear.set("Standard Battery", {
		name: "Standard Battery", complexity: "Min", restricted: false, gp: 1, pg: 317, description: `Batteries are micro-sized, high-density, ultra-capacity, rechargeable, room-temperature superconductors good for hundreds of hours of operation.`
	});
	gear.set("Stress Control", {
		name: "Stress Control", complexity: "Mod", restricted: false, gp: 2, pg: 323, ware: ["B", "M"], description: `Your morph’s endocrine system (or its software simulation) has been modified to give you greater control over cortisol and similar hormones. This enables you to manage your stress levels and responses. Apply a +10 modifier to WIL Checks against stress or triggered disorders and raise your Trauma Threshold by 1. This does not impact your Lucidity or Insanity Rating.`
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
	gear.set("Tactical Multipurpose (TMP)", {
		name: "Tactical Multipurpose (TMP)", complexity: "Mod", restricted: true, gp: 2, pg: 212, description: `Tactical Multipurpose (TMP): TMP devices can be set to detonate in either fragmentation or high-explosive mode. Fragmentation explosives spread a cloud of lethal flechettes over the area of effect. High-explosive seekers/grenades create a destructive shock and heat wave.`
	});
	gear.set("Thruster Pack", {
		name: "Thruster Pack", complexity: "Min", restricted: false, gp: 1, pg: 352, description: 'Worn for micrograv operations or EVA in vacuum, this thruster pack uses vectored thrust nozzles to maneuver.'
	});
	gear.set("Weapon Mount", { name: "Weapon Mount", gp: 1, ware: ["C", "H"], pg: 323 });

	return gear;
}

function toBlueprint(item) {
	return { ...gear.get(item), name: `${gear.get(item).name} Blueprint Multi-Use`, gp: gear.get(item).gp + 1 }
}

const gear = getGearData();
const mission_gear = new Map();

function egr_docbot(options = {}) {

	const install_string = "@DocBot";

	const pack = [
		{ ...gear.get("DocBot"), notes: `` },
	];

	if (options?.ghostrider) {

		if (Number.isInteger(options.ghostrider) && options.ghostrider > 1 && options.ghostrider <= 4) {
			for (let n = 0; n < options.ghostrider; n++) {
				pack.push(
					{ ...gear.get("Ghostrider Module"), notes: install_string },
				);
			}
		} else {
			pack.push(
				{ ...gear.get("Ghostrider Module"), notes: install_string },
			);
		}

	}

	if (options?.mobility) {
		pack.push(
			{ ...gear.get("Mobility System"), name: `${gear.get("Mobility System").name} ${options?.mobility?.type ? options.mobility.type : "Thrust Vector (Rocket)"}`, notes: install_string },
		);
	}

	if (options?.medichines) {
		pack.push(
			{ ...gear.get("Medichines"), notes: `@DocBot` },
		);
	}

	if (options?.breadcrumb) {
		pack.push(
			{ ...gear.get("Breadcrumb System "), notes: `@DocBot` },
		);
	}

	if (options?.armored) {

		if (options.armored.heavy_combat_armor) {
			pack.push(
				{ ...gear.get("Heavy Combat Armor"), notes: `@DocBot` },
			);
		}

		if (options.armored.hardened_skelton) {
			pack.push(
				{ ...gear.get("Hardened Skeleton"), notes: `@DocBot` },
			);
		}

		if (options.armored.structural_enhancement) {
			pack.push(
				{ ...gear.get("Structural Enhancement"), notes: `@DocBot` },
			);
		}

		if (options.armored.self_healing) {
			pack.push(
				{ ...gear.get("Self-Healing"), notes: `@DocBot` },
			);
		}

		if (options.armored.impact) {
			pack.push(
				{ ...gear.get("Impact"), notes: `@DocBot` },
			);
		}

		if (options.armored.reactive) {
			pack.push(
				{ ...gear.get("Reactive"), notes: `@DocBot` },
			);
		}
	}

	if (options?.armed) {
		if (options.armed.machine_gun > 0 && options.armed.machine_gun <= 4) {
			for (let i = 0; i < options.armed.machine_gun; i++) {
				pack.push(
					{ ...gear.get("Machine Gun"), name: `${gear.get("Machine Gun").name} Railgun`, notes: `@DocBot` },
				);
			}
		}
	}

	return pack;
}

function egr_explorenaut(options = {}) {
	const pack = [
		{ ...gear.get("Explorenaut"), notes: `` },
	];

	if (options?.ghostrider) {
		pack.push(
			{ ...gear.get("Ghostrider Module"), notes: `@Explorenaut` },
		);
	}

	if (options?.mobility) {
		pack.push(
			{ ...gear.get("Mobility System"), name: `${gear.get("Mobility System").name} ${options?.mobility?.type ? options.mobility.type : "Thrust Vector (Rocket)"}`, notes: `@Explorenaut` },
		);
	}

	if (options?.medichines) {
		pack.push(
			{ ...gear.get("Medichines"), notes: `@Explorenaut` },
		);
	}

	if (options?.breadcrumb) {
		pack.push(
			{ ...gear.get("Breadcrumb System "), notes: `@DocBot` },
		);
	}

	if (options?.armored) {
		pack.push(
			{ ...gear.get("Heavy Combat Armor"), notes: `@Explorenaut` },
		);

		if (options.armored.hardened_skelton) {
			pack.push(
				{ ...gear.get("Hardened Skeleton"), notes: `@Explorenaut` },
			);
		}

		if (options.armored.structural_enhancement) {
			pack.push(
				{ ...gear.get("Structural Enhancement"), notes: `@Explorenaut` },
			);
		}

		if (options.armored.self_healing) {
			pack.push(
				{ ...gear.get("Self-Healing"), notes: `@Explorenaut` },
			);
		}

		if (options.armored.impact) {
			pack.push(
				{ ...gear.get("Impact"), notes: `@Explorenaut` },
			);
		}

		if (options.armored.reactive) {
			pack.push(
				{ ...gear.get("Reactive"), notes: `@Explorenaut` },
			);
		}
	}

	if (options?.armed) {
		if (options.armed.machine_gun > 0 && options.armed.machine_gun <= 4) {
			for (let i = 0; i < options.armed.machine_gun; i++) {
				pack.push(
					{ ...gear.get("Machine Gun"), name: `${gear.get("Machine Gun").name} Railgun`, notes: `@DocBot` },
				);
			}
		}
	}

	return pack;
}

function egr_dwarf_fullcombat(options = {}) {
	const pack = [
		{ ...gear.get("Dwarf"), notes: `` },
		{ ...gear.get("Ghostrider Module"), notes: `@Dwarf` },
		{ ...gear.get("Mobility System"), name: `${gear.get("Mobility System").name} Thrust Vector (Rocket)`, notes: `@Dwarf` },
	];

	if (options?.medichines) {
		pack.push(
			{ ...gear.get("Medichines"), notes: `@Dwarf` },
		);
	}

	if (options?.armored) {
		pack.push(
			{ ...gear.get("Heavy Combat Armor"), notes: `@Dwarf` },
		);

		if (options.armored.hardened_skelton) {
			pack.push(
				{ ...gear.get("Hardened Skeleton"), notes: `@Dwarf` },
			);
		}

		if (options.armored.structural_enhancement) {
			pack.push(
				{ ...gear.get("Structural Enhancement"), notes: `@Dwarf` },
			);
		}

		if (options.armored.self_healing) {
			pack.push(
				{ ...gear.get("Self-Healing"), notes: `@Dwarf` },
			);
		}

		if (options.armored.impact) {
			pack.push(
				{ ...gear.get("Impact"), notes: `@Dwarf` },
			);
		}

		if (options.armored.reactive) {
			pack.push(
				{ ...gear.get("Reactive"), notes: `@Dwarf` },
			);
		}
	}

	if (options?.armed) {
		if (options.armed.weapon_mount > 0 && options.armed.weapon_mount <= 8) {
			for (let i = 0; i < options.armed.weapon_mount; i++) {
				pack.push(
					{ ...gear.get("Weapon Mount"), notes: `@Dwarf` },
				);
			}
		}

		if (options.armed.machine_gun > 0 && options.armed.machine_gun <= 4) {
			for (let i = 0; i < options.armed.machine_gun; i++) {
				pack.push(
					{ ...gear.get("Machine Gun"), name: `${gear.get("Machine Gun").name} Railgun`, notes: `@Dwarf` },
				);
			}
		}

		if (options.armed.battle_laser > 0 && options.armed.battle_laser <= 4) {
			for (let i = 0; i < options.armed.battle_laser; i++) {
				pack.push(
					{ ...gear.get("Battle Laser"), notes: `@Dwarf` },
				);
			}
		}
	}

	return pack;
}

function egr_meshware_installed(options = {}) {

	const pack = [
		{ ...gear.get("Enhanced Security"), gp: 0, notes: `from Agent` },
		{ ...gear.get("Drone Rig") },
		{ ...gear.get("Skillware") },
		{ ...gear.get("Oracles") },
		{ ...gear.get("Stress Control") },
		{ ...gear.get("Fake Brainprint") },
		{ ...gear.get("Auto-Erase") },
		{ ...gear.get("Multi-Tasking") },
		{ ...gear.get("App-Lock") },
		{ ...gear.get("Fault Tolerance") },
		{ ...gear.get("Persistence") },
		{ ...gear.get("E-Veil"), gp: 0, notes: `from Agent` },
		{ ...gear.get("Mnemonics"), gp: 0, notes: `from Agent` },
	];

	return pack;
}

function egt_parisphere_upgrade(options = {}) {
	const pack = [
		{ name: "acquired from Resources IV", gp: 0 }
	];

	if (options?.ghostrider) {
		pack.push(
			{ ...gear.get("Ghostrider Module"), notes: `@Parisphere` },
		);
	}

	if (options?.medichines) {
		pack.push(
			{ ...gear.get("Medichines"), notes: `@Parisphere` },
		);
	}

	if (options?.armored) {

		if (options.armored.hardened_skelton) {
			pack.push(
				{ ...gear.get("Hardened Skeleton"), notes: `@DocBot` },
			);
		}

		if (options.armored.self_healing) {
			pack.push(
				{ ...gear.get("Self-Healing"), notes: `@DocBot` },
			);
		}

		if (options.armored.impact) {
			pack.push(
				{ ...gear.get("Impact"), notes: `@DocBot` },
			);
		}

		if (options.armored.reactive) {
			pack.push(
				{ ...gear.get("Reactive"), notes: `@DocBot` },
			);
		}
	}

	if (options?.armed) {
		if (options.armed.battle_laser > 0 && options.armed.battle_laser <= 4) {
			for (let i = 0; i < options.armed.battle_laser; i++) {
				pack.push(
					{ ...gear.get("Battle Laser"), notes: `@DocBot` },
				);
			}
		}

		if (options.armed.machine_gun > 0 && options.armed.machine_gun <= 4) {
			for (let i = 0; i < options.armed.machine_gun; i++) {
				pack.push(
					{ ...gear.get("Machine Gun"), name: `${gear.get("Machine Gun").name} Railgun`, notes: `@DocBot` },
				);
			}
		}
	}

	return pack;
}

const downtime = 0;

mission_gear.set("EGR_2.71828", {
	sentinel: "EGR_2.71828",
	mp: 10,
	gp: 14,
	gear: [
		//{ ...gear.get("Fake Ego ID"), notes: `Leonhard Euler` },
		{ ...gear.get("Mind Amp") },
		{ ...gear.get("Energy Efficiency") },
		toBlueprint("Defrag"),
		toBlueprint("Multi-Focus"),
		toBlueprint("Multi-Tasking"),
		toBlueprint("Cauterizer"),
		{ ...gear.get("Fault Tolerance") },
		{ name: "MP2GP", gp: -5 },
	],
	morph: [
		{ name: "Operator", mp: 2, description: 'https://eclipsephase.github.io/en/SUPP/02-CO/03/06-infomorphs.html#operator' },
		{ name: "Academic Essentials", mp: 1, availability: null, description: '+1 Insight, Multi-Tasking' },
		{ name: "Morph upgrade Flex +1", mp: 2 },
		{ name: "MP2GP", mp: 5 },
	]
});

mission_gear.set("Doc#1", {
	sentinel: "Doc#1",
	mp: 3,
	gp: 10,
	gear: [],
	morph: [
		{ name: "Doc#1", mp: 3, description: "DocBot" }
	]
});
mission_gear.get("Doc#1").gear = egr_docbot({
	ghostrider: 1,
	armored: true
});

if (true) {
	mission_gear.get("EGR_2.71828").gear = mission_gear.get("EGR_2.71828").gear
		.concat(
			egr_docbot({
				ghostrider: 1,
				mobility: "Thurst Vector (Rocket)",
				medichines: true,
				armored: { hardened_skelton: true, structural_enhancement: true, self_healing: true, impact: true, reactive: true },
				armed: { weapon_mount: 2, machine_gun: 0 }
			})
		)
		;
}



console.clear();

function report_mission_gear(options = { mg: mission_gear, json: false }) {
	for (let [key, value] of options.mg) {
		if (!(options?.json)) {
			console.log({
				sentinel: key,
				gear: value.gear.map(i => `${i.name} (pg. ${i.pg}, ${i.gp} gp)${i.notes ? " : " : ""}${i.notes ? i.notes : ""}`),
				morph: value.morph.map(m => `${m.name}, mp: ${m.mp}`),
				gp_left: value.gp - value.gear.reduce((acc, i) => acc + i.gp, 0),
				mp_left: value.mp - value.morph.reduce((acc, i) => acc + i.mp, 0)
			});
		} else {// is json
			fs.writeFileSync(`${key}.json`, JSON.stringify({
				sentinel: key,
				gear: value.gear.map(i => `${i.name} (pg. ${i.pg}, ${i.gp} gp)${i.notes ? " : " : ""}${i.notes ? i.notes : ""}`),
				gp_left: value.gp - value.gear.reduce((acc, i) => acc + i.gp, 0),
				mp_left: value.mp - value.morph.reduce((acc, i) => acc + i.mp, 0)
			}, null, 2));
		}
	}
}

report_mission_gear();
report_mission_gear({ mg: mission_gear, json: true });
// fs.writeFileSync('file.json', JSON.stringify(jsonVariable));

const rl = readline.createInterface({ input, output });

do {
	var answer = await rl.question('> ');
	if (answer === '.exit') break;
	try {
		console.log(eval(answer));
	} catch (e) {
		console.error(e);
		console.log("\n.exit to close CLI.");
	}
} while (true);

rl.close();
process.exit();
