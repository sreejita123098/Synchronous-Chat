import React from 'react'
import Chatuser from './chatuser'
import Chatss from './chatss'
import Type from './type'

function Right ()  {
  return (
    <div className=" w-[70%] border border-black bg-slate-800 text-white px-2 py-1">
      
      
      <Chatuser ></Chatuser>
      <hr></hr>
      <br></br>
      <div className="" style={{maxHeight:"calc(92vh-8vh) "}} >
      <Chatss></Chatss>
      </div>
      <div className="absolute bottom-0 w-[70%] ">
      <Type></Type>
      </div>


      </div>
  )
}

export default Right