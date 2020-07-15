import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";
import {
  createDrawer,
  createUserInterface,
  createPC,
  setItems,
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
        .add("itemList", require("../../assets/objects/items.png"));




      props.app.loader.load(setup);
      dispatch({ type: "LOADED" });
    }
  });

  let corner = new PIXI.Container();
  let roomBack = new PIXI.Container();
  let frontDoor = new PIXI.Container();
  let innerCell = new PIXI.Container();

  const roomParts = [
    PIXI.Sprite.from(require("../../assets/rooms/Corner.png")),
    PIXI.Sprite.from(require("../../assets/rooms/Roomback.png")),
    PIXI.Sprite.from(require("../../assets/rooms/Frontdoor.png")),
    PIXI.Sprite.from(require("../../assets/rooms/RoombackJDO.png")),
    PIXI.Sprite.from(require("../../assets/rooms/innercell.png"))
  ];

  corner.addChild(roomParts[0]);
  roomBack.addChild(roomParts[3], roomParts[1]);
  frontDoor.addChild(roomParts[2]);
  innerCell.addChild(roomParts[4]);

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

  function takeIDCard() {
    roomBack.children[2].visible = false;
    dispatch({ type: "TAKE_IDCARD1" });
  }
  function takeKey() {
    frontDoor.children[1].visible = false;
    dispatch({ type: "TAKE_KEY" });
    roomBack.children[3].off("pointerdown", closedDoor);
    roomBack.children[3].on("pointerdown", openDoor);
  }

  let closedDoor = () => {
    dispatch({ type: "NO_KEY" });
    console.log("No Key");
  };

  let openDoor = () => {
    dispatch({ type: "OPEN_DOOR" });
    console.log("open_Door");
    roomBack.children[1].visible = false;
    roomBack.children[3].off("pointerdown", closedDoor);
    roomBack.children[3].on("pointerdown", goToInner);
  };

  let goToInner = () => {
    dispatch({type: "GO_IN_CELLDOOR"});
  };

  let drawerSheet = {};
  let arrowSheet = {};
  let pcSheet = {};
  let items = {};

  function setup() {
    // Preparing Sheets
    createDrawerSheet();
    createArrowSheet();
    createPCSheet();
    createItemSheet();

    // Preparing Items,Objects and Interface
    let ui = createUserInterface(arrowSheet, props.app);
    let drawer = createDrawer(drawerSheet, props.app);
    let pc = createPC(pcSheet, props.app);
    let objects = setItems(items, props.app);

    let left = ui[0];
    let right = ui[1];

    // Preparing Eventhandler for Items, Objects and Interface
    left.on("pointerdown", turnLeft);
    right.on("pointerdown", turnRight);
    pc.on("pointerdown", displayFirstRiddle);
    drawer.on("pointerdown", displaySecondRiddle);
    //Objects
    objects.idCard1.on("pointerdown", takeIDCard);
    objects.key.on("pointerdown", takeKey);
    objects.door.on("pointerdown", closedDoor);

    // Setting Visibility of Screens

    if (!props.app.stage.children.length) {
      corner.addChild(drawer, pc);
      roomBack.addChild(objects.idCard1, objects.door);
      frontDoor.addChild(objects.key);

      corner.visible = true;
      innerCell.visible = false;
      roomBack.visible = false;
      frontDoor.visible = false;
      // Adding Screens and Interface to Stage
      props.app.stage.addChild(corner, roomBack, frontDoor,innerCell);
      // Adding Arrows
      props.app.stage.addChild(left, right);

    
      //Preparing FlashLight

    // Inner radius of the circle
const radius = 100;
// The blur amount
const blurSize = 32;

frontDoor.width = props.app.screen.width;
frontDoor.height = props.app.screen.height;


    const circle = new PIXI.Graphics()
    .beginFill(0xFF0000)
    .drawCircle(radius + blurSize, radius + 
      blurSize, radius)
    .endFill();
    circle.filters = [
      new PIXI.filters.BlurFilter(blurSize)
    ];

    const bounds = new PIXI.Rectangle(0,0, (radius + 
      blurSize) * 2, (radius + blurSize) * 2);
    
      const blackTexture = props.app.renderer.generateTexture(circle,
        PIXI.SCALE_MODES.NEAREST, 1, bounds);
        const focus = new PIXI.Sprite(blackTexture);

        props.app.stage.addChild(focus);
        frontDoor.mask = focus;

        props.app.stage.interactive = true;
        props.app.stage.on('mousemove', pointerMove);

        function pointerMove(event) {
            focus.position.x = event.data.global.x - focus.width / 2;
            focus.position.y = event.data.global.y - focus.height / 2;
        }
 
    }

     }

  if (props.app.stage.children.length) {
    props.app.stage.children[0].visible = false;
    props.app.stage.children[1].visible = false;
    props.app.stage.children[2].visible = false;
    props.app.stage.children[3].visible = false;


    switch (assetReducer.partNumber) {
      case 1:
        props.app.stage.children[1].visible = true;
        break;
      case 2:
        props.app.stage.children[2].visible = true;
        break;
      case 3: 
        props.app.stage.children[3].visible = true;
        break;
      case 0:
        default:
        props.app.stage.children[0].visible = true;
        break;
    }
  }

  // Working on Sheets
  // Sheets for diverse items which have just one state inside screen or inventory

  function createItemSheet() {
    let itemSheet = new PIXI.BaseTexture.from(
      props.app.loader.resources["itemList"].url
    );

    items["idCard"] = [
      new PIXI.Texture(itemSheet, new PIXI.Rectangle(0, 0, 130, 100)),
    ];
    items["key"] = [
      new PIXI.Texture(itemSheet, new PIXI.Rectangle(130, 0, 130, 100)),
    ];
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
    let h = 490;

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
