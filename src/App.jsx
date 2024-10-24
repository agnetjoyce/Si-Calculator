import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
const[principle,setPrinciple]=useState("")
const[rate,setRate]=useState("")
const[year,setYear]=useState("")
const[interest,setInterest]=useState("")
const[isInputValid,setIsInputValid]=useState(false)

const[isYearInputValid,setIsYearInputValid]=useState(false)

const[isRateInputValid,setIsRateInputValid]=useState(false)

const handleValidation=(tag)=>{
  const{name,value}=tag
  console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
  if(!!value.match(/^\d*.?\d+$/)){
    if(name=="Principle"){ //valid
      setPrinciple(value)
      setIsInputValid(false)
    }else if(name=="Year"){
        setYear(value)
        setIsYearInputValid(false)
    }else{
      setRate(value)
      setIsRateInputValid(false)
    }
  }else{ //invalid
    if(name=="Principle"){
      setPrinciple(value)
      setIsInputValid(true)
    }else if(name=="Year"){
      setYear(value)
        setIsYearInputValid(true)
    }else{
      setRate(value)
      setIsRateInputValid(true)
    }
  }
}

const handleCalculate=(e)=>{
  e.preventDefault()
  setInterest((principle*rate*year)/100)
  
}

const handleReset=(e)=>{
  setPrinciple("")
  setYear("")
  setRate("")
  setInterest("")
  setIsInputValid(false)
  setIsRateInputValid(false)
  setIsYearInputValid(false)
}

console.log(principle);


  return (
    <>
<div style={{minHeight:'100vh', width:'100%'}} className="d-flex justify-content-center align-items-center bg-primary">
  <div className="box bg-info p-5 rounded">
    <h2 className='text-danger fw-bolder' style={{textDecoration:"underline"}}>Simple Interest Calculator</h2>
    <p className='text-center'>Calculate your simple interest with us</p>
    <div className="d-flex justify-content-center align-items-center p-5 rounded bg-warning">
    <h1 className='text-danger'>&#8377; {interest}</h1>
    </div>
    <div className="mt-5">
      <form className='border rounded p-3 d-flex flex-coloumn p-3'>
        <TextField id="Principle" name='Principle' value={principle} label="Principle Amount" variante="outlined" onChange={e=>handleValidation(e.target)}/>
          {isInputValid&&<div className='mb-2 text-danger fw-bolder'>*invalid input</div>}
        <TextField id="Year" name='Year' label="Year" value={year} variante="filled" onChange={e=>handleValidation(e.target)}/>
        {isYearInputValid&&<div className='mb-2 text-danger fw-bolder'>*invalid input</div>}
        <TextField id="Rat" name='Rat' value={rate} label="Rate of Interest" variante="standard" onChange={e=>handleValidation(e.target)}/>
        {isRateInputValid&&<div className='mb-2 text-danger fw-bolder'>*invalid input</div>}
      </form>
    </div>
    <div className="mt-3 d-flex justify-content-between">
<Button variant="contained" onClick={handleCalculate}>Calculate</Button>
<Button variant="outlined" onClick={handleReset}>Reset</Button>
    </div>
  </div>
</div>
    </>
  )
}

export default App