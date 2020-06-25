import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";
import ROOM from "../../assets/rooms/Corner.jpg";


function PixiCanvas() {

  let app = new PIXI.Application({ width: 512, height: 384 });
  
  const background = PIXI.Sprite.from(ROOM);
  background.width = 512;
  background.height = 384;

  const sprite = PIXI.Sprite.from(ROOM);
  sprite.width = 50;
  sprite.height = 50;

  sprite.x = 80;
  sprite.y = 110;



  useLayoutEffect(() => {
    
    const container = document.querySelector("#pixi-container");
    //Create a Pixi Application
    //Add the canvas that Pixi automatically created for you to the HTML document
    container.appendChild(app.view);    
    app.stage.addChild(background,sprite);

  });

  return <div id="pixi-container"></div>;
}





export default PixiCanvas;