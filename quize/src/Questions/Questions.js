import React, { useEffect, useState } from 'react'
import './data'
import data from './data'

const Questions = () => {
    let [answere,setanswere]=useState([])
    let[count,setcount]=useState([0])
    let [result,setresult]=useState(['god','thor','fullstack'])
    let[correct,setcorrect]=useState(0)
    let[incorrect,setincorrect]=useState(0)
    let[pass,setpass]=useState('')
    let [sub,setsub]=useState(false)

    const handlechange=(e)=>{
        setanswere(e.target.value)
        setcount(()=>count++)
        if(result.includes(e.target.value)){
            setcorrect(()=>correct++)
        }else{
            setincorrect(()=>incorrect++)
        }
        if(correct>=data.length/2){
            setpass("PASS")
        }else{
            setpass("FAIL")
        }

    
        
    }
    const onsub=()=>{
        return setsub(true)
      }
    useEffect(()=>{

    },[])

    
  return (<>
  <div className='container'>
    
    
    {data.map((value)=>{
        return(<>
        
        <div className='question'>

            <h4>{value.question}</h4>
        </div>
        <div className='options'>
<label><input type='radio' name={value.question} value={value.option1} onChange={handlechange}  />{value.option1}</label>
<label><input type='radio' name={value.question} value={value.option2} onChange={handlechange} />{value.option2}</label>
<label><input type='radio' name={value.question} value={value.option3} onChange={handlechange}/>{value.option3}</label>
            
        </div>
        
        
        </>)
    }
    
    )}
    
    <button onClick={onsub}>submit</button>
    
    </div>
    {sub?<div> <h1>your result is </h1>
<h4>Total questions:  {data.length}</h4>
<h4>solved :{count} </h4>
<h4>Currect :{correct}</h4>
<h4>Incorrect :{incorrect}</h4>
<h1>{pass}</h1></div>
:<div></div>}
   
   
    
    </>
   

   
  )
}

export default Questions
