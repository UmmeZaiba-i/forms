import { useState } from "react"

export default function Form1() {
    const [inputText, setInputText]= useState('');
    const handleInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
      event.preventDefault()
      setInputText(event.target.value); //important - 1. it caches the latest value entered by the user  2. it updates the components state
    }
  return (
    <div>
      <form>
        <input type="text" value={inputText} onChange={handleInput}/>
        <p>The input text is - {inputText}</p>
      </form>
    </div>
  )
}
