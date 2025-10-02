import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-56 justify-between items-center h-16'>
        <h1 className='text-4xl font-bold text-pink-600'>Deizy Glitz</h1>
        <div className='flex items-center gap-10'>
            <NavLink to='/' className='flex flex-col items-center justify-center min-h-[32px]'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-pink-300 hidden'></hr>
            </NavLink>
             <NavLink to='/service' className='flex flex-col items-center justify-center min-h-[32px]'>
                <p>Services</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-pink-300 hidden'></hr>
            </NavLink>
             <NavLink to='/portfolio' className='flex flex-col items-center justify-center min-h-[32px]'>
                <p>Portfolio</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-pink-300 hidden'></hr>
            </NavLink>
             <NavLink to='/testimonials' className='flex flex-col items-center justify-center min-h-[32px]'>
                <p>Testimonials</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-pink-300 hidden'></hr>
            </NavLink>
             <NavLink to='/about' className='flex flex-col items-center justify-center min-h-[32px]'>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-pink-300 hidden'></hr>
            </NavLink>
             <NavLink to='/contact' className='flex flex-col items-center justify-center min-h-[32px]'>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-pink-300 hidden'></hr>
            </NavLink>
            <button className='px-3 py-1 rounded-md bg-pink-600 text-white font-medium ml-4'>Book Now</button>
        </div>
    </div>
  )
}

export default Navbar