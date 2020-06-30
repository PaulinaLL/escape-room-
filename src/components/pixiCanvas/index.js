import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";
import {createDrawer,createUserInterface} from "../../helper/createObjects";
import {connect} from "react-redux";
// import { tsConstructorType } from "@babel/types";
import { useSelector } from 'react-redux'
 
function PixiCanvas({rooms}) {

  const assets = useSelector(state => state)
  // console.log(assets);
  console.log(rooms);
  
  useLayoutEffect(() => {

    console.log(rooms.corner.view === "../../assets/rooms/Corner.png");
  
    console.log(assets);

    const container = document.querySelector("#pixi-container");
    container.appendChild(app.view);    

    // console.log(this.state);

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
  const background = PIXI.Sprite.from(require(rooms.corner.view));


  background.width = 768;
  background.height = 612;
  app.stage.addChild(background); 
  let drawerSheet = {};
  let arrowSheet = {};

function doneLoading() {
  createDrawerSheet();
  createArrowSheet();
  createDrawer(drawerSheet,app);
  createUserInterface(arrowSheet,app);
}

// Working on Sheets
function createArrowSheet(){
  let asheet = new PIXI.BaseTexture.from(app.loader.resources["arrows"].url);
  let height = 200;
  arrowSheet["left"] =
  [ new PIXI.Texture(asheet, new PIXI.Rectangle(0, 0, 200, 200, height))];
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
      // productList: state.cartReducer.normalizedProducts,
      // productCount: state.cartReducer.cart.sum,       
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

