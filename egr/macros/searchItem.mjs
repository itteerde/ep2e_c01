let dialogContent = `
    <fieldset>
      <label for="searchTerm">Search Term:</label>
      <input type="text" name="searchTerm" id="searchTerm">
    </fieldset>
`;

const response = await foundry.applications.api.DialogV2.wait({ // we should look at the API Docs for that method
  window: { title: "Search" },
  content: dialogContent,
  buttons: [{
    action: "Search",
    label: "Seach",
    default: true,
    callback: (event, button, dialog) => new foundry.applications.ux.FormDataExtended(button.form).object // makes available the named (name) html elements
  }]
});
//console.log(response);

if (response === null) return;

const seachString = response.searchTerm.toLocaleLowerCase();

let users = game.users.contents.filter(u => u.character);
let actors = game.folders.getName("_Player Characters").contents;

let messageContent = `<div style="font-size: large;">search: ${seachString}</div><div style="font-size:12px;"><table>`;

users.forEach(u => {
  if (!actors.find(a => a.name === u.character.name)) {
    return;
  }
  let item = u.character.items.find(i => i.name.toLocaleLowerCase().startsWith(seachString));
  messageContent += `
    <tr>
      <td style="color:${u.color.css};">${u.character.name}</td>
      <td>${item !== undefined ? item.name : '-'}</td>
    </tr>
  `;
});

messageContent += `</table></div>`;

ChatMessage.create({ content: messageContent })