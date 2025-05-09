import React, { useState } from 'react'
import useData from '../hooks/useData'

export default function ModalSearch({ toggle, setToggle, setSearch }) {


  const [searchValue, setSearchValue] = useState("")
  const [quickSearch, setQuickSearch] = useState("")

  function handleSearch(e) {
    e.preventDefault()
    setSearchValue(quickSearch)
  }
  function searchFunction(e) {
    setToggle(false)
    setSearch(`q=${e.target.textContent}`)
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  }
  const url2 = '/cities.json'
  const { loading, error, response } = useData(url2)


  let arrayFiltered = response?.filter((item) => {

    return Object.values(item).some((ev) => {

      if (typeof ev === "string") {
        return (
          ev.toLowerCase().includes(searchValue.toLowerCase()))
      }
      return false
    })

  })

  return (
    <div className={`fixed  ${toggle ? 'block' : 'hidden'} z-10 bg-[#1e213a] w-full md:w-[32.7%] h-screen`}>

      <div className='flex justify-end w-full pt-3 pr-10'>

        <button onClick={() => setToggle(false)} className='cursor-pointer' ><img src="close.svg" alt="" /></button>
      </div>

      <div className='flex justify-around mt-5 px-3 gap-1'>

        <div className='flex  justify-start  items-center px-[10px] gap-1.5  w-[180px]  rounded-lg  h-[40px] border'>
          <img className='size-5' src="search.svg" alt="" />

          <input onKeyDown={handleKeyDown} onChange={(e) => { setQuickSearch(e.target.value) }} value={quickSearch} type="text" name="" id="" placeholder='Search location' className='w-full' />
        </div>

        <button onClick={handleSearch} className='w-[100px] bg-[#3c47e9] text-white h-[40px] hover:animate-pulse  rounded-lg cursor-pointer' >Search</button>
      </div>

      <div className='w-full h-screen  flex flex-col  items-center mt-6 gap-4'>

        {
          arrayFiltered?.map((item, index) => {

            if (index < 8) {
              const { id, name, country } = item
              return (
                <p className=' w-[80%] h-[45px] min-h-fit border rounded-lg flex justify-center items-center hover:text-btnText-unselected hover:bg-btnUnselected hover:font-bold cursor-pointer  '
                  key={id} onClick={searchFunction} >{name}, {country}</p>
              )
            }
          })
        }

      </div>

    </div>
  )
}
