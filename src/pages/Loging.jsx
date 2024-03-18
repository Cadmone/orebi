import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom';


const Loging = () => {
  return (
    <Container>
        <div className="">
            <h2 className='text-[49px] font-dm font-bold text-black pt-[124px]'>Login</h2>
            <p className=' text-base font-dm font-normal text-[#444141] '><Link to="/">Home</Link>   /  Login</p>
        </div>
        <div className="">
            <p className=' text-[16px] font-dm font-normal text-[#706e6e] w-[644px] pt-[127px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        </div>



        <div className=" pt-[57px]">
      <h2 className='font-dm text-[39px] font-bold text-bl leading-[50.78px] '>Returning Customer</h2>
      <div className="flex items-center justify-start flex-wrap pt-[42px] gap-x-8">
        <div className=" w-15%"> 
         <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Email address</h3>
         <input type="text"  class=" lg:w-[300px]  border-1 border-[#FFFFFF]  outline-1 h-[40px]      "  maxlength="300" name="inputData"   placeholder='company@domain.com'></input> 
         </div>
        <div className=" ">
        <h3 className='font-dm text-[16px] font-bold text-bl leading-[23px] '  >Password</h3>
        <input type="password"  class=" lg:w-[300px] w-auto border-1 border-[#FFFFFF]  outline-1  h-[40px]  "  maxlength="300" name="inputData"   placeholder='password'></input> 
      


        </div>
      </div>
      <div className='pt-[29px]' >
      <h3 class="py-[16px] px-[77px] bg-[#FFFFFF] font-dm text-[16px] text-bl border-[1px] border-[#2B2B2B] inline-block font-bold cursor-pointer text-black">Login</h3>
      </div>
        </div>
        <div className="pt-[96px]">
        <h2 className='font-dm text-[39px] font-bold text-bl leading-[50.78px] '>New Customer</h2>
        <p className='text-grr text-[16px] leading-[30px] font-dm font-normal lg:w-[644px] w-auto pt-[38px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
        <div className='pt-[29px]' >
      <h3 class="py-[16px] px-[66px] bg-[#000] font-dm text-[16px] text-[#ffffff] border-[1px] border-[#2B2B2B] inline-block cursor-pointer font-bold">   <Link to="/Signup" > Continue </Link></h3>
      </div>
        </div>
    </Container>
  )
}

export default Loging