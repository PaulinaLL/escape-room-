import React, { useLayoutEffect } from "react";
import * as PIXI from "pixi.js";
import Game from "../game";
import "./index.scss";

export default function PixiCanvas(props) {


  useLayoutEffect(() => {
    const container = document.querySelector("#pixi-container");
    container.appendChild(app.view); 

  });   

  
  let app = new PIXI.Application({ width: 800, height: 800 });
return <div id="pixi-container"> 
  <Game app={app}></Game> 
</div>;  
}   