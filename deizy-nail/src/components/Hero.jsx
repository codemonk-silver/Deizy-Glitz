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

  // Smooth hero fade + rise
  const heroFade = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 18, duration: 1 },
    },
  };

  // Text flow with stagger
  const textContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25, delayChildren: 0.3 },
    },
  };

  const textItem = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 16 },
    },
  };

  // Card appearance
  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15 + 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    }),
  };

  return (
    <div className="px-6 md:px-12 lg:px-56 mt-4 overflow-hidden transform-gpu">
      {/* 🔹 Hero Section */}
      <div className="relative w-full mt-4 rounded-xl overflow-hidden will-change-transform">
        {/* Background Image with smooth zoom-out */}
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 2,
          }}
          src={heroimg}
          alt="heroimg"
          className="w-full h-[18rem] sm:h-[20rem] lg:h-[24rem] object-cover transform-gpu"
        />

        {/* Dark overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-black"
        />

        {/* Text Layer */}
        <motion.div
          variants={textContainer}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 will-change-transform"
        >
          <motion.h1
            variants={textItem}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide drop-shadow-lg"
          >
            Experience The Art Of Beautiful Nails
          </motion.h1>

          <motion.p
            variants={textItem}
            className="text-white max-w-2xl text-sm md:text-base leading-relaxed drop-shadow-md"
          >
            Welcome to our nail studio where creativity and precision meet.
            Let us pamper you with the finest nail care services.
          </motion.p>

          <motion.button
            variants={textItem}
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 25px rgba(236,72,153,0.7)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 250, damping: 12 }}
            className="px-8 py-2 bg-pink-500 font-semibold text-white text-sm sm:text-base rounded-md mt-6 hover:bg-pink-600 transition-all duration-300"
          >
            Book Appointment
          </motion.button>
        </motion.div>
      </div>

      {/* 🔹 Services Section */}
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 16,
          duration: 0.7,
        }}
        viewport={{ once: true }}
        className="mt-10 text-lg md:text-xl font-semibold text-center md:text-left"
      >
        Our Services
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 transform-gpu">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.04,
              transition: { type: "spring", stiffness: 200 },
            }}
            className="border rounded-lg p-6 border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-500 will-change-transform"
          >
            <div className="mb-4 flex justify-center md:justify-start">
              {service.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-2 text-center md:text-left text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm text-center md:text-left leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
