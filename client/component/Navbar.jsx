import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full text-white z-999 absolute top-0 left-0 h-[80px] flex items-center justify-evenly'>
      <Link className='w-40 text-xl' to={'/'}> <span className='text-red-700'>Q</span>uickShow </Link>
      <div className='w-100 h-[70%] flex gap-8 bg-white/15 items-center justify-center backdrop-blur-md rounded-full  border-white/20 shadow-lg'>
        <Link to={'/'} className="hover:text-red-400 transition">Home</Link>
        <Link className="hover:text-red-400 transition">Movies</Link>
        <Link className="hover:text-red-400 transition">Theater</Link>
        <Link className="hover:text-red-400 transition">Releases</Link>
      </div>
      <div className='w-40 flex gap-8'>

        <div className='bg-red-400 p-2 rounded-full pl-8 pr-8'>Login</div>
      </div>
    </div>
  )
}

export default Navbar