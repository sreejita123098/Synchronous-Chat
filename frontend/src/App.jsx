import React from 'react'
import Left from './home/left/left'
import Right from './home/right/right'
import Logout from './left1/logout' 

const App = () => {
  return (
    <>
    <div className="flex h-screen w-screen">
        <Logout></Logout>
        <Left></Left>
        <Right></Right>
    </div>
   
    </>
  )
}

export default App