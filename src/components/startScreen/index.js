import React from "react";
import "./index.scss";
import {connect} from "react-redux";
import PixiCanvas from "../pixiCanvas";
import Character2 from "../../assets/characters/Character3.jpg";
import Character3 from "../../assets/characters/Character2.jpg";

class StartScreen extends React.Component {
   
    constructor(props){
        super(props);
    }

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
    <PixiCanvas/>
        <h2>Choose character:</h2>
     <section className="characters-container">
          <div>placeholder 1</div>
          <div onClick={() => this.props.selectCharacter("catrine")}><img src={Character2} height="200px" width="100px"/></div>
          <div><img src={Character3} height="200px" width="100px"/></div>
     </section>
        <button>Let's go!</button>
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
