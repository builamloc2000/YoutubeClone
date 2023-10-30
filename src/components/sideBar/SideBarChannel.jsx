import React from 'react'
import { ChannelData } from '../../dataset/FEData/SideBarData/Channel'

export default function SideBarChannel() {
    const listItems = ChannelData.map(item =>
        <li className='flex pl-3 pr-3 w-[204px] h-10 items-center'>{item.icon} {item.name}</li>
        );
        
    return <ul className="flex flex-col text-sm w-60 p-3">{listItems}</ul>;
    

    }       