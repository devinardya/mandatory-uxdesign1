import React, {useState} from 'react';
import './radio.css';
import { FaSignal} from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";
import { MdAirplanemodeInactive, MdArrowBack, MdMoreVert, MdSearch, MdWifi, MdBluetoothDisabled} from "react-icons/md";


const Radio = () => {

    const radioList = [
                        {name: "None",id: 0},
                        {name: "Callisto",  id: 1},
                        {name: "Ganymede", id: 2},
                        {name: "Luna",id: 3},
                        {name: "Light", id: 4},
                        {name: "Classic", id: 5},
                      ]
                                
    const [selected, updateSelected] = useState("None")
    
    const onChange = (e) => {
        //console.log(e.target.value)
        updateSelected(e.target.value)
    }
  
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
                <div className="radio-block">
                    <p>Phone ringtone</p>
                    <form className="radio-block__form">
                        <ul className="radio-block__form__ul">
                            {radioList.map(data => {
                                let disabledStatus;
                                if(data.name === "Ganymede") {
                                    disabledStatus = "disabled";
                                } else {
                                    disabledStatus = null;
                                }
                                return <li key={data.id} className="radio-block__form__li"> 
                                            <label className="radio-block__form__li__listdata" disabled={disabledStatus}>
                                                <input type="radio" name="ringtone" checked={selected === data.name} value={data.name} onChange={onChange} disabled={disabledStatus}/>
                                                <span className="radio-block__form__fakedisplay"></span>
                                                {data.name}
                                            </label>
                                            </li>
                            })}
                        </ul>
                    </form>
                </div>
                </div>  
        </>
    );
}

export default Radio;