import {useState} from 'react'
import { Icon } from '@iconify/react';

function App() {


const [toggle,setToggle] =useState(false)

const handleToggle = () =>{
  
  setToggle(!toggle)
}


  return (
    <div className="container">
       
      <div className='inputWrap'>
 
        <h3>Enter Password:</h3>
        <div className='inputText'>
    
    

        <input type={!toggle? "password" : "true" }/>
        <Icon icon={!toggle? "akar-icons:eye-closed" : "ant-design:eye-filled"} className='inputIcon' onClick={handleToggle}/>


     
        </div>
       

        
  


      </div>
   
     </div>
     
  
  );
}

export default App;
