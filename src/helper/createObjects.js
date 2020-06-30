import * as PIXI from "pixi.js";

export function createUserInterface(arrowSheet, app) {
  // app.stage.addChild(arrowSheet.left[0]);
  console.log(arrowSheet.left[0]);
}

export function createDrawer(furnitureSheet, app) {
  const drawer = new PIXI.AnimatedSprite(furnitureSheet.closed);
  drawer.buttonMode = true;
  drawer.interactive = true;
  drawer.on("pointerover", onPointerOver1).on("pointerout", onPointerOut);

  function onPointerOver1(event) {
    event.stopPropagation();

    // const valueX = Object.values(event.data.global)[0];
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

  // Width and Height
  drawer.width = 200;
  drawer.height = 260;
  //    Position
  drawer.x = 530;
  drawer.y = 295;

  //    It would be good if we get the relationship between the values. Please do something about it.

  // Might be turned back to normal. Lets see.
  //Create a Pixi Application
  //Add the canvas that Pixi automatically created for you to the HTML document
  app.stage.addChild(drawer);
}
