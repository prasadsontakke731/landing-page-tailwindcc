/* eslint-disable no-unused-vars */
import React from 'react'

function Body() {
  return (
    <div className='space-y-4 lg:flex gap-5'>
      
      <div className='flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end'>
        <img src="./assets/Blue-Shape.svg" alt="images" className='-rotate-[45deg] h-64 md:h-72 lg:h-[400px]'/>
        <img src="./assets/Pink-Shape.svg" alt="images" className='absolute -rotate-[30deg] h-64 md:h-72 lg:h-[400px]'/>
        <img src="./assets/Purple-Shape.svg" alt="images"  className='absolute -rotate-[15deg] h-64 md:h-72 lg:h-[400px]'/>
        <img src="./assets/Hero-Model.png" alt="images" className='absolute h-64 md:h-72 lg:h-[400px]' />
      </div>
      <div className='lg-flex-2 lg:order-1'>
        <h1 className='text-5xl font-bold font-playfair leading-tight lg:text-7xl lg:my-10'>Host your website in 5min</h1>
        <p className='font-lato text-gray-400 lg:text-2xl lg:my-5'>with hotstrar get your website up and running in less than 5 minutes with the most competeing packeges</p>
        <form className='flex flex-col gap-4 md:flex-row lg:my-10'>
          <input className='rounded-md px-4 py-3 placeholder:text-gray-400 lg:w-[600px]' type="email" placeholder='Enter Email Address'  />
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white'>Join Waitlist</button>

        </form>
        <div className='flex gap-2'>
          <img src="./assets/Checkmark.svg" alt="check" />
          <p className='font-lato text-gray-400'>No spam ever, unsubscribe anytime</p>
        </div>
      </div>
    </div>
  )
}

export default Body