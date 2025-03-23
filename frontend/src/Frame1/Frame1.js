import React from 'react'
import "./Frame1.css";
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { BsPersonPlus } from "react-icons/bs";
import { PiBuildingsThin } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import amazon from "../images/amazon.png";
import tesla from "../images/tesla.png";
import Swiggy from "../images/Swiggy.png";

import Navbar from '../Navbar';


const Frame1 = () => {
  return (
    <div className="frame-1">
       
       
        <div className="frame-2">
             <div className="vector"> <IoIosSearch /></div>  
            <div className="search-bar">
            <input className="search-bar1" type='text' placeholder='Search By Job Title, Role'/>
            </div>
            <div className="line">|</div>
            <div className="vector1"> <CiLocationOn /></div>
            <div className="location">Preferred Location </div>
            <div className="vector2">< RiArrowDropDownLine/></div>
            <div className="line1">|</div>
            <div className="jobtype">Job type </div>
            <div className="vector3"> <RxPerson /></div>
            <div className="vector4">< RiArrowDropDownLine/></div>
            <div className="line2">|</div>
            <div className="salary-per-month">Salary Per Month </div>
            <div className="_50-k-80-k">₹50k - ₹80k </div>
            <div className="barline">_______________</div>
            <div className="barline1">__________</div>
            <div className="dot">. </div>
            <div className="dot1">. </div>
        </div>
        
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
           
           <Navbar/>
        
    </div>
  )
}

export default Frame1
