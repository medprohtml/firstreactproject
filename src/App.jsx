
import './App.css'
import Body from './compenets/Body'

import Navbar from './compenets/navbar'
import image from './assets/1290174.jpg'
import Lessalade from './compenets/Lessalade'
function App() {
  

  return (
  
      <div >
          <Navbar/>
      <Body
      derection=''  
       title="Your favorite Food Delivered hot & Fresh"
       info="Healthy switcher chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh meal."
       img={image} // You should replace `imageSrc` with the actual image source URL
     />

     <Lessalade/>

          
      </div>
     
    
  )
}

export default App
