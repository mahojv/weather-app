import React from 'react'
import ModalSearch from './ModalSearch'

export default function HeroSection() {
  return (
    <div className='bg-[#1e213a] h-screen flex flex-col justify-around items-center w-full  md:w-[50%]'>
      <div className='flex items-center justify-around h-[64px] w-full  mt-6'>

        <button className='bg-[#6e707a] h-[40px] w-[176px] text-[16px] rounded-lg cursor-pointer '>Search for places</button>
        <button className='rounded-full bg-[#4b4d61] w-[40px] h-[40px] flex justify-center cursor-pointer '><img className='w-[25px] ' src="location.svg" alt="" /></button>
      </div>
      <div className='relative  w-full  h-[216px]  flex justify-center items-center'>
        <figure>
          <img className='absolute top-0 left-0  h-full opacity-10 w-[400px]' src="others/Cloud-background.png" alt="" />
        </figure>
        <figure className=' h-[80%] z-auto'><img className='object-cover h-full ' src="./weather/01n.png" alt="" /></figure>
      </div>
      <p className='text-[120px] text-white my-[20px]'>26°C</p>
      <p className='text-[30px] font-bold  ' >Clear Sky</p>
      <span className='flex w-[150px] justify-between my-[10px]' >
        <p>Today</p>
        <p>.</p>
        <p>Mon. 28 Apr</p>
      </span>

      <span className='flex w-[150px] justify-between my-[20px] items-center'>
        <figure className=''><img src="location_on.svg" alt="" /></figure>
        <p>Coatzacoalcos</p>

      </span>

      <ModalSearch/>
    </div>
  )
}
