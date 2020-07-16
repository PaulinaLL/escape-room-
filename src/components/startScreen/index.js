import React from "react";
import "./index.scss";
import { connect } from "react-redux";
import PixiCanvas from "../pixiCanvas";
import DescriptionField from "../descriptionField";
import UserInput from "../userInput";
import ObjectCollection from "../objectsCollection";
import GetUserName from "../promptWindow";

class StartScreen extends React.Component {
  // componentDidMount(){
  // }

  // componentWillUnmount(){
  // }

  render() {
    // console.log(this.props.rooms);
    const userName = this.props.userName;
    const wantsToPlay = this.props.wantsToPlay;
    return (
      <div className="App">
        <header>
          {" "}
          <h1>Welcome to the exit game </h1>
        </header>
        <main>
          {!userName && !wantsToPlay && <GetUserName />}
          <div className="canvasDescriptionWrapper">
            <div className="canvasContainer">
              <PixiCanvas />
              <ObjectCollection />
            </div>
            <div className="fieldsWrapper">
              <DescriptionField />
              <UserInput />
            </div>
          </div>

          {/* <h2>Choose character:</h2>
     <section className="characters-container">
          <div>placeholder 1</div>
          <div onClick={() => this.props.selectCharacter("catrine")}>
              <img src={Character2} height="200px" width="100px" alt="standard"/>
              </div>
          <div><img src={Character3} height="300px" width="150px" alt="standard"/></div>
     </section>
        <button>Let's go!</button> */}
        </main>
        <footer>
          {" "}
          <p> © Gerald | Paulina 2020 </p>{" "}
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userName: state.answersReducer.userName,
    wantsToPlay: state.answersReducer.wantsToPlay,
    // character: state.assetReducer.characters
    // productList: state.cartReducer.normalizedProducts,
    // productCount: state.cartReducer.cart.sum,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    selectCharacter: (characterName) => {
      dispatch({
        type: "SELECT",
        payload: {
          characterName,
        },
      });
    },
  };
};

export default connect(mapStateToProps, mapActionsToProps)(StartScreen);
