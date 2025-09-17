import React from 'react'
import { IoSearch } from "react-icons/io5";

function search() {
  return (
    
    <div className="flex px-6 py-1 space-x-3">
  <label className="input w-[80%] rounded-lg bg-slate-600 text-white  " >
  <input type="search" className="grow bg-slate-600" placeholder="Search" />
  </label>
    <button>
    <IoSearch className="hover:bg-gray-600 duration-300 rounded-full  space-x-3 text-5xl p-2 "/>
    </button>
    </div>
  )
}

export default search