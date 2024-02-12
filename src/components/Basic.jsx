import React from 'react'
import Container from './Container'
import Flex from './Flex'
import img8 from "../assets/img8.png"
import img9 from "../assets/img9.png"
import img10 from "../assets/img10.png"
import img11 from "../assets/img11.png"
import img12 from "../assets/img12.png"

const Basic = () => {
  return (
    <section>
        <Container>
            <div className=" lg:flex justify-between">
                <div className=" sm:pl-[25%] lg:pl-0 pt-3 lg:pt-[217px] ">
                    <div className=" relative">
                        <img className='' src={img8} alt="" />
                        <a className=' absolute top-[20px] left-[20px] py-[12px] px-[25px] bg-[#000] text-white ' href="#">New</a>
                    </div>
                    <div className=" flex justify-between">
                        <div className="">
                            <h4 className=' text-xl font-dm font-bold text-[#000]'>Basic Crew Neck Tee</h4>
                            <p  className=' pt-6 text-base font-dm font-normal text-[#353434] '>Black</p>
                        </div>
                        <p  className=' text-base font-dm font-normal text-[#353434] '>$44.00</p>
                    </div>
                </div>
                <div className=" sm:pl-[25%] lg:pl-0 pt-3 lg:pt-[217px]">
                    <div className=" relative">
                        <img className='' src={img9} alt="" />
                        <a className=' absolute top-[20px] left-[20px] py-[12px] px-[25px] bg-[#000] text-white ' href="#">New</a>
                    </div>
                    <div className=" flex justify-between">
                        <div className="">
                            <h4 className=' text-xl font-dm font-bold text-[#000]'>Basic Crew Neck Tee</h4>
                            <p  className=' pt-6 text-base font-dm font-normal text-[#353434] '>Black</p>
                        </div>
                        <p  className=' text-base font-dm font-normal text-[#353434] '>$44.00</p>
                    </div>
                </div>
                
                <div className=" sm:pl-[25%] lg:pl-0 pt-3 lg:pt-[217px]">
                    <div className=" relative">
                        <img className='' src={img10} alt="" />
                        <a className=' absolute top-[20px] left-[20px] py-[12px] px-[25px] bg-[#000] text-white ' href="#">New</a>
                    </div>
                    <div className=" flex justify-between">
                        <div className="">
                            <h4 className=' text-xl font-dm font-bold text-[#000]'>Basic Crew Neck Tee</h4>
                            <p  className=' pt-6 text-base font-dm font-normal text-[#353434] '>Black</p>
                        </div>
                        <p  className=' text-base font-dm font-normal text-[#353434] '>$44.00</p>
                    </div>
                </div>
                <div className=" sm:pl-[25%] lg:pl-0 pt-3 lg:pt-[217px]">
                    <div className=" relative">
                        <img className='' src={img11} alt="" />
                        <a className=' absolute top-[20px] left-[20px] py-[12px] px-[25px] bg-[#000] text-white ' href="#">New</a>
                    </div>
                    <div className=" flex justify-between">
                        <div className="">
                            <h4 className=' text-xl font-dm font-bold text-[#000]'>Basic Crew Neck Tee</h4>
                            <p  className=' pt-6 text-base font-dm font-normal text-[#353434] '>Black</p>
                        </div>
                        <p  className=' text-base font-dm font-normal text-[#353434] '>$44.00</p>
                    </div>
                </div>
                </div>
            
            <div className=" pt-4  lg:pt-[130px]">
                <img src={img12} alt="" />
            </div>
        </Container>
    </section>
  )
}

export default Basic