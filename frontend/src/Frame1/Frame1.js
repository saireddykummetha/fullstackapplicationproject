import React from 'react'
import "./Frame1.css";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { RxPerson } from "react-icons/rx";
import { BsPersonPlus } from "react-icons/bs";
import { PiBuildingsThin } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import amazon from "../images/amazon.png";
import tesla from "../images/tesla.png";

import { useState } from 'react'

import Navbar from '../Navbar';


const Frame1 = () => {
  const [price,setprice]=useState('80');
   const [dropdownvisible,setdropdownvisible]=useState(false);
   const[selected,setselected]=useState(null);
   const[itemlist,setitemlist]=useState([
    {
      name:'Internship',
      value:"internship"
    },
    {
      name:'FullTime',
      value:"fulltime"
    },
    {
      name:'PartTime',
      value:"partTime"
    },
    {
      name:'Contract',
      value:"contract"
    },
   ])
   
   const[locationvisible,setlocationvisible]=useState(false);
   const[locationselected,setlocationselected]=useState(null);
   const[list,setlist]=useState([
    {
       name:'Onsite',
      value:"onsite"
    },
    {
      name:'Offsite',
     value:"offsite"
   }
   ])
  return (
    <div className="frame-1" >
       
       
       
        <div className="table">
          <div className='table1'>
            
          <div className="logo-frame">
          <img className="amazon-logo" src={amazon} />
          </div>
          <div className="_24agoframe">
          <div className="_24-h-ago">24h Ago </div>
        </div>
        <div className="framefullstack">
          <div className="full-stack-developer">Full Stack Developer </div>
          </div>
          <div className="person"><BsPersonPlus/></div>
          <div className="_1-3-yr-exp">1-3 yr Exp </div>
          <PiBuildingsThin className="building"/>
          <div className="onsite">Onsite </div>
          <div className="_12-lpa">12LPA </div>
         <GiMoneyStack className="money"/>
         <div className="text">
          <ul >
            <li>.A user-friendly interface lets you browse stunning photos and videos</li>
            <li>.Filter destinations based on interests and travel style, and create personalized</li>
          </ul>
        </div>
        
        <div className="frameapply">
          <div className="apply-now">Apply Now </div>
        </div>
          </div>

          <div className='table2'>
            
            <div className="logo-frame">
            <img className="amazon-logo" src={tesla} />
            </div>
            <div className="_24agoframe">
            <div className="_24-h-ago">24h Ago </div>
          </div>
          <div className="framefullstack">
            <div className="full-stack-developer">Node Js Developer </div>
            </div>
            <div className="person"><BsPersonPlus/></div>
            <div className="_1-3-yr-exp">1-3 yr Exp </div>
            <PiBuildingsThin className="building"/>
            <div className="onsite">Onsite </div>
            <div className="_12-lpa">12LPA </div>
           <GiMoneyStack className="money"/>
           <div className="frame-text">
            <ul className="text">
              <li>
                .A user-friendly interface lets you browse stunning photos and
                videos
              </li>
              <li>
                .Filter destinations based on interests and travel style, and
                create personalized
              </li>
            </ul>{" "}
          </div>
          
          <div className="frameapply">
            <div className="apply-now">Apply Now </div>
          </div>
            </div>

            <div className='table3'>
            
            <div className="logo-frame">
            <img className="amazon-logo" src="https://tse2.mm.bing.net/th?id=OIP.MlcK3UbJve6Y8aU3ztGcZAHaFm&pid=Api&P=0&h=180" />
            </div>
            <div className="_24agoframe">
            <div className="_24-h-ago">24h Ago </div>
          </div>
          <div className="framefullstack">
            <div className="full-stack-developer">UI/UX Designer </div>
            </div>
            <div className="person"><BsPersonPlus/></div>
            <div className="_1-3-yr-exp">1-3 yr Exp </div>
            <PiBuildingsThin className="building"/>
            <div className="onsite">Onsite </div>
            <div className="_12-lpa">12LPA </div>
           <GiMoneyStack className="money"/>
           <div className="a-user-friendly-interface-lets-you-browse-stunning-photos-and-videos-filter-destinations-based-on-interests-and-travel-style-and-create-personalized">
            <ul className="text">
              <li>
                .A user-friendly interface lets you browse stunning photos and
                videos
              </li>
              <li>
                .Filter destinations based on interests and travel style, and
                create personalized
              </li>
            </ul>{" "}
          </div>
          
          <div className="frameapply">
            <div className="apply-now">Apply Now </div>
          </div>
            </div>

            <div className='table4'>
            
            <div className="logo-frame">
            <img className="amazon-logo" src={amazon}/>
            </div>
            <div className="_24agoframe">
            <div className="_24-h-ago">24h Ago </div>
          </div>
          <div className="framefullstack">
            <div className="full-stack-developer">Full Stack Developer </div>
            </div>
            <div className="person"><BsPersonPlus/></div>
            <div className="_1-3-yr-exp">1-3 yr Exp </div>
            <PiBuildingsThin className="building"/>
            <div className="onsite">Onsite </div>
            <div className="_12-lpa">12LPA </div>
           <GiMoneyStack className="money"/>
           <div className="a-user-friendly-interface-lets-you-browse-stunning-photos-and-videos-filter-destinations-based-on-interests-and-travel-style-and-create-personalized">
            <ul className="text">
              <li>
                .A user-friendly interface lets you browse stunning photos and
                videos
              </li>
              <li>
                .Filter destinations based on interests and travel style, and
                create personalized
              </li>
            </ul>{" "}
          </div>
          
          <div className="frameapply">
            <div className="apply-now">Apply Now </div>
          </div>
            </div>     
        </div>

        <div className='frame3'>
            <div className='table6'>
            <div className="logo-frame">
            <img className="amazon-logo" src={tesla} />
            </div>
            <div className="_24agoframe">
            <div className="_24-h-ago">24h Ago </div>
          </div>
          <div className="framefullstack">
            <div className="full-stack-developer">Node Js Developer </div>
            </div>
            <div className="person"><BsPersonPlus/></div>
            <div className="_1-3-yr-exp">1-3 yr Exp </div>
            <PiBuildingsThin className="building"/>
            <div className="onsite">Onsite </div>
            <div className="_12-lpa">12LPA </div>
           <GiMoneyStack className="money"/>
           <div className="a-user-friendly-interface-lets-you-browse-stunning-photos-and-videos-filter-destinations-based-on-interests-and-travel-style-and-create-personalized">
            <ul className="text">
              <li>
                .A user-friendly interface lets you browse stunning photos and
                videos
              </li>
              <li>
                .Filter destinations based on interests and travel style, and
                create personalized
              </li>
            </ul>{" "}
          </div>
          
          <div className="frameapply">
            <div className="apply-now">Apply Now </div>
          </div>
            </div>

            <div className='table7'>
            <div className="logo-frame">
            <img className="amazon-logo" src="https://tse2.mm.bing.net/th?id=OIP.MlcK3UbJve6Y8aU3ztGcZAHaFm&pid=Api&P=0&h=180"/>
            </div>
            <div className="_24agoframe">
            <div className="_24-h-ago">24h Ago </div>
          </div>
          <div className="framefullstack">
            <div className="full-stack-developer">UI/UX Designer </div>
            </div>
            <div className="person"><BsPersonPlus/></div>
            <div className="_1-3-yr-exp">1-3 yr Exp </div>
            <PiBuildingsThin className="building"/>
            <div className="onsite">Onsite </div>
            <div className="_12-lpa">12LPA </div>
           <GiMoneyStack className="money"/>
           <div className="a-user-friendly-interface-lets-you-browse-stunning-photos-and-videos-filter-destinations-based-on-interests-and-travel-style-and-create-personalized">
            <ul className="text">
              <li>
                .A user-friendly interface lets you browse stunning photos and
                videos
              </li>
              <li>
                .Filter destinations based on interests and travel style, and
                create personalized
              </li>
            </ul>
          </div>
          
          <div className="frameapply">
            <div className="apply-now">Apply Now </div>
          </div>
            </div>

            <div className='table8'>
            <div className="logo-frame">
            <img className="amazon-logo" src={tesla}/>
            </div>
            <div className="_24agoframe">
            <div className="_24-h-ago">24h Ago </div>
          </div>
          <div className="framefullstack">
            <div className="full-stack-developer">Node Js Developer</div>
            </div>
            <div className="person"><BsPersonPlus/></div>
            <div className="_1-3-yr-exp">1-3 yr Exp </div>
            <PiBuildingsThin className="building"/>
            <div className="onsite">Onsite </div>
            <div className="_12-lpa">12LPA </div>
           <GiMoneyStack className="money"/>
           <div className="a-user-friendly-interface-lets-you-browse-stunning-photos-and-videos-filter-destinations-based-on-interests-and-travel-style-and-create-personalized">
            <ul className="text">
              <li>
                .A user-friendly interface lets you browse stunning photos and
                videos
              </li>
              <li>
                .Filter destinations based on interests and travel style, and
                create personalized
              </li>
            </ul>{" "}
          </div>
          
          <div className="frameapply">
            <div className="apply-now">Apply Now </div>
          </div>
            </div>
            
            <div className='table9'>
            <div className="logo-frame">
            <img className="amazon-logo" src={amazon}/>
            </div>
            <div className="_24agoframe">
            <div className="_24-h-ago">24h Ago </div>
          </div>
          <div className="framefullstack">
            <div className="full-stack-developer">Full Stack Developer </div>
            </div>
            <div className="person"><BsPersonPlus/></div>
            <div className="_1-3-yr-exp">1-3 yr Exp </div>
            <PiBuildingsThin className="building"/>
            <div className="onsite">Onsite </div>
            <div className="_12-lpa">12LPA </div>
           <GiMoneyStack className="money"/>
           <div className="a-user-friendly-interface-lets-you-browse-stunning-photos-and-videos-filter-destinations-based-on-interests-and-travel-style-and-create-personalized">
            <ul className="text">
              <li>
                .A user-friendly interface lets you browse stunning photos and
                videos
              </li>
              <li>
                .Filter destinations based on interests and travel style, and
                create personalized
              </li>
            </ul>{" "}
          </div>
          
          <div className="frameapply">
            <div className="apply-now">Apply Now </div>
          </div>
            </div>
           </div>
           

           <div className="frame-2">
             <div className="vector"> <IoIosSearch /></div>  
            <div className="search-bar">
            <input className="search-bar1" type='text' placeholder='Search By Job Title, Role'/>
            </div>
            <div className="line">|</div>
            <div className="vector1"> <CiLocationOn /></div>
           
            <div className='location-dropdown'>
              <div className='location-selected'
                onClick={e=>{ setlocationvisible(!locationvisible);
                }}>
              {locationselected != null ? list[locationselected].name:"Preferred Location"}
              </div>
              {locationvisible ? ( <div className="item-holder">
               {
                list.map((item,index)=>(
                  <div key={item.value} className='dropdown-items' onClick={e=>{
                    setlocationselected(index);
                    setlocationvisible(false);
                  }}>
                    {item.name}
                  </div>
                ))
               }
              </div>):<></>}
            </div>
            <div className="line1">|</div>
           
            <div className="custom-dropdown" >
              <div className="dropdown-selected" 
              onClick={e=>{ setdropdownvisible(!dropdownvisible);
              }}>
                {selected != null ? itemlist[selected].name:"Jobtype"}
              </div>
             {dropdownvisible ? ( <div className="items-holder">
               {
                itemlist.map((item,index)=>(
                  <div key={item.value} className='dropdown-item' onClick={e=>{
                    setselected(index);
                    setdropdownvisible(false);
                  }}>
                    {item.name}
                  </div>
                ))
               }
              </div>):<></>}
            </div>
           
             <div className="frame6-1" >   
              
            </div>
            <div className="vector3"> <RxPerson /></div>
            
            <div className="line2">|</div>
            <div className="salary-per-month">Salary Per Month </div>
            <div className="_50-k-80-k">₹50k - ₹{price}k </div>
            <div className="barline">
            <div className="barline1" style={{'width':(price/100*100) +'%'}}></div>
            
            </div>
            <div className="slider"> 
           
               <input onChange={(e)=>setprice(e.target.value >=0 
              && e.target.value <=100 ? e.target.value:"100")}value={price}
               type='range' className="range-min" min="0" max="100" />             
              <input  value="0"type='range' className="range-max" min="50" max="100"/>             
            </div>
        </div>
           <Navbar/>
        
    </div>
    
  )
}

export default Frame1
