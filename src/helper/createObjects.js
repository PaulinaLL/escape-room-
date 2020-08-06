import * as PIXI from "pixi.js";

export function createUserInterface(arrowSheet, app) {
  const left = new PIXI.Sprite(arrowSheet.left[0]);
  const right = new PIXI.Sprite(arrowSheet.right[0]);
  const down = new PIXI.Sprite(arrowSheet.down[0]);

  left.interactive = true;
  left.buttonMode = true;

  // left.on("pointerover", leftOver);

  right.interactive = true;
  right.buttonMode = true;
  right.scale.set(-1);

  down.interactive = true;
  down.buttonMode = true;
  down.rotation -= 1.61;

  right.x = 730;
  right.y = 785;
  left.x = 70;
  left.y = 660;
  down.x = 340;
  down.y = 800;

  return [left, right, down];
}
export function setItems(items, app) {
  //Visible Objects
  const idCard1 = new PIXI.Sprite(items.idCard[0]);
  const idCard2 = new PIXI.Sprite(items.idCard2[0]);
  const idCard3 = new PIXI.Sprite(items.idCard3[0]);
  const key = new PIXI.Sprite(items.key[0]);
  const flashLight = new PIXI.Sprite(items.flashLight[0]);
  const open = new PIXI.Sprite(items.open[0]);
  const lock = new PIXI.Sprite(items.lock[0]);
  const skeletonPcON = new PIXI.Sprite(items.battleGame[0]);

  //green
  idCard1.interactive = true;
  idCard1.buttonMode = true;
  idCard1.x = 110;
  idCard1.y = 490;
  idCard1.height = 70;
  idCard1.width = 70;

  //yellow
  idCard2.interactive = true;
  idCard2.buttonMode = true;
  idCard2.x = 270;
  idCard2.y = 500;
  idCard2.height = 70;
  idCard2.width = 70;

  // orange
  idCard3.interactive = true;
  idCard3.buttonMode = true;
  idCard3.x = 420;
  idCard3.y = 300;
  idCard3.height = 70;
  idCard3.width = 70;

  key.interactive = true;
  key.buttonMode = true;
  key.x = 600;
  key.y = 510;
  key.height = 90;
  key.width = 90;

  flashLight.interactive = true;
  flashLight.buttonMode = true;
  flashLight.x = 600;
  flashLight.y = 530;
  flashLight.height = 90;
  flashLight.width = 90;

  open.x = 145;
  open.y = 320;
  open.height = 90;
  open.width = 100;

  lock.x = 145;
  lock.y = 335;
  lock.height = 90;
  lock.width = 100;

  // skeletonPcON.interactive = true;
  // skeletonPcON.buttonMode = true;
  skeletonPcON.x = 660;
  skeletonPcON.y = 405;
  skeletonPcON.height = 70;
  skeletonPcON.width = 80;
  skeletonPcON.rotation = 0.05;

  //Interactions Only
  const door = new PIXI.Graphics();

  door.interactive = true;
  door.buttonMode = true;
  door.beginFill(0xffffff, 0.001);
  door.drawRect(100, 250, 100, 200);
  door.endFill();
  door.lineStyle(0);

  const greenCardSlot = new PIXI.Graphics();
  greenCardSlot.interactive = true;
  greenCardSlot.buttonMode = true;
  greenCardSlot.beginFill(0xffffff, 0.001);
  greenCardSlot.drawRect(650, 330, 60, 60);
  greenCardSlot.endFill();
  greenCardSlot.lineStyle(0);

  const orangeCardSlot = new PIXI.Graphics();
  orangeCardSlot.interactive = true;
  orangeCardSlot.buttonMode = true;
  orangeCardSlot.beginFill(0xffffff, 0.001);
  orangeCardSlot.drawRect(530, 320, 60, 60);
  orangeCardSlot.endFill();
  orangeCardSlot.lineStyle(0);

  const blueCardSlot = new PIXI.Graphics();
  blueCardSlot.interactive = true;
  blueCardSlot.buttonMode = true;
  blueCardSlot.beginFill(0xffffff, 0.001);
  blueCardSlot.drawRect(595, 210, 60, 60);
  blueCardSlot.endFill();
  blueCardSlot.lineStyle(0);

  // Skeleton PC
  const skeletonPc = new PIXI.Graphics();

  skeletonPc.interactive = true;
  skeletonPc.buttonMode = true;
  skeletonPc.beginFill(0xffffff, 0.001);
  skeletonPc.drawRect(645, 405, 100, 100);
  skeletonPc.endFill();
  skeletonPc.lineStyle(0);

  const skeletonFinger = new PIXI.Graphics();

  skeletonFinger.interactive = true;
  skeletonFinger.buttonMode = true;
  skeletonFinger.beginFill(0xffffff, 0.001);
  skeletonFinger.drawRect(565, 490, 45, 40);
  skeletonFinger.endFill();
  skeletonFinger.lineStyle(0);

  const extraDrawer = new PIXI.Graphics();

  extraDrawer.interactive = true;
  extraDrawer.buttonMode = true;
  extraDrawer.beginFill(0xffffff, 0.001);
  extraDrawer.drawRect(325, 495, 50, 90);
  extraDrawer.endFill();
  extraDrawer.lineStyle(0);

  // const uvHint = new PIXI.Graphics();

  // uvHint.interactive = true;
  // uvHint.buttonMode = true;
  // uvHint.beginFill(0x00ff00, 1);
  // uvHint.drawRect(275, 255, 110, 80);
  // uvHint.endFill();
  // uvHint.lineStyle(0);

  //Create SwitchLight
  let radius = 32;
  let blurSize = 8;

  const circle = new PIXI.Graphics()
    .beginFill(0xffffff, 0.5)
    .drawCircle(radius + blurSize, radius + blurSize, radius)
    .endFill();
  circle.filters = [new PIXI.filters.BlurFilter(blurSize)];

  const bounds = new PIXI.Rectangle(
    0,
    0,
    (radius + blurSize) * 2,
    (radius + blurSize) * 2
  );

  const blackTexture = app.renderer.generateTexture(
    circle,
    PIXI.SCALE_MODES.NEAREST,
    1,
    bounds
  );

  // const focus1 = new PIXI.Sprite(blackTexture);

  const lightSwitch = new PIXI.Sprite(blackTexture);

  lightSwitch.anchor.set(0.9);
  lightSwitch.x = 590;
  lightSwitch.y = 450;

  lightSwitch.interactive = true;
  lightSwitch.buttonMode = true;

  const lightSwitchRiddle = new PIXI.Sprite(blackTexture);
  lightSwitchRiddle.anchor.set(0.9);
  lightSwitchRiddle.x = 590;
  lightSwitchRiddle.y = 450;

  lightSwitchRiddle.interactive = true;
  lightSwitchRiddle.buttonMode = true;

  const setBasics = (object) => {
    object.interactive = true;
    object.buttonMode = true;
    object.endFill();
    object.lineStyle(0);
    return object;
  };

  const pcLight = new PIXI.Graphics();
  setBasics(pcLight);
  pcLight.beginFill(0xffffff, 0.1);
  pcLight.drawRect(540, 410, 30, 30);

  const escapeDoor = new PIXI.Graphics();
  escapeDoor.beginFill(0xffffff, 0.001);
  escapeDoor.drawRect(300, 280, 200, 330);
  setBasics(escapeDoor);

  const escapeDoorScreen = new PIXI.Graphics();
  escapeDoorScreen.beginFill(0xffffff, 0.001);
  escapeDoorScreen.drawRect(160, 340, 70, 100);
  setBasics(escapeDoorScreen);
  const safe = new PIXI.Graphics();

  safe.beginFill(0xffffff, 1);
  //Left, Top,Width,Height,
  safe.drawRect(120, 500, 120, 140);
  setBasics(safe);

  //SendBack to Game
  return {
    idCard1,
    idCard2,
    idCard3,
    key,
    door, //5
    lightSwitch,
    flashLight,
    pcLight,
    greenCardSlot,
    orangeCardSlot, //10
    blueCardSlot,
    lightSwitchRiddle,
    escapeDoor,
    escapeDoorScreen,
    safe, // 15
    skeletonPc,
    skeletonFinger,
    extraDrawer,
    open,
    lock,
    // uvHint,
    skeletonPcON,
  };
}

