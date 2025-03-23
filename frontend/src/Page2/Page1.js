import React, {  useState } from 'react'
import "./Page1.css";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import ReactDatepicker from '../Datepicker';
import Dropdown from '../Dropdown';
import { Link } from 'react-router-dom';


const Page1 =()=>{
   const [selected,setseleted]=useState("");
    const [data,setdata]=useState({
        jobtitle:"",
        companyname:"",
        location:"",
        jobtype:"",
        salaryrange:"",
        salaryrange1:"",
        applicationdeadline:"",
        jobdescription:"",
    })
 console.log(data);
    const handleOnchange=(e)=>{
       const{name,value}=e.target

       setdata((preve)=>{
         return{
            ...preve,
            [name]:value
         }
       })
    }

    const handlesubmit=async(e)=>{
        e.preventDefault();
        console.log(data);

       
        const fechData=await fetch("http://localhost:4000/upload",{
            method:"POST",
            headers:{
              "content-type":"application.json"
            },
            body:JSON.stringify(data)
          })
         
          const dataRes=await fechData.json();
          console.log("dataRes",dataRes);
    }
   
  return (
    <>
    <div className="overlay">
    
    <div className="page1" >
      <div className="Frame1">
          Create Job Opening
      </div>
      <form onSubmit={handlesubmit}>
        <div className="frame2">
           Job Title
           </div>
           <div className="frame3">
           <input type={"text"} name="jobtitle" className="frame3-1" onChange={handleOnchange}/>

            </div> 
         <div className="frame4">
            Location
            </div>
         <input type={"text"} value={data.location}name="location"  className="frame4-1" onChange={handleOnchange}/>
         <div className="frame5">Company Name</div>
         <div className="frame5-1">
         <input type={"text"} value={data.companyname}name="companyname" className="frame5-2" onChange={handleOnchange}/>
         </div>
         <div className='frame6'>Job Type</div>
        
        
         <div className='frame7'>Salary Range</div>
         <div className='frame7-1'>
         <div className='frame7-2'>
           <input type={"text"} value={data.salaryrange}name="salaryrange" placeholder=" ⇅ 0"className="frame7-11" onChange={handleOnchange}/>
         </div>
         <div className='frame7-3'>
         <input type={"text"} name="salaryrange1" placeholder=" ⇅ 12,00,000"className="frame7-11" onChange={handleOnchange}/>
         </div>
         </div>

         <div className='frame8'>Application Deadline</div>
         
        <div className='frame9' >Job Description</div>
         
         <textarea placeholder="Please share a description to let the candidate know more about the job role"className='frame9-1' value={data.jobdescription} name="jobdescription" onChange={handleOnchange}></textarea>
        
         <div className="frame8-1">
         <div className="frame8-2" ><ReactDatepicker value={data.applicationdeadline}name="applicationdeadline" onChange={handleOnchange}/></div>
         </div>

         <div className="frame6-1" >   
         <Dropdown className='internship' selected={selected} setselected={setseleted} name="jobtype" value={data.jobtype} onChange={handleOnchange}/>
         </div>
          <div className='frame10'> </div>
          <div className="frame10-1">Save Draft 
          <RiArrowDownDoubleFill/>
          </div>
         <Link to={'/'} type="submit"className='frame11'></Link>
           <div className='frame11-1'>Publish <RiArrowRightDoubleLine/></div>
          </form>   
    </div>
    </div>
    </>
  )
}

export default Page1
