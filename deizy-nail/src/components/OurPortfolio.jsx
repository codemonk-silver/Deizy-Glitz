import React from 'react'
import f1 from '../assets/f1.jpg'
import tb from '../assets/tb.jpg'
import f2 from '../assets/f2.jpg'
import ta from '../assets/ta.jpg'
import tc from '../assets/tc.jpg'
import f3 from '../assets/f3.jpg'

const OurPortfolio = () => {
  return (
    <div className='px-56 py-10'>
            <p className='text-xl font-semibold mb-3'>Our Portfolio</p>
            <div className='grid gap-3 grid-cols-3'>
                <img className='w-5xl h-86 object-fill rounded-sm' src={f1} alt='' />
                <img className='w-5xl h-86 object-fill rounded-sm' src={tb} alt='' />
                <img className='w-5xl h-86 object-fill rounded-sm' src={f2} alt='' />
                <img className='w-5xl h-86 object-fill rounded-sm' src={ta} alt='' />
                <img className='w-5xl h-86 object-fill rounded-sm' src={tc} alt='' />
                <img className='w-5xl h-86 object-fill rounded-sm' src={f3} alt='' />
            </div>
    </div>
  )
}

export default OurPortfolio