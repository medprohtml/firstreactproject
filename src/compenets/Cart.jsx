import React from 'react'

function Cart(props) {
    const addtocart=props.addtocart
  return (
    <div className=' flex flex-row bg-slate-300 gap-4 w-full '>
        {addtocart.map((item)=>(
            <div>
                <h1> name de salade {item.name}</h1>
                <p>price {item.price}</p>
                <p> total price {item.totalprice}</p>
                <p>quantity{ item.quant} </p>

            </div>
        ))}
    </div>
  )
}

export default Cart