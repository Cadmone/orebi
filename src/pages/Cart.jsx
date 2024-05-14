import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import { FaPlus , FaMinus, FaCaretDown } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux';
import { decrmentproduct, incrementproduct, removeproduct } from '../assets/slice/singleSlice';




const Cart = () => {
  let data =useSelector((state) => state.single.cartItem) 
  let dispatch =useDispatch()
  
  const {totalprice, totalquantity} = data.reduce((acc, itme)=>{
   acc.totalprice += itme.price * itme.qun
   acc.totalquantity += itme.qun
   return acc;
  },{totalprice:0, totalquantity:0})

 return (
    <Container>
        <div className="">
            <h2 className='text-[49px] font-dm font-bold text-black pt-[124px]'>Cart</h2>
            <p className=' text-base font-dm font-normal text-[#444141] '><Link to="/">Home</Link>   /  Cart</p>
        </div>
        <div className='py-4 pt-[134px]'>
        <div className="bg-[#F5F5F3] py-5">
        <ul className='flex justify-around items-center flex-wrap '>
            <li className='font-dm font-bold text-[16px] leading-[23px] text-bl'>Product</li>
            <li  className='font-dm font-bold text-[16px] leading-[23px] text-bl' >Price</li>
            <li  className='font-dm font-bold text-[16px] leading-[23px] text-bl' >Quantity</li>
            <li  className='font-dm font-bold text-[16px] leading-[23px] text-bl' >Total</li>
        </ul>
        </div>
        </div>
        {data.map((itme,index)=>(
        <div className=" pt-7 flex items-center justify-around  border-[#e3e1e1] ">
        <div className=" flex items-center ml-[-120px]">
        <li onClick={()=>dispatch(removeproduct(index))} className='list-none'><ImCross /></li>
        <img  className=' pl-8 h-[100px] w-[150px] ' src={itme.thumbnail} alt="" />
        <p className=' text-base text-black font-dm font-bold pl-4'>{itme.title}</p>
        </div>
        <div className="">
            <h4 className=' text-[18px] font-dm font-bold text-black'>${itme.price}</h4>
        </div>
        <div className="">
        <div className="w-[142px] h-[36px] flex items-center justify-between gap-x-4 border-[1px]  ">
            <i onClick={()=>dispatch(incrementproduct(index))} className='text-gr cursor-pointer'><FaPlus /></i>
            <h3 className='font-dm font-normal text-[16px] leading-[30px] text-gr'>{itme.qun}</h3>
            <i onClick={()=>dispatch(decrmentproduct(index))} className='text-gr cursor-pointer'><FaMinus /></i>
        </div>
        </div>
       <div className="">
        
            <p className='font-dm font-bold text-[20px] leading-[26.04px] text-bl'>${itme.price * itme.qun}</p>
        </div>
    </div>
        ))}
        <div className=" mt-7 flex justify-between items-center border-[1px] border-[#eceaea] py-3 px-3">
                <div className=" flex items-center">
                <div className=" w-[255px] h-[50px] flex justify-between  border-[1px] items-center ">
                    <h3 className='font-dm font-normal text-[16px] leading-[30px] text-gr'>SIZE</h3>
                    <i><FaCaretDown/></i>
                    </div>
                    <div className=" pl-[30px]">
                    <h3 className='font-dm font-bold text-[14px] leading-[18.23px] text-bl'>Apply coupon</h3>
                </div> 
                </div>
                <div className=" ">
                <h3 className='font-dm font-bold text-[14px] leading-[18.23px] text-bl'>Update cart</h3>
               </div>
            </div>

            <div className="w-full flex justify-end py-[64px]">
            <div className="w-[40%] relative pt-8 ">
                <h5 className='absolute right-0 top-[-34px] font-dm font-bold text-[20px] leading-[26.04px] text-bl'>Cart totals</h5>
                <div className="w-[40%] ">
                <div className=" flex  items-center justify-between  border-[1px] w-[610px]" >
                    <h6 className=' border-[#F0F0F0] p-4 font-dm font-bold text-[16px] leading-[23px] text-bl  '>Subtotal</h6>
                    <p className=' border-[#F0F0F0] pr-[150px] font-dm font-bold text-[16px] leading-[30px] text-gr right-[100px]'>  {totalquantity} </p>
                </div>
                <div className="  flex  items-center justify-between  border-[1px] w-[610px] ">
                    <h6 className=' border-[#F0F0F0] p-3 font-dm font-bold text-[16px] leading-[23px] text-bl'>Total</h6>
                    <p className=' border-[#F0F0F0] p-3 font-dm font-bold text-[16px] leading-[30px] text-gr pr-[150px]'>${totalprice}</p>
                </div>
                   <div className=" w-[200px] mt-5 h-[50px] bg-[#262626] flex items-center justify-center">  
                   <p className='text-center text-[#FFFFFF] font-dm font-bold text-[14px] leading-[18.23px]  '>Proceed to Checkout</p> 
                </div>
                </div>
                 </div>    
        </div>
    </Container>
 ) }

export default Cart 










































































