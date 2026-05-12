import React from 'react'
import {Route,Routes} from "react-router-dom"
import Register from './pages/Register'
import Login from './pages/Login'
import Chat from './pages/Chat'

import { Chathome } from './pages/Chathome'

export default function App() {
  return (
    <>
      <Routes>
        <Route path = "/register" element ={<Register/>}/>
        <Route path = "/login" element ={<Login/>}/>
        <Route path = "/" element ={<Chat/>}/>
        <Route path='/chathome' element ={<Chathome/>}/>
      </Routes>
    </>
  )
}
