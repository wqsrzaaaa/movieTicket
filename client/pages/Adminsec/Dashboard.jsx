import React, { useEffect, useState } from 'react'
import { BookmarkPlus, CircleDollarSign, CirclePlay, Users, Star } from "lucide-react"
import { dummyDashboardData } from "../../src/assets/assets"

const Dashboard = () => {
  const [DashboardData, setDashboardData] = useState({})

  useEffect(() => {
    setDashboardData(dummyDashboardData)
  }, [])

  return (
    <div className='w-full'>
      <div className='w-full h-25 flex text-2xl items-center  pl-8'>
        Admin &nbsp; <span className='text-red-400 font-bold underline'> Dashboard</span>
      </div>

      <div className='w-full h-30 flex items-center justify-evenly'>
        <div className="w-60 h-25 bg-red-400/35 p-2 relative backdrop-blur-md shadow-lg">
          <h1 className='text-xl font-bold p-2'>Total Booking</h1>
          <BookmarkPlus className='absolute right-5 top-1/3' />
          <p className='p-2 font-bold'>{DashboardData.totalBookings}</p>
        </div>

        <div className="w-60 h-25 bg-green-400/35 p-2 relative backdrop-blur-md shadow-lg">
          <h1 className='text-xl font-bold p-2'>Total Revenue</h1>
          <CircleDollarSign className='absolute right-5 top-1/3' />
          <p className='p-2 font-bold'>Rs {DashboardData.totalRevenue}</p>
        </div>

        <div className="w-60 h-25 bg-blue-400/35 p-2 relative backdrop-blur-md shadow-lg">
          <h1 className='text-xl font-bold p-2'>Active Show</h1>
          <CirclePlay className='absolute right-5 top-1/3' />
          <p className='p-2 font-bold'>{DashboardData.activeShows?.length || 0}</p>
        </div>

        <div className="w-60 h-25 bg-yellow-300/35 p-2 relative backdrop-blur-md shadow-lg">
          <h1 className='text-xl font-bold p-2'>Total Users</h1>
          <Users className='absolute right-5 top-1/3' />
          <p className='p-2 font-bold'>{DashboardData.totalUser}</p>
        </div>
      </div>

      <div className="w-full flex flex-wrap gap-5 mt-10 justify-center">
        {DashboardData.activeShows?.map((e, i) => (
          <div
            key={i}
            style={{ backgroundColor: 'rgb(13, 12, 20)' }}
            className="w-60 hover:scale-105 transition duration-200 cursor-pointer backdrop-blur-md rounded-xl overflow-hidden shadow-xl p-4 text-white"
          >
            <img className="w-full h-50 object-cover rounded-lg" src={e.movie.backdrop_path} alt={e.movie.title} />
            <div className="mt-4">
              <h2 className="text-2xl font-bold mb-1">{e.movie.title}</h2>
              <div className="flex gap-3">
                <p className="text-sm text-gray-300">{e.movie.release_date}</p>
                <p className="text-sm text-gray-300">({e.movie.runtime})</p>
              </div>
              {e.genres && (
                <div className="text-sm flex flex-wrap text-gray-300">
                  {e.genres.map((genre, o) => (
                    <p key={o}>{genre.name}&nbsp;|&nbsp;</p>
                  ))}
                </div>
              )}
            </div>
            <div className="w-full flex items-center justify-between">
              <p className="flex items-center gap-2">
                <Star className="text-red-400 w-5 h-5" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
