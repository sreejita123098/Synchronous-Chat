import React from 'react'
import { IoMdSend } from "react-icons/io";

function type() {
  return (
    <>
        <div className="flex items-center gap-3 p-4 bg-slate-800 border-t border-gray-600">
            <div className="flex-1 bg-slate-700 rounded-lg">
              <input type="text" 
                placeholder="Type a message..."
                className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <button className="text-2xl text-blue-400 hover:bg-blue-800 bg-blue-600 p-2 rounded-lg duration-300 transition">
              <IoMdSend/>
            </button>
            


        </div>
    </>
  )
}

export default type