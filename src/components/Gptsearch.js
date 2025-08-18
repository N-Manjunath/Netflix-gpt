import React from 'react'
import GptSearchBar from './GptSearchBar'
import { BG_IMG } from '../utils/constants'

const Gptsearch = () => {
  return (
    <div>
        <div>
            <img
                    className="absolute top-0 left-0 w-full h-full object-cover -z-20"
                    src={BG_IMG}
                    alt="bg-img"/>
        </div>
      <GptSearchBar/>
    </div>
  )
}

export default Gptsearch;
