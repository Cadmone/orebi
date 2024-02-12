import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Banner from '../components/Banner'
import Saler from '../components/Saler'
import Newarrivals from '../components/Newarrival'
import Basic from '../components/Basic'
import Specialoffers from '../components/Specialoffers'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
     <Header/>
     <Nav/>
     <Banner/>
     <Saler/>
     <Newarrivals/>
     <Basic/>
     <Specialoffers/>
     <Footer/>
    </>
  )
}

export default Home