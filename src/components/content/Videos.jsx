import React from 'react'

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import {  Link } from 'react-router-dom';


export default function Videos() {

  const [data, setData] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const searchQuery = useSelector(state => state.query);
  useEffect(() => {
    
    axios
      .get("http://localhost:3001/api/video/videos")
      .then((res) => setData(res.data), console.log("data", data))
      .catch((err) => console.log(err));



    const isSearchActive = searchQuery && searchQuery.trim() !== '';

    const updatedFilteredVideos = isSearchActive
      ? data.filter((item) =>
        // item.id.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
        item.title.includes(searchQuery)
      )
      : data;
    
    setFilteredVideos(updatedFilteredVideos);

  }, [searchQuery]);


  const handleDelete = (id) => {
    



     axios.delete('http://localhost:3001/api/video/' +id)
        .then(res => {  console.log("ok") })
        .catch(er => console.log(er))
    
};
const handleUpdate = (id) => {
  
};

  const listItems = filteredVideos.map((item) => (
    <li className=' pr-5 w-80 h-52 ' key={item.id}>
      <video  className='rounded-lg w-72 h-36 border-2' controls>
        <source src={`http://localhost:3001/Videos/`+ item.urlVideo} type="video/mp4" />
        
      </video>
      


      
      <p>{item.title}</p>
      <p>{item.description}
      <button onClick={()=>{handleDelete(item.id)}} className="bg-yellow-500">delete</button>
      
      </p> 
      <p>{item.createVideo}
      <button onClick={()=>{handleUpdate(item.id)}} className="bg-yellow-500">
      <Link to={`/updateVideo/${item.id}`}>update</Link>
        </button>
      
      </p> 
    </li>


  )
  );






  return <ul className="grid grid-cols-5 gap-5 ">{listItems}</ul>;


}