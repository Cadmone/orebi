import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../Header"
import Nav from '../Nav'
import Footer from '../Footer'

const RootLayout = () => {
  return (
   <>
   <Header/>
   <Nav/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default RootLayout