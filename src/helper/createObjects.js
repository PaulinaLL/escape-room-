import * as PIXI from "pixi.js";
import { leftOver } from "./buttons.js";
import { pcRiddleDisplay } from "./pc.js";
import { drawerRiddleDisplay } from "./drawer.js";

export function createUserInterface(arrowSheet, app) {
  const left = new PIXI.Sprite(arrowSheet.left[0]);
  const right = new PIXI.Sprite(arrowSheet.right[0]);

  left.interactive = true;
  left.buttonMode = true;

  left.on("pointerover", leftOver);

  right.interactive = true;
  right.buttonMode = true;

  right.scale.set(-1);

  right.x = 550;
  right.y = 625;
  left.x = 200;
  left.y = 500;

  return [left, right];
}

export function createDrawer(furnitureSheet) {
  const drawer = new PIXI.AnimatedSprite(furnitureSheet.closed);
  drawer.buttonMode = true;
  drawer.interactive = true;
  drawer
    .on("pointerover", onPointerOver)
    .on("pointerout", onPointerOut)
    .on("pointerdown", drawerRiddleDisplay);

  function onPointerOver(event) {
    event.stopPropagation();
    const valueY = Object.values(event.data.global)[1];

    if (valueY >= 327 && valueY <= 400) {
      this.texture = furnitureSheet.open1[0];
    } else if (valueY >= 401 && valueY <= 435) {
      this.texture = furnitureSheet.open2[0];
    } else if (valueY >= 436 && valueY <= 485) {
      this.texture = furnitureSheet.open3[0];
    } else if (valueY >= 486 && valueY <= 550) {
      this.texture = furnitureSheet.open4[0];
    } else return;
  }

  function onPointerOut() {
    this.isOver = false;
    if (this.isDown) {
      return;
    }
    this.texture = furnitureSheet.closed[0];
  }
  //    It would be good if we get the relationship between the values. Please do something about it.
  // Width and Height
  drawer.width = 200;
  drawer.height = 260;
  //    Position
  drawer.x = 530;
  drawer.y = 295;
  // Might be turned back to normal. Lets see.
  //Create a Pixi Application
  //Add the canvas that Pixi automatically created for you to the HTML document
  return drawer;
}

// add event listener to PC version 1
export function createPC(pcSheet) {
  const pcoff = new PIXI.Sprite(pcSheet.off[0]);

  pcoff.interactive = true;
  pcoff.buttonMode = true;

  pcoff.on("pointerdown", pcRiddleDisplay);

  pcoff.x = 50;
  pcoff.y = 110;

  return pcoff;
}
