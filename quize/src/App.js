
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import Questions from './Questions/Questions'
import Contact from './Pages/Contact';
import Upcommingbatches from './Pages/Upcommingbatches';
import Background from './Component/Background';
import { useState } from 'react';


function App() {
  const [name,setname]=useState('')
  const handlechange=(e)=>{

    setname(e.target.value)
    

  }
  return (
  <>
  {/* <Questions></Questions> */}
 
<Background color={name}></Background>
<input type='text' placeholder='enter color name' onChange={handlechange}></input>
  {/* <Routes>
  
    <Route path='/' Component={Homepage} ></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/contact-us' element={<Contact></Contact>}></Route>
    <Route path='/upcommingbatch' element={<Upcommingbatches></Upcommingbatches>}></Route>
   
   


  </Routes> */}

  </>
  );
}

export default App;
