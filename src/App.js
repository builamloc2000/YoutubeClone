import React from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Content from "./components/Content";

const App = () => {
  return (
    <div className="bg-white w-full h-full">
      <Header />
      
      <div className=" flex">
        <SideBar />
      
        <Content />
      </div>
    </div>
  );
};

export default App;
