import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
    let data = useSelector((state)=>state.single.cartItem)
    let [cartshow, setcartshow] = useState (false)
    let [cartacc, setcartacc] = useState (false)
    let [cartass, setcartass] = useState (false)
    let caerjun = useRef()
    let caertjun = useRef()
    let caertmah = useRef()

    
    useEffect(()=>{
     document.addEventListener("click", (e)=>{
        if(caerjun.current.contains(e.target) ==true){
            setcartshow(!cartshow)
        }else{
            setcartshow(false)
        }
        if(caertjun.current.contains(e.target) ==true){
            setcartacc(!cartacc)
        }else{
            setcartacc(false) 
        }
        if(caertmah.current.contains(e.target) ==true){
            setcartass(!cartass)
        }else{
            setcartass(false) 
        }
     })
    },[cartshow,cartacc,cartass])

  return (
    <section className=' bg-[#d4d1d1] py-4'>
        <Container>
            <Flex className="items-center ">

            <div className=" w-[50%] lg:w-1/4 relative mt-[-00px] lg:mt-0">
            <div className=" flex items-center" ref={caerjun}>
            <RiBarChartHorizontalLine className=' text-lg' />
                <p className=' pl-4 text-lg font-dm font-medium'>Shop by Category</p>
            </div>
            {cartshow && 
            <div className=" bg-[#222] absolute top-10 left-0 lg:w-[60%] z-50">
            <ul>
                <li className=' text-[#777676] py-2 pl-3 text-base font-dm font-medium hover:text-white hover:pl-7 duration-300 ease-in'>Accesories</li>
                <li className=' text-[#777676] py-2 pl-3 text-base font-dm font-medium hover:text-white hover:pl-7 duration-300 ease-in'>Furniture</li>
                <li className=' text-[#777676] py-2 pl-3 text-base font-dm font-medium hover:text-white hover:pl-7 duration-300 ease-in'>Electronics</li>
                <li className=' text-[#777676] py-2 pl-3 text-base font-dm font-medium hover:text-white hover:pl-7 duration-300 ease-in'>Clothes</li>
                <li className=' text-[#777676] py-2 pl-3 text-base font-dm font-medium hover:text-white hover:pl-7 duration-300 ease-in'>Bags</li>
                <li className=' text-[#777676] py-2 pl-3 text-base font-dm font-medium hover:text-white hover:pl-7 duration-300 ease-in'>Home appliances</li>
            </ul>
             </div>
            }
            </div>
            <div className=" w-[80%] lg:w-1/2 mt-[20px] lg:mt-0 ">
               <div className=" relative lg:left-0 left-8 sm:left-14">
               <input type=" search" placeholder='search.......' className=' w-full border-2 border-[#000] outline-none py-2 px-4 text-[#060606] ' />
               <div className=" absolute top-4 right-5">
               <FaSearch />
               </div>
               </div>
               
            </div>
            <div className="w-[50%] lg:w-1/4 mt-[-150px] lg:ml-0 ml-[70%] sm:ml-[80%] lg:mt-0 ">
                <div className="flex pl-[20px] lg:justify-end relative">
                <div className=" flex pr-[15px]" ref={caertjun}>
                  <IoPerson/>
                  <MdOutlineArrowDropDown />
                </div>
                {cartacc &&
                <div className=" bg-[#222] w-[120%] lg:w-[40%] absolute top-7 lg:left-[300px] left-[-50px] lg:right-0 z-50">
                <ul>
                    <Link to="/Myaccount">
                    <li className=' text-[#777676] py-2 pl-3 text-base font-dm font-medium hover:text-white hover:pl-7 duration-300 ease-in'><a > My Account</a></li></Link>
                    <Link to="/Loging">
                    <li className=' text-[#777676] py-2 pl-3 text-base font-dm font-medium hover:text-white hover:pl-7 duration-300 ease-in' >Loging</li>
                    </Link>
                </ul>
            </div>
                }
                <div className=" relative" ref={caertmah}>
                 <FaShoppingCart/>
                </div>
                {cartass && 
                
                    <div className=" bg-[#222] w-full absolute top-10 left-0 z-50" >
                        {data.map((itme)=>(
                            <div className=" py-6">
                            <div className="flex items-center justify-between px-[10px]">
                                <div className=""> <img src={itme.thumbnail} className='h-[70px] w-[100px] ' alt="" /></div>
                                <div className="">
                                    <p className=' text-[#fff] font-dm text-base font-medium'>{itme.title} </p>
                                    <p className=' text-[#fff] font-dm text-base font-medium'>${itme.price}</p>
                                </div>
                                <div className=" text-white">
                                <ImCross />
                                </div>
                            </div>
                            <div className="">
                                <div className=" pt-7 pl-[15px]">
                                    <p className=' text-white font-dm font-medium text-lg'>Subtotal: $44.00</p>
                                </div>
                                <div className=" flex justify-between pt-9 px-4 py-4 ">
                                    <Link to="/Cart">
                                <a className=' py-[16px] mt-[50px] px-[40px] text-white font-dm font-medium text-base border-[#fff] border-2 hover:bg-[#fff] hover:text-black' >View Cart</a>
                                </Link>
                                <Link to="/Checkout">
                                <a className=' py-[16px] px-[40px] text-white font-dm font-medium text-base border-[#fff] border-2 hover:bg-[#fff] hover:text-black'>Checkout</a>
                                </Link>
                                </div>
                            </div>
                            </div>
                        ))}
                    
                   </div>
                
                
                   }
                </div>
            </div> 
            </Flex>
        </Container>
    </section>
  )
}

export default Nav