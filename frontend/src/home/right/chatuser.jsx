import React from 'react'

function chatuser() {
  return (
    <>
    <div className="flex items-center gap-4 p-4 bg-slate-800 border-b border-gray-600">
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full ring ring-offset-2 ring-offset-slate-800 ring-blue-500">
            <img src="https://starsunfolded.com/wp-content/uploads/2017/09/Sreejita-De.jpg" alt="User" />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-lg">Sreejita Bera</h1>
          <span className="text-sm text-green-400">Online</span>
        </div>
    </div>
    </>
  )
}

export default chatuser