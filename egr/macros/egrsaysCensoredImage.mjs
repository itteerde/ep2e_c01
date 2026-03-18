const BANNER_TEXT = 'done';
const BACKGROUND_URL = 'https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyYnEzMjZzMjlhM3M4MXA3bXhwZXkxY2JsM2Z2OXJrYXlqNnI2N241eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/tIeCLkB8geYtW/200w.gif';
let content = `
<div style="position: relative; width: 100%; background: #222; border: 1px solid #444;">

  <div style="padding: 20px; color: #666; font-family: monospace;">
    <img style="width: auto; height: 100%; display: block;" src="${BACKGROUND_URL}"/>
  </div>

  <div style="
    position: absolute;
    top: 45.33%;   /* Skip the top third */
    left: 0;
    width: 100%;   /* Full width */
    height: 33.33%; /* Cover middle third */
    background: rgba(0, 255, 65, 0.6); /* Low opacity green */
    border-top: 2px solid #00ff41;
    border-bottom: 2px solid #00ff41;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none; /* Allows clicking the content behind it */
    box-sizing: border-box;
  ">
    <span style="color: #00ff41; font-family: monospace; font-weight: bold; text-shadow: 0 0 5px #00ff41;">
      ${BANNER_TEXT}
    </span>
  </div>

</div>
`

ChatMessage.create({ content: content })