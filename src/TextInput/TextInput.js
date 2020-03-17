import React from 'react';
import './text-style.css';
import { FaWifi, FaBatteryHalf, FaSignal, FaArrowLeft, FaSearch, FaEllipsisV } from "react-icons/fa";

class TextInput extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
                       theList : [ { text: "Username", 
                                     infoText: "*Required",
                                     id: 0,
                                     inputBoxStatus : false,}, 
                                   { text: "Phone number", 
                                     infoText: "XXX-XXXX",
                                     id: 1,
                                     inputBoxStatus : false,},  
                                   { text: "Email address", 
                                     infoText: "youremail@domain.com",
                                     id: 2,
                                     inputBoxStatus : false,}, ],

        }

        this.inputChange = this.inputChange.bind(this);
        this.inputOn = this.inputOn.bind(this);
    }

    inputChange(index){
        console.log(index)
       
        const buttonIndex = this.state.theList.findIndex (x => x.id === index);
        // console.log(buttonIndex)
          const data = [...this.state.theList];
        
        console.log("the curent data", data)
        //console.log(data[buttonIndex])
        data[buttonIndex] = {
            text: data[buttonIndex].text,
            infoText : data[buttonIndex].infoText,
            id : data[buttonIndex].id,
            inputBoxStatus : data[buttonIndex].inputBoxStatus === false ? true : false,
        }

        this.setState({theList: data})
        
    }
    
    inputOn(index) {
        console.log(index)
       
        const buttonIndex = this.state.theList.findIndex (x => x.id === index);
        // console.log(buttonIndex)
          const data = [...this.state.theList];
        
        console.log("the curent data", data)
        //console.log(data[buttonIndex])
        data[buttonIndex] = {
            text: data[buttonIndex].text,
            infoText : data[buttonIndex].infoText,
            id : data[buttonIndex].id,
            inputBoxStatus : true,
        }

        this.setState({theList: data})
    }

    render(){
        const inputList = this.state.theList;

        return(
            <>
                 <h1>Text Field</h1> 
                 <div className="box-container">
                     <div className="top-appbar">
                        <div className="top-block">
                            <FaSignal style= {{marginRight: "8px"}}/>
                            <FaWifi style= {{marginRight: "8px"}}/>
                            <FaBatteryHalf style= {{marginRight: "16px"}}/>
                        </div>
                        <div className="bottom-block">
                            <FaArrowLeft size="24px" color="#fff" style= {{marginLeft: "16px"}}/>
                            <h4>Sign up</h4>
                            <FaSearch color="#fff" style= {{marginRight: "16px"}} />
                            <FaEllipsisV color="#fff" style= {{marginRight: "16px"}} />
                        </div>
                     </div>
                     <form>
                        {inputList.map((input, idx) => {
                            let boxClassName;
                            let inputType;
                            /* console.log(input) */

                            if(input.inputBoxStatus){
                                console.log("it's active")
                                inputType = "text"
                               /*  boxClassName = "show active" */
                            } else {
                                inputType = "hidden"
                               /*  boxClassName = "show" */
                            }
                         
                            return (<div className="input-container" key={idx}>
                                        
                                        <div className="input-box" onClick={()=> this.inputChange(idx)}>
                                            <div className="cursor">{input.text}</div>
                                            <input type={inputType} className={boxClassName} onClick={()=> this.inputOn(idx)}></input>
                                        </div>
                                        
                                        <p>{input.infoText}</p>
                                    </div>
                                    )
                        
                            
                            })}
                     </form>
                 </div>
            </>
        );
    }
}

export default TextInput;