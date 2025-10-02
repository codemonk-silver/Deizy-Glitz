import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-56 justify-between'>
        <h1 className='text-4xl font-bold text-pink-600'>Deizy Glitz</h1>
        <div className='flex gap-10'>
            <NavLink className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] text-pink-950'></hr>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar