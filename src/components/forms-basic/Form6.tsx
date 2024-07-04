// Radio Buttons:
// Create a form with a set of radio buttons.
// Display the selected radio button value below the form.

import { useState } from "react"

export default function Form6() {
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setSelectedOption(e.target.value)
  }
  const handleForm = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
        <label>Branch:</label>
        <input 
        type="radio" 
        name="branch" 
        value="ComputerScience" 

        checked = {selectedOption == 'ComputerScience'}
        onChange={handleChange}

        /> ComputerScience
        <input 
        type="radio" 
        name="branch" 
        value="Electronics"

        checked = {selectedOption == 'Electronics'}
        onChange={handleChange}

        /> Electronics
        <input 
        type="radio" 
        name="branch" 
        value="Civil" 
        
        checked = {selectedOption == 'Civil'}
        onChange={handleChange}
        /> Civil
        </div>
      </form>
      <div>
        {
          selectedOption && <p>Selected Option: {selectedOption}</p>
        }
      </div>
    </div>
  )
}
