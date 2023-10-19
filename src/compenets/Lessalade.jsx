import React from 'react'
import { useState } from 'react'
import Saladelist from './Saladelist';
import salade1 from '../assets/salade1.jpeg'
import salade2 from '../assets/salade2.jpg'
import salade3 from '../assets/salade3.jpg'
import salade4 from '../assets/salade4.jpeg'


function Lessalade() {
const[salade, setSalade] = useState([
    {name: "Salade",
    price: 2.5,
    quantity: 0,
    image: salade1},
    {name: "Tomate",
    price: 1.5,
    quantity: 0,
    image: salade2},
    {name: "Oignon",
    price: 1.5,
    quantity: 0,
    image: salade3},
    {name: "Carotte",
    price: 1.5,
    quantity: 0,
    image: salade4}
])
  return (
    <div>
     <Saladelist salade={salade}/>

    </div>
  )
}

export default Lessalade