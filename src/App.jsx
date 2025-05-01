import React, { useState } from 'react'
import HeroSection from './components/HeroSection'
import ContentSection from './components/ContentSection'
import useData from './hooks/useData'

export default function App() {

  const [units, setUnits] = useState("metric")
  const [search,setSearch] = useState("london")

  const url2 = '/currentWeather.json'
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search},uk&APPID=f3a2b561d6ca422f57915176a42486d4&units=${units}`
  const { loading, error, response } = useData(url)

  return (
    <div className='flex flex-col md:flex-row'>


      <HeroSection
        response={response}
        loading={loading} 
        units ={units}
        />
      <ContentSection
        rsCurrent={response}
        load={loading} 
        units ={units}
        setUnits={setUnits}
        search={search}
        
        />




    </div>
  )
}
