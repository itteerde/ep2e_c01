let dialogContent = `
    <fieldset>
      <label for="text">Text:</label>
      <input type="text" name="text" id="text">
      <label for="url">URL:</label>
      <input type="text" name="url" id="url">
      <label for="endOfMessage"End of Message:</label>
      <input type="checkbox" name="endOfMessage" id="endOfMessage">
    </fieldset>
`;

const response = await foundry.applications.api.DialogV2.wait({ // we should look at the API Docs for that method
    window: { title: "Talk" },
    content: dialogContent,
    buttons: [{
        action: "Talk",
        label: "Talk",
        default: true,
        callback: (event, button, dialog) => new foundry.applications.ux.FormDataExtended(button.form).object // makes available the named (name) html elements
    }]
});
console.log(response);

if (response === null) return;

const text = response.text;
const url = response.url;
const endOfMessage = '<hr/>';//`<hr/>`;

const speaker = {
    actor: actor.id,      // Links to the Actor for the avatar
    alias: 'Edsger W. Dijkstra',      // Overrides the displayed name
    scene: canvas.scene?.id
}

let content = `<div style="color:#00ff41; font-family: monospace;font-size:14px;font-weight: bold;line-height:1.45;text-shadow: 0 0 5px #00ff41;">${text}</div>`;
if (url.length > 0) {
    content += `<div><img src="${url}"/></div>`;
}
if (response.endOfMessage) {
    content += endOfMessage;
}

ChatMessage.create({ content: content, speaker: speaker })