import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import { Apidata } from '../components/ContextApi';
import Post from '../components/pagination/Post';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import PaginationNum from '../components/pagination/PaginationNum';


const Product = () => {
  let data = useContext(Apidata)
  let [currentpage, setcurrentpae] =useState(1)
  let [parpage, setparpage] =useState(6)
  let lestpage = currentpage * parpage
  let firstpage = lestpage - parpage
  let allpage = data.slice(firstpage, lestpage)
  let [showicon, setshowicon] = useState(false)
  let [show, setshow] = useState(false)
  let cateone = useRef()



  let paginate = (pageNumber)=>{
    setcurrentpae(pageNumber + 1)  
  }
  let pageNumber= [] 
     for(let i = 0; i < Math.ceil(data.length / parpage); i++){
        pageNumber.push(i)
     }  


  let next =() =>{
    if(currentpage < pageNumber.length){
      setcurrentpae((state)=> state + 1)
    }
  }
  let Previous = ()=>{
    if (currentpage > 1){
      setcurrentpae((state)=> state - 1)
    }
  }
  useEffect(()=>{
    document.addEventListener("click", (e)=>{
      if(cateone.current &&  cateone.current.contains(e.target) == true) {
      setshow(!show)
      setshowicon(!showicon)
      }else{
        setshow(false)
        setshowicon(false)
      } 
   })
  },[show])
  return (
    <div>
        <Container>
          <span className=' font-dm font-normal text-[18px]'><Link to="/">Home</Link>  / Products</span>
          <Flex >
          <div className=" w-[20%]">
            <h2 className=' text-[20px] font-dm font-bold text-black pt-[233px]'>Shop by Category</h2>
            <div className=" flex justify-between items-center pt-5 pr-4 ">
              <h4 ref={cateone} className=' text-[16px] font-dm font-normal text-black' >Category 1</h4>
              {showicon ? <FaMinus /> : <FaPlus />}
            </div>
            {show && 
            <ul className=' bg-[gray] py-4 pr-4'>
            <li>Category one</li>
            <li>Category tow</li>
            <li>Category three</li>
            <li>Category four</li>
            <li>Category five</li>
          </ul>
            }
          </div>
          <div className=" w-[80%] pt-[233px]">
          <div className=" flex justify-between flex-wrap">
          <Post post={allpage}/>
          </div>
          <PaginationNum pageNumber={pageNumber} paginate={paginate} next={next} Previous={Previous} currentpage={currentpage}/>
          </div>
          </Flex>
        </Container>
    </div>
  )
}

export default Product