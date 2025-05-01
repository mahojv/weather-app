import React from 'react'
import ModalSearch from './ModalSearch'

export default function HeroSection({ response, loading, units }) {
  const weatherImg =  response !== null ?  response.weather[0].icon : '10d'

const fecha = response !== null ? response.dt : 1593561600 
  const date = new Date (fecha * 1000)

  const options = {
    weekday: 'long', month: 'long', day: 'numeric'
  };
  const dateTime = date.toLocaleDateString("en-US", options)

  return (
    <div className='bg-[#1e213a] h-screen flex flex-col justify-around items-center w-full  md:w-[50%]'>

      {loading &&

        <div className="flex items-center justify-center w-56 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      }

      {response !== null &&
        <>
          <div className='flex items-center justify-around h-[64px] w-full  mt-6'>

            <button className='bg-[#6e707a] h-[40px] w-[176px] text-[16px] rounded-lg cursor-pointer '>Search for places</button>
            <button className='rounded-full bg-[#4b4d61] w-[40px] h-[40px] flex justify-center cursor-pointer '><img className='w-[25px] ' src="location.svg" alt="" /></button>
          </div>
          <div className='relative  w-full  h-[216px]  flex justify-center items-center'>
            <figure>
              <img className='absolute top-0 left-0  h-full opacity-10 w-[400px]' src="others/Cloud-background.png" alt="" />
            </figure>
            <figure className=' h-[80%] z-auto'><img className='object-cover h-full ' src={`./weather/${weatherImg}.png`} alt="" /></figure>
          </div>
          <p className=' text-[60px] lg:text-[80px] text-white my-[20px]'>{response.main.temp}  { units==="metric"? "°C" : "°F" }</p>
          <p className='text-[30px] font-bold  ' >{response.weather[0].description}</p>
          <span className='flex w-[150px] justify-between my-[10px]' >
            <p>Today . {dateTime}</p>
            {/* <p>.  </p>
            <p></p> */}
          </span>

          <span className='flex w-[180px]  justify-center gap-2 my-[20px] items-center'>
            <figure className=''><img src="location_on.svg" alt="" /></figure>
            <p> {response.name} </p>

          </span>

          <ModalSearch />
        </>

      }


    </div>
  )
}
