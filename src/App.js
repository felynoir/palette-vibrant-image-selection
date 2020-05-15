import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as Vibrant from "node-vibrant";

const App = () => {
  const url =
    "https://i.scdn.co/image/ab67616d00001e026ab5fc4e1dd227bef3100280";
  const [state, setState] = useState({});
  useEffect(() => {
    Vibrant.from(url)
      .getPalette()
      .then((palette) => setState(palette));
  }, []);
  return (
    <div>
      <div>
        <img src={url} />
      </div>
      <br />
      {state &&
        Object.keys(state).map((key, ind) => {
          const { _rgb, _hsl } = state[key];
          console.log(`rbg(${_rgb.join(", ")})`);
          return (
            <div
              key={ind}
              style={{ display: "inline-block", marginRight: "40px" }}
            >
              {key}
              <div
                style={{
                  height: "50px",
                  width: "50px",
                  backgroundColor: `rgb(${_rgb.join(", ")})`,
                  margin: "10px",
                }}
              ></div>
            </div>
          );
        })}
    </div>
  );
};

export default App;
