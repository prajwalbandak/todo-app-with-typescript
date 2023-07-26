import React, { useRef } from 'react'
import "./styles.css"

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd : (e: React.FormEvent) => void;
}
const InputField = ({todo, setTodo, handleAdd } : Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit={(e) =>{
      handleAdd(e);
      console.log();
      inputRef.current?.blur();
    }} > 
        <input type="input" placeholder="enter a task" className="input__box" value={todo} ref={inputRef} onChange={(e) => setTodo(e.target.value)}></input>
        <button className='input_submit' type='submit'>GO</button>
     </form>
  )
}

export default InputField
