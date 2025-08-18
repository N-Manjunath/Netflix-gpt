import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[15%] flex justify-center'>
        <form className=' w-1/2 bg-slate-900 justify-center grid grid-cols-12'>
      <input type='text'  className='m-5 p-2 rounded-md col-span-9' placeholder='enter your search'></input>
    <button className='m-5 py-2 px-2 bg-red-700 rounded-md col-span-3'>Search</button>
   </form>
    </div>
  )
}

export default GptSearchBar;
