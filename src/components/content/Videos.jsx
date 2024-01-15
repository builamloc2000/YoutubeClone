import React from 'react'
//import { Video } from '../../dataset/FEData/ContentData/Video';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';


export default function Videos() {

  const [data, setData] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const searchQuery = useSelector(state => state.query);
  useEffect(() => {

    axios
      .get("https://655d543d9f1e1093c59936e4.mockapi.io/api/v1/data")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));

    const videoData = data.slice(53,63)
    
    const isSearchActive = searchQuery && searchQuery.trim() !== '';

    const updatedFilteredVideos = isSearchActive
      ? videoData.filter((item) =>
        item.name.toLowerCase().trim().includes(searchQuery.toLowerCase().trim())
      )
      : videoData;
      console.log("a:" ,updatedFilteredVideos)
    setFilteredVideos(updatedFilteredVideos);
    
  }, [searchQuery]);
 



  const listItems = filteredVideos.map((item) => (
    <li className=' pr-5 w-80 h-52 ' key={item.id}>
      <img alt='' src={item && item.information && item.information.src} className='rounded-lg w-full h-36' />
      <p>{item.name}</p>
      <p>{item && item.information && item.information.author}</p>
      <p>{item && item.information && item.information.view} • {item && item.information && item.information.createTime} </p>
    </li>
  ));





  return <ul className="grid grid-cols-4 gap-5 ">{listItems}</ul>;


}