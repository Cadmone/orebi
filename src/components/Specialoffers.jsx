import React from 'react'
import Container from './Container'
import Flex from './Flex'
import img13 from "../assets/img13.png"
import img14 from "../assets/img14.png"
import img15 from "../assets/img15.png"
import img16 from "../assets/img16.png"

const Specialoffers = () => {
  return (
    <section>
        <Container>
            <div className="">
                <h2 className=' pt-[128px] text-[39px] font-dm font-bold text-[#000]'>Special Offers</h2>
            </div>
          <Flex className=" justify-between"> 
            <div className=" sm:pl-[25%] lg:pl-0 pt-[48px]">
             <div className=" relative">
                <img src={img13} alt="" />
                <a className=' absolute top-[20px] left-[20px] py-[12px] px-[25px] bg-[#000] text-white ' href="#">New</a>
             </div>
             <div className=" flex justify-between">
                        <div className="">
                            <h4 className=' text-xl font-dm font-bold text-[#000] pt-[15px]'>Basic Crew Neck Tee</h4>
                            <p  className=' pt-6 text-base font-dm font-normal text-[#353434] '>Black</p>
                        </div>
                        <p  className=' text-base font-dm font-normal text-[#353434] pt-[15px] '>$44.00</p>
                    </div>
            </div>
            <div className=" sm:pl-[25%] lg:pl-0 pt-[48px]">
             <div className=" relative">
                <img src={img14} alt="" />
                <a className=' absolute top-[20px] left-[20px] py-[12px] px-[25px] bg-[#000] text-white ' href="#">New</a>
             </div>
             <div className=" flex justify-between">
                        <div className="">
                            <h4 className=' text-xl font-dm font-bold text-[#000] pt-[15px]'>Basic Crew Neck Tee</h4>
                            <p  className=' pt-6 text-base font-dm font-normal text-[#353434] '>Black</p>
                        </div>
                        <p  className=' text-base font-dm font-normal text-[#353434] pt-[15px] '>$44.00</p>
                    </div>
            </div>
            <div className=" sm:pl-[25%] lg:pl-0 pt-[48px]">
             <div className=" relative">
                <img src={img15} alt="" />
                <a className=' absolute top-[20px] left-[20px] py-[12px] px-[25px] bg-[#000] text-white ' href="#">New</a>
             </div>
             <div className=" flex justify-between">
                        <div className="">
                            <h4 className=' text-xl font-dm font-bold text-[#000] pt-[15px]'>Basic Crew Neck Tee</h4>
                            <p  className=' pt-6 text-base font-dm font-normal text-[#353434] '>Black</p>
                        </div>
                        <p  className=' text-base font-dm font-normal text-[#353434] pt-[15px] '>$44.00</p>
                    </div>
            </div>
            <div className=" sm:pl-[25%] lg:pl-0 pt-[48px]">
             <div className=" relative">
                <img src={img16} alt="" />
                <a className=' absolute top-[20px] left-[20px] py-[12px] px-[25px] bg-[#000] text-white ' href="#">New</a>
             </div>
             <div className=" flex justify-between">
                        <div className="">
                            <h4 className=' text-xl font-dm font-bold text-[#000] pt-[15px]'>Basic Crew Neck Tee</h4>
                            <p  className=' pt-6 text-base font-dm font-normal text-[#353434] '>Black</p>
                        </div>
                        <p  className=' text-base font-dm font-normal text-[#353434] pt-[15px] '>$44.00</p>
                    </div>
            </div>
          </Flex>
        </Container>
    </section>
  )
}

export default Specialoffers