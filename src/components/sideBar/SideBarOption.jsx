import React, { useState } from "react";
import { OptionData } from "../../dataset/FEData/SideBarData/Option";

export default function SideBarOption() {
  const [state, setState] = useState(true);
  const [indexStart] = useState(2);
  const [indexEnd] = useState(7);
  const handleClick = () => {
    console.log(state);
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const moreItem = OptionData.find((item) => item.id === 0);
  const lessItem = OptionData.find((item) => item.id === 1);


  const listItems = OptionData.slice(indexStart, state ? indexEnd : undefined).map((item) => (
    <li className="flex pl-3 pr-3 w-[204px] h-10 items-center">
      {item.icon} {item.name}
    </li>
  ));
 
    
    listItems.push(
      <li
        key={state? moreItem.id :  lessItem.id}
        className="flex pl-3 pr-3 w-[204px] h-10 items-center"
        onClick={() => handleClick()}
      >
        {state? moreItem.icon : lessItem.icon} {state?moreItem.name :  lessItem.name}
      </li>
    );
  

  return <ul className="flex flex-col text-sm w-60 p-3">{listItems}</ul>;
}
