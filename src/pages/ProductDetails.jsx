import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Container from '../components/Container';
import Flex from '../components/Flex';
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { useContext } from 'react';
import { Apidata } from '../components/ContextApi';
import { useDispatch } from 'react-redux';
import { addtocart } from '../components/slice/SingleSlice';


const ProductDetails = () => {
  let dispatch = useDispatch
    let [data, setData] = useState([])
    let productId = useParams()
    let info = useContext(Apidata)
    

    let dataId = () =>{
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response)=>{
            setData(response.data);
        })
    }
    useEffect(()=>{
        dataId()
    },[])
    let handelproduct = (itme) =>{
      dispatch(addtocart())
    }
   
  return (
    <>
    <Container>
       <Flex className=" justify-between"> 
    {data?.images?.map((item)=>(
     <div className=" pt-[30px] flex w-[48%]">
      <img className='h-[350px] w-[100%]' src={item} alt="" />
      </div>
    ))}
    </Flex>

    
     <div className="">
     <h2 className=' text-[39px] font-dm font-bold pt-[49px] text-black '>Product</h2>
     <div className=" flex">
     <div className=" flex ">
     <FaStar />
     <FaStar />
     <FaStar />
     <FaStar />
     <FaStarHalfAlt />
     </div>
     <p className=' text-[14px] font-dm font-normal text-[#484747] pl-[20px]'>1 Review</p>
     </div>
     <div className=" flex pt-[24px]">
     <del>$88.00</del>
     <h4 className=' pl-[20px]'>$44.00</h4>
     </div>
     <h5 className=' pt-[58px] text-[16px] font-dm font-bold text-black'>COLOR:</h5>
     <p className=' pt-[28px] text-[16px] font-dm font-bold text-black'>SIZE:</p>
     <div className=" flex items-center pt-[28px]">
       <h4 className=' text-[16px] font-dm font-bold text-black pr-[20px]'>QUANTITY:</h4>
       <div className=" flex justify-between items-center h-[50px] w-[150px] border-[2px] border-black px-4 ">
         <button className=' text-[18px] font-bold'>-</button>
         <div className=' text-[18px] font-bold'>0</div>
         <button className=' text-[18px] font-bold'>+</button>
       </div>
     </div>
     <div className=" flex">
     <h5 className=' text-[16px] font-dm font-bold text-black pr-[20px] pt-[30px] '>STATUS:</h5>
     <p className=' text-[14px] font-dm font-normal text-[#484747] pl-[10px] pt-[30px]'>In stock</p>
     </div>
     <div className=" pt-[50px]">
     <ul className=' flex'>
     <Link >
       <li className=' py-[16px] px-[50px] border-[2px] border-black   inline-block bg-black text-white hover:bg-white hover:text-black mr-[25px] '>Add to Wish List</li>
       </Link>
       <Link to="/cart">
       <li  onClick={()=>handelproduct(data)} className=' border-[2px] border-black inline-block py-[16px] px-[50px] bg-black text-white hover:bg-white hover:text-black '>Add to Cart</li>
       </Link>
     </ul>
   
   </div>
   </div>
   
    
   

    
    </Container>
    </>
  )
}

export default ProductDetails