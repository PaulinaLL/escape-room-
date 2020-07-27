import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";
import GetUserName from "../promptWindow";
import {
  createDrawer,
  createUserInterface,
  createPC,
  setItems,
  createBox,
} from "../../helper/createObjects";
// import {
//   takeIDCard2
// } from "../../helper/gameFunctions";
import { useSelector, useDispatch } from "react-redux";
export default function Game(props) {
  const { assetReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  //let config = {};
  const userName = props.userName;
  const wantsToPlay = props.wantsToPlay;
  // Predefine all variables before scope.

  useLayoutEffect(() => {
    if (!assetReducer.loaded) {
      const hoverIcon = `url(require(../../assets/objects/EyeFocused.png)), auto`;
      props.app.renderer.plugins.interaction.cursorStyles.pointer = hoverIcon;

      props.app.loader
        .reset()
        .add("furniture", require("../../assets/objects/Drawer2.png"))
        .add("arrows", require("../../assets/objects/usertools.png"))
        .add("pc", require("../../assets/objects/pc2.png"))
        .add("itemList", require("../../assets/objects/items.png"))
        .add("scope", require("../../assets/objects/scope.png"))
        .add("eyeFocused", require("../../assets/objects/EyeFocused.png"))
        .add("eyeUnfocused", require("../../assets/objects/EyeUnfocused.png"))
        .add("box", require("../../assets/objects/boxandothers.png"));

      //  let config =
      props.app.loader.load(setup);
      dispatch({ type: "LOADED" });
    }
  }, [assetReducer.loaded]);

  //Add Containers
  let corner = new PIXI.Container();
  let roomBack = new PIXI.Container();
  let frontDoor = new PIXI.Container();
  let innerCell = new PIXI.Container();

  //Add Different Fieldsettings
  let cornerField = props.app.stage.children[0];
  let roomBackField = props.app.stage.children[1];
  let frontDoorField = props.app.stage.children[2];
  let innerCellField = props.app.stage.children[3];

  // Defining all Variables of Objects/Inventory and UI for better work.
  // UserInterface
  var leftArrow = props.app.stage.children[4];
  let rightArrow = props.app.stage.children[5];

  let greenCard = "";
  let yellowCard = "";
  let orangeCard = "";
  let config = "";
  // let doorKey = corner.children[2];
  let doorKey = "";
  let pc = "";
  let door = "";
  let flashLight = "";
  // Inner radius of the circle
  const radius = 100;
  // The blur amount
  const blurSize = 32;

  frontDoor.width = props.app.screen.width;
  frontDoor.height = props.app.screen.height;

  const circle = new PIXI.Graphics()
    .beginFill(0xff0000)
    .drawCircle(radius + blurSize, radius + blurSize, radius)
    .endFill();
  circle.filters = [new PIXI.filters.BlurFilter(blurSize)];

  const bounds = new PIXI.Rectangle(
    0,
    0,
    (radius + blurSize) * 2,
    (radius + blurSize) * 2
  );

  const blackTexture = props.app.renderer.generateTexture(
    circle,
    PIXI.SCALE_MODES.NEAREST,
    1,
    bounds
  );

  const focus1 = new PIXI.Sprite(blackTexture);
  // const eyes2 = []
  // const eye   = PIXI.Sprite.from(require("../../assets/objects/EyeFocused.png"));
  focus1.anchor.set(0.9);
  focus1.x = 100;
  focus1.y = 660;

  const roomParts = [
    PIXI.Sprite.from(require("../../assets/rooms/Corner.png")),
    PIXI.Sprite.from(require("../../assets/rooms/Roomback.png")),
    PIXI.Sprite.from(require("../../assets/rooms/Frontdoor.png")),
    PIXI.Sprite.from(require("../../assets/rooms/RoombackJDO.png")),
    PIXI.Sprite.from(require("../../assets/rooms/innercell.png")),
  ];

  corner.addChild(roomParts[0]);
  roomBack.addChild(roomParts[3], roomParts[1]);
  frontDoor.addChild(roomParts[2]);
  innerCell.addChild(roomParts[4]);

  roomParts.map((part) => {
    part.width = 800;
    part.height = 800;
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
    dispatch({ type: "SELECT_SWITCHER" });
  }
  function displayThirdRiddle() {
    dispatch({ type: "SELECT_DRAWER" });
  }
  function displayFourthRiddle() {
    dispatch({ type: "SELECT_ORANGE_SLOT" });
  }

  // function displayFourthRiddle() {
  //   dispatch({ type: "SELECT_SCREEN" });
  // }
  // function displayFifthRiddle() {
  //   dispatch({ type: "SELECT_SKELETON" });
  // }
  function addArrows() {
    if (props.app.stage.children.length) {
      props.app.stage.children[4].visible = true;
    }
    //    props.app.stage.children[4].visible = true;
  }

  function takeIDCard1() {
    // config.greenCard.visible = false;
    dispatch({ type: "TAKE_IDCARD1" });
    // let greenSlot = innerCell.children[1];
    greenCard = frontDoor.children[3];
    greenCard.visible = false;
    // props.app.stage.children[8].visible = false;
    // greenSlot.off("pointerdown", withoutGreenCard);
    // greenSlot.on("pointerdown", openBox);
    // dispatch({ type: "TAKE_IDCARD3" });
    innerCell.children[1].off("pointerdown", withoutGreenCard);
    innerCell.children[1].on("pointerdown", openBox);
  }

  function takeIDCard2() {
    //5 is idCArd 2 - yellow card (without flashlight 4)
    yellowCard = roomBack.children[3];
    yellowCard.visible = false;
    dispatch({ type: "TAKE_IDCARD2" });
  }

  function takeIDCard3() {
    //6 is idCArd3 - orange card (without flashlight 5)
    orangeCard = roomBack.children[4];
    orangeCard.visible = false;

    dispatch({ type: "TAKE_IDCARD3" });
    innerCell.children[2].off("pointerdown", withoutOrangeCard);
    innerCell.children[2].on("pointerdown", turnOnCellScreen);
  }

  function takeKey() {
    //corner child2 is key
    doorKey = corner.children[2];
    // door = roomBack.children[1];
    door = props.app.stage.children[1].children[2];

    // console.log(props.stage.children[1]);
    dispatch({ type: "TAKE_KEY" });
    doorKey.visible = false;
    // props.app.stage.children[8].visible = true;
    door.off("pointerdown", closedDoor);
    door.on("pointerdown", openDoor);
    // config.greenCard.visible = false;
    // config.door.off("pointerdown", closedDoor);
    // config.door.on("pointerdown", openDoor);
  }

  function takeFlashLight() {
    dispatch({ type: "TAKE_FLASHLIGHT" });
    //4 is FlashLightObject
    focus1.anchor.set(0.1);
    // roomBack.children[4].visible = false;
    // innerCell.children[4].visible = false; - closed box
    // innerCell.children[5].visible = false; -opened box
    innerCell.children[6].visible = false;
    props.app.stage.children[7].visible = false;
    props.app.stage.children[6].off("pointerdown", lightOn);
    props.app.stage.children[6].on("pointerdown", lightOnWithFlashLight);
    //GreenCardSlot gets deacivated:
    innerCell.children[1].interactive = false;
  }

  let closedDoor = () => {
    dispatch({ type: "NO_KEY" });
    console.log("No Key");
  };

  let code = () => {
    dispatch({ type: "CODE" });
    console.log("need a code");
  };

  let sealed = () => {
    dispatch({ type: "NO_ESCAPE" });
    console.log("cannot esape");
  };
  let openDoor = () => {
    // dispatch open door, sets the key visibility in the collection to false
    dispatch({ type: "OPEN_DOOR" });
    console.log("open_Door");
    // door to the innercell
    roomBack.children[1].visible = false;
    roomBack.children[2].off("pointerdown", closedDoor);
    roomBack.children[2].on("pointerdown", goToInner);
  };

  let goToInner = () => {
    dispatch({ type: "GO_IN_CELLDOOR" });
  };

  let lightOn = () => {
    console.log(props);

    if (frontDoor.mask === focus1) {
      corner.mask = false;
      innerCell.mask = false;
      roomBack.mask = false;
      frontDoor.mask = false;
    } else {
      corner.mask = focus1;
      innerCell.mask = focus1;
      roomBack.mask = focus1;
      frontDoor.mask = focus1;
    }
  };

  let lightOnWithFlashLight = () => {
    if (frontDoor.mask === focus1) {
      frontDoor.mask = false;
      roomBack.mask = false;
      innerCell.mask = false;
      corner.mask = false;
      props.app.stage.children[7].visible = false;
      //  props.app.stage.children[6].visible = false;
    } else {
      frontDoor.mask = focus1;
      roomBack.mask = focus1;
      innerCell.mask = focus1;
      corner.mask = focus1;
      props.app.stage.children[7].visible = true;
      //  props.app.stage.children[6].visible = true;
    }
  };

  function openBox() {
    dispatch({ type: "OPEN_BOX" });
    let box = createBox(boxSheet, props.app);
    let boxOpened = box[1];
    innerCell.addChild(boxOpened);
    let objects = setItems(items, props.app);
    objects.flashLight.on("pointerdown", takeFlashLight);
    innerCell.addChild(objects.flashLight);
  }

  function turnOnCellScreen() {
    dispatch({ type: "TURN_ON_CELL_SCREEN" });
    dispatch({ type: "SELECT_ORANGE_SLOT" });
    console.log("TURNS THE CELLSCREEN");
  }

  function withoutGreenCard() {
    console.log("green card needed");
  }

  function withoutOrangeCard() {
    console.log("orange card needed");
  }
  function withoutBlueCard() {
    console.log("blue card needed");
  }

  let drawerSheet = {};
  let arrowSheet = {};
  let pcSheet = {};
  let items = {};
  let scope = {};
  //  let eye = {};
  let boxSheet = {};

  //Setup All Objects/Furniture and RoomParts
  //////////////////////////////////////////////////// Start Setup //////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////

  function setup(config) {
    // Preparing Sheets
    createDrawerSheet();
    createArrowSheet();
    createPCSheet();
    createItemSheet();
    createScopeSheet();
    createBoxSheet();

    // Preparing Items,Objects and Interface
    let ui = createUserInterface(arrowSheet, props.app);
    let drawer = createDrawer(drawerSheet, props.app);
    let pc = createPC(pcSheet, props.app);
    let objects = setItems(items, props.app);
    let box = createBox(boxSheet, props.app);
    let left = ui[0];
    let right = ui[1];
    let boxClosed = box[0];
    // let boxOpened = box[1];

    // Preparing Eventhandler for Items, Objects and Interface
    left.on("pointerdown", turnLeft);
    right.on("pointerdown", turnRight);
    pc.on("pointerdown", displayFirstRiddle);
    drawer.on("pointerdown", displayThirdRiddle);
    // objects.escapeDoor.on("pointerdown", displayFirstRiddle);

    //Objects
    //Visible
    objects.idCard1.on("pointerdown", takeIDCard1);
    objects.idCard2.on("pointerdown", takeIDCard2);
    objects.idCard3.on("pointerdown", takeIDCard3);
    objects.lightSwitch.on("pointerdown", lightOn);
    objects.lightSwitchRiddle.on("pointerdown", displaySecondRiddle);
    //objects.key.on("pointerdown", takeKey);
    objects.key.on("pointerdown", takeKey);
    //Interactions
    objects.door.on("pointerdown", closedDoor);

    //FrontDoor
    objects.safe.on("pointerdown", code);
    objects.escapeDoor.on("pointerdown", sealed);
    // objects.flashLight.on("pointerdown", takeFlashLight);
    objects.greenCardSlot.on("pointerdown", withoutGreenCard);
    objects.orangeCardSlot.on("pointerdown", withoutOrangeCard);
    objects.blueCardSlot.on("pointerdown", withoutBlueCard);

    // greenCard = roomBack.children[2];
    // doodr = roomBack.children[3];
    // yellowCard = roomBack.children[4];
    // orangeCard = roomBack.children[5];
    // doodr = roomBack.children[2];
    yellowCard = roomBack.children[3];
    orangeCard = roomBack.children[4];

    // Setting Visibility of Screens
    // order of objects in the roomback matters (starts from 0)
    // removes key  from drawer from corner for now - to add it when riddle solved
    corner.addChild(drawer, objects.key);
    objects.key.visible = false;
    roomBack.addChild(
      // objects.idCard1,
      objects.door,
      objects.idCard2,
      objects.idCard3
      // objects.flashLight, - bringing it back changes the order of children[]
    );

    frontDoor.addChild(
      objects.escapeDoor,
      objects.safe,
      objects.idCard1
      //FrontDoor Object Nr 1
      // objects.safe FrontDoor Nr 2
      // GreenCard Nr3
    );

    // 350 Define Names for Objects and parts of room.
    //  pc = props.app.stage.children[8];
    innerCell.addChild(
      objects.greenCardSlot,
      objects.orangeCardSlot,
      objects.blueCardSlot,
      boxClosed
    );

    corner.visible = true;
    innerCell.visible = false;
    roomBack.visible = false;
    frontDoor.visible = false;
    objects.lightSwitch.visible = false;
    objects.lightSwitchRiddle.visible = false;

    // Adding Screens and Interface to Stage
    props.app.stage.addChild(corner, roomBack, frontDoor, innerCell);
    props.app.stage.addChild(left, right, objects.lightSwitch);
    // Adding Arrows

    left.visible = false;
    right.visible = false;

    //4 = left, 5 = right, 6 = objects.lightSwitch?
    //Preparing FlashLight and DarkRoom
    props.app.stage.addChild(focus1, pc);
    props.app.stage.children[7].visible = false;
    props.app.stage.addChild(objects.lightSwitchRiddle);
    // props.app.stage.children[6].visible = false;
    // props.app.stage.children[8].visible = false;

    corner.mask = focus1;
    innerCell.mask = focus1;
    roomBack.mask = focus1;
    frontDoor.mask = focus1;
    props.app.stage.interactive = true;
    props.app.stage.on("mousemove", pointerMove);

    function pointerMove(event) {
      focus1.position.x = event.data.global.x - focus1.width / 2;
      focus1.position.y = event.data.global.y - focus1.height / 2;
    }
    config = {
      greenCard: frontDoor.children[3],
      yellowCard: roomBack.children[3],
      orangeCard: roomBack.children[4],
      door: roomBack.children[1],
      drawer: corner.children[1],
      doorKey: corner.children[2],
    };
  }
  //End of Setup.
  /////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////

  // Trying to create fields..

  if (props.app.stage.children.length) {
    props.app.stage.children[6].visible = false;
    props.app.stage.children[9].visible = false;

    cornerField.visible = false;
    roomBackField.visible = false;
    frontDoorField.visible = false;
    innerCellField.visible = false;

    // This step is a bit difficult. And does nnot update a second time.
    //pointer for dark

    switch (assetReducer.partNumber) {
      case 1:
        //RoomBack
        roomBackField.visible = true;
        props.app.stage.children[8].visible = false;
        break;
      case 2:
        //FrontDoor
        assetReducer.solved.riddle2 === true
          ? (props.app.stage.children[6].visible = true)
          : (props.app.stage.children[9].visible = true);
        props.app.stage.children[2].visible = true;
        props.app.stage.children[8].visible = false;
        break;
      case 3:
        //InnerCell
        innerCellField.visible = true;
        props.app.stage.children[8].visible = false;
        break;
      case 0:
      default:
        //Corner
        cornerField.visible = true;
        props.app.stage.children[8].visible = true;
        break;
    }
  }

  // Working on Sheets
  // Sheets for diverse items which have just one state inside screen or inventory
  function createScopeSheet() {
    let scopeSheet = new PIXI.BaseTexture.from(
      props.app.loader.resources["scope"].url
    );
    

    scope["basic"] = [
      new PIXI.Texture(scopeSheet, new PIXI.Rectangle(0, 0, 130, 130)),
    ];
    scope["first"] = [
      new PIXI.Texture(scopeSheet, new PIXI.Rectangle(130, 0, 130, 130)),
    ];
  }

  function createItemSheet() {
    let itemSheet = new PIXI.BaseTexture.from(
      props.app.loader.resources["itemList"].url
    );

    items["idCard"] = [
      new PIXI.Texture(itemSheet, new PIXI.Rectangle(0, 0, 130, 100)),
    ];
    items["idCard2"] = [
      new PIXI.Texture(itemSheet, new PIXI.Rectangle(0, 100, 130, 100)),
    ];
    items["idCard3"] = [
      new PIXI.Texture(itemSheet, new PIXI.Rectangle(0, 200, 130, 100)),
    ];
    items["key"] = [
      new PIXI.Texture(itemSheet, new PIXI.Rectangle(130, 0, 130, 100)),
    ];
    items["flashLight"] = [
      new PIXI.Texture(itemSheet, new PIXI.Rectangle(260, 0, 130, 100)),
    ];
  }

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

  function createBoxSheet() {
    let boxsheet = new PIXI.BaseTexture.from(
      props.app.loader.resources["box"].url
    );
    let width = 300;
    let height = 300;

    boxSheet["closed"] = [
      new PIXI.Texture(boxsheet, new PIXI.Rectangle(0, 0, width, height)),
    ];
    boxSheet["opened"] = [
      new PIXI.Texture(boxsheet, new PIXI.Rectangle(300, 0, width, height)),
    ];
  }

  //State for Solved riddles
  if (
    assetReducer.solved.riddle1 === true &&
    props.app.stage.children[8].visible === true
  ) {
    leftArrow.visible = true;
    rightArrow.visible = true;
    props.app.stage.children[8].visible = false;
  }

  if (assetReducer.solved.riddle2Voucher === true) {
    props.app.stage.children[2].mask = false;
    props.app.stage.children[1].mask = false;
    props.app.stage.children[3].mask = false;
    props.app.stage.children[0].mask = false;
  }

  // gives the key when the drawer riddle is solved
  if (assetReducer.solved.riddle3 === true) {
    // console.log("change things for riddle3");
    // props.app.stage.children[0].children[1] = drawer
    // props.app.stage.children[0].children[2] = key
    props.app.stage.children[0].children[2].visible = true;
    // openDoor();
    // config.drawer.off("pointerdown", displayThirdRiddle);
    props.app.stage.children[0].children[1].off(
      "pointerdown",
      displayThirdRiddle
    );
  }

  return (
    <div id="pixi-container">
      {!userName && !wantsToPlay && <GetUserName />}
    </div>
  );
}

//  props.app.stage.children[6].visible LightSwitch (Riddle)
