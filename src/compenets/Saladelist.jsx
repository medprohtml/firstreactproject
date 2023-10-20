
import React from 'react'
import { useState } from 'react';
import { AiFillPlusCircle,AiFillMinusSquare } from "react-icons/ai";

function Saladelist(props) {
     const salade = props.salade
     const addtocart= props.addtocart
     const [counts, setCounts] = useState([...salade]);
     const [count, setCount] = useState(0);
     const plus=(e)=>{
                  const plus=counts.find(element=>element.name===e.name)
                  plus.quantity+=1
                  setCount(plus.quantity)
                  console.log(plus.quantity)
        }
        const minus=(e)=>{
                const plus=counts.find(element=>element.name===e.name)
                plus.quantity-=1
                setCount(plus.quantity)
        }
    return (
        <div className='  grid p-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ' >
                {salade.map((e) => (
                <div  key={e.name} className=' rounded-md shadow-md h-40 bg-slate-50 w-full gap-4 flex'>
                        <img src={e.image} className=' rounded-sm md:w-36 w-1/2'  alt="" />
                        <section className='flex flex-col'>
                                <p  className=' p-2  text-xl'> price {e.price} $ </p>
                                <p className=' p-2  text-xl'>quantity {e.quantity}</p>
                                    <section className=' flex items-center p-0 text-xl'>
                                            <AiFillMinusSquare onClick={() => minus(e)} className='  rounded-full text-orange-400'/> {e.quantity} 
                                            <AiFillPlusCircle onClick={() => plus(e)} className='  text-orange-400'/>
                                    </section>
                                    <button onClick={()=>addtocart(e)} className=' w-36 md:w-auto mt-3 rounded-md text-center items-center  shadow-md bg-orange-400'> Order now</button>
                        </section> 
                </div>
                 ))}
        </div>
    )
}

export default Saladelist