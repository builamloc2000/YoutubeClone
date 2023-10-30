import React from 'react'
import { ReactComponent as Keybroad } from '../assets/icon/keybroad.svg'
import { ReactComponent as Glass } from '../assets/icon/search.svg'
import { ReactComponent as Voice } from '../assets/icon/voice.svg'

const Search = () => {
  return (
    <>
                <form action=""
                    className="flex w-3/4 justify-end h-full items-center border-t border-b border-l border-gray-400 rounded-l-[25px]">
                    <input className="w-full ml-4 outline-white border-white border-4" type="text" placeholder="Tìm kiếm" />
                    <Keybroad />

                </form>
                <button id="search"><Glass/></button>
                <div className="pl-4"><Voice/>
                </div>
                </>    
  )
}

export default Search