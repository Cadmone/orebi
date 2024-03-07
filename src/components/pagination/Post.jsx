import React from 'react'
import { FaHeart } from "react-icons/fa";
import { IoGitCompareSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

const Post = ({post}) => {
  return (
    <>
    {post.map((item)=>(
        <div className='!w-[32%] pt-[20px] '>
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
                 <p className=' text-[14px] font-dm font-normal text-[#313131]'>${item.price}</p>
              </div>
             </div>
          ))}
    </>
  )
}

export default Post