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

  right.x = 730;
  right.y = 785;
  left.x = 70;
  left.y = 660;

  return [left, right];
}
export function setItems(items, app) {
  //Visible Objects
  const idCard1 = new PIXI.Sprite(items.idCard[0]);
  const key = new PIXI.Sprite(items.key[0]);
  const flashLight = new PIXI.Sprite(items.flashLight[0]);

  idCard1.interactive = true;
  idCard1.buttonMode = true;
  idCard1.x = 570;
  idCard1.y = 440;
  idCard1.height = 70;
  idCard1.width = 70;

  key.interactive = true;
  key.buttonMode = true;
  key.x = 670;
  key.y = 530;
  key.height = 90;
  key.width = 90;

  flashLight.interactive = true;
  flashLight.buttonMode = true;
  flashLight.x = 670;
  flashLight.y = 530;
  flashLight.height = 90;
  flashLight.width = 90;
  //Interactions Only
  const door = new PIXI.Graphics();

  door.interactive = true;
  door.buttonMode = true;
  door.beginFill(0xffffff, 0.001);
  door.drawRect(100, 250, 100, 200);
  door.endFill();
  door.lineStyle(0);

  const lightSwitch = new PIXI.Graphics();

  lightSwitch.interactive = true;
  lightSwitch.buttonMode = true;
  lightSwitch.beginFill(0xffffff, 0.001);
  lightSwitch.drawRect(540, 410, 30, 30);
  lightSwitch.endFill();
  lightSwitch.lineStyle(0);

  //SendBack
  return {
    idCard1,
    key,
    door,
    lightSwitch,
    flashLight,
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

    if (valueY >= 440 && valueY <= 499) {
      this.texture = furnitureSheet.open4[0];
    } else if (valueY >= 500 && valueY <= 569) {
      this.texture = furnitureSheet.open3[0];
    } else if (valueY >= 570 && valueY <= 639) {
      this.texture = furnitureSheet.open2[0];
    } else if (valueY >= 640 && valueY <= 699) {
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
  drawer.width = 230;
  drawer.height = 390;
  //    Position
  drawer.x = 530;
  drawer.y = 355;
  // Might be turned back to normal. Lets see.
  //Create a Pixi Application
  //Add the canvas that Pixi automatically created for you to the HTML document
  return drawer;
}

// add event listener to PC version 1
export function createPC(pcSheet) {
  //const pcoff = new PIXI.Sprite(pcSheet.off[0]);
  const pcoff = new PIXI.Graphics();

  pcoff.beginFill(0xffffff, 0.01);
  pcoff.drawRect(20, 80, 200, 180);
  pcoff.endFill();
  pcoff.lineStyle(0);

  pcoff.interactive = true;
  pcoff.buttonMode = true;

  // pcoff.on("pointerdown", pcRiddleDisplay);

  pcoff.x = 50;
  pcoff.y = 110;

  return pcoff;
}
