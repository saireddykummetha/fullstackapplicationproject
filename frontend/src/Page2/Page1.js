import React, {  useState } from 'react'
import "./Page1.css";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import  { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';


const Page1 =()=>{
  
    const [data,setdata]=useState({
        jobtitle:"",
        companyname:"",
        location:"",
        jobtype:"",
        salaryrange:"",
        salaryrange1:"",
        applicationdeadline:"",
        jobdescription:""
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
  const[jobtitle,companyname,location,jobtype,salaryrange,salaryrange1,applicationdeadline,jobdescription]=data;
       
  if(jobtitle && companyname && location && jobtype &&salaryrange && 
        salaryrange1 && applicationdeadline && jobdescription){
          const fechData=await fetch("http://localhost:4000/",{
            method:"POST",
            headers:{
              "content-type":"application.json"
            },
            body:JSON.stringify(data)
          })
         
          const dataRes=await fechData.json();
          console.log("dataRes",dataRes);
          toast(dataRes.message);
         
        } else{
            toast("Enter required Field")
        }
        
    }
   

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
           <input type={"text"} placeholder="Full Stack developer" name="jobtitle" className="frame3-1" onChange={handleOnchange} required/>
            </div> 
         <div className="frame4">
            Location
            </div>
            <div className="frame4-0">
            <input type={"text"} placeholder="Choose Preferred Location" value={data.location}name="location"  className="frame4-1" onChange={handleOnchange} required/>
            </div>
         <div className="frame5">Company Name</div>
         <div className="frame5-1">
         <input type={"text"} placeholder="Microsoft,Amazon,Swiggy" value={data.companyname}name="companyname" className="frame5-2" onChange={handleOnchange} required/>
         </div>
         <div className='frame6'>Job Type</div>
        
        
         <div className='frame7'>Salary Range</div>
         <div className='frame7-1'>
         <div className='frame7-2'>
           <input type="number" value={data.salaryrange}name="salaryrange" placeholder=" ⇅ 0"className="frame7-11" onChange={handleOnchange} required/>
         </div>
         <div className='frame7-3'>
         <input type="number" value={data.salaryrange1}name="salaryrange1" placeholder=" ⇅ 12,00,000"className="frame7-11" onChange={handleOnchange}required/>
         </div>
         </div>

        <div className='frame9' >Job Description</div>
         <textarea placeholder="Please share a description to let the candidate know more about the job role"className='frame9-1' value={data.jobdescription} name="jobdescription" onChange={handleOnchange} required></textarea>
        
         <div className='frame8'>Application Deadline</div>
         <div className="frame8-1">
         <input type="date" className="frame8-2"name="applicationdeadline" value={data.applicationdeadline}  onChange={handleOnchange} required/>
         </div>

         <div className="frame6-1" >   
        <div className='dropdown' >
          <div className='selected'
           onClick={e=>{ setdropdownvisible(!dropdownvisible);
           }}>
           {selected != null ? itemlist[selected].name:<input className="input"placeholder="Select Job Type" name="jobtype" value={data.jobtype}  required/> }
          </div>
          
          {dropdownvisible ? ( <div className="item-holders">
               {
                itemlist.map((item,index)=>(
                  <div key={item.value} className='dropdown-items' onClick={e=>{
                    setselected(index);
                    setdropdownvisible(false);
                  }}>
                    {item.name}
                  </div>
                ))
               }
              </div>):<></>}
        </div>
        

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
