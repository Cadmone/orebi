import React, { useContext, useState } from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import Flex from '../components/Flex'
import { Apidata } from '../components/ContextApi';
import Post from '../components/pagination/Post';
import PaginationNum from '../components/pagination/PaginationNum';


const Product = () => {
  let data = useContext(Apidata)
  let [currentpage, setcurrentpae] =useState(1)
  let [parpage, setparpage] =useState(6)
  let lestpage = currentpage * parpage
  let firstpage = lestpage - parpage
  let allpage = data.slice(firstpage, lestpage)
  let paginate = (pageNumber)=>{
    setcurrentpae(pageNumber)  
  }
  let next =() =>{
    if(currentpage < data.length){
      setcurrentpae((state)=> state + 1)
    }
  }
  let Previous = ()=>{
    if (currentpage > 1){
      setcurrentpae((state)=> state - 1)
    }
  }
  return (
    <div>
        <Container>
          <span className=' font-dm font-normal text-[18px]'><Link to="/">Home</Link>  / Products</span>
          <Flex >
          <div className=" w-[20%]">
            <h2>Shop by Category</h2>
          </div>
          <div className=" w-[80%] pt-10">
          <div className=" flex justify-between flex-wrap">
          <Post post={allpage}/>
          </div>
          <PaginationNum totalpage={data.length} parpage={parpage} paginate={paginate} next={next} Previous={Previous} currentpage={currentpage}/>
          </div>
          </Flex>
        </Container>
    </div>
  )
}

export default Product