import React from 'react'
import people from '../assets/people.png'

export const ChatCard = () => {
  return (
    <div className='d-flex justify-content-center container m-2' >
        <div className='p-2'>
            <img src={people} alt="" />
        </div>
        <div className='d-flex flex-column'>
            <div>Name of the user <br></br> Last message</div>
        </div>
    </div>
  )
}
