import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [text, setText] = useState("blue");

  const handleClick = () => {
    console.log("handle clicked called")
    const newColor = color === "red" ? "blue" : "red";
    const newText = text === "blue" ? "red" : "blue";
    setColor(newColor);
    setText(newText);
  };

  return (
    <div className="App">
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        Change to {text}
      </button>
    </div>
  );
}

export default App;
