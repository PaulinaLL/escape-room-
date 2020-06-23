import React from "react";
// import "./App.css";
import PixiCanvas from "./components/pixiCanvas";

function StartScreen() {
  return (
    <div>
      <header>
        {" "}
        <h1>Welcome to the exit game </h1>
      </header>
      <main>
        <PixiCanvas/>
        <h2>Choose character:</h2>
        <section className="characters-container">
          <div>placeholder 1</div>
          <div>placeholder 2</div>
          <div>placeholder 3</div>
        </section>
        <button>Let's go!</button>
      </main>
      <footer>
        {" "}
        <p> © Gerald | Paulina 2020 </p>{" "}
      </footer>
    </div>
  );
}

export default StartScreen;
