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
  const idCard2 = new PIXI.Sprite(items.idCard2[0]);
  const idCard3 = new PIXI.Sprite(items.idCard3[0]);
  const key = new PIXI.Sprite(items.key[0]);
  const flashLight = new PIXI.Sprite(items.flashLight[0]);

  idCard1.interactive = true;
  idCard1.buttonMode = true;
  idCard1.x = 570;
  idCard1.y = 440;
  idCard1.height = 70;
  idCard1.width = 70;

  idCard2.interactive = true;
  idCard2.buttonMode = true;
  idCard2.x = 390;
  idCard2.y = 390;
  idCard2.height = 70;
  idCard2.width = 70;

  idCard3.interactive = true;
  idCard3.buttonMode = true;
  idCard3.x = 410;
  idCard3.y = 250;
  idCard3.height = 70;
  idCard3.width = 70;

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

  //Create SwitchLight
  let radius = 32;
  let blurSize = 8;
 
  const circle = new PIXI.Graphics()
    .beginFill(0xFFFFFF,0.5)
    .drawCircle(radius + blurSize, radius + 
      blurSize, radius)
    .endFill();
    circle.filters = [
      new PIXI.filters.BlurFilter(blurSize)
    ];

    const bounds = new PIXI.Rectangle(0, 0, (radius + 
      blurSize) * 2, (radius + blurSize) * 2);

      const blackTexture = app.renderer.generateTexture(circle,
        PIXI.SCALE_MODES.NEAREST, 1, bounds);

        // const focus1 = new PIXI.Sprite(blackTexture);
        
    const lightSwitch = new PIXI.Sprite(blackTexture);

        lightSwitch.anchor.set(0.9);
        lightSwitch.x = 590;
        lightSwitch.y = 450

        lightSwitch.interactive = true;
        lightSwitch.buttonMode = true;
      
  // lightSwitch.beginFill(0xffffff, 0.1);
  // lightSwitch.drawRect(540, 410, 30, 30);
  // lightSwitch.endFill();
  // lightSwitch.lineStyle(0);

  const pcLight = new PIXI.Graphics();
  pcLight.interactive = true;
  pcLight.buttonMode = true;
  pcLight.beginFill(0xffffff, 0.1);
  pcLight.drawRect(540, 410, 30, 30);
  pcLight.endFill();
  pcLight.lineStyle(0);


  //SendBack to Game
  return {
    idCard1,
    idCard2,
    idCard3,
    key,
    door,
    lightSwitch,
    flashLight,
    pcLight
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

  pcoff.beginFill(0xffffff, 0.1);
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
