import React from 'react'
import banner from "../assets/banner.png"
import banner1 from "../assets/banner1.jpg"
import banner2 from "../assets/banner2.jpg"
import Slider from "react-slick";


const Banner = () => {
    var settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
                position:'absolute',
                top:'40%',
                left:'170px',
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "30px",
                color: "#000",
                borderRight: "5px #ffffff solid",
                padding:"15px 0"
              }}
            >
              0{i + 1}
            </div>
          )
      };
  return (
    <section className='  '>
        <Slider {...settings}>
        <div className="">
            <img className=' h-[250px] lg:h-[600px] w-full' src={banner} alt="" />
        </div>
        <div className="">
            <img className='h-[250px] lg:h-[600px]  w-full' src={banner1} alt="" />
        </div>
        <div className="">
            <img className='h-[250px] lg:h-[600px]  w-full' src={banner2} alt="" />
        </div>
        </Slider>
        
    </section>
  )
}

export default Banner