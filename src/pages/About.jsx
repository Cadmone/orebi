import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import img17 from '../assets/img17.png'
import img18 from '../assets/img18.png'
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <section>
        <Container>
                <div className="">
                    <h2 className=' text-[49px] font-dm font-bold text-black pt-[124px]'>About</h2>
                    <p className=' text-base font-dm font-normal text-[#444141] '><Link to="/">Home</Link> / About</p>
                </div>
            <div className=" flex justify-between pt-[136px]">
                <img className='w-[48%]' src={img17} alt="" />
                <img className='w-[48%]' src={img18} alt="" />
            </div>
            <div className="">
                <h3 className=' text-[39px] font-dm font-normal text-black pt-[128px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h3>
            </div>
            <div className=" flex justify-between pt-[118px]">
                <div className=" w-[32%]">
                    <h4 className=' text-[25px] font-dm font-bold text-black'>Our Vision</h4>
                    <p className=' text-[14px] font-dm font-normal text-[#3b3939]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className=" w-[32%]">
                    <h4 className=' text-[25px] font-dm font-bold text-black'>Our Story</h4>
                    <p className=' text-[14px] font-dm font-normal text-[#3b3939]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
                </div>
                <div className=" w-[32%]">
                    <h4 className=' text-[25px] font-dm font-bold text-black'>Our Brands</h4>
                    <p className=' text-[14px] font-dm font-normal text-[#3b3939]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default About