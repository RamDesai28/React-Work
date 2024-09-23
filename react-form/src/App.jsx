import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Form from './Form'
import CommentForm from './CommentForm'
import Joker from './Joker'
import Lottery from './Lottery'
import { sum } from './helper'
// import Ticket from './Ticket.jsx'

function App() {
  // let winCondition=(ticket)=>{
  //   return sum (ticket) ===15
  // }

  return (
    <>
     {/* <Form/>
     <CommentForm/>
     <Joker/>
     <Ticket ticket={[0,1,2]} />
     <Ticket ticket={[5,6,7,8]} /> */}
     <Lottery n={3} winningSum={15}/>
     
     
    
    </>
  )
}

export default App
