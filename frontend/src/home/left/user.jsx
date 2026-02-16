import React from 'react'

function user() {
  return (
    <><div className="flex py-4 px-4 gap-6 hover:bg-slate-700 duration-300 cursor-pointer rounded-lg transition">
        <div className="avatar avatar-online">
        <div className="w-14 rounded-full">
            <img src="https://starsunfolded.com/wp-content/uploads/2017/09/Sreejita-De.jpg" />
        </div>
        </div>
        <div>
    <h1 className="font-bold">Sreejita Bera</h1>
    <span>sreejitabera@gmail.com</span>
    </div>
    </div>
    
    </>
  )
}

export default user