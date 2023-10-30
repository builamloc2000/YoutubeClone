import React from 'react'
import Categogy from './content/Categories'
import Videos from './content/Videos'

const Content = () => {
  return (
    <div className='flex-col w-full'>
    <Categogy/>
    <div className='flex pt-5'><Videos/></div>
    
    </div>
    
  )
}

export default Content