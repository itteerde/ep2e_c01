function update(character){
	uSkills = [];
	character.skills.forEach((s)=>{
		if(uSkills.find(u=>u.name===s.name)){
			uSkills.find(u=>u.name===s.name).value += s.value;
		}else{
			uSkills.push(structuredClone(s));
		}
	});
	uSkills.sort((a,b)=>{
		return a.name.localeCompare(b.name);
	});
	character.skills = uSkills;
	
	character.skills.forEach(s=>{
		//console.log({skill: s, find: character.aptitudes.find(a=>a.name===s.aptitude)});
		s.roll = s.value + (character.aptitudes.find(a=>a.name===s.aptitude) == null ? 0 : character.aptitudes.find(a=>a.name===s.aptitude).value);
		if(s.name === "Perceive" || s.name === "Fray"){ // if there are any more introduce multiplier instead
			s.roll += character.aptitudes.find(a=>a.name===s.aptitude).value;
		}
	});
	character.lastUpdate = Date();
	return character;
}

function checkCharacter(character){
	character.skills.forEach(s=>{
		if(s.value + character.aptitudes.find(a=>a.name === s.aptitude).value * s.aptmult > 80){
			console.warn({error: `${s.name} exceeds starting character skill maximum of 80`, skill: s});
		}
	});
}

