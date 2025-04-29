import React from 'react'

export default function CardWeather() {
  return (
    <>
      <div role='card' className='bg-[#1e213a] py-5 px-2 h-[160px] lg:h-[240px]  w-[120px] lg:w-[180px] gap-2 flex flex-col items-center justify-center text-[16px] lg:text-[24px] '>
            <p className='text-white' >Tomorrow</p>
            <figure className='w-[60px] lg:w-[90px] '><img className='object-cover' src="./weather/01n.png" alt="" /></figure>
            <span className='flex w-full justify-around  items-center'>
              <p className='text-white'>30 °C</p>
              <p>15 °C</p>
            </span>

          </div>
    </>
  )
}
