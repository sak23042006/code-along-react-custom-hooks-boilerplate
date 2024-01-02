// import React from "react";
import "./App.css";
import StoreData from "./StoreData";

const App =()=>{
  
  const [text, setText] = StoreData("text", "");
  return (
    
    <div style={{padding:"200px"}} >
      <center>
      <h1>Store Data</h1>
      <input
        style={{fontSize:"18px"}}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ></input>
        <p style={{fontSize:"60px"}} >📚</p>
        </center>
    </div>
  );
  
}

export default App;