dbSkills = [
	{ name: "Accounting", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Administration", types: ["Know", "Fielde", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Aerospace (aircraft and spacecraft)", types: ["Active", "Field", "Technical"], value: 0, aptitude: "Cognition" },
	{ name: "AR Design", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "Archeology", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Architecture", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "Armorer (armor and weapons)", types: ["Active", "Field", "Technical"], value: 0, aptitude: "Cognition" },
	{ name: "Asteroid Mining", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Astrobiology", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Astronomy", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Astrophysics", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Astrosociology", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Athletics", types: ["Active", "Physical"], value: 0, aptitude: "Somatics" },
	{ name: "Animal Handling", types: ["Active", "Field", "Exotic"], value: 0, aptitude: "Savvy" },
	{ name: "Biology", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Biotech", types: ["Active", "Field", "Technical", "Medicine"], value: 0, aptitude: "Cognition" },
	{ name: "Body Bank Ops", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Bodyguarding", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Bow", types: ["Active", "Field", "Exotic"], value: 0, aptitude: "Reflexes" },
	{ name: "Celebrities", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Chemistry", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Computer Science", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Con Artistry", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Conspiracies", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Cool Hunting", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Criticism", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "Cryptography", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Dance", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "Data Processing", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Deceive", types: ["Active", "Social"], value: 0, aptitude: "Savvy" },
	{ name: "Demolitions (explosives)", types: ["Active", "Field", "Technical"], value: 0, aptitude: "Cognition" },
	{ name: "Disguise", types: ["Active", "Field", "Exotic"], value: 0, aptitude: "Intuition" },
	{ name: "Drama", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "Drawing", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "Economics", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Ego Hunting", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Electronics", types: ["Active", "Field", "Technical"], value: 0, aptitude: "Cognition" },
	{ name: "Emergency Services", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Engineering", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Entertainment", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Escape Artist", types: ["Active", "Field", "Exotic"], value: 0, aptitude: "Reflexes" },
	{ name: "Exhumans", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Exoplanet Colonies", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Factors", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Fencing", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Field Science", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "First-Contact Ops", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Flight Crew Ops", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Forensics", types: ["Active", "Field", "Technical", "Medicine"], value: 0, aptitude: "Cognition" },
	{ name: "Fray", types: ["Active", "Combat"], value: 0, aptitude: "Reflexes" },
	{ name: "Free Fall", types: ["Active", "Physical"], value: 0, aptitude: "Somatics" },
	{ name: "Freelancing", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Gambling", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Gas Mining", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Gatecrashing", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Genetics", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Geology", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Groundcraft", types: ["Active", "Field", "Technical"], value: 0, aptitude: "Cognition" },
	{ name: "Guns", types: ["Active", "Combat"], value: 0, aptitude: "Reflexes" },
	{ name: "Habitat Ops", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "History", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Hypercorp Politics", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Industrial (factory, habitat, and life support systems)", types: ["Active", "Field", "Technical"], value: 0, aptitude: "Cognition" },
	{ name: "Infiltrate", types: ["Active", "Physical"], value: 0, aptitude: "Reflexes" },
	{ name: "Infosec", types: ["Active", "Technical"], value: 0, aptitude: "Cognition" },
	{ name: "Instruction", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Interface", types: ["Active", "Technical"], value: 0, aptitude: "Cognition" },
	{ name: "Investigation", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Journalism", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Kinesics", types: ["Active", "Social"], value: 0, aptitude: "Savvy" },
	{ name: "Lab Ops", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Law", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Linguistics", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Lunar Habitats", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Martian Beers", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Mathematics", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Medical Services", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Melee", types: ["Active", "Combat"], value: 0, aptitude: "Somatics" },
	{ name: "Memetics", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Military Ops", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Morph Design", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Morphs", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Music", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "Nanofacturing", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Nanotechnology", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Nautical (watercraft and submarines)", types: ["Active", "Field", "Technical"], value: 0, aptitude: "Cognition" },
	{ name: "Network Engineering", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Painting", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "Paramedic", types: ["Active", "Field", "Technical", "Medicine"], value: 0, aptitude: "Cognition" },
	{ name: "Perceive", types: ["Active", "Combat"], value: 0, aptitude: "Intuition" },
	{ name: "Performance", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "Persuade", types: ["Active", "Social"], value: 0, aptitude: "Savvy" },
	{ name: "Pharmacology", types: ["Active", "Field", "Technical", "Medicine"], value: 0, aptitude: "Cognition" },
	{ name: "Physics", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Pilot Air", types: ["Active", "Field", "Vehicle", "Pilot"], value: 0, aptitude: "Reflexes" },
	{ name: "Pilot Ground", types: ["Active", "Field", "Vehicle", "Pilot"], value: 0, aptitude: "Reflexes" },
	{ name: "Pilot Nautical", types: ["Active", "Field", "Vehicle", "Pilot"], value: 0, aptitude: "Reflexes" },
	{ name: "Pilot Space", types: ["Active", "Field", "Vehicle", "Pilot"], value: 0, aptitude: "Reflexes" },
	{ name: "Plasma Cutter", types: ["Active", "Field", "Exotic"], value: 0, aptitude: "Reflexes" },
	{ name: "Police Ops", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Political Science", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Program", types: ["Active", "Technical"], value: 0, aptitude: "Cognition" },
	{ name: "Provoke", types: ["Active", "Social"], value: 0, aptitude: "Savvy" },
	{ name: "PSI", types: ["Active", "Mental", "Psi"], value: 0, aptitude: "Willpower" },
	{ name: "Psychology", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Psychosurgery", types: ["Active", "Field", "Technical", "Medicine"], value: 0, aptitude: "Cognition" },
	{ name: "Racketeering", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Reclaimer Blogs", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Research", types: ["Active", "Technical"], value: 0, aptitude: "Cognition" },
	{ name: "Robotics (bots and synthmorphs)", types: ["Active", "Field", "Technical"], value: 0, aptitude: "Cognition" },
	{ name: "Spaceship Models", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Scavenging", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Sculpture", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "Scum Drug Dealers", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Security Ops", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Service Work", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Singing", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "Sleight of Hand", types: ["Active", "Field", "Exotic"], value: 0, aptitude: "Reflexes" },
	{ name: "Smuggling", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Social Engineering", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Social Services", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Sociology", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Speech", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "Spycraft", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Strategy Games", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Surveying", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Survival", types: ["Active", "Physical"], value: 0, aptitude: "Intuition" },
	{ name: "System Administration", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Terraforming", types: ["Know", "Field", "Professional Training"], value: 0, aptitude: "Cognition" },
	{ name: "Throwing Knieves", types: ["Active", "Field", "Exotic"], value: 0, aptitude: "Reflexes" },
	{ name: "TITAN Tech", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Transhuman Factions", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Triad Economics", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Underground XP", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Veterinary", types: ["Active", "Field", "Technical", "Medicine"], value: 0, aptitude: "Cognition" },
	{ name: "VR Design", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "VR Games", types: ["Know", "Field", "Interests"], value: 0, aptitude: "Cognition" },
	{ name: "Whips", types: ["Active", "Field", "Exotic"], value: 0, aptitude: "Reflexes" },
	{ name: "Writing", types: ["Know", "Field", "Arts"], value: 0, aptitude: "Intuition" },
	{ name: "Xeno-archeology", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Xenolinguistics", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
	{ name: "Zoology", types: ["Know", "Field", "Academics"], value: 0, aptitude: "Cognition" },
];

dbFactions = [
	{ name: "Anarchist", description: "You believe power is corrupt and favor voluntary, non-hierarchical organizations based on direct democracy." },
	{ name: "Argonaut", description: "You seek technoprogressive solutions to transhumanity's injustices and inequalities." },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
	{ name: "", description: "" },
];



dbSkills.forEach(s=>{
	if(s.name === "Perceive" || s.name === "Fray"){
		s.aptmult = 2;
	}else{
		s.aptmult = 1;
	}
});

dbBackgrounds = [
];

function addSkillPackage(target, name, skills){
	background = { name: name, skills: [] };
	skills.forEach(skill=>{
		newSkill = structuredClone(dbSkills.find(s=>s.name===skill.name));
		if(newSkill === undefined){
			newSkill = { name: skill.name, value: skill.value };
		}else{
			newSkill.value = skill.value;
		}
		background.skills.push(newSkill);
	});
	target.push(background);
}

addSkillPackage(dbBackgrounds, "Colonist", [
	{ name: "Free Fall", value: 40 }, 
	{ name: "Hardware: (Choose One), Common Fields: Aerospace, Electronics, Industrial", value: 40 },
	{ name: "Interface", value: 30 },
	{ name: "Pilot: (Choose One), Common Fields: Ground, Nautical, Space", value: 30 },
	{ name: "Survival", value: 30 },
	{ name: "Know: (Choose One), Common Fields: Administration, Flight Crew Ops, Hab Ops", value:60 },
	{ name: "Know: (Choose One), Coomon Fields: Botany, Chemistry, Engineering, Physics", value: 30 }
]);

addSkillPackage(dbBackgrounds, "Infolife", [
	{ name: "Infosec", value: 50 }, 
	{ name: "Interface", value: 50 }, 
	{ name: "Program", value: 50 }, 
	{ name: "Research", value: 20 }, 
	{ name: "Know: (Choose One), Common Fields: Accounting, Administration, System Administration", value: 60 }, 
	{ name: "Know: (Choose One), Common Fields: Computer Science, Cryptography, Psychometrics", value: 30 }, 
]);


dbCareers = [
];

addSkillPackage(dbCareers, "Academic", [
	{ name: "Interface", value: 30 },
	{ name: "Research", value: 60 },
	{ name: "Know: (Choose One)", value: 60 },
	{ name: "Know: (Choose One)", value: 40 },
	{ name: "Know: (Choose One), Common Fields: Administration, Instruction, Lab Ops", value: 30 },
]);

dbInterests = [
];

addSkillPackage(dbInterests, "Student", [
	{ name: "Interface", value: 40 },
	{ name: "Program", value: 20 },
	{ name: "Research", value: 40 },
	{ name: "Know: (Choose One)", value: 40 },
]);

languages = [
	{ name: "English" },
];

aptitudeTemplates = [
	{
		name: "Inquirer",
		aptitudes: [
			{ name: "Cognition", value: 20 },
			{ name: "Intuition", value: 20 },
			{ name: "Reflexes", value: 10 },
			{ name: "Savvy", value: 15 },
			{ name: "Somatics", value: 10 },
			{ name: "Willpower", value: 15 }
		]
	}
];

myCharacter = {
	name: "egr",
	aptitudes: null,
	pools:{
		insight: 0,
		moxy: 0,
		vigor: 0,
		flex: 0
	},
	cp: 20,
	lastUpdate: null,
	skills: []
}



// Step 1 Background (pg. 38)
myCharacter.background = structuredClone(dbBackgrounds.find(c=>c.name==="Infolife"));

skill = structuredClone(dbSkills.find(s=>s.name==="Computer Science"));
skill.value = myCharacter.background.skills.find(s=>s.name==="Know: (Choose One), Common Fields: Computer Science, Cryptography, Psychometrics").value;
myCharacter.background.skills.splice(myCharacter.background.skills.findIndex(s=>s.name==="Know: (Choose One), Common Fields: Computer Science, Cryptography, Psychometrics"),1);
myCharacter.background.skills.push(skill);

skill = structuredClone(dbSkills.find(s=>s.name==="Cryptography"));
skill.value = myCharacter.background.skills.find(s=>s.name==="Know: (Choose One), Common Fields: Accounting, Administration, System Administration").value;
myCharacter.background.skills.splice(myCharacter.background.skills.findIndex(s=>s.name==="Know: (Choose One), Common Fields: Accounting, Administration, System Administration"),1);
myCharacter.background.skills.push(skill);

myCharacter.background.skills.forEach(s=>{
	myCharacter.skills.push(structuredClone(s));
});


// Step 2 Career (pg. 40)
myCharacter.career = structuredClone(dbCareers.find(c=>c.name==="Academic"));

skill = structuredClone(dbSkills.find(s=>s.name==="Research"));
skill.value = myCharacter.career.skills.find(s=>s.name==="Know: (Choose One)" && s.value === 60).value;
myCharacter.career.skills.splice(myCharacter.career.skills.findIndex(s=>s.name==="Know: (Choose One)" && s.value === 60),1);
myCharacter.career.skills.push(skill);

skill = structuredClone(dbSkills.find(s=>s.name==="Mathematics"));
skill.value = myCharacter.career.skills.find(s=>s.name==="Know: (Choose One)" && s.value === 40).value;
myCharacter.career.skills.splice(myCharacter.career.skills.findIndex(s=>s.name==="Know: (Choose One)" && s.value === 40),1);
myCharacter.career.skills.push(skill);

skill = structuredClone(dbSkills.find(s=>s.name==="Instruction"));
skill.value = myCharacter.career.skills.find(s=>s.name==="Know: (Choose One), Common Fields: Administration, Instruction, Lab Ops").value;
myCharacter.career.skills.splice(myCharacter.career.skills.findIndex(s=>s.name==="Know: (Choose One), Common Fields: Administration, Instruction, Lab Ops"),1);
myCharacter.career.skills.push(skill);


myCharacter.career.skills.forEach(s=>{
	myCharacter.skills.push(structuredClone(s));
});


// Step 3 Interest (pg. 42)
myCharacter.interest = structuredClone(dbInterests.find(i=>i.name==="Student"));

skill = myCharacter.interest.skills.find(s=>s.name==="Know: (Choose One)" && s.value===40);
skill.name = "Computer Science";
skill.aptitude = "Cognition";

myCharacter.interest.skills.forEach(s=>{
	myCharacter.skills.push(structuredClone(s));
});


// Step 4 Faction (pg. 44)
myCharacter.faction = structuredClone(factions.find(f=>f.name==="Argonaut"));
myCharacter.skills.push({ name: "Argonaut", type: "Know", value: 30, aptitude: "Cognition" });


// Step 5 Aptiturde Template (pg. 44)
myCharacter.aptitudes = structuredClone(aptitudeTemplates.find(at=>at.name==="Inquirer").aptitudes);

// move 5 from Reflexes to Cognition
myCharacter.aptitudes.find(a=>a.name==="Reflexes").value-=5;
myCharacter.aptitudes.find(a=>a.name==="Cognition").value+=5;
// move 5 from Somatics to Cognition
myCharacter.aptitudes.find(a=>a.name==="Somatics").value-=5;
myCharacter.aptitudes.find(a=>a.name==="Cognition").value+=5;
// move 10 from Savvy to Intuition
myCharacter.aptitudes.find(a=>a.name==="Savvy").value-=10;
myCharacter.aptitudes.find(a=>a.name==="Intuition").value+=10;


// Step 6 Total Skills (pg. 45)


myCharacter = update(myCharacter) // total skills





//console.log(myCharacter);