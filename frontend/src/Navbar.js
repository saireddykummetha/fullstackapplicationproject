import React, { useState } from 'react'
import  "./Navbar.css"
import Page1 from './Page2/Page1';



const Navbar = () => {

  const [upload,setupload]=useState(false);
  return (
    <div>
    <div className="frame1">
        <div className='frame1-1'>
        <div className="framelogo">
            <img className="logo" src="https://www.cybermindworks.com/images/cmwlogo.svg" />
        </div>
        <div className='home'>Home</div> 
        <div className="findjobs">Find Jobs</div>
        <div className="findtalent">Find Talents</div>
        <div className="aboutus">About Us</div>
        <div className="terminals">Terminals</div>
        <button className="button" onClick={()=>setupload(true) }> Create Jobs </button>
        </div>
        </div>
        
        {upload && (<Page1/>)}
        
        
    </div>
  )
}

export default Navbar
