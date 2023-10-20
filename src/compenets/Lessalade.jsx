import React from 'react'
import { useState } from 'react'
import Saladelist from './Saladelist';
import salade1 from '../assets/salade1.jpeg'
import salade2 from '../assets/salade2.jpg'
import salade3 from '../assets/salade3.jpg'
import salade4 from '../assets/salade4.jpeg'


function Lessalade(props) {
  const addtocart=props.addtocart
const[salade, setSalade] = useState([
    {name: "Salade",
    price: 2.5,
    quantity: 0,
    image: salade1,
    totalprice: 0
  },
    {name: "Tomate",
    price: 1.5,
    quantity: 0,
    image: salade2,
    totalprice: 0
  },
    {name: "Oignon",
    price: 1.5,
    quantity: 0,
    image: salade3,
    totalprice: 0},
    {name: "Carotte",
    price: 1.5,
    quantity: 0,
    image: salade4,
    totalprice: 0}
]);

  return (
    <div>
     <Saladelist salade={salade}  addtocart={addtocart}/>

    </div>
  )
}

export default Lessalade