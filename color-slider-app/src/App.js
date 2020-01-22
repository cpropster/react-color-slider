import React, { useState } from "react";
import "./App.css";

function App() {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  return (
    <div>
      <div class="slider">
        <span>RED </span>
        <input
          type="range"
          min="0"
          max="255"
          step="1"
          value={redValue}
          onChange={(ev) => setRedValue(ev.target.value)}
        ></input>
        <input
          type="text"
          value={redValue}
          onChange={(ev) => setRedValue(ev.target.value)}
        ></input>
      </div>
      <div class="slider">
        <span>GREEN </span>
        <input
          type="range"
          min="0"
          max="255"
          step="1"
          value={greenValue}
          onChange={(ev) => setGreenValue(ev.target.value)}
        ></input>
        <input
          type="text"
          value={greenValue}
          onChange={(ev) => setGreenValue(ev.target.value)}
        ></input>
      </div>
      <div class="slider">
        <span>BLUE </span>
        <input
          type="range"
          min="0"
          max="255"
          step="1"
          value={blueValue}
          onChange={(ev) => setBlueValue(ev.target.value)}
        ></input>
        <input
          type="text"
          value={blueValue}
          onChange={(ev) => setBlueValue(ev.target.value)}
        ></input>
      </div>
      <div
        id="swatch"
        style={{
          backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`,
        }}
      ></div>
    </div>
  );
}

export default App;
