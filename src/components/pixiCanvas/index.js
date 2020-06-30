import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";
import {createDrawer,createUserInterface} from "../../helper/createObjects";
import {connect} from "react-redux";
// import { tsConstructorType } from "@babel/types";
// import { useSelector } from 'react-redux'
 
function PixiCanvas({rooms}) {

  // const assets = useSelector(state => state)
  // console.log(assets);
  
  useLayoutEffect(() => {

    const container = document.querySelector("#pixi-container");
    container.appendChild(app.view);    

    app.loader
    .add("furniture",require("../../assets/objects/Drawer2.png"))
    .add("arrows",require("../../assets/objects/usertools.png"))
    .load(doneLoading);
  }); 
 
  let app = new PIXI.Application({ width: 768, height: 612 });
   
  // SetFirstBackground
  // Result is true
  console.log(rooms.corner.view === "../../assets/rooms/Corner.png");

  // String works but rooms.corner.view does not work.
  const corner = PIXI.Sprite.from(require("../../assets/rooms/Corner.png"));
  // const backRoom = PIXI.Sprite.from(require("../../assets/rooms/Roomback.png"));
  

  console.log(corner);


  corner.width = 768;
  corner.height = 612;
  app.stage.addChild(corner); 
  let drawerSheet = {};
  let arrowSheet = {};

function doneLoading() {

  createDrawerSheet();
  createArrowSheet();
  let ui = createUserInterface(arrowSheet,app);
  let left = ui[0];
  let right = ui[1];
  app.stage.addChild(left,right);  
  let drawer = createDrawer(drawerSheet,app);

  // Add default Items
  app.stage.addChild(drawer); 
  // app.stage.removeChild(background); 
}

// Working on Sheets
function createArrowSheet(){
  let asheet = new PIXI.BaseTexture.from(app.loader.resources["arrows"].url);
  let height = 100;
  arrowSheet["left"] =
  [ new PIXI.Texture(asheet, new PIXI.Rectangle(0, 0, 110, height))];
  arrowSheet["right"] =
  [ new PIXI.Texture(asheet, new PIXI.Rectangle(130, 0, 110, height))];
}

function createDrawerSheet(){
  let fsheet = new PIXI.BaseTexture.from(app.loader.resources["furniture"].url);
  let w = 258;
  let h = 400;  

drawerSheet["closed"]=
[ new PIXI.Texture(fsheet, new PIXI.Rectangle(0 * w, 0, w, h))];

drawerSheet["open1"]=
[ new PIXI.Texture(fsheet, new PIXI.Rectangle(1 * w, 0, w, h))];

drawerSheet["open2"]=
[ new PIXI.Texture(fsheet, new PIXI.Rectangle(2 * w, 0, w, h))];

drawerSheet["open3"]=
[ new PIXI.Texture(fsheet, new PIXI.Rectangle(3 * w, 0, w, h))];

drawerSheet["open4"]=
[  new PIXI.Texture(fsheet, new PIXI.Rectangle(4 * w, 0, w, h))];
}

// End Sheets
// Test for input field. 
return <div id="pixi-container"></div>;

}
const mapStateToProps = (state) => {
  return {
      rooms: state.assetReducer.roomParts
  }
}

// const mapActionsToProps = (dispatch) => {
//   return{
//       selectCharacter: (characterName) => {
//            dispatch({
//               type: "SELECT",
//               payload: {
//                   characterName
//               }
//            });
//       },
//   }
// }

export default connect(
  mapStateToProps,
  // mapActionsToProps
)(PixiCanvas);

