const textarea = document.getElementById('textarea');
const iframe = document.getElementById('inframe');

textarea.addEventListener('input', () => {
  const html = `
    <style>
      body {
        background-color: black;
        color: #00FF00; /* Color verde estilo Matrix */
        font-family: 'Courier New', monospace; /* Fuente estilo consola */
      }
    </style>
    ${textarea.value}
  `;
  iframe.srcdoc = html;
});

const initialHTML = `
  <style>
    body {
      background-color: black;
      color: #00FF00; /* Color verde estilo Matrix */
      font-family: 'Courier New', monospace; /* Fuente estilo consola */
    }
  </style>
  <h1>Escribe tu código aquí</h1>
`;

textarea.value = initialHTML;
iframe.srcdoc = initialHTML;
