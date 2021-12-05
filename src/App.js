import React from "react";
import "./reset.css";
import "./App.scss";
import TinderSwipe from "./components/TinderSwipe/TinderSwipe";

const App = () => {
  return (
    <div className="App">
      <TinderSwipe />
      <div className="ending-container">
        <p>And many more! I love you!</p>
        <button>Restart</button>
      </div>
    </div>
  );
};

export default App;
