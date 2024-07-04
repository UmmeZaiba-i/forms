// Uncontrolled Components:
// Create a form using uncontrolled components with refs.
// On form submission, display the values entered in the form.
import React, { useRef, useState } from "react";

export default function Form4() {
  const [formdata, setFormdata]= useState({
    name: "",
    email: "",
  })
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const handleForm =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    // console.log(nameRef.current?.value);
    // console.log(emailRef.current?.value);
    const name = nameRef.current?.value || '';
    const email = emailRef.current?.value || '';
    setFormdata({name, email});
  }
  
  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <label>Name :</label>
          <input type="text" name="name" ref={nameRef} />
          <br />
          <label>Email :</label>
          <input type="email" name="email" ref={emailRef} />
        </div>
        <button type="submit">Submit</button>
      </form>
    <p>{formdata.name}</p>
    <p>{formdata.email}</p>
    </div>
  )
}
