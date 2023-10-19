import React, { useState } from 'react'
import logo from '../assets/Foodie-removebg-preview.png'

import { AiOutlineShoppingCart,AiFillCaretDown, AiOutlineMenu,AiOutlineFacebook,AiFillLinkedin,AiFillInstagram} from "react-icons/ai";

function Navbar() {
  const [openmenu,setOpenmen]=useState(false)
  const open=()=>{
    setOpenmen(!openmenu)
  }
  const[openmenu2,setOpenmen2]=useState(false)
  const[openmenu3,setOpenmen3]=useState(false)
  const open2=()=>{
    setOpenmen2(!openmenu2)
    setOpenmen3(!openmenu3)
  }
  return (
       
        
         <nav className=' w-full flex justify-between items-start  md:items-center    bg-transparent '>
         <img src={logo}  className=' w-44 h-44' alt="" srcset="" />
              <ul className={`${!openmenu?"hidden":""} md:flex  md:flex-row flex-col mt-14  md:mt-0 items-start`}  >
                 <li  className=' p-4 '>Home</li>
                 <li  className=' p-4'>About</li>
                 <li  className=' p-4'>Testemoniale</li>
                 <li  className=' p-4 flex' onClick={open2}>contact <AiFillCaretDown 
                     className={` mt-1 ${openmenu3?"transform rotate-180":""}`}
                  />


                 <ul className={`${!openmenu2?"hidden":""} absolute top-32  flex  shadow-md rounded-md p-6 items-center`}>
                 <li className=' p-2 flex'><AiOutlineFacebook  className=' mt-1 '/> facebook</li>
                    <li className=' p-2 flex'> <AiFillInstagram className=' mt-1 '/> instagram</li>
                    <li className=' p-2 flex'><AiFillLinkedin className=' mt-1 '/> linkedin</li>
                 </ul>
                    
                 </li>
                 <li  className=' p-4 '><AiOutlineShoppingCart className=' mt-1 text-xl'/></li>
                 <li className='  p-4 ms-2 rounded-xl bg-orange-500 '>  Booking New</li>
              </ul>
              <div> <AiOutlineMenu onClick={open} className=' text-xl mt-16 md:hidden sm:flex'/> </div>
         </nav>

     
  )
}

export default Navbar