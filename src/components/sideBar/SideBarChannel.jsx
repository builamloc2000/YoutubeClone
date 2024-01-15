import React from "react";
import { ChannelData } from "../../dataset/FEData/SideBarData/Channel";
import { useState } from "react";

export default function SideBarChannel() {
    
    const [state, setState] = useState(true);
    const [indexStart] = useState(2);
    const [indexEnd] = useState(9);
    const handleClick = () => {
    console.log(state);
    if (state) {
      setState(false);
    } else {
      setState(true);
    }
  };

  const moreItem = ChannelData.find((item) => item.id === 0);
  moreItem.name = `Hiển thị thêm ${ChannelData.length -9} mục`;
  const lessItem = ChannelData.find((item) => item.id === 1);

  const listItems = ChannelData.slice(
    indexStart,
    state ? indexEnd : undefined
  ).map((item) => (
    <li className="flex pl-3 pr-3 w-[204px] h-10 items-center">
      {item.icon} {item.name}
    </li>
  ));

  listItems.push(
    <li
      key={state ? moreItem.id : lessItem.id}
      className="flex pl-3 pr-3 w-[204px] h-10 items-center"
      onClick={() => handleClick()}
    >
      {state ? moreItem.icon : lessItem.icon}{" "}
      {state ? moreItem.name : lessItem.name}
    </li>
  );

  return <ul className="flex flex-col text-sm w-60 p-3">{listItems}</ul>;
}
