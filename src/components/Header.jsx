/* eslint-disable no-unused-vars */
import React from 'react'
import { FaBars } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/toggleSlice'

function Header() {
  const dispatch=useDispatch()
  const toggle=useSelector((store)=>store.toggle)
  return (
    <div className='flex justify-between'>
      <div className='flex items-center justify-center gap-2'>
        <img src="./assets/Logo.svg" alt="logo" />
        <button className='bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2 py-1 rounded-2xl'>Hotstrat is hiring</button>
      </div>
      <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
        <li>
          <a href="#">Pans</a>
        </li>
        <li>
          <a href="#">Find Domain</a>
        </li>
        <li>
          <a href="#">Why Hoster??</a>
        </li>
      </ul>
      <div className='hidden lg:flex justify-between items-center gap-6 font-lato '>
        <a href="#" className='text-gray-400'>Sign In</a>
        <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>
      </div>
      <div className='lg:hidden ' onClick={() => dispatch(toggleMenu())}>
        <FaBars  />
      </div>
    </div>
  )
}

export default Header