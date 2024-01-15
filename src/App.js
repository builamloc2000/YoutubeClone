import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";



export default function App() {
  
    
  return (
    <div className='w-full h-full'>
      <div className="bg-white w-full h-full ">
        
        
        <Header  />
      </div>
      <div className=" flex flex-row  max-h-screen  ">
        <SideBar  />

        <Content />
      </div>
    </div>
  );
};


