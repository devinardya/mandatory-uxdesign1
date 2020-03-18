import React from 'react';
import './switch.css';
import { FaWifi, FaBatteryHalf, FaSignal, FaArrowLeft, FaSearch, FaEllipsisV } from "react-icons/fa";

class Switch extends React.Component {
    render(){
        return(
            <>
                 <h2>Switch</h2> 
                 <div className="box-container">
                     <div className="top-appbar">
                        <div className="top-block">
                            <FaSignal style= {{marginRight: "8px"}}/>
                            <FaWifi style= {{marginRight: "8px"}}/>
                            <FaBatteryHalf style= {{marginRight: "16px"}}/>
                        </div>
                        <div className="bottom-block">
                            <FaArrowLeft size="24px" color="#fff" style= {{marginLeft: "16px"}}/>
                            <h4>Settings</h4>
                            <FaSearch color="#fff" style= {{marginRight: "16px"}} />
                            <FaEllipsisV color="#fff" style= {{marginRight: "16px"}} />
                        </div>
                     </div>
                    <div className="switch-block">
                        <div className="switch-block--menu">
                            <h2></h2>
                        </div>
                        <div className="switch-block--menu">

                        </div>
                    </div>

                     {/* <label class="checkbox">
                        <input type="checkbox" />
                        <span class="fake"></span>
                    </label> */}
                   
                 </div>
                
            </>
        );
    }
}

export default Switch;