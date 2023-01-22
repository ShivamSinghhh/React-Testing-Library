import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [text, setText] = useState("blue");

  const [disabled,setDisabled] = useState(false)

  const handleClick = () => {
    console.log("handle clicked called");
    const newColor = color === "red" ? "blue" : "red";
    const newText = text === "blue" ? "red" : "blue";
    setColor(newColor);
    setText(newText);
  };
  const handleChange = () => {
    setDisabled(!disabled);   
  };

  return (
    <div className="App">
      <button disabled={disabled} onClick={handleClick} style={{backgroundColor: disabled? "grey":color}}>
        Change to {text}
      </button>
      <div>
        <input type="checkbox" id="enable-button-checkbox" onChange={handleChange} />
      <label htmlFor="enable-button-checkbox">Disable button</label>
      </div>
    </div>
  );
}

export default App;
