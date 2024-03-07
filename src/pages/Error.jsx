import React from 'react'
import Container from '../components/Container'
import { FaSearch } from "react-icons/fa";

const Error = () => {
  return (
    <section>
        <Container>
            <div className="">
                <h1 className=' text-[200px] font-bold font-dm pt-[81px] pb-0'>404</h1>
                <p className=' text-base font-normal font-dm pt-3 w-[644px] text-[#4c4b4b] pb-[50px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
            </div>
            <div className=" relative lg:left-0 left-8 sm:left-14 w-[20%] pb-[60px]">
               <input type=" search" placeholder='search.......' className=' w-full border-2 border-[#dcd9d9] outline-none py-2 px-4 text-[#060606] ' />
               <div className=" absolute top-4 right-5">
               <FaSearch />
               </div>
               </div>
               <a className=' py-[16px] px-[50px] bg-black text-white hover:bg-white hover:text-black  ' href="#">Back to Home</a>
        </Container>
    </section>
  )
}

export default Error