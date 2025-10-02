import React from 'react'
import heroimg from '../assets/heroimg.png'
import { FaHandSparkles } from 'react-icons/fa'
import { GiFootprint } from 'react-icons/gi'
import { MdBrush } from 'react-icons/md'

const Hero = () => {
  const services = [
    {
      id: 1,
      icon: <FaHandSparkles className='text-4xl text-pink-500' />,
      title: 'Manicure',
      desc: 'Professional hand and nail care treatments that leave your hands looking elegant and polished.'
    },
    {
      id: 2,
      icon: <GiFootprint className='text-4xl text-pink-500' />,
      title: 'Pedicure',
      desc: 'Relaxing foot treatments designed to rejuvenate and beautify your feet from heel to toe.'
    },
    {
      id: 3,
      icon: <MdBrush className='text-4xl text-pink-500' />,
      title: 'Nail Art',
      desc: 'Creative and custom nail designs that express your unique style and personality.'
    }
  ]

  return (
    <div className='px-56'>
        <div className='relative'>
            <img className='w-full h-96 object-cover mt-4 rounded-xl' src={heroimg} alt='heroimg' />
            <div className='absolute inset-0 bg-black/70 rounded-xl'></div>
            <div className='absolute text-white top-26 left-26'>
              <h1 className='text-3xl font-bold text-center mb-3'>Experience The Art Of Beautiful Nails</h1>
              <p>Welcome to our nail studio where creativity and precision meet. Let us pamper you with the finest nail care services</p>
              <button className='px-4 py-2 bg-pink-500 text-white rounded-lg mt-8 ml-80'>
                Book Appointment
              </button>
            </div>
        </div>
        <p className='mt-8 text-xl font-semibold'>Our Services</p>
        <div className='flex mt-3 gap-3'>
              {services.map((service) => (
                <div key={service.id} className='border rounded-lg p-6 flex-1 border-gray-300 hover:shadow-lg transition-shadow'>
                  <div className='mb-4'>{service.icon}</div>
                  <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                  <p className='text-gray-600 text-sm'>{service.desc}</p>
                </div>
              ))}
        </div>

    </div>
  )
}

export default Hero