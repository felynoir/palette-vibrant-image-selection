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
      {state &&
        Object.keys(state).map((key, ind) => {
          console.log(key);
          console.log(state[key]);
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
                  backgroundColor: "#000",
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
