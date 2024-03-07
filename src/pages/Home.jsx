import React from 'react'
import Banner from '../components/Banner'
import Saler from '../components/Saler'
import Newarrivals from '../components/Newarrival'
import Basic from '../components/Basic'
import Specialoffers from '../components/Specialoffers'


const Home = () => {
  return (
    <>
     <Banner/>
     <Saler/>
     <Newarrivals/>
     <Basic/>
     <Specialoffers/>
    </>
  )
}

export default Home