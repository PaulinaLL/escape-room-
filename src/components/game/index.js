import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";

import {
  createDrawer,
  createUserInterface,
  createPC,
} from "../../helper/createObjects";
import { useSelector, useDispatch } from "react-redux";

export default function Game(props) {
  const { assetReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

console.log(assetReducer.loaded)
  useLayoutEffect(() => {
    if (!assetReducer.loaded) {
      props.app.loader
        .reset()
        .add("furniture", require("../../assets/objects/Drawer2.png"))
        .add("arrows", require("../../assets/objects/usertools.png"))
        .add("pc", require("../../assets/objects/pc2.png"));
    }
    props.app.loader.load(doneLoading);
     dispatch({ type: "LOADED" });
  });
  // loaded= true;
  const roomParts = [
    PIXI.Sprite.from(require("../../assets/rooms/Corner.png")),
    PIXI.Sprite.from(require("../../assets/rooms/Roomback.png")),
    PIXI.Sprite.from(require("../../assets/rooms/Frontdoor.png"))
  ];

  roomParts.map((part) => {
    part.width = 768;
    part.height = 612;
    return part;
  });

  function turnLeft() {
    dispatch({ type: "SWITCHLEFT" });
  }

  function turnRight() {
    dispatch({ type: "SWITCHRIGHT" });
  }

  props.app.stage.removeChild();
  props.app.stage.addChild(roomParts[assetReducer.partNumber]);

  let drawerSheet = {};
  let arrowSheet = {};
  let pcSheet = {};

  function doneLoading() {
    createDrawerSheet();
    createArrowSheet();
    createPCSheet();
    let ui = createUserInterface(arrowSheet, props.app);
    let drawer = createDrawer(drawerSheet, props.app);
    let pc = createPC(pcSheet, props.app);

    let left = ui[0];
    let right = ui[1];
    left.on("pointerdown", turnLeft);
    right.on("pointerdown", turnRight);

    props.app.stage.addChild(left, right);
    // Add default Items
    if (assetReducer.partNumber === 0) props.app.stage.addChild(drawer, pc);
  }

  // Working on Sheets
  function createArrowSheet() {
    let asheet = new PIXI.BaseTexture.from(
      props.app.loader.resources["arrows"].url
    );
    let height = 100;
    arrowSheet["left"] = [
      new PIXI.Texture(asheet, new PIXI.Rectangle(0, 0, 130, height)),
    ];
    arrowSheet["right"] = [
      new PIXI.Texture(asheet, new PIXI.Rectangle(0, 0, 130, height)),
    ];
  }

  function createDrawerSheet() {
    let fsheet = new PIXI.BaseTexture.from(
      props.app.loader.resources["furniture"].url
    );
    let w = 256;
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

  function createPCSheet() {
    let pcsheet = new PIXI.BaseTexture.from(
      props.app.loader.resources["pc"].url
    );
    let height = 174;
    let width = 214;

    pcSheet["off"] = [
      new PIXI.Texture(pcsheet, new PIXI.Rectangle(0, 0, width, height)),
    ];
  }
   
    // dispatch({ type: "LOADED" });
  

  return <div id="pixi-container"></div>;
}
