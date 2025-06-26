import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import screenImage from '../../src/assets/screenImage.svg'
import SeatSelection from './SeatSelection'
import BlurCircle from '../BlurCircle'

const FirstPgBooking = () => {

 useEffect(() => {
   window.scrollTo(0, 0);
 }, []);
  

  const location = useLocation()
  const { movie, selectedDates } = location.state || {}

 

  return (
    <>
      <div className='w-full mt-30  flex items-center relative'>
        <BlurCircle className="absolute top-0 left-45 scale-125" />
        <BlurCircle className="absolute top-120 left-45 scale-125" />
        <BlurCircle className="absolute top-70 right-45 scale-125" />
      <div className='w-1/3 h-full  flex items-center flex-col justify-center '>
        <div className='w-[300px] flex items-center gap-6 pt-9 pb-9 flex-col  
        bg-red-300/20 backdrop-blur-md rounded-2xl shadow-md'>
          <p>Your selected time : </p>
          {selectedDates.map((date, index) => (
            <div key={index} className='text-white  text-xl'>
              {date}
            </div>
          ))}
        </div>

      </div>
      <div className='w-[60%] flex flex-col justify-center items-center h-full'>
        <h1 className='text-xl font-bold'>Select your seat</h1>
        <img className='m-4' src={screenImage} alt="" />
        <p className='text-zinc-400'>SCREEN SIDE</p>
        <SeatSelection/>
      </div>

    </div>
      
      

    </>
  )
}

export default FirstPgBooking