import React from 'react'
import Chatuser from './chatuser'
import Chatss from './chatss'
import Type from './type'

function Right ()  {
  return (
    <div className="w-[70%] h-screen bg-slate-800 text-white flex flex-col border border-gray-300">
      <Chatuser></Chatuser>
      <hr className="border-gray-600"></hr>
      <div className="flex-1 overflow-y-auto">
        <Chatss></Chatss>
      </div>
      <div className="border-t border-gray-600">
        <Type></Type>
      </div>


      </div>
  )
}

export default Right