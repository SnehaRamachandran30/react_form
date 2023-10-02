import React, { useState } from "react";

function App() {
  const [value, setvalue] = useState("");
  const [text, changetext] = useState("");

  function change(event) {
    console.log(event.target.value);
    setvalue(event.target.value);
  }
  function handletext() {
    changetext(value);
  }

  return (
    <div className="container">
      <h1>Hello {text}</h1>
      <input
        value={value}
        type="text"
        placeholder="What's your name?"
        onChange={change}
      />
      <button onClick={handletext}>Submit</button>
    </div>
  );
}

export default App;
