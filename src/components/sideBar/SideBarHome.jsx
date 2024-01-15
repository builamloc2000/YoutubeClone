import React, { useEffect, useState } from "react";
import { HomeData } from '../../dataset/FEData/SideBarData/Home'
import axios from 'axios';

export default function SideBarHome() {


    const [data, setData] = useState([]);
    
    useEffect(() => {
        axios
            .get("https://655d543d9f1e1093c59936e4.mockapi.io/api/v1/data")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);
    
    const listIcons = HomeData.map(item =>
        <li className=" pl-3 h-6 w-0">{item.icon} </li>
    );

    const listItems = data.map((d, i) => {
        return (            
                <li className=" mr-12 h-6" key={i}>
                    {d.name}
                </li>
        );
    });

    

    return <ul className="grid grid-rows-3 grid-flow-col text-sm w-60 p-3 gap-4">{listIcons} {listItems.slice(11, 14)}</ul>;


}       