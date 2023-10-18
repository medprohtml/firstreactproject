import React from 'react'
import { AiFillCaretRight } from "react-icons/ai";


function Body(props) {

      const {title,info,img,derection }=props

  return (
    <div className=''>
        <main 
        className={` ${derection=='row-reverse'?'flex-row-reverse':''} p-20 flex justify-between`}>
            <div
             className='info max-w-md'>
               <h1
                className=' text-4xl font-bold'>{title} </h1>
               <p 
               className='parinfo font-normal text-sm mt-3 '>
                {info}
                </p>

                <button
                 className=' font-mono text-xl  flex mt-6 w-48 rounded-xl bg-orange-400 p-3'>Order Now <AiFillCaretRight className=' ms-2 mt-1.5 text-xl '/>
                </button>
            </div>
            <img src={img} className=' w-1/2 rounded-2xl' alt="" />
        </main>
    </div>
  )
}

export default Body