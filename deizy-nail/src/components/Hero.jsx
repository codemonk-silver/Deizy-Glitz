import React, { memo } from "react";
import heroimg from "../assets/heroimg.png";
import { FaHandSparkles } from "react-icons/fa";
import { GiFootprint } from "react-icons/gi";
import { MdBrush } from "react-icons/md";
import { motion } from "framer-motion";

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

// ✅ Memoized service card to prevent re-renders
const ServiceCard = memo(({ service, index }) => (
  <motion.div
    custom={index}
    variants={{
      hidden: { opacity: 0, y: 15 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.08, duration: 0.4 },
      },
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    whileHover={{ y: -4 }}
    className="border rounded-lg p-6 border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
  >
    <div className="mb-4 flex justify-center md:justify-start">{service.icon}</div>
    <h3 className="text-lg md:text-xl font-bold mb-2 text-center md:text-left text-gray-800">
      {service.title}
    </h3>
    <p className="text-gray-600 text-sm text-center md:text-left leading-relaxed">
      {service.desc}
    </p>
  </motion.div>
));

ServiceCard.displayName = "ServiceCard";

const Hero = () => {
  // ✅ Replace this with your WhatsApp number (no +, no spaces, no leading zeros)
  const phoneNumber = "2347087095727"; 
  const message = "Hi, I’d like to book an appointment.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="px-4 md:px-12 lg:px-56 mt-4 overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full mt-4 rounded-xl overflow-hidden">
        {/* Background Image */}
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          src={heroimg}
          alt="heroimg"
          className="w-full h-76 sm:h-[20rem] lg:h-[24rem] object-cover"
          loading="lazy"
        />

        {/* Dark overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute inset-0 bg-black"
        />

        {/* Text Layer */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
            },
          }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide drop-shadow-lg"
          >
            Experience The Art Of Beautiful Nails
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="text-white max-w-2xl text-sm md:text-base leading-relaxed drop-shadow-md"
          >
            Welcome to our nail studio where creativity and precision meet.
            Let us pamper you with the finest nail care services.
          </motion.p>

          {/* ✅ WhatsApp Booking Button */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-2 bg-pink-500 font-semibold text-white text-sm sm:text-base rounded-md mt-6 hover:bg-pink-600 transition-colors duration-200 cursor-pointer"
          >
            Book Appointment
          </motion.a>
        </motion.div>
      </div>

      {/* Services Section */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mt-10 text-lg md:text-xl font-semibold text-center md:text-left"
      >
        Our Services
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default memo(Hero);
