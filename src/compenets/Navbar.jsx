import React from 'react'
import logo from '../assets/Foodie-removebg-preview.png'

import { AiOutlineShoppingCart } from "react-icons/ai";
function Navbar() {
  return (
       
        
         <nav className=' w-full flex justify-between px-20   items-center    bg-transparent '>
         <img src={logo}  className=' w-44 h-44' alt="" srcset="" />
              <ul className=' flex  ms-auto '>
                 <li  className=' p-4 '>Home</li>
                 <li  className=' p-4'>About</li>
                 <li  className=' p-4'>Testemoniale</li>
                 <li  className=' p-4'>contact</li>
                 <li  className=' p-4 '><AiOutlineShoppingCart className=' mt-1 text-xl'/></li>
                 <li className='  p-4 ms-2 rounded-xl bg-orange-500 '>  Booking New</li>
              </ul>
         </nav>

     
  )
}

export default Navbar