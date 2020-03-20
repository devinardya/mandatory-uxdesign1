import React from 'react';
import './switch.css';
import { FaSignal} from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";
import { MdAirplanemodeInactive, MdAirplanemodeActive, MdArrowBack, MdMoreVert, MdSearch, MdWifi, MdBluetooth, MdBluetoothDisabled} from "react-icons/md";


class Switch extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            airplane: false,
            wifi: false,
            bluetooth: false,
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
                    bluetooth: false,
                })          
            }                                                                              
            
        } else {
            this.setState({
                [name] : e.target.checked,
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
                            {this.state.disable ? <MdAirplanemodeActive size="14px" color="fff" style= {{marginRight: "8px"}}/> : <MdAirplanemodeInactive size="14px" color="#AAAAAA" style= {{marginRight: "8px"}} />}
                            <FaSignal size="14px" style= {{marginRight: "8px"}}/>
                            {this.state.bluetooth ? <MdBluetooth size="14px" color="fff" style= {{marginRight: "8px"}} /> : <MdBluetoothDisabled size="14px" color="#AAAAAA" style= {{marginRight: "8px"}} />}
                            {this.state.wifi ? <MdWifi size="14px" color="fff" style= {{marginRight: "8px"}} /> : <MdWifi size="14px" color="#AAAAAA" style= {{marginRight: "8px"}} />}
                            <IoIosBatteryFull size="14px" style= {{marginRight: "16px"}}/>
                        </div>
                        <div className="bottom-block">
                              <MdArrowBack size="24px" color="#fff" style= {{marginLeft: "16px"}}/>
                              <h4>Settings</h4>
                              <MdSearch size="24px" color="#fff" style= {{marginRight: "16px"}} />
                              <MdMoreVert size="24px" color="#fff" style= {{marginRight: "12px"}} />
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
                        <div className={switchBlockMenu}>
                            <p>Bluetooth</p>
                            <div className="switch-block--menu__toggleSwitch">
                                    <label className="switch-block--menu__toggleSwitch--checkbox">
                                        <input type="checkbox" checked={this.state.bluetooth} onChange={this.checked} name="bluetooth" disabled={this.state.disable}/>
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