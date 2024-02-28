import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Categogy() {
  // const listItems = Category.map(item =>
  //     <li className='p-1 rounded-lg bg-black text-white pl-2 pr-2'>{item.name}</li>
  //     );
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://655d543d9f1e1093c59936e4.mockapi.io/api/v1/data")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const listItems = data.map((d, i) => {
    return (
      <li className="p-1 rounded-lg bg-black text-white pl-2 pr-2" key={i}>
        {d.name}
      </li>
    );
  });



  return (
    <ul className="flex h-10 items-center justify-between w-2/3">
      {listItems.slice(0,11)}
    </ul>
  );
}
