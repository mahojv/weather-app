import React from 'react'
import CardContainer from './CardContainer'

export default function ContentSection({ rsCurrent, load, units, setUnits,search }) {

// console.log(typeof(rsCurrent.main.humidity))

console.log(units)

  return (
    <>
      {load &&

        <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }

          <div className='bg-[#100e1d]  flex flex-col items-center justify-around  w-full md:px-[50px]  px-3 md:h-screen md:overflow-y-auto '>
      {rsCurrent !== null &&
        <>
            <div className=' w-full flex gap-5 items-center justify-end px-15 h-[64px] mt-[30px] '>
              <button onClick={()=> setUnits("metric")} className={`w-[40px] h-[40px] ${units==="metric"? "bg-btnSelected text-btnText-selected" : "bg-btnUnselected text-btnText-unselected" }  font-bold rounded-full cursor-pointer `}  ><p>°C</p></button>
              <button onClick={()=> setUnits("imperial")} className={`w-[40px] h-[40px] ${units==="imperial"? "bg-btnSelected text-btnText-selected":"bg-btnUnselected text-btnText-unselected" }  font-bold rounded-full cursor-pointer `}><p>°F</p></button>

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
                    <p>NNW</p>
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
                      <div className="bg-[#ffec65] h-2.5 rounded-full"  style={{ width: `${rsCurrent.main.humidity}%` }} ></div>
                    </div>
                    <div className={`flex  w-[75%] justify-end `}>
                      <p>%</p>
                    </div>
                  </div>




                </div>

                <div className=' bg-[#1e213a] w-[330px] md:w-[300px] lg:w-[300px] xl:w-[360px] xl:h-[210px] h-[150px] flex flex-col items-center justify-between   py-3' >
                  <p>Visibility</p>
                  <span className='  flex gap-2 items-center justify-center '>
                    <p className=' text-[60px] font-bold text-white ' >{(rsCurrent.visibility)/1000}</p>
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
              <h4 className='text-center' >Created by <strong> Mojav.Dev </strong> - devChallenges.io</h4>
            </footer>

          </div>

    </>
  )
}
