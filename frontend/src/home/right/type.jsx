import React from 'react'
import { IoMdSend } from "react-icons/io";

function type() {
  return (
    <>
        <div className="flex space-x-3 h-[8vh] items-center px-3">
            <div className="w-[90%] bg-slate-400 rounded-lg  " style={{boxShadow:"1px 1px 10px 0px black"}}>
            <input type="text" 
            placeholder="Type here "
             className="input bg-slate-300 w-[100%] text-black" />
            </div>
            <div className="text-4xl">
                <button className="hover:bg-green-800 duration-300 rounded-lg  " >
            <IoMdSend/>
                </button>
            </div>
            


        </div>
    </>
  )
}

export default type