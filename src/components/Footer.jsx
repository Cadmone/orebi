import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import logo1 from "../assets/logo.png"

const Footer = () => {
  return (
   <footer className=' bg-[#e4e1e1] mt-[106px]'>
    <Container>
        <div className="lg:flex">
           <div className=" pl-[50px] lg:pl-0  flex lg:w-[24%] justify-between">
            <div className=" py-[56px] w-[50%]">
                <h4 className=' text-base font-dm font-bold text-[#000] pb-[17px] '>MENU</h4>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Home</p>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Shop</p>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>About</p>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Contact</p>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Journal</p>
                <div className=" flex gap-x-4 pt-[65px]">
                    <a href="#"><FaSquareFacebook/></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
            </div>
            <div className=" py-[56px] w-[50%]">
                <h4 className=' text-base font-dm font-bold text-[#000] pb-[17px] '>SHOP</h4>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Category 1</p>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Category 2</p>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Category 3</p>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Category 4</p>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Category 5</p>
            </div>
            </div>
            <div className=" pl-[30px] lg:pl-0 flex lg:w-[46%] justify-between">
            <div className=" lg:py-[56px] w-[40%]">
                <h4 className=' text-base font-dm font-bold text-[#000] pb-[17px] '>HELP</h4>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Privacy Policy</p>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Terms & Conditions</p>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Special E-shop</p>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Shipping</p>
                <p className=' text-[14px] font-dm font-normal text-[#353535] pb-[7px]'>Secure Payments</p>
            </div>  
            <div className="  lg:py-[56px] w-[60%]">
                <h4 className=' w-[186px] text-base font-dm font-bold text-[#000] pb-[15px]'>(052) 611-5711
                company@domain.com</h4>
                <p className=' text-[14px] font-dm font-normal text-[#565656]'>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            </div>
            <div className="py-[56px]">
              <img className=' ' src={logo1} alt="" />
              <p className= ' w-[90%] lg:w-full pt-5 lg:pt-[211px] font-dm font-normal text-[14px] text-[#5e5d5d]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>  
            </div>
    </Container>
   </footer>
  )
}

export default Footer