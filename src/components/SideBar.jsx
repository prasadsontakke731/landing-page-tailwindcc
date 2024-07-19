/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/toggleSlice'

function SideBar() {
    const dispatch=useDispatch()
  return (
    <div className='flex flex-col justify-between items-center '>
        <button className='absolute top-0 right-0 border-red-400 bg-red-400 text-white p-2 font-bold rounded-md' onClick={()=>dispatch(toggleMenu())} >close</button>
        <ul className='flex flex-col items-center justify-center align-middle w-[300px] my-5'>
              <li className='my-3'>Pans</li>
              <li className='my-3'>Find Domain</li>
              <li className='my-3'>Why Hoster??</li>
        </ul>
        <div className='flex flex-col justify-center align-middle items-center'>
              <a href="#" className='text-gray-400 my-5'>Sign In</a>
              <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
        </div>
    </div>
  )
}

export default SideBar