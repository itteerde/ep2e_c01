/* current crew */
let crew = [
    {
        id: "Octopussy", //Pedro
        roles: ["Fighter", "Athlete"],
        /** gun slinging, blade wielding octopus soldier */
        value: {
            combat: 100,
            face: 10,
            chores: 20,
            knowledge: 15,
        }
    },
    {
        id: "SysRig.ExE", //Tyler
        /** drone controlling AGI, applied computer science */
        roles: ["Drones", "IT"],
        value: {
            combat: 60,
            face: 5,
            chores: 30,
            knowledge: 60
        }
    },
    {
        id: "EGR_2.71828", //Erik
        /** AGI, theoretician, hardly any application except what can be programmed/hacked */
        roles: ["Analyst", "IT"],
        value: {
            combat: 0,
            face: 5,
            chores: 20,
            knowledge: 100
        }
    }
];

function crewTotal(total, member) {
    return {
        combat: total.combat + member.value.combat,
        face: total.face + member.value.face,
        chores: total.chores + member.value.chores,
        knowledge: total.knowledge + member.value.knowledge
    };
}

console.log(crew.reduce(crewTotal, { combat: 0, face: 0, chores: 0, knowledge: 0 }));