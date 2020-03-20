import React from 'react';
import './radio.css';
import { FaSignal} from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";
import { MdAirplanemodeInactive, MdArrowBack, MdMoreVert, MdSearch, MdWifi, MdBluetoothDisabled } from "react-icons/md";


class Radio extends React.Component {
    render(){
        return(
            <>
                 <h2>Radio</h2> 
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
                            <h4>Settings</h4>
                            <MdSearch size="24px" color="#fff" style= {{marginRight: "16px"}} />
                            <MdMoreVert size="24px" color="#fff" style= {{marginRight: "12px"}} />
                        </div>
                     </div>
                    <div className="checkbox-block">
                   
                    </div>
                 </div>  
            </>
        );
    }
}

export default Radio;