import { useState } from "react";
import "./App.css";

function App() {
  const [promptValue, setPromptValue] = useState('')

  function handleClick() {
    const value = prompt("please Enter your name");
    if (value !== null) {
      setPromptValue(value)
    }
  }

  return (
    <>
      <button onClick={handleClick}>click me</button>
      {/* <h1 id="promptValue" style={{color: "blue"}}></h1> */}
      {promptValue && <h1>{promptValue}</h1> }
    </>
  );
}

export default App;
