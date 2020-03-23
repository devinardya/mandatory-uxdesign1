import React, { useState, useRef, useEffect } from 'react';
import './checkbox.css';
import { FaSignal} from "react-icons/fa";
import { IoIosBatteryFull } from "react-icons/io";
import { MdAirplanemodeInactive, MdArrowBack, MdMoreVert, MdSearch, MdWifi, MdBluetoothDisabled } from "react-icons/md";


const Checkbox = () => {

        const [dataList, updateDataList] = useState([{name:"Pickles", checked: false, id:0},
                                                     {name:"Tomato", checked: false, id:1},
                                                     {name:"Lettuce", checked: false, id:2},
                                                     {name:"Cheese", checked: false, id:3},
                                                     {name:"Extra Ketchup", checked: false, id:4},
                                                    ]);
        const [activeChecked, updateActiveChecked] = useState(false);
        const checkRef = useRef();
      

        useEffect(() => {
            let copyData = [...dataList]
            if(copyData.find((x)=> x.checked === true)) {
                checkRef.current.indeterminate = true;
            } else {
                checkRef.current.indeterminate = false;
            }

            if (copyData.every((x) => x.checked !== false)) {
                checkRef.current.indeterminate = false;
            } 

        }, [dataList])

        const toggleChecked = (index) => {
            //console.log(index)
            let copyData = [...dataList]
            if(copyData.find((x) => x.id === index )) {
                //console.log(index, copyData[index].checked)
                copyData[index].checked = copyData[index].checked ? false : true;
                updateDataList(copyData);
            } 

            if(copyData.every((x) => x.checked !== false)) {
                updateActiveChecked(true);
            } else {
                updateActiveChecked(false);
            }
        }

        const toggleAllChecked = (e) => {
            //console.log(e.target.checked)
            updateActiveChecked(e.target.checked)
            let copyData = [...dataList];
            copyData.map(data => {
                return data.checked = e.target.checked;
            })
        }
    
        return(
            <>
                 <h2>Checkbox</h2> 
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
                            <h4>Meal options</h4>
                            <MdSearch size="24px" color="transparent" style= {{marginRight: "16px"}} />
                            <MdMoreVert size="24px" color="#fff" style= {{marginRight: "12px"}} />
                        </div>
                     </div>
                    <div className="checkbox-block">
                        <ul className="checkbox-block__main-option">
                            <li>
                                <label className="checkbox-block__main-option__list">
                                    <input type="checkbox" checked={activeChecked} ref={checkRef} onChange={toggleAllChecked}/>
                                    <span className="checkbox-block__fakedisplay"></span>
                                        Additions
                                </label>
                                <ul className="checkbox-block__sub-option">
                                    {dataList.map(data => {
                                        let disabledStatus;
                                        if(data.name === "Lettuce") {
                                            disabledStatus = "disabled";
                                        } else {
                                            disabledStatus = null;
                                        }
                                        return <li key={data.id}> 
                                                    <label className="checkbox-block__sub-option__list" disabled={disabledStatus}>
                                                        <input type="checkbox" checked={data.checked} disabled={disabledStatus} onChange={() => toggleChecked(data.id)} />
                                                        <span className="checkbox-block__fakedisplay"></span>
                                                        {data.name}
                                                    </label>
                                                 </li>
                                    })}
                                </ul>
                                
                            </li>
                        </ul>
                            
                        
                    </div>
                 </div>   
            </>
        );
    
}

export default Checkbox;