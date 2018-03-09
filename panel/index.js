// panel/index.js, this filename needs to match the one registered in package.json
Editor.Panel.extend({
  // css style for panel
  style: `
    :host { margin: 5px; }
    h2 { color: #f90; }
  `,

  // html template for panel
  template: `
    <h2>Barrel-Typescript</h2>
    <hr />
    <div align="center">${Editor.T('barrel-typescript.feedback')}</span></div>
    <div align="center">stromkuo@gmail.com</span></div>
  `,
});