import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";

export default function ObjectCollection() {  


  const { assetReducer } = useSelector((state) => state);

  return (
    <div className="objects">
      <p>objects collection</p>
     {/* {assetReducer.inventory.idCard===true} &&  <h1>Hello </h1> */}
    {Object.values(assetReducer.inventory).map((element) => {
      if(element===true){
        return(<p id="image"></p>
        )
      }
      return ("<div></div>")
    })}
    </div>
  );
}
