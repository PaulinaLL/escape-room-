import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";
import ROOM from "../../assets/rooms/Corner.jpg";
import SPRITES from "../../assets/objects/Drawer2.png";
import {createDrawer} from "../../helper/createObjects";
 
function PixiCanvas() {

  useLayoutEffect(() => {

    const container = document.querySelector("#pixi-container");
    container.appendChild(app.view);    
    app.loader.add("furniture", SPRITES) 
    app.loader.load(doneLoading);
  
  });

  let app = new PIXI.Application({ width: 768, height: 612 });

  // SetFirstBackground
  
  const background = PIXI.Sprite.from(ROOM);
  background.width = 768;
  background.height = 612;
  app.stage.addChild(background); 

  let drawerSheet = {};

function doneLoading() {
  createdrawerSheet(app);
createDrawer(drawerSheet,app);
}

function createdrawerSheet(){
  let fsheet = new PIXI.BaseTexture.from(app.loader.resources["furniture"].url);
  let w = 320;
  let h = 400;  

drawerSheet["closed"]=
[ new PIXI.Texture(fsheet, new PIXI.Rectangle(0 * w, 0, w, h))];

drawerSheet["open1"]=
[ new PIXI.Texture(fsheet, new PIXI.Rectangle(1 * w, 0, w, h))];

drawerSheet["open2"]=
[ new PIXI.Texture(fsheet, new PIXI.Rectangle(2 * w, 0, w, h))];

drawerSheet["open3"]=
[ new PIXI.Texture(fsheet, new PIXI.Rectangle(3 * w, 0, w, h))];

drawerSheet["open4"]=
[  new PIXI.Texture(fsheet, new PIXI.Rectangle(4 * w, 0, w, h))];
}

return <div id="pixi-container"></div>;
}

export default PixiCanvas;