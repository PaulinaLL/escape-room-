import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";
import Game from "../game";

export default function PixiCanvas(props) {

  useLayoutEffect(() => {
    const container = document.querySelector("#pixi-container");
    container.appendChild(app.view);
  });

  let app = new PIXI.Application({ width: 768, height: 612 });

return <div id="pixi-container">
  <Game app={app}></Game>
</div>;
}


