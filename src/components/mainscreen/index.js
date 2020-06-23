import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";
function App() {
  useLayoutEffect(() => {
    const container = document.querySelector("#pixi-container");
    //Create a Pixi Application
    let app = new PIXI.Application({ width: 256, height: 256 });
    //Add the canvas that Pixi automatically created for you to the HTML document
    container.appendChild(app.view);
  });
  return <div id="pixi-container"></div>;
}
export default App;