import React, { useEffect } from 'react'
import Container from './Container'
import { FaHeart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import axios from 'axios';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useState } from 'react';
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className='next'
        onClick={onClick}
      ><FaLongArrowAltLeft className='inline-block text-white'/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div className='prve'
        onClick={onClick}
        ><FaLongArrowAltRight className='inline-block  text-white'/></div>
    );
  }

const Newarrivals = () => {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          
        ]
      };

    let[info,setinfo] = useState([])

    useEffect(()=>{
      let getdata = () =>{
        axios.get("https://dummyjson.com/products").then((respone)=>{
            setinfo(respone.data.products);
        })
      }
      getdata()
    },[])
  return (
    <section>
        <Container>
            <h2 className=' pt-[128px] text-[39px] font-dm font-bold'>New Arrivals</h2>
            <Slider {...settings}>
           
           {info.map((item)=>(
                      <div className='!w-[95%] pt-6 '>
                    <div className=" relative group">
                        <img className='h-[300px] w-full' src={item.thumbnail} alt="" />
                        <div className=" absolute bottom-0 left-0 overflow-hidden bg-[#ffff] h-0 w-[100%] duration-300 ease-in group-hover:h-[200px]">
                        <div className=" flex items-center justify-end h-full">
                        <ul className=' px-3 '>
                            <li className='flex items-center gap-x-3 text-[16px] font-dm font-normal justify-end'>Add to Wish List <FaHeart /></li>
                            <li className='flex items-center gap-x-3 text-[16px] font-dm font-normal justify-end pt-2'>Compare <IoGitCompareSharp /></li>
                            <li className='flex items-center gap-x-3 text-[16px] font-dm font-normal justify-end pt-2'>Add to Cart <FaShoppingCart/></li>
                        </ul>
                     </div>
                    </div>
                    </div>
                     <div className=" flex justify-between pt-3">
                        <h3 className=' text-[18px] font-dm font-bold text-black'>{item.title}</h3>
                        <p className=' text-[14px] font-dm font-normal text-[#313131]'>{item.price}</p>
                     </div>
                    </div>   
                ))}
            </Slider>
        </Container>
    </section> 
  )
}

export default Newarrivals