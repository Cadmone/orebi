import React from 'react'
          
    const PaginationNum = ({totalpage,parpage,paginate,next,Previous,currentpage}) => {
        console.log(currentpage);
     let pageNumber= [] 
     for(let i = 0; i < Math.ceil(totalpage / parpage); i++){
        pageNumber.push(i)
     }    
  return (
   <>
<nav aria-label="Page navigation example">
  <ul class="flex justify-center items-center -space-x-px h-[50px] text-sm py-10">
    <li onClick={Previous}>
      <a class="flex items-center justify-center px-3 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Previous</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>
    </li>
    {pageNumber.map((item,i) =>(
      <li onClick={(  )=>paginate(item)}class={currentpage == i
      + 1 ? "flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-[#d4d1d1] border border-gray-300" : "flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300" }>
      <a >{item + 1}</a> 
    </li>
    ))}

{/* flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 */}
    
<li onClick={next}>
<a  class="flex items-center justify-center px-3 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span class="sr-only">Next</span>
        <svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>
    </li>
  </ul>
</nav>


   
   </>
  )
}

export default PaginationNum