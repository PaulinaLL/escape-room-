import * as PIXI from "pixi.js";

export function createDrawer(furnitureSheet, app) {
 
    const drawer = new PIXI.AnimatedSprite(furnitureSheet.closed);    
    drawer.buttonMode = true;
    drawer.interactive = true;  
    drawer.on('pointerover', onPointerOver)
    .on('pointerout', onPointerOut);
    
function onPointerOver() {
    this.isOver = true;
    if (this.isdown) {
        return;
    }
    this.texture = furnitureSheet.open1[0];
}
function onPointerOut() {
    this.isOver = false;
    if (this.isdown) {
        return;
    }
    this.texture = furnitureSheet.closed[0];
}
//    It would be good if we get the relationship between the values. Please do something about it.
   
// Width and Height
    drawer.width = 245;
    drawer.height = 260;
//    Position
    drawer.x = 550;
    drawer.y = 285;
// Might be turned back to normal. Lets see.
    //Create a Pixi Application
    //Add the canvas that Pixi automatically created for you to the HTML document
        app.stage.addChild(drawer);  
};

