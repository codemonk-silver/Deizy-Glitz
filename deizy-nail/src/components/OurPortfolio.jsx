import React from 'react'
import f1 from '../assets/f1.jpg'
import tb from '../assets/tb.jpg'
import f2 from '../assets/f2.jpg'
import ta from '../assets/ta.jpg'
import tc from '../assets/tc.jpg'
import f3 from '../assets/f3.jpg'

const OurPortfolio = () => {
  return (
    <div className="py-10">
      {/* Title */}
      <p className="text-lg md:text-xl font-semibold mb-4 text-center md:text-left px-4 sm:px-8 lg:px-56">
        Our Portfolio
      </p>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 
                      px-6 sm:px-8 lg:px-56">
        <img className="w-full h-auto sm:h-64 lg:h-80 object-contain sm:object-cover rounded-md" src={f1} alt="" />
        <img className="w-full h-auto sm:h-64 lg:h-80 object-contain sm:object-cover rounded-md" src={tb} alt="" />
        <img className="w-full h-auto sm:h-64 lg:h-80 object-contain sm:object-cover rounded-md" src={f2} alt="" />
        <img className="w-full h-auto sm:h-64 lg:h-80 object-contain sm:object-cover rounded-md" src={ta} alt="" />
        <img className="w-full h-auto sm:h-64 lg:h-80 object-contain sm:object-cover rounded-md" src={tc} alt="" />
        <img className="w-full h-auto sm:h-64 lg:h-80 object-contain sm:object-cover rounded-md" src={f3} alt="" />
      </div>
    </div>
  )
}

export default OurPortfolio
