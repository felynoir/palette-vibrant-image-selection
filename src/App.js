import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./app.css";
import * as Vibrant from "node-vibrant";

const App = () => {
  const [url, setUrl] = useState(
    "https://i.scdn.co/image/ab67616d00001e026ab5fc4e1dd227bef3100280"
  );
  const [text, setText] = useState("");
  const [state, setState] = useState({});
  const [bg, setBg] = useState();
  const [selected, setSelected] = useState();

  useEffect(() => {
    Vibrant.from(url)
      .getPalette()
      .then((palette) => setState(palette));
  }, [url]);

  const handleSelect = (key) => {
    const { _rgb, _hsl } = state[key];
    setSelected(key);
    setBg(`rgb(${_rgb.join(", ")})`);
  };

  return (
    <div className="w-full mx-auto flex flex-col items-center">
      <input
        className="max-w-lg m-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Image url"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setUrl(text);
          }
        }}
      />
      <div className="w-full m-5" style={{ backgroundColor: bg }}>
        <img className="mx-auto m-10" src={url} />
      </div>
      <br />
      <div className="flex">
        {state &&
          Object.keys(state).map((key, ind) => {
            const { _rgb, _hsl } = state[key];
            return (
              <div
                key={ind}
                className={`cursor-pointer${
                  key === selected ? " border-2 border-gray-600" : ""
                }`}
                style={{ display: "inline-block", marginRight: "40px" }}
                onClick={() => handleSelect(key)}
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
    </div>
  );
};

export default App;
