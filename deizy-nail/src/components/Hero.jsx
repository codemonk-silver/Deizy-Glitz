import React from "react";
import heroimg from "../assets/heroimg.png";
import { FaHandSparkles } from "react-icons/fa";
import { GiFootprint } from "react-icons/gi";
import { MdBrush } from "react-icons/md";

const Hero = () => {
  const services = [
    {
      id: 1,
      icon: <FaHandSparkles className="text-4xl text-pink-500" />,
      title: "Manicure",
      desc: "Professional hand and nail care treatments that leave your hands looking elegant and polished.",
    },
    {
      id: 2,
      icon: <GiFootprint className="text-4xl text-pink-500" />,
      title: "Pedicure",
      desc: "Relaxing foot treatments designed to rejuvenate and beautify your feet from heel to toe.",
    },
    {
      id: 3,
      icon: <MdBrush className="text-4xl text-pink-500" />,
      title: "Nail Art",
      desc: "Creative and custom nail designs that express your unique style and personality.",
    },
  ];

  return (
    <div className="px-6 md:px-12 lg:px-56">
      {/* Hero Section */}
      <div className="relative">
        <img
          className="w-full h-64 md:h-80 lg:h-96 object-cover mt-4 rounded-xl"
          src={heroimg}
          alt="heroimg"
        />
        <div className="absolute inset-0 bg-black/70 rounded-xl"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
            Experience The Art Of Beautiful Nails
          </h1>
          <p className="text-white max-w-2xl text-sm md:text-base">
            Welcome to our nail studio where creativity and precision meet. Let
            us pamper you with the finest nail care services
          </p>
          <button className="px-4 flex items-center py-1.5 sm:px-4 sm:py-2 bg-pink-500 font-semibold text-white text-sm sm:text-base rounded-md mt-6 hover:bg-pink-600 transition">
                Book Appointment
        </button>
        </div>
      </div>

      {/* Services Section */}
      <p className="mt-8 text-lg md:text-xl font-semibold">Our Services</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="border rounded-lg p-6 border-gray-300 hover:shadow-lg transition-shadow"
          >
            <div className="mb-4 flex justify-center md:justify-start">
              {service.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center md:text-left">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm text-center md:text-left">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
