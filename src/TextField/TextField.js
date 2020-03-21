import React from 'react';
import './text-style.css';
import { FaSignal} from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";
import { MdAirplanemodeInactive, MdArrowBack, MdMoreVert, MdSearch, MdWifi, MdBluetoothDisabled } from "react-icons/md";
import InputElement from './InputElement';

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
                        deleteEmailIcon: false,
                        keepFloat: false,
        }

        this.onChange = this.onChange.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
    }


    clearInput(name) {

        if(name === "username"){
     
            this.setState({
                username: "", 
                usernameError: false,
                deleteInputIcon: false,
            })
            
        } else if (name === "email") {
            this.setState({
                email: "", 
                emailError: false,
                deleteEmailIcon: false,
                  })
        }
    }

    onChange(value, name){

         this.setState({
          [name]: value,
        });

        if (name === "email") {
           this.setState({floatEmail: true})

           if(value !== 0) {
                this.setState({deleteEmailIcon: true});
            } else {
                this.setState({deleteEmailIcon: false});
            }
           
        } else if (name === "username") {
            this.setState({floatUsername: true})

            if(value !== 0) {
                this.setState({deleteInputIcon: true});
            } else {
                this.setState({deleteInputIcon: false});
            }
        }
    } 

    onFocus() {
        setTimeout( () => {

             if(this.state.username.length < 8) {
                 this.setState({usernameError: false})
             } 

             let Regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
             const badEmailInput = Regex.test(this.state.email);

             if(!badEmailInput) {
                 this.setState({emailError: false, deleteEmailIcon: true})
             }

             if(this.state.email.length === 0) {
                this.setState({deleteEmailIcon: false})
             }
         
        
 
        }, 0)
    }

    onBlur() {

        setTimeout(() => {
            console.log(this.state.keepFloat)
           
            if (this.state.username.length === 0){
                console.log("THERE")
                this.setState({
                    //username: "",
                    floatUsername: false,
                    usernameError: false,
                    deleteInputIcon: false,
                });
            } else {
                
                if(this.state.username.length < 8){
                        this.setState({
                            usernameError: true, 
                            floatUsername: true
                            //deleteInputIcon: false,
                        })

                }  
             }

            if(this.state.email.length === 0) {
                this.setState({
                    email: "",
                    floatEmail: false,
                    emailError: false,
                });
            } else {

                let Regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;
                const badEmailInput = Regex.test(this.state.email);

                if(!badEmailInput) {
                    this.setState({
                        emailError: true,
                        deleteEmailIcon: false,
                    })
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

    render(){

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
            spanClassName = "input-container__delete-icon--error" 
        } else {
            emailMessage = "youremail@domain.com";
            pClassName = "input-container__email-extra-message";
            emailFieldInputClassName = "input-container__field-input";
            spanClassName = "input-container__delete-icon" 
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
                            <MdAirplanemodeInactive color="#aaaaaa" size="14px" style= {{marginRight: "8px"}}/>
                            <FaSignal size="14px" style= {{marginRight: "8px"}}/>
                            <MdBluetoothDisabled color="#aaaaaa" size="14px" style= {{marginRight: "8px"}}/>
                            <MdWifi size="14px" style= {{marginRight: "8px"}}/>
                            <IoIosBatteryFull size="14px" style= {{marginRight: "16px"}}/>
                        </div>
                        <div className="bottom-block">
                            <MdArrowBack size="24px" color="#fff" style= {{marginLeft: "16px"}}/>
                            <h4>Sign up</h4>
                            <MdSearch size="24px" color="#fff" style= {{marginRight: "16px"}} />
                            <MdMoreVert size="24px" color="#fff" style= {{marginRight: "12px"}} />
                        </div>
                     </div>
                     <form>
                        <InputElement
                            fieldInputclassName={usernameFieldInputClassName} 
                            onChange={this.onChange} 
                            value={this.state.username} 
                            onBlur={this.onBlur}
                            onFocus={this.onFocus}
                            name= "username"
                            clearInput= {this.clearInput}
                            deleteInputIcon = {this.state.deleteInputIcon}
                            floatUsername = {this.state.floatUsername}
                            Error = {this.state.usernameError}
                            text= "Username*"
                            message={usernameMessage}
                            pClassName={usernamePClassName}
                            boxClass={usernameBoxClass}
                            spanClassName={spanClassName}
                            borderClass = "input-container__border"
                        />
                            <InputElement
                            fieldInputclassName={usernameFieldInputClassName} 
                            onChange={this.onChange} 
                            value={this.state.phone} 
                            onBlur={this.onBlur} 
                            onFocus={this.onFocus}
                            name= "username"
                            text= "Phone number"
                            message="Disabled"
                            boxClass={phoneBoxClass}
                            spanClassName={spanClassName}
                            borderClass = "input-container__border"
                            disabled
                        />
                            <InputElement 
                            fieldInputclassName={emailFieldInputClassName} 
                            onChange={this.onChange} 
                            value={this.state.email} 
                            onBlur={this.onBlur} 
                            onFocus={this.onFocus}
                            name= "email"
                            clearInput= {this.clearInput}
                            deleteInputIcon = {this.state.deleteEmailIcon}
                            floatUsername = {this.state.floatEmail}
                            Error = {this.state.emailError}
                            text= "Email address"
                            message = {emailMessage}
                            pClassName={pClassName}
                            boxClass={emailBoxClass}
                            spanClassName={spanClassName}
                            borderClass = "input-container__border"
                        />
                        <button className="buttons">Submit</button>
                        <button className="buttons">Cancel</button>
                     </form>
                   
                 </div>
            </>
        );
    }
}

export default TextInput;