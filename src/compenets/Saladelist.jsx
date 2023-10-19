
import React from 'react'
import { useState } from 'react';
import { AiFillPlusCircle,AiFillMinusSquare } from "react-icons/ai";

function Saladelist(props) {
     const salade = props.salade
     const [counts, setCounts] = useState([...salade].fill(0));
     const plus=(index)=>{
                 setCounts(counts.map((count, i) => i === index ? count + 1 : count));
        }
        const minus=(index)=>{
                setCounts(counts.map((count, i) => i === index ? count - 1 : count));
        }
    return (
        <div className='  grid p-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ' >
                {salade.map((e, index) => (
                <div  key={e.name} className=' rounded-md shadow-md h-40 bg-slate-50 w-full gap-4 flex'>
                        <img src={e.image} className=' rounded-sm md:w-36 w-1/2'  alt="" />
                        <section className='flex flex-col'>
                                <p  className=' p-2  text-xl'> price {e.price} $ </p>
                                <p className=' p-2  text-xl'>quantity {e.quantity}</p>
                                    <section className=' flex items-center p-0 text-xl'>
                                            <AiFillMinusSquare onClick={() => minus(index)} className='  rounded-full text-orange-400'/> {counts[index]} 
                                            <AiFillPlusCircle onClick={() => plus(index)} className='  text-orange-400'/>
                                    </section>
                                    <button className=' w-36 md:w-auto mt-3 rounded-md text-center items-center  shadow-md bg-orange-400'> Order now</button>
                        </section>
                </div>
                 ))}
        </div>
    )
}

export default Saladelist