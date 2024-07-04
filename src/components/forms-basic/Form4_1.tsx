// Uncontrolled components using ref to directly manipulate the dom
import { useRef } from "react";

export default function Form4_1() {
    const inputref = useRef<HTMLInputElement>(null);
    const handleClick = ()=>{
        inputref.current?.focus();
        // if(inputref.current){ //adds null check because inputref.current is assigned null initially
        //     inputref.current.focus();
        // }
    }
  return (
    <div>
      <input ref={inputref}/>
      <button onClick={handleClick}>Focus on the input</button>
    </div>
  )
}
