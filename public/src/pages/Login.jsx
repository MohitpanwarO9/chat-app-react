import React from 'react'
import { useState } from 'react'

export default function Login() {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event)=>{
    setValues({
      ...values,
      [event.target.name]:event.target.value,
    });
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("Submit...callled")
  }

  return (
    <div className='d-flex justify-content-center p-3 align-items-center border'>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='Email' name='email' onChange={handleChange}/>
          <input type='password' placeholder='Password' name='password' onChange={handleChange}/>

          <button type='submit'> Submit</button>
        </form>
       
      </div>
    </div>
  )
}
