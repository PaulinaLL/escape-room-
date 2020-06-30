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

  function onPointerOver1() {
    this.isOver = true;
    if (this.isDown) {
      return;
    }
    this.texture = furnitureSheet.open1[0];
  }

  //   function onPointerOver2() {
  //     this.isOver = true;
  //     if (this.isDown) {
  //       return;
  //     }
  //     this.texture = furnitureSheet.open2[0];
  //   }

  //   function onPointerOver3() {
  //     this.isOver = true;
  //     if (this.isDown) {
  //       return;
  //     }
  //     this.texture = furnitureSheet.open3[0];
  //   }

  //   function onPointerOver4() {
  //     this.isOver = true;
  //     if (this.isDown) {
  //       return;
  //     }
  //     this.texture = furnitureSheet.open4[0];
  //   }

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

  //HITAREAS

  //   drawer.hitArea = new PIXI.Rectangle([530, 295, 100, 100]);

  // Might be turned back to normal. Lets see.
  //Create a Pixi Application
  //Add the canvas that Pixi automatically created for you to the HTML document
  app.stage.addChild(drawer);
}
