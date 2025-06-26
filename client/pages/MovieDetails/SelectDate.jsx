import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const dateTime = {
  '2025-06-17': {},
  '2025-06-18': {},
  '2025-06-19': {},
  '2025-06-20': {},
}


const SelectDate = () => {

  const location = useLocation()
  const movie = location.state

  console.log(movie);


  const [selectedDates, setSelectedDates] = useState([])

  const toggleDate = (date) => {
    setSelectedDates((prevDates) =>
      prevDates.includes(date)
        ? prevDates.filter((d) => d !== date)
        : [...prevDates, date]
    )
  }

  const navigate = useNavigate()

  const [Messege, setMessege] = useState(false)

  return (
    <div className='w-full h-[50vh] flex items-center justify-center'>
      <div className='w-[80%]  bg-red-400/15 backdrop-blur-md rounded-xl shadow-lg p-6'>
        <div className='h-[60px] flex items-center font-bold text-2xl text-white'>
          Choose Date
        </div>

        <div className='w-full flex items-center gap-4 relative overflow-x-auto py-4'>
          {Object.keys(dateTime).map((date) => {
            const d = new Date(date)
            const isSelected = selectedDates.includes(date)

            return (
              <button
                onClick={() => toggleDate(date)}
                key={date}
                className={`flex flex-col cursor-pointer items-center justify-center px-4 py-2 rounded-lg border transition backdrop-blur-sm
                  ${isSelected
                    ? 'bg-white/30  text-white opacity-20'
                    : 'bg-white/10  text-white opacity-100'}
                  hover:scale-105 hover:bg-white/20`}
              >
                <span className='text-lg'>{d.getDate()}</span>
                <span className='text-sm'>
                  {d.toLocaleDateString('en-US', { month: 'short' })}
                </span>
              </button>
            )
          })}

          <button
            onClick={() => 
            { if(selectedDates.length > 0){
              setMessege(false)
              navigate(`/movie/${movie.id}/${movie.id}`, {
              state: {
                movie,
                selectedDates,
              } 
            })
            } else{
                setMessege(true)
              }
          
          }
            }
            className='pl-6 pr-6 p-3 bg-red-400 rounded-lg absolute right-9'
          >
            Book Now
          </button>

        </div>
         {Messege ? <p>Please select a date</p> : ""}
      </div>
    </div>
  )
}

export default SelectDate
