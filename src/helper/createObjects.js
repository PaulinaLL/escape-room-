import * as PIXI from "pixi.js";
// import { leftOver } from "./buttons.js";
// import { pcRiddleDisplay } from "./pc.js";
// import { drawerRiddleDisplay } from "./drawer.js";

export function createUserInterface(arrowSheet, app) {
  const left = new PIXI.Sprite(arrowSheet.left[0]);
  const right = new PIXI.Sprite(arrowSheet.right[0]);

  left.interactive = true;
  left.buttonMode = true;

  // left.on("pointerover", leftOver);

  right.interactive = true;
  right.buttonMode = true;

  right.scale.set(-1);

  right.x = 550;
  right.y = 625;
  left.x = 200;
  left.y = 500;

  return [left, right];
}
export function setItems(items, app) {

  //Visible Objects
  const idCard1 = new PIXI.Sprite(items.idCard[0]);
  const key = new PIXI.Sprite(items.key[0]);

  

  idCard1.interactive = true;
  idCard1.buttonMode = true;
  idCard1.x = 570;
  idCard1.y = 350;
  idCard1.height = 30;
  idCard1.width = 40;

  key.interactive = true;
  key.buttonMode = true;
  key.x = 670;
  key.y = 450;
  key.height = 30;
  key.width = 40;

  //Interactions Only
  const door = new PIXI.Graphics();


  door.interactive = true;
  door.buttonMode = true;
  door.beginFill(0xffffff,0.001);
  door.drawRect(100, 250, 100, 200);
  door.endFill();
  door.lineStyle(0);

  const lightSwitch = new PIXI.Graphics();

  lightSwitch.interactive = true;
  lightSwitch.buttonMode = true;
  lightSwitch.beginFill(0xffffff);
  lightSwitch.drawRect(530, 300, 50, 70);
  lightSwitch.endFill();
  lightSwitch.lineStyle(0);

  //SendBack
    return {
      idCard1,
      key,
      door,
      lightSwitch
    };
  }

export function createDrawer(furnitureSheet) {
  const drawer = new PIXI.AnimatedSprite(furnitureSheet.closed);
  drawer.buttonMode = true;
  drawer.interactive = true;
  drawer.on("pointerover", onPointerOver).on("pointerout", onPointerOut);
  // .on("pointerdown", drawerRiddleDisplay);

  function onPointerOver(event) {
    event.stopPropagation();
    const valueY = Object.values(event.data.global)[1];

    if (valueY >= 327 && valueY <= 400) {
      this.texture = furnitureSheet.open4[0];
    } else if (valueY >= 401 && valueY <= 435) {
      this.texture = furnitureSheet.open3[0];
    } else if (valueY >= 436 && valueY <= 485) {
      this.texture = furnitureSheet.open2[0];
    } else if (valueY >= 486 && valueY <= 550) {
      this.texture = furnitureSheet.open1[0];
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
  drawer.height = 320;
  //    Position
  drawer.x = 520;
  drawer.y = 265;
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

  // pcoff.on("pointerdown", pcRiddleDisplay);

  pcoff.x = 50;
  pcoff.y = 110;

  return pcoff;
}
