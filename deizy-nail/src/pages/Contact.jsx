import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// 🔧 Optimized animation settings
const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1], // Smooth "easeOutQuart"
    },
  },
};

const Contact = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-32 xl:px-56 py-20 bg-white text-gray-800 overflow-hidden will-change-transform">
      {/* Title */}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-14 tracking-tight"
      >
        Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* Left Side */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.15 }}
          className="flex flex-col justify-center space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, ease: "easeOut" },
            }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed"
          >
            We'd love to hear from you! Whether you want to book an appointment,
            ask a question, or just say hi — reach out and we’ll respond soon.
          </motion.p>

          {/* Contact Info Items */}
          {[
            {
              icon: <FaPhoneAlt className="text-pink-600 text-xl sm:text-2xl" />,
              text: "+234 812 345 6789",
            },
            {
              icon: <FaEnvelope className="text-pink-600 text-xl sm:text-2xl" />,
              text: "hello@nailstudio.com",
            },
            {
              icon: <FaMapMarkerAlt className="text-pink-600 text-xl sm:text-2xl" />,
              text: "24 Pink Avenue, Lagos, Nigeria",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.2 + index * 0.15,
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              viewport={{ once: true }}
              className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-500"
            >
              {item.icon}
              <span className="text-gray-700 text-sm sm:text-base">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Side (Form) */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.3 }}
          className="bg-pink-50 p-6 sm:p-8 rounded-2xl shadow-md space-y-5 hover:shadow-xl transition-all duration-700 will-change-transform"
        >
          {["Your Name", "Email Address"].map((label, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.2 + i * 0.15,
                  duration: 0.9,
                  ease: [0.25, 0.1, 0.25, 1],
                },
              }}
              viewport={{ once: true }}
            >
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                {label}
              </label>
              <input
                type={label === "Email Address" ? "email" : "text"}
                placeholder={`Enter your ${label.toLowerCase()}`}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-500"
              />
            </motion.div>
          ))}

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.9, ease: "easeOut" },
            }}
            viewport={{ once: true }}
          >
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none bg-white transition-all duration-500"
            ></textarea>
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 6px 20px rgba(236,72,153,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-500"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
