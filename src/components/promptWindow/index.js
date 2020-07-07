import React, { useState } from "react";
import "./index.scss";
import { useDispatch } from "react-redux";

const GetUserName = () => {
  const [modalWindow, setModalWindow] = useState(true);
  const dispatch = useDispatch();

  function getName() {
    var person = prompt("Please enter a name", "");

    if (person != null) {
      dispatch({
        type: "ADD_USER_NAME",
        payload: {
          name: person,
        },
      });
      setModalWindow(false);
    }
  }

  return modalWindow ? (
    <div className="welcomeScreen">
      <div>
        <h2> Are you sure you want to start the game?</h2>
        <button className="gameStart" onClick={getName}>
          start
        </button>
      </div>
    </div>
  ) : null;
};

export default GetUserName;
