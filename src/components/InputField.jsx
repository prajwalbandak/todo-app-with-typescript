import React from 'react'
import "./styles.css"

const InputField = () => {
  return (
    <form className='input'>
        <input type="input" placeholder="enter a task" className="input__box"></input>
        <button className='input_submit' type='submit'>GO</button>
        
        
         </form>
  )
}

export default InputField