// Dynamic Form Fields:
// Create a form that allows users to add or remove input fields dynamically.
// Manage the state of the dynamic fields and display the current state below the form.
import React, { useState } from "react";

export default function Form8() {
  const [isSubmitted, setisSubmitted] = useState<string|boolean>('')
  const [formdata, setFormdata] = useState({
    name: "",
    age:'',
    email: "",
  })
  const handleForm = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(formdata);
    setisSubmitted(true);
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value}= e.target;
    setFormdata((prev)=>({...prev, [name]:value}));
  }
  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handleChange}
          /> <br />
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={formdata.age}
            onChange={handleChange}
          /> <br />
          <label>email</label>
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
          /> <br />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <div>
        <h2>Form Data</h2>
        {
          isSubmitted?(  
            <p> {formdata.name} {formdata.age} {formdata.email}</p>
            
          ):(
            <p>no data</p>
          )
          
        }
      </div>
    </div>
  )
}
