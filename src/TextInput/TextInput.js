import React from 'react';
import './text-style.css';
import { FaWifi, FaBatteryHalf, FaSignal, FaArrowLeft, FaSearch, FaEllipsisV } from "react-icons/fa";

class TextInput extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
                        email: "",
                        phone: "",
                        username: "",
                        floatEmail:false,
                        floatUsername:false,
                        floatPhone:false,
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onChangeUsername(e){
         this.setState({
          username: e.target.value,
          floatUsername: true,
        });
    } 

    onChangePhone(e){
        this.setState({
         phone: e.target.value,
         floatPhone: true,
       });
   } 

   onChangeEmail(e){
    this.setState({
        email: e.target.value,
        floatEmail: true,
   });
} 


    onBlur() {
        setTimeout(() => {
            if(this.state.username.length === 0) {
                this.setState({
                    username: "",
                    floatUsername: false,
                   
                });
            } else {
                this.setState({floatUsername: true})
            } 

            if(this.state.email.length === 0) {
                this.setState({
                    email: "",
                    floatEmail: false,
                  
                });
            } else {
                this.setState({floatUsername: true})
            }

            if(this.state.phone.length === 0) {
                this.setState({
                   phone: "",
                   
                    floatPhone: false,
                   
                });
            } else {
                this.setState({floatUsername: true})
            }
        }, 0);
    }

 

    render(){
        //const inputList = this.state.theList;
        let inputBoxClass;
        if(this.state.floatPhone ) {
            inputBoxClass = "input-box float"
        } else {
            inputBoxClass = "input-box"
        }

        if(this.state.floatEmail) {
            inputBoxClass = "input-box float"
        } else {
            inputBoxClass = "input-box"
        }

        if(this.state.floatUsername ) {
            inputBoxClass = "input-box float"
        } else {
            inputBoxClass = "input-box"
        }

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
                            <div className="input-container">
                                    <input type="text" 
                                            className="field-input" 
                                            onChange={this.onChangeUsername} 
                                            value={this.state.username} 
                                            onBlur={this.onBlur}
                                            name="username"/>
                                    <div className={inputBoxClass}>
                                            Username *
                                    </div>
                                    <span className="border"></span>
                                    <p>*Required</p> 
                            </div>
                            <div className="input-container">
                                    <input type="text" 
                                            className="field-input" 
                                            onChange={this.onChangePhone} 
                                            value={this.state.phone} 
                                            onBlur={this.onBlur}
                                            name="phone"/>
                                    <div className={inputBoxClass}>
                                            Phone number
                                    </div>
                                    <span className="border"></span>
                                    <p>XXX-XXXX</p>
                            </div>
                            <div className="input-container">
                                    <input type="email" 
                                            className="field-input" 
                                            onChange={this.onChangeEmail} 
                                            value={this.state.email} 
                                            onBlur={this.onBlur}
                                            name="email"/>
                                    <div className={inputBoxClass}>
                                            Email address
                                    </div>
                                    <span className="border"></span>
                                    <p>youremail@domain.com</p>
                            </div>
                                   
                     </form>
                 </div>
            </>
        );
    }
}

export default TextInput;