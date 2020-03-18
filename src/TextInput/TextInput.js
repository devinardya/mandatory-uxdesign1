import React from 'react';
import './text-style.css';
import { FaWifi, FaBatteryHalf, FaSignal, FaArrowLeft, FaSearch, FaEllipsisV } from "react-icons/fa";
import {MdError} from "react-icons/md";
import { TiDelete } from "react-icons/ti";

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
                        deleteInputIcon: false,
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }

    onChangeUsername(e){
         this.setState({
          username: e.target.value,
          floatUsername: true,
        });

        if(e.target.value.length !== 0) {
            this.setState({deleteInputIcon: true});
        } else {
            this.setState({deleteInputIcon: false});
        }
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
                    deleteInputIcon: false,
                });
            } else {
               if(this.state.username.length < 8){
                    this.setState({
                        usernameError: true, 
                        //deleteInputIcon: false,
                    })
                } else {
                    this.setState({usernameError: false})
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

                let Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                const badEmailInput = Regex.test(this.state.email);

                if(!badEmailInput) {
                    this.setState({emailError: true})
                } else {
                    this.setState({emailError: false})
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

    onFocus() {
       setTimeout( () => {
            if(this.state.username.length < 8) {
                this.setState({usernameError: false, deleteInputIcon: true})
            }

       }, 0)
    }

    clearInput() {
        if(this.state.username) {
            this.setState({
                username: "", 
                usernameError: false,
                deleteInputIcon: false})
        }
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
        let spanClassName;

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
            usernameMessage = "Error: Username needs to be at least 8 characters";
            usernamePClassName = "input-container__email-extra-message--error";
            usernameFieldInputClassName = "input-container__field-input--error"; 
            spanClassName = "input-container__delete-icon--error" 
        } else {
            usernameMessage = "*Required";
            usernamePClassName = "input-container__email-extra-message";
            usernameFieldInputClassName = "input-container__field-input";
            spanClassName = "input-container__delete-icon" 
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
                            <div className="input-container" onBlur={this.onBlur} onFocus={this.onFocus}>
                                    <input type="text" 
                                            className={usernameFieldInputClassName} 
                                            onChange={this.onChangeUsername} 
                                            value={this.state.username} 
                                            />
                                    <span className={usernameBoxClass}>
                                            Username*
                                    </span>
                                    {this.state.deleteInputIcon ? 
                                        <span className={spanClassName} 
                                              onClick={this.clearInput}>
                                                    <TiDelete size="30px" style={{position:"absolute", top: "36%", right: "13px", zIndex:"6"}}/>
                                        </span> : null}
                                    {this.state.usernameError ? 
                                        <span className="input-container--error-icon">
                                            <MdError size="24px" color="rgb(170, 0, 0)" 
                                                     style={{position:"absolute", 
                                                     top: "40%", right: "16px"}}/>
                                        </span> : null}
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
                                    <span className={phoneBoxClass}>
                                            Phone number
                                    </span>
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
                                    <span className={emailBoxClass}>
                                            Email address
                                    </span>
                                    {this.state.emailError ? <span className="error-icon"><MdError size="24px" color="rgb(170, 0, 0)" style={{position:"absolute", top: "40%", right: "16px"}}/></span> : null}
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