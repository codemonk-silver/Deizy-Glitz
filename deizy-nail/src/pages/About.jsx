import React from 'react'
import heroimg from '../assets/heroimg.png'

const About = () => {
  return (
    <div className='px-56 py-10'>
        <div className="relative">
                <img
                  className="w-full h-76 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl"
                  src={heroimg}
                  alt="hero"
                />
                <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
        
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3">
                    Explore Our Services
                  </h1>
                  <p className="text-white text-sm sm:text-base max-w-xl">
                    Pamper Yourself With Our Signature Nail Treatments
                  </p>
                </div>
        </div>
         <div className='py-8'>
              <p className='text-xl font-bold'>Our Story</p>
              <div className='flex justify-between gap-10 mt-5'>
                <div className='flex flex-col w-7xl'>
                  <p className='text-md text-lg font-medium mb-2'>
                    From Passion to Profession
                  </p>
                  <p className='text-pink-700 font-medium mb-4'>
                      Founded in 2016 by the lead artist Modasola Elufisan. Our Salon was born from a lifelong passion for nail art and a desire to create a welcoming space where clients can feel pampered and beautiful. We believe that nil care is a form of self-expression, and our mission is to provide an unparalleled eperience that leaves you feeling confidant and inspired.
                  </p>
                  <p className='text-md font-medium text-lg mb-2'>Our Mission</p>
                  <p className='text-pink-700 font-medium'>
                    Our Mission is to deliver exceptional nail services in a clean, safe, and friendly environment. We are committed to using high quality products and staying up-to-date with the latest trends and techniques to ensure you received the best care possible.
                  </p>
                </div>
                <img className='w-full h-78 object-cover' src={heroimg} alt='' />
              </div>
         </div>
         <div className=''>

         </div>
    </div>
  )
}

export default About