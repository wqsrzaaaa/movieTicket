import { Link } from 'react-router-dom'
import MovieCard from './MovieCard'
import BlurCircle from '../BlurCircle'


const SecondPage = () => {
  return (
     <div className='w-full mt-35 p-15 relative '>
          <BlurCircle className = 'absolute right-20 top-0' />
        <div className='flex justify-between '>
          <p className='font-bold'>Now Showing</p>
          <Link className='text-gray-700'>View all</Link>
        </div>
            <div className='flex gap-5 flex-wrap mt-20 justify-center'>
              <MovieCard/>
            </div>
      </div>
  )
}

export default SecondPage