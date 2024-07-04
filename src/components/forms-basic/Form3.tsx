// Controlled Components:
// Create a form with multiple inputs (e.g., name, age, email).
// Manage the state of each input using React's useState hook.

import React, { useState } from 'react'

export default function Form3() {
  const [formdata, setFormdata] = useState({
    username: '',
    age: '',
    email: ''
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formdata);
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name='username'
            value={formdata.username}
            onChange={handleChange}
          />
          <label>Age: </label>
          <input
            type="text"
            name='age'
            value={formdata.age}
            onChange={handleChange}
          />
          <label>Email: </label>
          <input
            type="email"
            name='email'
            value={formdata.email}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
