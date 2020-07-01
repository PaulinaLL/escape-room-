import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";

import {createDrawer,createUserInterface} from "../../helper/createObjects";
import { useSelector,useDispatch } from 'react-redux'

export default function Game(props) {

  const {assetReducer} = useSelector(state => state);
  const dispatch = useDispatch();
  let loaded = false;

  useLayoutEffect(() => { 

    if(!loaded){
      props.app.loader
      .reset()
      .add("furniture", require("../../assets/objects/Drawer2.png"))
      .add("arrows", require("../../assets/objects/usertools.png"));
       props.app.loader.load(doneLoading);
    }
  
  });
  // loaded= true;
   
  const roomParts = [PIXI.Sprite.from(require("../../assets/rooms/Corner.png")),
                     PIXI.Sprite.from(require("../../assets/rooms/Roomback.png"))
  ];

  roomParts.map((part) => {
    part.width = 768
    part.height = 612
    return part;
  })

  function onButtonDown(){
    dispatch(
      {type: "SwitchRoom"}
    );

  }

  console.log(assetReducer.partNumber)
  props.app.stage.addChild(roomParts[assetReducer.partNumber]); 
   
  let drawerSheet = {};
  let arrowSheet = {};

function doneLoading() {

  createDrawerSheet();
  createArrowSheet();
  let ui = createUserInterface(arrowSheet,props.app);
  let left = ui[0];
  let right = ui[1];
  left
    .on("pointerdown", onButtonDown);
    props.app.stage.addChild(left,right);  
    let drawer = createDrawer(drawerSheet,props.app);

  // Add default Items
  props.app.stage.addChild(drawer); 

}

// Working on Sheets
function createArrowSheet(){
  let asheet = new PIXI.BaseTexture.from(props.app.loader.resources["arrows"].url);
  let height = 100;
  arrowSheet["left"] =
  [ new PIXI.Texture(asheet, new PIXI.Rectangle(0, 0, 110, height))];
  arrowSheet["right"] =
  [ new PIXI.Texture(asheet, new PIXI.Rectangle(130, 0, 110, height))];
}

function createDrawerSheet(){
  let fsheet = new PIXI.BaseTexture.from(props.app.loader.resources["furniture"].url);
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


