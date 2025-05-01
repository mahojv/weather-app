import React from 'react'
import CardWeather from './CardWeather'
import useData from '../hooks/useData'
import { obtainDate } from '../js/obtainDate'

export default function CardContainer({search, units}) {
  const url2 = '/history_bulk.json'

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=f3a2b561d6ca422f57915176a42486d4&units=${units}`

  const { loading, error, response } = useData(url)
  const today = Date.now()
  const fecha = obtainDate(today)
  // const prueba= obtainDate((response.list[0].dt * 1000))

  const newArray = []


  if (!loading) {//quitar al implementar


    response?.list.reduce((acum, weatherDate) => {


      const dateAnalized = obtainDate(weatherDate.dt * 1000)

      if (dateAnalized === fecha) {
        console.log("no aplica jaja")
        return acum
      }

      if (!acum.includes(dateAnalized)) {
        acum.push(dateAnalized)
        newArray.push(weatherDate)
      }
      return acum

    }, [])
  }

  return (
    <div role='card-container' className=' md:mt-15 grid grid-cols-2 md:flex md:flex-wrap  mx-auto  justify-items-center gap-5   mt-[10px] '>

      {
        newArray.map((weatherDate,index ) => {
          const { temp, temp_max, temp_min } = weatherDate.main
          const { icon } = weatherDate.weather[0]

          
          return(
            < CardWeather
            index={index}
            key = {weatherDate.dt}
            dt = {weatherDate.dt}
            temp = {temp}
            temp_max={temp_max}
            temp_min= {temp_min}
            icon={icon}
            units={units}

            />
          )
  })
      }
    </div>
  )
}
