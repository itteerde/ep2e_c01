
//Athletics,Deceive,Fray,FreeFall,Guns,Infosec,Infiltrate,Interface,Kinesics,Melee,Perceive,Persuade,Program,Provoke,Psi,Research,Survival
const commonSkill = ep2e.SkillType.Deceive;

const skillTargets = [];
let formattedName = '';

game.folders.getName("_Player Characters").contents.forEach((actor) => {
    if (!actor.hasPlayerOwner || actor.proxy.type !== 'character') {
        return;
    }

    const skill = actor.proxy.ego.getCommonSkill(commonSkill);

    if (typeof skill.total === 'number' && !Number.isNaN(skill.total)) {

        if (!formattedName) {
            formattedName = skill.name;
        }

        skillTargets.push({
            characterName: actor.name,
            testTarget: skill.total,
        });
    }
});
Dialog.prompt({
    title: `${formattedName || commonSkill} Test Targets`,
    content: `<table>
    <thead>
      <tr>
        <th>Character</th>
        <th>Test Target</th>
      </tr>
    </thead>
    <tbody>
      ${skillTargets
            .map(
                ({ characterName, testTarget }) =>
                    `<tr style="text-align:center"><td>${characterName}</td><td>${testTarget}</td></tr>`,
            )
            .join('')}
    </tbody>
  </table>
  `,
    label: 'OK',
    rejectClose: false,
    callback: undefined,
    render: undefined,
});
