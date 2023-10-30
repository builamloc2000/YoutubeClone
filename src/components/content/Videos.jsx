import React from 'react'
import { Video } from '../../dataset/FEData/ContentData/Video';

export default function Videos() {
    const listItems = Video.map(item =>
        <li className=' pl-3 pr-3 w-[204px] h-10 items-center'>
            <img alt='' src={item.src} />
            <p>{item.title}</p>
            <p>{item.author}</p>
            <p>{item.view} • {item.createTime} </p>
            
            </li>
        
        );
        
    return <ul className="flex ">{listItems}</ul>;
    

    }       