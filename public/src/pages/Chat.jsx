import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Chat() {
  const nevigate = useNavigate()

  const login_Btn = ()=>{
    console.log("login button clicked")
    nevigate("/login");
  }

  const register_Btn = ()=>{
    console.log("register button clicked")
    nevigate("/register");
  }

  const chat_dashboard = ()=>{
    console.log("here we aree")
    nevigate("/chathome");
  }

  return (
    <>
      <div className='d-flex'>
        <div className=' p-3 border justify-content-center'>
          <h2>welcome to Chat Applicaton</h2>
          <div>login to your conversation and stay connected with your friends</div>
        </div>
        <div className=' p-3 border'>
          <h3> --- Register / login ---</h3>
          <div>
            
            <button className='p-1' onClick={login_Btn}>Login</button>
            <button className='p-1' onClick={register_Btn}>Register</button>
            <button className='p-1' onClick={chat_dashboard}>chat Dashboard</button>
          </div>
        </div>
      </div>
    </>
  )
}
