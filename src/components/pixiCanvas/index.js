import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";
import ROOM from "../../assets/rooms/Corner.jpg";


function PixiCanvas() {
  
  useLayoutEffect(() => {
    
    let app = new PIXI.Application({ width: 512, height: 384 });

    const container = document.querySelector("#pixi-container");
    //Create a Pixi Application
    //Add the canvas that Pixi automatically created for you to the HTML document
    container.appendChild(app.view);
    
    const background = PIXI.Sprite.from(ROOM);
    background.width = 512;
    background.height = 384;
    app.stage.addChild(background);

  });



  return <div id="pixi-container"></div>;
}





export default PixiCanvas;