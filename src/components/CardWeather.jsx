import React from 'react'
import { obtainDate } from '../js/obtainDate'

export default function CardWeather({index,dt,temp,temp_max,temp_min,icon,units}) {


  const date = obtainDate(dt*1000)
  return (
    <>
      <div role='card' className='bg-[#1e213a] py-5 px-2 h-[160px] lg:h-[240px]  w-[120px] lg:w-[200px] gap-3 flex flex-col items-center text-[12px] lg:text-[24px] justify-between  '>
            <p className='text-white text-center text-[15px] lg:text-[24px] ' >{index===0? 'Tomorrow' : date }</p>
            <figure className='w-[60px] lg:w-[90px] '><img className='object-cover' src={`./weather/${icon}.png`} alt="" /></figure>
            <span className='flex w-full  justify-around  items-center'>
              <p className='text-white '>{temp_max} { units==="metric"? "°C" : "°F" }</p>
              <p>{temp_min} { units==="metric"? "°C" : "°F" }</p>
            </span>

          </div>
    </>
  )
}
