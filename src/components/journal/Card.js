import React from 'react'
import {CardData} from '../data/CardData';
import Link from '../Link'

const Card = ({id,title,description,image}) => {
    
    return(
       
 
<div className="grid md:grid-cols-3 grid-cols-1 sm:gap-8 gap-5 my-12 mx-auto px-4 md:px-12" >
  {CardData.map((item,index)=>{
    return(
<div className="overflow-hidden rounded-lg shadow-lg bg-[#1f2937] dark:bg-[#24385b]" key={index} >

                <Link to={`${item.id}`}>
                    <img src={item.image}  className="object-cover object-center w-full lg:h-48 md:h-3" alt={title}/>
                </Link>

             <div className="p-6 ">
    <Link to={`${item.id}`}>
                          <h1 className="mb-3 text-lg font-bold  title-font  font-semi-bold text-white">
                    {item.title}
                </h1>
    </Link>
                <p className="mb-3 leading-relaxed line-clamp-3 text-white">
                    {item.description}
                </p>
                <div className="flex flex-wrap items-center ">
                  <Link className="inline-flex items-center text-red-500 md:mb-2 lg:mb-0 dark:text-yellow-1100" to={`${item.id}`}>
                    Leer Mas
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
               
                
                </div>
              </div>

            </div>

    )
  })} 
</div> 

  
 
  );
}
export default Card
