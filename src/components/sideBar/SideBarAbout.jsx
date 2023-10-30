import React from 'react'
import { AboutData } from '../../dataset/FEData/SideBarData/About'

export default function SideBarAbout() {
    const id = AboutData.filter(item =>
        item.id === 1)
    const listItems = id.map(item =>
        <div className='flex pl-3 items-center'>{item.name}</div>
    );

    return <div className="font-semibold flex flex-wrap text-gray-600 text-xs w-60 p-3">{listItems}</div>;


}
export function SideBarAboutPolicy() {
    const id = AboutData.filter(item =>
        item.id === 2)
    const listItems = id.map(item =>
        <div className='flex pl-3 items-center'>{item.name}</div>
    );

    return <div className="font-semibold flex flex-wrap text-gray-600 text-xs w-60 pl-3 pr-3 pb-3">{listItems}</div>;


}
export function SideBarAboutBrand() {
    const id = AboutData.filter(item =>
        item.id === 12)
    const listItems = id.map(item =>
        <div className='flex pl-3 items-center'>{item.name}</div>
    );

    return <div className="font-semibold flex flex-wrap text-gray-600 text-xs w-60 pl-3 pr-3 pb-3">{listItems}</div>;


}     