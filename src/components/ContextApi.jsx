import React, { useState,useEffect } from 'react'
import { createContext } from 'react'
import axios from 'axios';
let Apidata = createContext()
const ContextApi = ({children}) => {
  let [info, setinfo] = useState([])
  useEffect(()=>{
    let getdata = () =>{
      axios.get("https://dummyjson.com/products").then((respone)=>{
        setinfo(respone.data.products);
      })
    }
    getdata()
  },[])
  return (
    <>
     <Apidata.Provider value={info}>{children}</Apidata.Provider>
    </> 
  )
}

export{ContextApi,Apidata}