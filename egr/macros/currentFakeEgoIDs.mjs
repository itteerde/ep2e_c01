let users = game.users.contents.filter(u => u.character);
let actors = game.folders.getName("_Player Characters").contents;

let messageContent = `<div style="font-size:12px;"><table>`;

users.forEach(u => {
    if (!actors.find(a => a.name === u.character.name)) {
        return;
    }
    let fakeEgoID = u.character.items.find(i => i.name.startsWith('Fake') && i.system.state.equipped);
    let fakeEgoIDName = fakeEgoID !== undefined ? fakeEgoID.name.slice(12) : 'none';
    messageContent += `
    <tr>
      <td style="color:${u.color.css};">${u.character.name}</td>
      <td>${fakeEgoIDName}</td>
    </tr>
  `;
});

messageContent += `</table></div>`;

ChatMessage.create({ content: messageContent })