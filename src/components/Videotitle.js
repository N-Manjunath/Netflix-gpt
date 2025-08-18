import React from 'react'

const Videotitle = ({title,dsc}) => {
  return (
    <div className='py-36 px-12 mt-64 text-white absolute  w-screen aspect-video'>
      <h2 className='text-3xl w-4/12 font-bold'>{title}</h2>
      <p className='text-sm mt-2 w-4/12 '>{dsc}</p>
      <div className='mt-8'>
        <button className='bg-white text-black rounded-md px-10 py-3 font-black text-l hover:opacity-50 '>▶️Play</button>
        <button className='bg-gray-500 text-white  rounded-md mx-4 px-10 py-3  font-bold hover:opacity-60'>More Info</button>
      </div>
    </div>
  )
}

export default Videotitle
