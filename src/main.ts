import "./style.css";
import "./clean-code/code-smells/02-singleton";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>CleanCode y SOLID</h1>
  <span>Revisar la consola de JavaScript</span>
`;
