import React from 'react'
import "./styles.css"


interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd : () => void;

}

const InputField = ({todo, setTodo, handleAdd } : Props) => {
  return (
    <form className='input'>
        <input type="input" placeholder="enter a task" className="input__box"></input>
        <button className='input_submit' type='submit'>GO</button>
        
        
         </form>
  )
}

export default InputField