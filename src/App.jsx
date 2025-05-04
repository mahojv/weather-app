import React, { useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import ContentSection from './components/ContentSection'
import useData from './hooks/useData'
import useIpFinder from './hooks/useIpFinder'

export default function App() {

  const [units, setUnits] = useState("metric")
  const [search, setSearch] = useState("q=london")
  const url2 = '/currentWeather.json'
  const url = `https://api.openweathermap.org/data/2.5/weather?${search}&APPID=f3a2b561d6ca422f57915176a42486d4&units=${units}`
  const { loading, error, response } = useData(url)


  const { load, failure, request } = useIpFinder("https://ipinfo.io/json?token=004de71ef069cb")

  useEffect(() => {
    setTimeout(() => {
      if (!load && request?.postal) {
        setSearch(`q=${request.postal}`)
      }

    }, 1000);

  }, [load, request])

  return (
    <div className='flex flex-col md:flex-row'>


      <HeroSection
        response={response}
        loading={loading}
        units={units}
        setSearch={setSearch}
        search={search}
      />
      <ContentSection
        rsCurrent={response}
        load={loading}
        units={units}
        setUnits={setUnits}
        search={search}

      />

    </div>
  )
}
