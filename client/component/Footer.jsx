import { Link } from 'react-router-dom';

const Footer = () => {
  return (
      <footer className='w-full mt-16 p-5 pl-9 h-[40vh] flex items-center flex-col justify-center'>
        <div className='w-full h-[90%] flex pb-7 items-center justify-evenly'>
          <div className='w-1/2 flex flex-col gap-4 '>
            <h1 className='text-2xl font-bold'><span className='text-red-400'> Q</span>uickShow</h1>
            <p className='w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, hic omnis fugit dignissimos esse sunt accusamus possimus amet nobis in unde cumque placeat, qui consequatur.</p>
          </div>
          <div className='w-1/2 flex items-center gap-8'>
           <div className='w-1/2 flex flex-col gap-4 items-center justify-center'>
            <h1 className='font-bold'>Company</h1>
             <Link>Home</Link>
             <Link>Contact us</Link>
             <Link>About us</Link>
           </div>
           <div className='w-1/2 flex flex-col gap-4 items-center justify-center'>
            <h1 className='font-bold'>Get in touch</h1>
             <p>Contact@contact.com</p>
           </div>
          </div>
        </div>
        <div className='w-[90%] h-[120px] border-t-1 flex items-center justify-center border-zinc-600 '>
          <p>All rights reserved @wqsrzz</p>
        </div>
      </footer>
  )
}

export default Footer