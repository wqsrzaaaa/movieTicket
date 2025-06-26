import React, { useState } from 'react'
import { dummyShowsData } from '../../src/assets/assets'
import { useNavigate } from 'react-router-dom'
import { Star } from 'lucide-react'


const MovieCard = () => {


  const navigate = useNavigate()
  const [moviedets, setmoviedets] = useState('')

  

  return (
    <>
      {dummyShowsData.map((e, i) => {
        return <div  key={i}
          onClick={() => (navigate(`/movie/${e.id}` , {state : e}  ))}  style={{backgroundColor : 'rgb(13, 12, 20)'}} className="w-70 hover:scale-105 transition duration-200 cursor-pointer backdrop-blur-md rounded-xl overflow-hidden shadow-xl p-4 text-white">
          <img className="w-full h-60 object-cover rounded-lg" src={e.backdrop_path} alt={e.title} />

          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-1">{e.title}</h2>
            <div className='flex gap-3'>
              <p className="text-sm text-gray-300">{e.release_date}</p>
              <p className="text-sm text-gray-300">({e.runtime}) </p>
            </div>
            {e.genres ? (
              <div className="text-sm flex flex-wrap  text-gray-300">{e.genres.map((i , o) => (
                <p key={o}>{i.name}  &nbsp;| &nbsp; </p>
              ))}</div>
            ) : ""}
          </div>
          <div className='w-full h-[50px] flex items-center justify-between pl-3 pr-3'>
            <button className='bg-red-400 p-[6px] pl-5 pr-5 rounded-xl '>Buy Ticket</button>
            <p className='flex items-center gap-2'><Star className="text-red-400 w-5 h-5" /> <span>{e.vote_average.toFixed(1)}</span></p>
          </div>
        </div>
      })}
    </>
  )
}

export default MovieCard