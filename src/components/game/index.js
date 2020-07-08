import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";

import {
  createDrawer,
  createUserInterface,
  createPC,
  setItems
} from "../../helper/createObjects";
import { useSelector, useDispatch } from "react-redux";

export default function Game(props) {
  const { assetReducer } = useSelector((state) => state);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (!assetReducer.loaded) {
      props.app.loader
        .reset()
        .add("furniture", require("../../assets/objects/Drawer2.png"))
        .add("arrows", require("../../assets/objects/usertools.png"))
        .add("pc", require("../../assets/objects/pc2.png"))
        .add("itemList", require("../../assets/objects/itemsGimp.png"));
    }
    props.app.loader.load(doneLoading);
    dispatch({ type: "LOADED" });
  });

  let corner = new PIXI.Container();
  let roomBack = new PIXI.Container();
  let frontDoor = new PIXI.Container();


  const roomParts = [
    PIXI.Sprite.from(require("../../assets/rooms/Corner.png")),
    PIXI.Sprite.from(require("../../assets/rooms/Roomback.png")),
    PIXI.Sprite.from(require("../../assets/rooms/Frontdoor.png")),
  ];

  corner.addChild(roomParts[0]);
  roomBack.addChild(roomParts[1]);
  frontDoor.addChild(roomParts[2]);

  roomParts.map((part) => {
    part.width = 768;
    part.height = 612;
    return part;
  });

  function turnLeft() {
    dispatch({ type: "SWITCH_LEFT" });
  }
  function turnRight() {
    dispatch({ type: "SWITCH_RIGHT" });
  }
  function displayFirstRiddle() {
    dispatch({ type: "SELECT_PC" });
  }
  function displaySecondRiddle() {
    dispatch({ type: "SELECT_DRAWER" });
  }
  function takeItem(idCard){


 roomBack.children[1].visible = false;
//  roomBack.children[0].removeChild();
 
console.log(roomBack);
    dispatch({type: "TAKE_ITEM"});
  }

  let drawerSheet = {};
  let arrowSheet = {};
  let pcSheet = {};
  let items = {};

  function doneLoading() {
    // Preparing Sheets
    createDrawerSheet();
    createArrowSheet();
    createPCSheet();
    createItemSheet();
    

    // Preparing Items,Objects and Interface
    let ui = createUserInterface(arrowSheet, props.app);
    let drawer = createDrawer(drawerSheet, props.app);
    let pc = createPC(pcSheet, props.app);
    let idCard = setItems(items, props.app);

    let left = ui[0];
    let right = ui[1];

    // Preparing Functionality for Items, Objects and Interface
    left.on("pointerdown", turnLeft);
    right.on("pointerdown", turnRight);
    pc.on("pointerdown", displayFirstRiddle);
    drawer.on("pointerdown", displaySecondRiddle);
    idCard.on("pointerdown", takeItem);

    // Setting Visibility of Screens
    if(!props.app.stage.children.length)
    { 
    corner.addChild(drawer, pc)
    roomBack.addChild(idCard);


      corner.visible = true;
      roomBack.visible = false;
      frontDoor.visible = false;
      // Adding Screens and Interface to Stage
    props.app.stage.addChild(
      corner,
      roomBack,
      frontDoor,
      left, 
      right);
    }
  }  


  if (props.app.stage.children.length) {
    props.app.stage.children[0].visible = false;
    props.app.stage.children[1].visible = false;
    props.app.stage.children[2].visible = false;

    switch (assetReducer.partNumber) {
      case 1:
        props.app.stage.children[1].visible = true;
        break;
      case 2:
        props.app.stage.children[2].visible = true;
        break;
      case 0:
      default:
        props.app.stage.children[0].visible = true;
        break;
    }
  }

    // Working on Sheets
    // Sheets for diverse items which have just one state inside screen or inventory

function createItemSheet(){
  let itemSheet = new PIXI.BaseTexture.from(props.app.loader.resources["itemList"].url);

  items["idCard"] = [
    new PIXI.Texture(itemSheet, new PIXI.Rectangle(0, 0, 130, 100))
  ]
}

// Sheets with items which have more than one state. 

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

  return <div id="pixi-container"></div>;
}
