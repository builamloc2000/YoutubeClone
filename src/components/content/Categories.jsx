import React from 'react'
import { Category } from '../../dataset/FEData/ContentData/Categogy';

export default function Categogy() {
    const listItems = Category.map(item =>
        <li className='p-1 rounded-lg bg-black text-white pl-3 pr-3'>{item.name}</li>
        );
        
    return <ul className="flex h-10 items-center justify-between w-2/3 ">{listItems}</ul>;
    

    }       