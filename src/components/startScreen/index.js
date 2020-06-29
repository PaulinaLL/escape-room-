import React from "react";
import "./index.scss";
import {connect} from "react-redux";
import PixiCanvas from "../pixiCanvas";
import Character2 from "../../assets/characters/Character3.jpg";
import Character3 from "../../assets/characters/Character2.png";

class StartScreen extends React.Component {
   
    componentDidMount(){

    }

    componentWillUnmount(){

    }

render(){
   return (
    <div className="App">
      <header>
        {" "}
        <h1>Welcome to the exit game </h1>
      </header>
      <main>
          <div className="canvasContainer">
    <PixiCanvas/>
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
)};
}

const mapStateToProps = (state) => {
    return {
        character: state.assetReducer.characters
        // productList: state.cartReducer.normalizedProducts,
        // productCount: state.cartReducer.cart.sum,       
    }
}

const mapActionsToProps = (dispatch) => {
    return{
        selectCharacter: (characterName) => {
             dispatch({
                type: "SELECT",
                payload: {
                    characterName
                }
             });
        },
    }
}

export default connect(
    mapStateToProps,
    mapActionsToProps
)(StartScreen);
