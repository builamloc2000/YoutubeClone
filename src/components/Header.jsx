
import React from 'react'
import { ReactComponent as Menu } from '../assets/icon/menu.svg'
import { ReactComponent as Logo } from '../assets/icon/logo.svg'
import { ReactComponent as CreateVideo } from '../assets/icon/createVideo.svg'
import { ReactComponent as Notification } from '../assets/icon/notification.svg'
import { ReactComponent as Avatar } from '../assets/avatar/avatar.svg'
import Search from './Search'
import { useState } from 'react'

export default function Header(){
    const [state] = useState(true)
    
    if(state ===true)
    
    
    return (
        <header className="w-full h-14 flex justify-between items-center pl-4 pr-4  ">
            <div className="flex items-center pl-2  ">
                <Menu />
                <div className="items-center flex ml-6  ">
                    <Logo />
                </div>
                <div className="mb-[17px] text-[10px]">VN</div>
            </div>
            <div className="relative flex w-2/5 h-10 justify-end items-center">
                <div className='hidden'> </div>
                <Search />
                
            </div>
            <div className="flex w-[7%] justify-between items-center ">
                <CreateVideo />
                <Notification />
                <Avatar />
            </div>
        </header>
    )
}

