import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from "./components/Home"
import Layout from "./components/Layout"
import AddVideo from "./components/header/addVideo";
import UpdateVideo from "./components/header/updateVideo"
export default function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}/ >
      <Route index element={<HomePage />} />
      <Route path='/addVideo' element={<AddVideo />} />    
      <Route path='/updateVideo/:id' element={<UpdateVideo/>}/> 



    </Routes>
    </BrowserRouter>

     

    

  );
};


