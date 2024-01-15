import React from 'react'

import SideBarHome from './sideBar/SideBarHome'
import SideBarOption from './sideBar/SideBarOption'
import SideBarChannel from './sideBar/SideBarChannel'
import SideBarExplore from './sideBar/SideBarExplore'
import SideBarOtherService from './sideBar/SideBarOtherService'
import SideBarSetting from './sideBar/SideBarSetting'
import SideBarAbout from './sideBar/SideBarAbout'
import { SideBarAboutBrand } from './sideBar/SideBarAbout'
import { SideBarAboutPolicy } from './sideBar/SideBarAbout'


export default function SideBar() {
  return (
    
    <div className='w-70 overflow-y-auto pb-14' >
    <SideBarHome/>
    <hr className='ml-3'></hr>
    <SideBarOption/>
    <hr className='ml-3 '></hr>
    <h3 className='pl-6 pt-3'>Kênh đăng ký</h3>
    <SideBarChannel/>
    <hr className='ml-3 '></hr>
    <h3 className='pl-6 pt-3'>Khám phá</h3>
    <SideBarExplore/>
    <hr className='ml-3 '></hr>
    <h3 className='pl-6 pt-3'>Dịch vụ khác của Youtube</h3>
    <SideBarOtherService/>
    <hr className='ml-3 '></hr>
    <SideBarSetting/>
    <hr className='ml-3 '></hr>
    <SideBarAbout/>
    <SideBarAboutPolicy/>
    <SideBarAboutBrand/>
    </div>
    
  )
}




        



