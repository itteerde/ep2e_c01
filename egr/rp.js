const timeDowntimeAction = 7 * 24 * 60 * 60;

let rp = 18;
let downtimeActions = 0;
let timeAvailable = 18 * 7; // days

let downtime = [];

let downTimeAction = {
    rp: 1,
    actions: 2,
    parts: [
        { type: "Active Skill", name: "Interface", change: 2 },
        { type: "Active Skill", name: "Infosec", change: 2 },
        { type: "Active Skill", name: "Perceive", change: 1 },
    ],
    time: timeDowntimeAction
};
downTimeAction.time = downTimeAction.time / 5 * downTimeAction.actions;

downtime.push(downTimeAction);

console.log(downtime);