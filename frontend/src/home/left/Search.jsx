import React from 'react'
import { IoSearch } from "react-icons/io5";

function search() {
  return (
    <div className="flex items-center gap-3 px-6 py-3">
      <label className="input flex-1 rounded-lg bg-slate-700 border border-slate-600 text-white focus-within:border-blue-500">
        <input type="search" className="grow bg-slate-700 text-white placeholder-gray-400 focus:outline-none" placeholder="Search users..." />
      </label>
      <button className="p-2 hover:bg-slate-700 duration-300 rounded-lg transition">
        <IoSearch className="text-xl text-blue-400"/>
      </button>
    </div>
  )
}

export default search