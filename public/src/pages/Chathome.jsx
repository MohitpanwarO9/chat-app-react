import React from 'react'
import { ChatCard } from '../components/ChatCard'

export const Chathome = () => {
  return (
    <div className='d-flex container'>
        <div className='d-flex flex-column'>
            <h3>user will display here</h3>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
            <ChatCard/>
        </div>
        <div>
            if a user if clicked its chats will be displayed here
        </div>
        dfsfdsfdsfds
    </div>
  )
}
