import React, { useState } from 'react'
import data from './data'

import './App.css'

const App = () => {
  const [count, setCount]=useState(0)
  const [text, setText] = useState([])
  const handleSubmit = (e)=> {
    e.preventDefault()
    let amount = parseInt(count)
    if (amount <=0){
      amount=1
    }
    if(amount>data.length){
      amount = data.length
    }
    console.log(amount)
     setText(data.slice(0,amount))

  }
  return (
    <div className='section'>
      <h1 className='header'>Create lorem ipsum</h1>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraph:</label>
        <input type='number' name='amount' id='amount' value={count} onChange={(e)=>{setCount(e.target.value)}} />
        <button type='submit' >Genarate</button>
      </form>
      {
        text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })
      }
      
    </div>
  )
}

export default App