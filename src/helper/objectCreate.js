import * as PIXI from "pixi.js";

export function createDrawer(furnitureSheet,background,app) {
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