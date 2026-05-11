import React from 'react'
import styled from "styled-components"
import { useState } from 'react';

export default function Register() {
  
  const [values, setValues] = useState({
    name : "",
    email : "",
    password : ""
  })

  const handleChange = (event) =>{
    setValues({
      ...values,
      [event.target.name] : event.target.value,
    });
  }

  const handleSubmit = (event)=>{
    event.preventDefalut();
    console.log("Form submit....")
  }

  return (
    <>
       <div className='container d-flex justify-content-center align-items-center vh-100 border'>
        <div className='m-5'>
          <h3>Hello user... register to the App</h3>
        </div>
        <div className='card p-4 w-25'>
          <form className='d-flex flex-column align-items-center' action="" onSubmit={handleSubmit}>
            <h3 className='text-center mb-3'>Register</h3>
            <input type="text" placeholder='Username' name='username' onChange={handleChange} className='mb-1 w-75'/>
            <input type="Email" placeholder='Email' name='email' onChange={handleChange} className='mt-1 mb-1 w-75'/>
            <input type="password" placeholder='Password' name='password' onChange={handleChange} className='mt-1 w-75'/>

            <button type='submit' className='btn btn-primary mt-3 '>Register</button>
          </form>
        </div>
       </div>
    </>
  )
}
