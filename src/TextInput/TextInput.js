import React from 'react';
import './text-style.css';
import { FaWifi, FaBatteryHalf, FaSignal, FaArrowLeft, FaSearch, FaEllipsisV } from "react-icons/fa";
import {MdError} from "react-icons/md";

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
                        emailError: false,
                        usernameError: false,
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
                    usernameError: false,
                });
            } else {
                if(this.state.username.length < 8){
                    this.setState({usernameError: true})
                }
                this.setState({floatUsername: true})
            } 

            if(this.state.email.length === 0) {
                this.setState({
                    email: "",
                    floatEmail: false,
                    emailError: false,
                });
            } else {
                if(!this.state.email.includes("@")) {
                    this.setState({emailError: true})
                }
                this.setState({floatEmail: true})
            }

            if(this.state.phone.length === 0) {
                this.setState({
                   phone: "",
                   floatPhone: false,
                });
            } else {
                this.setState({floatPhone: true})
            }
        }, 0);
    }

 

    render(){
        //const inputList = this.state.theList;
        let emailBoxClass;
        let usernameBoxClass;
        let phoneBoxClass;
        let emailMessage;
        let usernameMessage;
        let pClassName;
        let usernamePClassName;
        let emailFieldInputClassName;
        let usernameFieldInputClassName;

        if(this.state.floatPhone ) {
            phoneBoxClass = "input-container__phone-box--float";
        } else {
            phoneBoxClass = "input-container__phone-box";
        }

        if(this.state.floatEmail) {
            emailBoxClass = "input-container__email-box--float";
        } else {
            emailBoxClass = "input-container__email-box";
        }

        if(this.state.floatUsername ) {
            usernameBoxClass = "input-container__username-box--float";
        } else {
            usernameBoxClass = "input-container__username-box";
        }

        if(this.state.emailError) {
            emailMessage = "Please enter valid email address";
            pClassName = "input-container__email-extra-message--error";
            emailFieldInputClassName = "input-container__field-input--error";
        } else {
            emailMessage = "youremail@domain.com";
            pClassName = "input-container__email-extra-message";
            emailFieldInputClassName = "input-container__field-input";
        }

        if(this.state.usernameError) {
            usernameMessage = "Error: At least 8 characters";
            usernamePClassName = "input-container__email-extra-message--error";
            usernameFieldInputClassName = "input-container__field-input--error"; 
        } else {
            usernameMessage = "*Required";
            usernamePClassName = "input-container__email-extra-message";
            usernameFieldInputClassName = "input-container__field-input";
        }


        return(
            <>
                 <h2>Text Field</h2> 
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
                                            className={usernameFieldInputClassName} 
                                            onChange={this.onChangeUsername} 
                                            value={this.state.username} 
                                            onBlur={this.onBlur}
                                            />
                                    <div className={usernameBoxClass}>
                                            Username*
                                    </div>
                                    {this.state.usernameError ? <span className="error-icon"><MdError size="24px" color="rgb(170, 0, 0)" style={{position:"absolute", top: "30%", right: "8%"}}/></span> : null}
                                    <span className="input-container__border"></span>
                                    <p className={usernamePClassName}>{usernameMessage}</p>
                            </div>
                            <div className="input-container">
                                    <input type="text" 
                                            className="input-container__field-input" 
                                            onChange={this.onChangePhone} 
                                            value={this.state.phone} 
                                            onBlur={this.onBlur}
                                            disabled/>
                                    <div className={phoneBoxClass}>
                                            Phone number
                                    </div>
                                    <span className="input-container__border"></span>
                                    <p className="input-container--pDisabled">Disabled</p>
                            </div>
                            <div className="input-container">
                                    <input type="email" 
                                            className={emailFieldInputClassName} 
                                            onChange={this.onChangeEmail} 
                                            value={this.state.email} 
                                            onBlur={this.onBlur}
                                           />
                                    <div className={emailBoxClass}>
                                            Email address
                                    </div>
                                    {this.state.emailError ? <span className="error-icon"><MdError size="24px" color="rgb(170, 0, 0)" style={{position:"absolute", top: "30%", right: "8%"}}/></span> : null}
                                    <span className="input-container__border"></span>
                                    <p className={pClassName}>{emailMessage}</p>
                            </div>    
                            <button className="buttons">Submit</button>
                            <button className="buttons">Cancel</button>
                     </form>
                   
                 </div>
            </>
        );
    }
}

export default TextInput;