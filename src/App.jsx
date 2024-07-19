/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./App.css"
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import { useDispatch, useSelector } from 'react-redux'
function App() {
const dispatch=useDispatch()
const toggle=useSelector((store)=>store.toggle)
console.log(toggle);
  return (
    <div className='bg-amber-50 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10'>
      <Header />
      <Body />
      <Footer />
 
          {
        toggle &&
        <div className='lg:hidden absolute w-[300px] bg-white min-h-screen top-0 left-0'>
          
           <SideBar />
        </div>
          }
          
    
    </div>
  )
}

export default App