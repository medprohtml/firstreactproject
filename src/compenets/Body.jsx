import React from 'react'
import { AiFillCaretRight } from "react-icons/ai";
import logo from '../assets/wallpaperflare.com_wallpaper.jpg';


function Body() {
  return (
    <div>
        <main className=' p-20 flex justify-between'>
            <div className='info max-w-md'>
               <h1 className=' text-4xl font-bold'> Your favorite Food Delivred hot & Fresh</h1>
               <p className='parinfo font-normal text-sm mt-3 '>Healty switcher chefs do all the prep work, like pedding ,chopping & mirinating 
               ,so you can cook a frech food
                </p>

                <button className=' font-mono text-xl  flex mt-6 w-48 rounded-xl bg-orange-400 p-3'>Order Now <AiFillCaretRight className=' ms-2 mt-1.5 text-xl '/>
                </button>
            </div>
            
        </main>
    </div>
  )
}

export default Body