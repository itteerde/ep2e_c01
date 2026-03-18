const text = `scanning for stealthed Mesh to overlay`;

const terminal = `
<pre>
> PlotGraph[g] > cGraph.svg
> TacNet-Send -URL './cGraph.svg' -relativeURL '$true'
</pre>
`;

const endOfMessage = '';//`<hr/>`;

const speaker = {
    actor: actor.id,      // Links to the Actor for the avatar
    alias: 'Edsger W. Dijkstra',      // Overrides the displayed name
    scene: canvas.scene?.id
}

ChatMessage.create({ content: `<div style="color:#00ff41; font-family: monospace;font-size:14px;font-weight: bold;line-height:1.45;text-shadow: 0 0 5px #00ff41;">${text}</div>${endOfMessage}`, speaker: speaker })