import './App.css'
import Body from './compenets/Body'
import Navbar from './compenets/navbar'
import image from './assets/1290174.jpg'
import Lessalade from './compenets/Lessalade'
import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Cart from './compenets/Cart'
function App() {
  const[addtocart,setAddtocart]=useState([])
 
const addcart=(item)=>{
   const findproduct=addtocart.find(product=>product.name===item.name)

   if(findproduct){
    findproduct.quant+=findproduct.quantity
    findproduct.totalprice=findproduct.quant*findproduct.price
    setAddtocart([...addtocart])
    console.log(addtocart)
   }
   else{
    item.quant=item.quantity
    setAddtocart([item,...addtocart])
    console.log(addtocart)
   }
   
}

  return (
  
      <div >
         <BrowserRouter>
        <Navbar aded={addtocart}/>
          
          <Routes>
            <Route  path="Cart"  element={<div className=' mt-12'><Cart addtocart={addtocart} /></div>}/>
            <Route path='/' element={
                       <div>
                       <Body
                       derection=''  
                        title="Your favorite Food Delivered hot & Fresh"
                        info="Healthy switcher chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh meal."
                        img={image} // You should replace `imageSrc` with the actual image source URL
                      />
                      <Lessalade addtocart={addcart}/>
                      </div>
            }/>
          </Routes>
          </BrowserRouter>
 

          
      </div>
     
    
  )
}

export default App
