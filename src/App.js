import React, { useState } from 'react';
import './App.css';
import TextField from './TextField/TextField';
import Switch from '../src/Switch/Switch';
import Checkbox from '../src/Checkbox/Checkbox';
import Radio from '../src/Radio/Radio'; 

function App() {

  const [tab, updateTab] = useState("text");

  const tabChange = (inputTab) => {
      updateTab(inputTab);
     
  }

    let content;


    if (tab === 'text') {
            content = <TextField/>
        } else if (tab === "switch") {
            content = <Switch/>
        } else if (tab === "checkboxes") {
            content = <Checkbox/>
        } else if (tab === "radio") {
            content = <Radio/>
    }

  return (
    <div className="App">
        <h1>MD Simple Library</h1> 
                <div className="options-buttons">
                    <button onClick={ ()=> tabChange("text")} className={tab === "text" ? "option--active" : "option"}>Text Field</button>
                    <button onClick={ ()=> tabChange("switch")} className={tab === "switch" ? "option--active" : "option"}>Switch</button>
                    <button onClick={ ()=> tabChange("checkboxes")} className={tab === "checkboxes" ? "option--active" : "option"}>Checkboxes</button>
                    <button onClick={ ()=> tabChange("radio")} className={tab === "radio" ? "option--active" : "option"}>Radio Buttons</button>
                </div>
        <div className="App__content">
            {content}
        </div>
    </div>
  );
}

export default App;
