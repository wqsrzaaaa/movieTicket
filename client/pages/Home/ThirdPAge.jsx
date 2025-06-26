import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { dummyTrailers } from "../../src/assets/assets"

const ThirdPage = () => {
  const [SelectTrailer, setSelectTrailer] = useState(0)

  return (
    <div className='w-full'>
      <div className='w-full h-[120px] flex items-center'>
        <h1 className='text-2xl font-bold pl-25'>Trailers</h1>
      </div>

      <div className='w-full flex items-center justify-center'>
        <ReactPlayer
          url={dummyTrailers[SelectTrailer].videoUrl}
          controls
          width="85%"
          height="500px"
        />
      </div>

      <div className='w-full flex gap-5 justify-center items-center h-[250px] mt-10'>
        {dummyTrailers.map((e, i) => (
          <div key={i} className='w-[200px] h-[200px] cursor-pointer'>
            <img
              onClick={() => setSelectTrailer(i)}
              src={e.image}
              alt={`Trailer ${i + 1}`}
              className={`w-full hover:scale-105 transition h-full object-cover rounded-lg ${SelectTrailer === i ? 'ring-4 ring-red-400' : ''}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThirdPage
