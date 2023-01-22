import { useState } from "react";
import "./App.css";

export function replaceCamelCaseWithSpace(colorName) {
  return colorName.replace(/([a-z])([A-Z])/g, "$1 $2");
}

function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);

  const newButtonColor =
    color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  const handleClickButton = () => {
    console.log("handle clicked called");
    setColor(newButtonColor);
  };
  
  const handleChangeCheckbox = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="App">
      <button
        disabled={disabled}
        onClick={handleClickButton}
        style={{ backgroundColor: disabled ? "grey" : color }}
      >
        Change to {replaceCamelCaseWithSpace(newButtonColor)}
      </button>
      <div>
        <input
          type="checkbox"
          id="enable-button-checkbox"
          onChange={handleChangeCheckbox}
        />
        <label htmlFor="enable-button-checkbox">Disable button</label>
      </div>
    </div>
  );
}

export default App;
