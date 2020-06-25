import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";
import ROOM from "../../assets/rooms/Corner.jpg";
import SPRITES from "../../assets/objects/Spritesheet.png";


function PixiCanvas() {

  let app = new PIXI.Application({ width: 512, height: 384 });
  
  const background = PIXI.Sprite.from(ROOM);
  background.width = 512;
  background.height = 384;
  let furnitureSheet = {};

function doneLoading(e) {
createFurnitureSheet();
createDrawer();
}

function createFurnitureSheet(){
  let fsheet = new PIXI.BaseTexture.from(app.loader.resources["furniture"].url);
  let w = 21;
  let h = 50;

furnitureSheet["closed"]=
[ new PIXI.Texture(fsheet, new PIXI.Rectangle(0 * w, 0, w, h))];

furnitureSheet["open1"]=
[ new PIXI.Texture(fsheet, new PIXI.Rectangle(1 * w, 0, w, h))];

furnitureSheet["open2"]=
[ new PIXI.Texture(fsheet, new PIXI.Rectangle(2 * w, 0, w, h))];

furnitureSheet["open3"]=
[ new PIXI.Texture(fsheet, new PIXI.Rectangle(3 * w, 0, w, h))];

furnitureSheet["open4"]=
[  new PIXI.Texture(fsheet, new PIXI.Rectangle(4 * w, 0, w, h))];
}

  useLayoutEffect(() => {

    app.loader.add("furniture", SPRITES)
    app.loader.load(doneLoading);
    
  });

  function createDrawer() {
    const drawer = new PIXI.AnimatedSprite(furnitureSheet.closed);
    drawer.width = 200;
    drawer.height = 200;
   
// Might be turned back to normal. Lets see.
    const container = document.querySelector("#pixi-container");
    //Create a Pixi Application
    //Add the canvas that Pixi automatically created for you to the HTML document
    container.appendChild(app.view);    
    app.stage.addChild(background,drawer); 

    };

  return <div id="pixi-container"></div>;
}

export default PixiCanvas;