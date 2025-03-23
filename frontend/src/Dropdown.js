
import React, { useState } from 'react'
import './Dropdown.css'
import { IoIosArrowDown } from "react-icons/io";
function Dropdown({selected,setselected}){
    const [isactive,setisactive]=useState(false);
    const options=['Internship','FullTime','PartTime','Contract'];
  return (
    <div className="dropdown">
      <div className="drop-btn"  onClick={(e)=>setisactive(!isactive)}>{selected} <IoIosArrowDown/></div>
      {isactive && (
         <div className="dropcontent">
          {options.map(option=>(
            <div onClick={(e)=>
            {setselected(option)
            setisactive(false)
            }}
            className='item'>
              {option}
            </div>
          ))}
         
       </div>
      )}
     
    </div>
  )
}

export default Dropdown
