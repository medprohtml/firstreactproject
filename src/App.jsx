
import './App.css'
import Body from './compenets/Body'
import Navbar from './compenets/navbar'
import image from './assets/1290174.jpg'
import Lessalade from './compenets/Lessalade'
import { useState } from 'react'
function App() {
  const[addtocart,setAddtocart]=useState([])
  
const addcart=(item)=>{
   const findproduct=addtocart.find(product=>product.name===item.name)

   if(findproduct){
    findproduct.quantity+=1
    findproduct.totalprice=findproduct.quantity*findproduct.price
    setAddtocart([...addtocart])

   }
   else{
    item.quantity=1
    setAddtocart([item,...addtocart])
   }
   console.log(addtocart)
}

  return (
  
      <div >
          <Navbar aded={addtocart}/>
      <Body
      derection=''  
       title="Your favorite Food Delivered hot & Fresh"
       info="Healthy switcher chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh meal."
       img={image} // You should replace `imageSrc` with the actual image source URL
     />

     <Lessalade addtocart={addcart}/>

          
      </div>
     
    
  )
}

export default App
