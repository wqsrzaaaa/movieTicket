import React from 'react'
import bg from '../../src/assets/backgroundImage.png'
import marvel from '../../src/assets/marvelLogo.svg'

const FirstPage = () => {
  return (
    <div className='w-full h-screen object-center object-cover'>
      <img className='absolute top-0 left-0' src={bg} alt="" />
      <div className='w-110 relative ml-45 z-6 h-full flex flex-col  justify-center gap-5 '>
        <img className='w-70 ' src={marvel} alt="" />
        <h1 className='text-6xl font-bold'>Guardians of the Galaxy</h1>
        <p>Action | Advanture | Sci-Fi </p>
        <p>Guardians of the Galaxy is a fun, action-packed Marvel film that brings together a misfit crew of space outlaws. With its mix of humor, heart, and a killer '70s soundtrack, it stands out from other superhero movies.</p>
      </div>
    </div>
  )
}

export default FirstPage