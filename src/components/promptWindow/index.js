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
      dispatch({
        type: "WANTS_TO_PLAY",
      });
      setModalWindow(false);
    }
  }

  return modalWindow ? (
    <div className="welcomeScreen">
      <button className="gameStart" onClick={getName}>
        start
      </button>
    </div>
  ) : null;
};

export default GetUserName;
