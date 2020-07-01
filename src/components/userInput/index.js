import React from "react";
import "./index.scss";

export default function UserInput() {
  return (
    <div className="userInput">
      <form action="#">
        <label htmlFor="userInput">Write your code here:</label>
        <input type="text" id="userInput" name="userInput" size="150" />
      </form>
    </div>
  );
}
