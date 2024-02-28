import React from "react"
import Header from "./Header";
import SideBar from "./SideBar";
import Content from "./Content";


export default function Home() {
    return (
        <div className='w-full h-full'>
            <div className="bg-white w-full h-full ">
                <Header />
            </div>
            <div className=" flex flex-row  max-h-screen  ">
                <SideBar />
                <Content />
            </div>
        </div>
    )
}