export function createScope(scopeSheet) {}

export function createDrawer(furnitureSheet) {
  const drawer = new PIXI.AnimatedSprite(furnitureSheet.closed);
  drawer.buttonMode = true;
  drawer.interactive = true;
  drawer.on("pointerdown", onPointerOver).on("pointermove", onPointerOut);
 
  function onPointerOver(event) {
    event.stopPropagation();
    const valueY = Object.values(event.data.global)[1];

    if (valueY >= 440 && valueY <= 509) {
      this.texture = furnitureSheet.open4[0];
    } else if (valueY >= 510 && valueY <= 559) {
      this.texture = furnitureSheet.closed[0];
    } else if (valueY >= 560 && valueY <= 639) {
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

  pcoff.beginFill(0xffffff, 0.2);
  pcoff.drawRect(20, 80, 200, 180);
  pcoff.endFill();
  pcoff.lineStyle(0);
  pcoff.filters = [new PIXI.filters.BlurFilter(8)];

  pcoff.interactive = true;
  pcoff.buttonMode = true;

  // pcoff.on("pointerdown", pcRiddleDisplay);
  pcoff.x = 50;
  pcoff.y = 110;
  return pcoff;
}

export function createBox(boxSheet) {
  const boxClosed = new PIXI.Sprite(boxSheet.closed[0]);
  const boxOpened = new PIXI.Sprite(boxSheet.opened[0]);
  const uvlight = new PIXI.Sprite(boxSheet.uvlight[0]);
  const safe = new PIXI.Sprite(boxSheet.safe[0]);
  const safeOpen = new PIXI.Sprite(boxSheet.safeOpen[0]);
  const tableOpen = new PIXI.Sprite(boxSheet.tableOpen[0]);
  

  // position
  boxClosed.x = 450;
  boxClosed.y = 475;
  boxOpened.x = 465;
  boxOpened.y = 420;
  uvlight.x = 220;
  uvlight.y = 145;
  uvlight.width = 200;
  uvlight.height = 200;
  safe.x = 95;
  safe.y = 430;
  safe.width = 170;
  safe.height = 250;
  safeOpen.x = 20;
  safeOpen.y = 430;
  safeOpen.width = 250;
  safeOpen.height = 250;
  tableOpen.width = 250;
  tableOpen.height = 250;
  tableOpen.x = 130;
  tableOpen.y = 420;

//  safe.drawRect(120, 500, 120, 140);

  return [boxClosed, boxOpened, uvlight, safe, safeOpen, tableOpen];
}
