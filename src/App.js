import React, { useState } from 'react';
import './App.css';
import TextField from './TextField/TextField';
import Switch from '../src/Switch/Switch';
import Checkbox from '../src/Checkbox/Checkbox';
import Radio from '../src/Radio/Radio'; 

function App() {

  const [tab, updateTab] = useState("radio");

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
                    <div onClick={ ()=> tabChange("text")} className="option">Text Field</div>
                    <div onClick={ ()=> tabChange("switch")} className="option">Switch</div>
                    <div onClick={ ()=> tabChange("checkboxes")} className="option">Checkboxes</div>
                    <div onClick={ ()=> tabChange("radio")} className="option">Radio Buttons</div>
                </div>
        <div className="App__content">
            {content}
        </div>
    </div>
  );
}

export default App;
