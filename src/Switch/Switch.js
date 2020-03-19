import React from 'react';
import './switch.css';
import { FaWifi, FaBatteryHalf, FaSignal, FaArrowLeft, FaSearch, FaEllipsisV } from "react-icons/fa";
import { MdAirplanemodeInactive, MdAirplanemodeActive} from "react-icons/md";
class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            airplane: false,
            wifi: false,
            disable: "",
        } 
    }

    checked = (e) => {
       
        let name = e.target.name;
       
        if(name === "airplane"){
            if(this.state.airplane) {
                this.setState({
                    disable: "",
                    airplane : false,
                }) 
            } else {
                this.setState({
                    disable: "disabled",
                    airplane : true,
                    wifi: false,
                }) 
            }
            
        } else if (name === "wifi") {
            this.setState({
                wifi : e.target.checked,
            }) 
        }
       
        
    }


    render(){

       let switchBlockMenu;

       if(this.state.airplane) {
            switchBlockMenu = "switch-block--menu--disabled"
       } else {
            switchBlockMenu = "switch-block--menu";
       }
       
        return(
            <>
                 <h2>Switch</h2> 
                 <div className="box-container">
                     <div className="top-appbar">
                        <div className="top-block">
                            {this.state.disable ? <MdAirplanemodeActive color="fff" style= {{marginRight: "8px"}}/> : <MdAirplanemodeInactive color="#AAAAAA" style= {{marginRight: "8px"}} />}
                            <FaSignal style= {{marginRight: "8px"}}/>
                            {this.state.wifi ? <FaWifi color="fff" style= {{marginRight: "8px"}} /> : <FaWifi color="#AAAAAA" style= {{marginRight: "8px"}} />}
                            <FaBatteryHalf style= {{marginRight: "16px"}}/>
                        </div>
                        <div className="bottom-block">
                              <FaArrowLeft size="24px" color="#fff" style= {{marginLeft: "16px"}}/>
                              <h4>Settings</h4>
                              <FaSearch color="#fff" style= {{marginRight: "16px"}} />
                              <FaEllipsisV color="#fff" style= {{marginRight: "0px"}} />
                        </div>
                     </div>
                    <div className="switch-block">
                    <div className="switch-block--menu">
                            <p>Airplane mode</p>
                            <div className="switch-block--menu__toggleSwitch">
                                    <label className="switch-block--menu__toggleSwitch--checkbox">
                                        <input type="checkbox" checked={this.state.airplane} onChange={this.checked} name="airplane"/>
                                        <span className="switch-block--menu__toggleSwitch--checkbox--display"></span>
                                    </label> 
                            </div>
                        </div>
                        <div className={switchBlockMenu}>
                            <p>Wi-Fi</p>
                            <div className="switch-block--menu__toggleSwitch">
                                    <label className="switch-block--menu__toggleSwitch--checkbox">
                                        <input type="checkbox" checked={this.state.wifi} onChange={this.checked} name="wifi" disabled={this.state.disable}/>
                                        <span className="switch-block--menu__toggleSwitch--checkbox--display"></span>
                                    </label> 
                            </div>
                        </div>
                        <div className="switch-block--menu--disabled">
                            <p>Turn on location</p>
                            <div className="switch-block--menu__toggleSwitch">
                                    <label className="switch-block--menu__toggleSwitch--checkbox">
                                        <input type="checkbox" disabled/>
                                        <span className="switch-block--menu__toggleSwitch--checkbox--display"></span>
                                    </label> 
                            </div>
                        </div>
                    </div>
                 </div>   
            </>
        );
    }
}

export default Switch;