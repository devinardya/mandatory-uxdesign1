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
                                     }, 
                                   { text: "Phone number", 
                                     infoText: "XXX-XXXX",
                                     id: 1,
                                    },  
                                   { text: "Email address", 
                                     infoText: "youremail@domain.com",
                                     id: 2,
                                     }, ],
                        value : "",

        }

        this.onChange = this.onChange.bind(this);
     
    }

    onChange(e){
       console.log(e.target.value)
        this.setState({value: e.target.value})
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
                         
                            return (<div className="input-container" key={idx}>
                                        <input className="field-input" onChange={this.onChange} />
                                        <div className="input-box">
                                             {input.text}
                                        </div>
                                        <span className="border"></span>
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