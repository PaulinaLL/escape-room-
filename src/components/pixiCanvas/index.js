import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";
import ROOM from "../../assets/rooms/Corner.png";
import { createDrawer, createUserInterface } from "../../helper/createObjects";

function PixiCanvas() {
  useLayoutEffect(() => {
    const container = document.querySelector("#pixi-container");
    container.appendChild(app.view);
    app.loader
      .add("furniture", require("../../assets/objects/Drawer2.png"))
      .add("arrows", require("../../assets/objects/usertools.png"));
    app.loader.load(doneLoading);
  });

  let app = new PIXI.Application({ width: 768, height: 612 });

  // SetFirstBackground

  const background = PIXI.Sprite.from(ROOM);
  background.width = 768;
  background.height = 612;
  app.stage.addChild(background);
  let drawerSheet = {};
  let arrowSheet = {};

  function doneLoading() {
    createDrawerSheet();
    createArrowSheet();
    createDrawer(drawerSheet, app);
    createUserInterface(arrowSheet, app);
  }

  // Working on Sheets
  function createArrowSheet() {
    let asheet = new PIXI.BaseTexture.from(app.loader.resources["arrows"].url);
    let height = 200;
    arrowSheet["left"] = [
      new PIXI.Texture(asheet, new PIXI.Rectangle(0, 0, 200, 200, height)),
    ];
  }

  function createDrawerSheet() {
    let fsheet = new PIXI.BaseTexture.from(
      app.loader.resources["furniture"].url
    );
    let w = 258;
    let h = 400;

    drawerSheet["closed"] = [
      new PIXI.Texture(fsheet, new PIXI.Rectangle(0 * w, 0, w, h)),
    ];

    drawerSheet["open1"] = [
      new PIXI.Texture(fsheet, new PIXI.Rectangle(1 * w, 0, w, h)),
    ];

    drawerSheet["open2"] = [
      new PIXI.Texture(fsheet, new PIXI.Rectangle(2 * w, 0, w, h)),
    ];

    drawerSheet["open3"] = [
      new PIXI.Texture(fsheet, new PIXI.Rectangle(3 * w, 0, w, h)),
    ];

    drawerSheet["open4"] = [
      new PIXI.Texture(fsheet, new PIXI.Rectangle(4 * w, 0, w, h)),
    ];
  }

  return <div id="pixi-container"></div>;
}

export default PixiCanvas;
