import React from "react";
import heroimg from "../assets/heroimg.png";
import { FaHandSparkles } from "react-icons/fa";
import { GiFootprint } from "react-icons/gi";
import { MdBrush } from "react-icons/md";
import { motion } from "framer-motion";

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

  // Animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="px-6 md:px-12 lg:px-56">
      {/* Hero Section */}
      <div className="relative w-full mt-4 rounded-xl overflow-hidden">
  {/* Background Image */}
  <motion.img
    initial={{ scale: 1.1 }}
    animate={{ scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    src={heroimg}
    alt="heroimg"
    className="w-full h-[18rem] sm:h-[20rem] lg:h-[24rem] object-cover"
  />

  {/* Overlay (exact same size as img) */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Overlay Content */}
  <motion.div
    variants={textVariant}
    initial="hidden"
    animate="visible"
    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
  >
    <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
      Experience The Art Of Beautiful Nails
    </h1>
    <p className="text-white max-w-2xl text-sm md:text-base">
      Welcome to our nail studio where creativity and precision meet. Let
      us pamper you with the finest nail care services.
    </p>
    <motion.button
      whileHover={{
        scale: 1.08,
        boxShadow: "0px 0px 15px rgba(236, 72, 153, 0.5)",
      }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-2 sm:px-4 sm:py-2 bg-pink-500 font-semibold text-white text-sm sm:text-base rounded-md mt-6 hover:bg-pink-600 transition"
    >
      Book Appointment
    </motion.button>
  </motion.div>
</div>


      {/* Services Section */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-8 text-lg md:text-xl font-semibold text-center md:text-left"
      >
        Our Services
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="border rounded-lg p-6 border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all"
          >
            <div className="mb-4 flex justify-center md:justify-start">
              {service.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center md:text-left text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm text-center md:text-left">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
