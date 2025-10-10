import React from "react";
import { motion } from "framer-motion";
import { FaHandHoldingHeart, FaPalette, FaUserCheck } from "react-icons/fa6";
import heroimg from "../assets/heroimg.png";
import mypics from "../assets/mypics.jpg";
import ta from "../assets/ta.jpg";
import tc from "../assets/tc.jpg";

const About = () => {
  const teamMembers = [
    {
      img: mypics,
      name: "Modasola Elufisan",
      job: "Lead Nail Artist",
      desc: "With over 10 years of experience, Modasola specializes in creative nail designs and luxury hand treatments.",
    },
    {
      img: ta,
      name: "Amara Benson",
      job: "Senior Nail Technician",
      desc: "Amara’s precision and gentle care make her a favorite for both manicure and pedicure services.",
    },
    {
      img: tc,
      name: "Tosin Adeyemi",
      job: "Nail Art Specialist",
      desc: "Tosin brings your nail ideas to life with stunning art, color, and custom design techniques.",
    },
  ];

  const commitmentCards = [
    {
      icon: <FaHandHoldingHeart size={40} className="text-pink-600" />,
      title: "Hygiene and Safety",
      desc: "We uphold the highest standards of cleanliness, sterilization, and client safety in every service.",
    },
    {
      icon: <FaPalette size={40} className="text-pink-600" />,
      title: "Creativity and Artistry",
      desc: "Our team blends modern trends with artistic precision to craft unique nail designs that inspire confidence.",
    },
    {
      icon: <FaUserCheck size={40} className="text-pink-600" />,
      title: "Client Focused",
      desc: "Your comfort and satisfaction are at the heart of everything we do — every visit is a personalized experience.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-28 xl:px-56 py-10 overflow-hidden">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative mb-12"
      >
        <img
          className="w-full h-76 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl"
          src={heroimg}
          alt="hero"
        />
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight"
          >
            Where Artistry Meets Your Fingertips
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white text-sm sm:text-base max-w-xl"
          >
            Pamper Yourself With Our Signature Nail Treatments
          </motion.p>
        </div>
      </motion.div>

      {/* STORY SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="lg:py-8 pt-1"
      >
        <p className="text-lg sm:text-xl font-bold mb-3 text-center sm:text-left">
          Our Story
        </p>

        <div className="flex flex-col lg:flex-row justify-between gap-8 mt-5 items-center">
          <motion.div variants={fadeUp} className="flex flex-col lg:w-1/2">
            <p className="text-base sm:text-lg font-medium mb-2">
              From Passion to Profession
            </p>
            <p className="text-pink-700 mb-4 leading-relaxed text-sm sm:text-base">
              Founded in 2016 by lead artist{" "}
              <span className="font-semibold">Modasola Elufisan</span>, our salon was born from a lifelong passion for nail art and a desire to create a welcoming space where clients feel pampered and beautiful.
            </p>
            <p className="text-base sm:text-lg font-medium mb-2">Our Mission</p>
            <p className="text-pink-700 leading-relaxed text-sm sm:text-base">
              Our mission is to deliver exceptional nail services in a clean, safe, and friendly environment.
            </p>
          </motion.div>

          <motion.img
            variants={fadeUp}
            className="w-full lg:w-1/2 h-60 sm:h-72 lg:h-80 object-cover rounded-xl"
            src={heroimg}
            alt="Our Story"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* TEAM SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-10"
      >
        <p className="text-lg sm:text-xl font-bold mb-10 text-center">
          Meet Our Talented Team
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ delay: i * 0.2 }}
              className="bg-white shadow-lg rounded-xl flex flex-col items-center text-center p-5 sm:p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* ✅ Improved Image Quality */}
              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                src={member.img}
                alt={member.name}
                loading="lazy"
                srcSet={`
                  ${member.img} 1x,
                  ${member.img} 2x
                `}
                className="w-48 h-48 sm:w-52 sm:h-52 object-cover object-center rounded-full mb-4 ring-2 ring-pink-200 shadow-lg transition-transform duration-500 hover:scale-105"
              />
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-pink-600 text-xs sm:text-sm font-medium mb-2">
                {member.job}
              </p>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4">
                {member.desc}
              </p>
              <button className="bg-pink-600 text-white text-xs sm:text-sm px-4 py-2 rounded-full hover:bg-pink-700 transition-all">
                Book with {member.name.split(" ")[0]}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* COMMITMENT SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-12"
      >
        <p className="text-lg sm:text-xl font-bold mb-10 text-center">
          Our Commitment to You
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {commitmentCards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={{ delay: i * 0.2 }}
              className="bg-white shadow-md rounded-xl p-5 sm:p-6 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
