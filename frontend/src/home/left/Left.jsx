import React from 'react'
import Search from './search'   
import User from './user'
import Logout from '../../left1/logout' 
function Left  () {
  return (
    <div className="w-[30%] h-screen border border-gray-300 bg-slate-900 text-white flex flex-col">
      <h1 className="font-bold px-8 py-4 text-3xl border-b border-gray-600">Chats</h1>
      <Search></Search>
      <hr className="border-gray-600"></hr>
      <div className="flex-1 overflow-y-auto p-3">
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