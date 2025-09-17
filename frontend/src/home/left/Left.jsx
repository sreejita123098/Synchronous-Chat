import React from 'react'
import Search from './search'   
import User from './user'
import Logout from '../../left1/logout' 
function Left  () {
  return (
    
      
    <div className="w-[30%] border border-black bg-slate-900 text-white">
     <h1 className="front-bold px-8 py-2 text-3xl">Chats</h1>
      <Search></Search>
      
      <hr></hr>
      <div style={{maxHeight:"calc(84vh) "}} className="overflow-y-scroll
            [scrollbar-width:none] 
            [-ms-overflow-style:none] 
            [&::-webkit-scrollbar]:hidden flex-sreejita p-3">
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      <User></User>
      </div>
      </div>
  )
}

export default Left