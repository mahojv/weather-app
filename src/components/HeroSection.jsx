import React, { useEffect, useState } from 'react'
import ModalSearch from './ModalSearch'
import { geoFindMe } from '../js/geoPosition'

export default function HeroSection({ response, loading, units, setSearch, search }) {
  const [toggle, setToggle] = useState(false)

  const weatherImg = response !== null ? response.weather[0].icon : '10d'

  const fecha = response !== null ? response.dt : 1593561600
  const date = new Date(fecha * 1000)

  const options = {
    weekday: 'long', month: 'long', day: 'numeric'
  };
  const dateTime = date.toLocaleDateString("en-US", options)
  function geoFindAPI() {

    geoFindMe((location) => {
     
      const finder = `lat=${location[0]}&lon=${location[1]}`

      setSearch(finder)
    })

  }

  return (
    <div className='bg-[#1e213a] h-screen flex flex-col justify-around items-center w-full  md:w-[50%]'>




      {response !== null &&
        <>
          <div className='flex items-center justify-around h-[64px] w-full  mt-6'>

            <button onClick={() => setToggle(true)} className='bg-[#6e707a] h-[40px] w-[176px] text-[16px] rounded-lg cursor-pointer '>Search for places</button>
            <button onClick={geoFindAPI} className='rounded-full bg-[#4b4d61] w-[40px] h-[40px] flex justify-center cursor-pointer '><img className='w-[25px] ' src="location.svg" alt="" /></button>
          </div>
          <div className='relative  w-full  h-[216px]  flex justify-center items-center'>
            <figure>
              <img className='absolute top-0 left-0  h-full opacity-10 w-[400px]' src="others/Cloud-background.png" alt="" />
            </figure>
            <figure className=' h-[80%] z-auto'><img className='object-cover h-full ' src={`./weather/${weatherImg}.png`} alt="" /></figure>
          </div>
          <p className=' text-[60px] lg:text-[80px] text-white my-[20px]'>{response.main.temp}  {units === "metric" ? "°C" : "°F"}</p>
          <p className='text-[30px] font-bold  ' >{response.weather[0].description}</p>
          <span className='flex w-[150px] justify-between my-[10px]' >
            <p>Today . {dateTime}</p>

          </span>

          <span className='flex w-[180px]  justify-center gap-2 my-[20px] items-center'>
            <figure className=''><img src="location_on.svg" alt="" /></figure>
            <p> {response.name}, {response.sys.country} </p>

          </span>

          <ModalSearch
            toggle={toggle}
            setToggle={setToggle}
            setSearch={setSearch}
          />
        </>

      }


    </div>
  )
}
