import React, { useEffect, useState } from 'react'
import { dummyShowsData } from '../../src/assets/assets' 

const ListShows = () => {
  const [Shows, setShows] = useState([])

  const SetData = () => {
    setShows([{
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
      occupiedSeats: {
        A1: "user1",
        B1: "user2",
        C1: "user2",
      }
    }])
  }

  useEffect(() => {
    SetData()
  }, [])

  return (
    <div className='w-full'>
      <div className='w-full h-25 flex text-2xl items-center pl-8'>
        List &nbsp; <span className='text-red-400 font-bold underline'>Shows</span>
      </div>

      <div className='w-full flex flex-col'>
        <div style={{ backgroundColor: "#672e2e" }} className='w-full flex relative h-15 justify-evenly'>
          <p className='absolute top-1/3 left-5'>Movie Name</p>
          <p className='absolute top-1/3 left-[40%]'>Show Time</p>
          <p className='absolute top-1/3 left-[60%]'>Total Booking</p>
          <p className='absolute top-1/3 right-5'>Earnings</p>
        </div>

        {Shows.map((show, index) => {
          const bookingCount = Object.keys(show.occupiedSeats).length
          const earnings = bookingCount * show.showPrice
          const formattedTime = new Date(show.showDateTime).toLocaleString('en-PK', {
            dateStyle: 'medium',
            timeStyle: 'short',
          })

          return (
            <div key={index} style={{ backgroundColor: "#1f0d0d" }} className='w-full flex relative h-15 justify-evenly'>
              <p className='absolute top-1/3 left-5'>{show.movie.title}</p>
              <p className='absolute top-1/3 left-[40%]'>{formattedTime}</p>
              <p className='absolute top-1/3 left-[60%]'>{bookingCount}</p>
              <p className='absolute top-1/3 right-5'>Rs {earnings}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListShows
