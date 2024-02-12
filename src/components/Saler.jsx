import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { FaCarSide } from "react-icons/fa";
import { HiArrowPath } from "react-icons/hi2";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

const Saler = () => {
  return (
    <section className=' pt-5 bg-[#rgba(255, 255, 255, 1)]'>
        <Container>
            <div className=" lg:pl-0 pl-[100px] sm:pl-0 sm:flex sm:justify-between lg:flex lg:justify-between">

            
                <div className=" flex items-center   ">
                    <h1 className=' text-2xl font-bold'>2</h1>
                    <p className=' pl-3 text-base font-normal font-dm text-black'>Two years warranty</p>
                </div>
                <div className="flex items-center">
                  <FaCarSide className=' text-2xl font-bold'/>
                  <p className=' pl-3 text-base font-normal font-dm text-black'>Free shipping</p>
                </div>
                <div className="flex items-center">
                  <HiArrowPath className=' text-2xl font-bold'/>
                  <p className=' pl-3 text-base font-normal font-dm text-black'>Return policy in 30 days</p>
                </div>
                </div>
            
            <div className=" pt-[174px]">
            <div className=" flex justify-between">
                    <div className=" w-[48%]">
                        <img className=' w-full' src={img1} alt="" />
                    </div>
                    <div className="w-[48%]">
                        <div className="">
                        <img className=' w-full' src={img2} alt="" />
                        </div>
                        <div className=" mt-8">
                        <img className=' w-full' src={img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Saler