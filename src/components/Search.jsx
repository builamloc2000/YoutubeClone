import React, { useState, useRef } from 'react'

import { ReactComponent as Keybroad } from '../assets/icon/keybroad.svg'
import { ReactComponent as Glass } from '../assets/icon/search.svg'
import { ReactComponent as Voice } from '../assets/icon/voice.svg'
import { ReactComponent as Cancel } from '../assets/icon/cancel.svg'
import Videos from './content/Videos'


export default function Search  ()  {
    const [state,setState] = useState(true)
    const [width, setWidth] = useState(520);
    const [search, setSearch] = useState('');
    const inputRef = useRef(null);
   debugger;
    const handleClick = (newWidth) =>{
      setWidth(newWidth);
      setState(false); 
    }

    const handleBlur = (newWidth) =>{
      setWidth(newWidth);
      setState(true); 
    }
    
    const handleCancel = () => {
      setSearch('');
      handleClick(560);
      inputRef.current.focus();
    }
    


  




    return (
      <>
        
        
        <form action=""
            className="flex justify-end h-full items-center border-t border-b border-l border-gray-400 rounded-l-[25px]"
            style={{ width: `${width}px` }}>
            
            <div hidden={state}><Glass className='w-6 h-6 ml-4 '/></div>
            <input ref={inputRef} onClick={() => handleClick(560)} onBlur={() => handleBlur(520)} className=" w-full outline-white border-white border-4 ml-3" type="text" placeholder="Tìm kiếm" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <div className='mr-2 h-6 w-6 pt-1.5'><Keybroad/></div>
            {search.length !== 0 && <div className='mr-1' onClick={handleCancel}><Cancel className='w-6 h-6'/></div>}
            
          </form> 
          

        <button className='h-10 w-[65px] bg-slate-100 rounded-r-[25px] border border-gray-400 ' id="search"><Glass className=' ml-4 h-6 w-6'/></button>
        <div className="pl-4"><Voice /></div>
        
        
        <div className='absolute bg-red-300 h-96 w-[560px] top-11 mr-[123px] rounded-xl' hidden={state}>
          <div>abc</div>
          <div>abc</div>
        </div>
        <Videos searchQuery={search} />
      </>
    )
  }

 

