import React, { useEffect, useState } from 'react'
import { dummyBookingData } from '../../src/assets/assets'

const ListBooking = () => {
  const [Booking, setBooking] = useState([])

  const SetBooking = () => {
    setBooking(dummyBookingData)
  }

  useEffect(() => {
    SetBooking()
  }, [])

  return (
    <div className='w-full'>
      <div className='w-full h-25 flex text-2xl items-center pl-8'>
        List &nbsp; <span className='text-red-400 font-bold underline'>Booking</span>
      </div>

      <div className='w-full flex flex-col'>
        {/* Header Row */}
        <div style={{ backgroundColor: "#672e2e" }} className='w-full flex relative h-15 justify-evenly'>
          <p className='absolute top-1/3 left-5'>Movie Name</p>
          <p className='absolute top-1/3 left-[35%]'>User Name</p>
          <p className='absolute top-1/3 left-[50%]'>Show Time</p>
          <p className='absolute top-1/3 right-45'>Seats</p>
          <p className='absolute top-1/3 right-5'>Amount</p>
        </div>

        {/* Data Rows */}
        {Booking.map((booking, index) => {
          const showTime = new Date(booking.show.showDateTime).toLocaleString('en-PK', {
            dateStyle: 'medium',
            timeStyle: 'short',
          })

          return (
            <div key={index} style={{ backgroundColor: "#1f0d0d" }} className='w-full flex relative h-15 justify-evenly'>
              <p className='absolute top-1/3 left-5'>{booking.show.movie.title}</p>
              <p className='absolute top-1/3 left-[35%]'>{booking.user.name}</p>
              <p className='absolute top-1/3 left-[50%]'>{showTime}</p>
              <p className='absolute top-1/3 right-45'>{booking.bookedSeats.join(', ')}</p>
              <p className='absolute top-1/3 right-5'>Rs {booking.amount}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListBooking
