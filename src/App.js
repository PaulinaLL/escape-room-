import React from "react";
import { Counter } from "./features/counter/Counter";
import MainScreen from "./components/mainscreen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        {" "}
        <h1>Welcome to the exit game </h1>
      </header>
      <main>
        <Counter />
        <h2>Choose character:</h2>
        <section className="characters-container">
          <div>placeholder 1</div>
          <div>placeholder 2</div>
          <div>placeholder 3</div>
        </section>
        <button>Let's go!</button>
        <MainScreen></MainScreen>
      </main>
      <footer>
        {" "}
        <p> © Gerald | Paulina 2020 </p>{" "}
      </footer>
    </div>
  );
}

export default App;
