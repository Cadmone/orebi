import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';

const Header = () => {
  let [show, setshow] = useState(false)

  let jun =() =>{
    setshow(!show)
  }


  return (
    <section className=' py-[40px]'>
    <Container>
      <Flex className=' justify-between'>
      <div className=" w-[20%]">
        <img src={logo} alt="" />
      </div>
      <div className=" w-[50%] z-50">
       <ul className={`lg:flex lg:gap-x-9 absolute top-0 left-0 lg:static ${show ? "top-[80px] bg-[#dcd7d7] left-0 w-full text-center py-4" : "top-[-200px] "}`}>
        <li className='py-2 font-dm text-[16px] font-normal text-[#3f3e3e] hover:text-[rgb(1,1,1)] hover:font-medium'> <Link to="/">Home</Link></li>
        <li className='py-2 font-dm text-[16px] font-normal text-[#3f3e3e] hover:text-[rgb(1,1,1)] hover:font-medium'> <Link to="/product">Shop</Link></li>
        <li className='py-2 font-dm text-[16px] font-normal text-[#3f3e3e] hover:text-[rgb(1,1,1)] hover:font-medium'><Link to="/About">About</Link></li>
        <li className='py-2 font-dm text-[16px] font-normal text-[#3f3e3e] hover:text-[rgb(1,1,1)] hover:font-medium '><Link to="/Contacts">Contacts</Link></li>
        <li className='py-2 font-dm text-[16px] font-normal text-[#3f3e3e] hover:text-[rgb(1,1,1)] hover:font-medium'>Journal</li>
       </ul>
      </div>
      <div className=" lg:hidden pr-5" onClick={jun}>
        {show == true ? <ImCross/> : <FaBars/>}
      </div>
      </Flex>
    </Container>
  </section>
  )
}

export default Header