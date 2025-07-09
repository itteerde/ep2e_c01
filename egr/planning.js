let rez = 47;
let downtime = [];

downtime.push({ label: 'Skill Survival (5->10)', rez: 1 });
downtime.push({ label: 'Skill Survival (10->15)', rez: 1 });
downtime.push({ label: 'Skill Survival (15->20)', rez: 1 });
downtime.push({ label: 'Skill Survival (20->25)', rez: 1 });
downtime.push({ label: 'Skill Survival (25->30)', rez: 1 });
downtime.push({ label: 'Skill Survival (30->35)', rez: 1 });
downtime.push({ label: 'Skill Survival (35->40)', rez: 1 });
downtime.push({ label: 'Skill Survival (40->45)', rez: 1 });
downtime.push({ label: 'Skill Survival (45->50)', rez: 1 });
downtime.push({ label: 'Skill Survival (50->55)', rez: 1 });
downtime.push({ label: 'Skill Survival (55->60)', rez: 1 });
downtime.push({ label: 'Reputation (Em.Rehtoen.dQ/dt=0), Argonauts 10->60', rez: 10 });
downtime.push({ label: 'Reputation (Em.Rehtoen.dQ/dt=0), C-Rep 0->45', rez: 9 });
/*
downtime.push({ label: 'Skill Guns (35->40)', rez: 1 });
downtime.push({ label: 'Skill Guns (40->45)', rez: 1 });
downtime.push({ label: 'Skill Guns (45->50)', rez: 1 });
downtime.push({ label: 'Skill Guns (50->55)', rez: 1 });
downtime.push({ label: 'Skill Guns (55->60)', rez: 1 });
*/
downtime.push({ label: 'Aptitude REF (5->6)', rez: 1 });
downtime.push({ label: 'Aptitude REF (6->7)', rez: 1 });
downtime.push({ label: 'Aptitude REF (7->8)', rez: 1 });
downtime.push({ label: 'Aptitude WIL (28->29)', rez: 1 });
downtime.push({ label: 'Aptitude WIL (29->30)', rez: 1 });

downtime.push({ label: 'Skill Demolitions (50->55)', rez: 1 });
downtime.push({ label: 'Skill Demolitions (55->60)', rez: 1 });

/*
downtime.push({ label: 'Skill Demolitions (60->65, >60)', rez: 1 });
downtime.push({ label: 'Skill Research (+5, >60)', rez: 1 });
downtime.push({ label: 'Skill Interface (+5, >60)', rez: 1 });
downtime.push({ label: 'Skill Infosec (+5, >60)', rez: 1 });
downtime.push({ label: 'Skill Hardware (+5, >60)', rez: 1 });
*/

downtime.push({ label: 'Reputation (burner Fake Ego ID), ?-Rep 10->60', rez: 10 });

console.log();
downtime.forEach((a) =>
    //console.log(`${a.label}: ${a.rez}`)
    console.log(a)
);
let downtime_spending = downtime.reduce((acc, v) => acc + v.rez, 0);
console.log();
console.log(`rez: ${rez}-${downtime_spending}=${rez - downtime_spending}`);