import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-32 xl:px-56 py-16 bg-white text-gray-800 overflow-hidden">
      {/* TITLE */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
      >
        Get In Touch
      </motion.h2>

      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE - CONTACT INFO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-center space-y-6"
        >
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            We'd love to hear from you! Whether you want to book an appointment,
            ask a question, or just say hi — reach out and we’ll respond soon.
          </p>

          <div className="flex items-center gap-3 hover:translate-x-1 transition-all duration-300">
            <FaPhoneAlt className="text-pink-600 text-xl sm:text-2xl" />
            <span className="text-gray-700 text-sm sm:text-base">
              +234 812 345 6789
            </span>
          </div>

          <div className="flex items-center gap-3 hover:translate-x-1 transition-all duration-300">
            <FaEnvelope className="text-pink-600 text-xl sm:text-2xl" />
            <span className="text-gray-700 text-sm sm:text-base">
              hello@nailstudio.com
            </span>
          </div>

          <div className="flex items-center gap-3 hover:translate-x-1 transition-all duration-300">
            <FaMapMarkerAlt className="text-pink-600 text-xl sm:text-2xl" />
            <span className="text-gray-700 text-sm sm:text-base leading-snug">
              24 Pink Avenue, Lagos, Nigeria
            </span>
          </div>
        </motion.div>

        {/* RIGHT SIDE - FORM */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-pink-50 p-6 sm:p-8 rounded-2xl shadow-md space-y-5 hover:shadow-lg transition-shadow duration-500"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none transition-all duration-300"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
