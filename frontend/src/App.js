import { useState } from "react";
import Dropdown from "./Dropdown";
import Frame1 from "./Frame1/Frame1";
import "./styles.css";
import {  Route, Routes } from "react-router-dom";


export default function App() {

  const [selected,setseleted]=useState("");
  return (
    <div>
      <Routes>
        <Route path="/" element={<Frame1/>}/> 
        <Route path="/drop" element={<Dropdown selected={selected} setselected={setseleted}/>}/>    
      </Routes>  
    </div>
  );
}