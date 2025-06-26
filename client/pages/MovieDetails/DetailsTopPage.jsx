import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Star } from 'lucide-react'
import BlurCircle from '../BlurCircle'

const DetailsTopPage = () => {


    
useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  const location = useLocation()
  const movie = location.state

  return (
     <div className='w-full relative mt-45'>
      <BlurCircle className='absolute right-30 top-10 scale-150' />
      <BlurCircle className='absolute left-30 top-140 scale-150' />
      <BlurCircle className='absolute right-30 top-240 scale-150' />
      <div className='w-full pl-25 pr-25 flex flex-col gap-6 '>
        <div className='w-full  flex  gap-6 '>
          <img className='w-[320px] h-[400px] object-cover rounded-xl' src={movie.backdrop_path} alt="" />
          <div className=''>
            <p className='text-red-400 font-bold text-xl'>{movie.original_language === 'en' ? "English" : movie.original_language}</p>
            <h1 className='text-3xl mt-3 mb-3 font-bold'>{movie.title}</h1>
            <p className='flex items-center gap-2'><Star className="text-red-400 w-5 h-5" /> <span>{movie.vote_average.toFixed(1)} IMBD Rating</span></p>
            <p className='mt-3 mb-3'>{movie.overview}</p>
            <div className='flex mt-3 mb-3 gap-3 '>{movie.runtime} &nbsp; |  <span className='flex gap-3 '>{movie.genres.map((e, i) => (
              <div key={i}>{e.name}</div>
            ))}</span></div>
            <p className=''>{movie.release_date}</p>
            <div className='w-1/2 h-[120px] flex items-center justify-evenly'>
              <button className='bg-zinc-400 p-2 pl-6 pr-6 rounded-lg'>Watch Trailer</button>
              <button  onClick={() => window.scrollBy({ top: window.innerHeight * 2, behavior: 'smooth' })} 
               className='bg-red-400 p-2 pl-6 pr-6 rounded-lg cursor-pointer transition-all duration-300'>Buy Tickets</button>
            </div>
          </div>
        </div>
        <div className='w-full  flex flex-col gap-4 mt-9'>
          <p className='text-2xl font-bold text-red-400'>Your Favorite Cast</p>
          <div className='flex flex-wrap gap-4'>
            {movie.casts.map((e, i) => (

              <div key={i} className='w-[180px]  flex items-center flex-col justify-center'>
                <div className='w-[100px] overflow-hidden h-[100px] rounded-full bg-white'>
                <img src={e.profile_path} alt="" className="w-full h-full object-cover" />
              </div>
                <p className='font-semibold'>{e.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsTopPage