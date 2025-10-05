import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="px-6 md:px-12 lg:px-56 py-10"
    >
      <div className="bg-pink-100 w-full px-6 md:px-12 pt-10 pb-6 flex flex-col rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-500">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-16">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:w-1/3"
          >
            <p className="text-xl font-semibold mb-2 text-gray-800">
              Deizy Glitz
            </p>
            <p className="text-gray-700 leading-relaxed">
              Experience the art of beautiful nails. Your go-to place for stunning
              nail design and professional care.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:w-1/3"
          >
            <p className="text-xl font-semibold mb-2 text-gray-800">
              Quick Links
            </p>
            <div className="flex flex-col space-y-2">
              {["Home", "Services", "Portfolio", "About"].map((link, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-gray-700 hover:text-pink-600 transition-all duration-300 hover:translate-x-1"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:w-1/3"
          >
            <p className="text-xl font-semibold mb-2 text-gray-800">
              Connect
            </p>
            <div className="flex gap-4 mt-2">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 5 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  size={28}
                  className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, rotate: -5 }}
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp
                  size={28}
                  className="text-green-600 hover:text-green-800 transition-colors duration-300"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.8 }}
          className="border-t border-gray-400 my-6"
        ></motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-sm text-gray-600"
        >
          © {new Date().getFullYear()} Deizy Glitz. All rights reserved.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Footer;
