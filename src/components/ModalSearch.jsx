import React from 'react'

export default function ModalSearch() {
  return (
    <div className='fixed hidden bg-[#1e213a] w-full md:w-[32.7%] h-screen'>

        <div className='flex justify-end w-full pt-3 pr-10'>

        <button ><img src="close.svg" alt="" /></button>
        </div>
        
        <div className='flex justify-around mt-5'>

        <div className='flex  justify-start  items-center gap-1.5  pl-[20px] w-[200px]  rounded-2xl  h-[40px]'>
          <img className='size-5' src="search.svg" alt="" />
          
          <input type="text" name="" id="" placeholder='Search location' />
        </div>

        <button className='w-[100px] bg-[#3c47e9] text-white h-[40px]   rounded-lg cursor-pointer' >Search</button>
        </div>

      </div>
  )
}
