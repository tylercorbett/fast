import React from "react";
import "./reset.css";
import "./App.scss";
import TinderSwipe from "./components/TinderSwipe/TinderSwipe";
import Music from "./components/Music/Music";

const App = () => {
  return (
    <div className="App">
      <TinderSwipe />
      <Music />
    </div>
  );
};

export default App;
