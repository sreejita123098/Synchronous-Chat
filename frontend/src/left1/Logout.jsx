import React from 'react'

import { RiLogoutBoxLine } from "react-icons/ri";

function logout ()  {
  return (
    <div className=" P-2 w-[3%] border border-black bg-slate-900 text-white flex flex-col justify-end pb-4">
      
      <button className="px-2 text-3xl rounded-lg duration-300 hover:bg-slate-500">
         <RiLogoutBoxLine />
          </button>
      </div>
  )
}

export default logout