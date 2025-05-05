import React from 'react'
import CardContainer from './CardContainer'
import { windDirection } from '../js/windDirection'

export default function ContentSection({ rsCurrent, load, units, setUnits, search, toggle }) {
  const windDir = windDirection(rsCurrent?.wind.deg)
  // ${toggle ? 'block' : 'hidden'}
  return (
    <>
      <div className={`bg-[#100e1d]  flex flex-col items-center justify-around  w-full md:px-[50px]  px-3 md:h-screen md:overflow-y-auto  `}>
        {rsCurrent !== null &&
          <>
            <div className=' w-full flex gap-5 items-center justify-end px-15 h-[64px] mt-[30px] '>
              <button onClick={() => setUnits("metric")} className={`w-[40px] h-[40px] ${units === "metric" ? "bg-btnSelected text-btnText-selected" : "bg-btnUnselected text-btnText-unselected"}  font-bold rounded-full cursor-pointer `}  ><p>°C</p></button>
              <button onClick={() => setUnits("imperial")} className={`w-[40px] h-[40px] ${units === "imperial" ? "bg-btnSelected text-btnText-selected" : "bg-btnUnselected text-btnText-unselected"}  font-bold rounded-full cursor-pointer `}><p>°F</p></button>

            </div>

            <CardContainer
              search={search}
              units={units}
            />

            <div className='flex flex-col  mt-7 md:mt-15 w-full items-center  gap-5  '>
              <div className='flex justify-start  w-full'>

                <h2 className='font-bold text-2xl lg:text-[36px] px-2 text-white'>Today's Hightlights</h2>
              </div>

              <div className='flex flex-col  lg:grid lg:grid-cols-2 lg:justify-items-center  mt-7 md:mt-5 w-full items-center text-[16px] lg:text-[24px]   gap-5' >

                <div className=' bg-[#1e213a] w-[330px] md:w-[300px] lg:w-[300px] xl:w-[360px] xl:h-[210px] h-[200px] flex flex-col  items-center justify-between    py-3' >
                  <p>Wind status</p>
                  <span className='  flex gap-2 items-center justify-center '>
                    <p className=' text-[60px] font-bold text-white ' >{rsCurrent.wind.speed}</p>
                    <p className=' text-[36px] '>ms</p>
                  </span>
                  <span className=' flex  justify-center items-center gap-2.5 ' >
                    <div className="bg-btnUnselected rounded-full w-[30px] h-[30px] flex items-center justify-center " style={{ transform: `rotate(${rsCurrent.wind.deg}deg)` }} >

                      <figure className='w-[20px]  ' ><img src="navigation.svg" alt="" /></figure>
                    </div>
                    <p>{windDir}</p>
                  </span>
                </div>

                <div className=' bg-[#1e213a] w-[330px] md:w-[300px]  lg:w-[300px] xl:w-[360px] xl:h-[210px]  h-[200px] flex flex-col items-center justify-between   py-3' >
                  <p>Humidity</p>
                  <span className='  flex gap-2 items-center justify-center '>
                    <p className=' text-[60px] font-bold text-white ' >{rsCurrent.main.humidity} </p>
                    <p className=' text-[36px] '>%</p>
                  </span>


                  <div className='w-full flex flex-col items-center justify-center gap-0.5'>

                    <div className='w-[75%] flex justify-between lg:text-[16px] '>
                      <p>0</p>
                      <p>50</p>
                      <p>100</p>
                    </div>
                    <div className="w-[75%] bg-gray-200 rounded-full h-2.5 dark:bg-gray-200">
                      <div className="bg-[#ffec65] h-2.5 rounded-full" style={{ width: `${rsCurrent.main.humidity}%` }} ></div>
                    </div>
                    <div className={`flex  w-[75%] justify-end `}>
                      <p>%</p>
                    </div>
                  </div>




                </div>

                <div className=' bg-[#1e213a] w-[330px] md:w-[300px] lg:w-[300px] xl:w-[360px] xl:h-[210px] h-[150px] flex flex-col items-center justify-between   py-3' >
                  <p>Visibility</p>
                  <span className='  flex gap-2 items-center justify-center '>
                    <p className=' text-[60px] font-bold text-white ' >{(rsCurrent.visibility) / 1000}</p>
                    <p className=' text-[36px] '>km</p>
                  </span>

                </div>

                <div className=' bg-[#1e213a] w-[330px] md:w-[300px] lg:w-[300px] xl:w-[360px] xl:h-[210px] h-[150px] flex flex-col items-center justify-between   py-3' >
                  <p>Air Pressure</p>
                  <span className='  flex gap-2 items-center justify-center '>
                    <p className=' text-[60px] font-bold text-white ' >{rsCurrent.main.pressure}</p>
                    <p className=' text-[36px] '>mb</p>
                  </span>

                </div>

              </div>


            </div>
          </>
        }

        <footer className='bg-[#100e1d] w-full flex text-lg py-5 justify-center items-center'> 
        <figure className='w-[80px]'><img src="../mojav.png" alt="" /></figure>
          <h4 className='text-center' >Created by <strong> Mojav.Dev </strong> - devChallenges.io</h4>
        </footer>

      </div>

    </>
  )
}
