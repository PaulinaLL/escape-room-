import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";

export default function ObjectCollection() {
  const { assetReducer } = useSelector((state) => state);
  return (
    <div className="objects">
      {/* {assetReducer.inventory.idCard===true} &&  <h1>Hello </h1> */}
      {Object.values(assetReducer).map((element, index) => {
        if (element.collected === true) {
          return (
            <div className="object" id={element.pictureID} key={index}></div>
          );
        }
        return "";
      })}
    </div>
  );
}
