import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useIpFinder(url) {
    const [load, setload] = useState(false);
    const [failure, setfailure] = useState("");
    const [request, setrequest] = useState(null);

    async function getData() {
        try {
            setload(true)
            const {data} = await axios.get(url)
            
                setrequest(data)
                

           
            
       
            
            
        } catch (failure) {
            console.log(failure)
            setfailure(failure.message)
        }finally{
            setload(false)
        }
        
    }

    useEffect(()=>{
            getData()
            
        
        
    }, [url])

  return {
    load,
    failure,
    request
  }
}
