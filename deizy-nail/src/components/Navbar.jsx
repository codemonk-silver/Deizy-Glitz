import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/service", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-between items-center h-16 px-6 md:px-20 lg:px-56 shadow-md bg-white relative z-50 will-change-transform will-change-opacity"
    >
      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink-600"
      >
        Deizy Glitz
      </motion.h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
          >
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `relative flex flex-col items-center justify-center min-h-[32px] transition-all duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-500"
                }`
              }
            >
              <span>{link.label}</span>
              <motion.div
                className="h-[2px] w-0 bg-pink-500 transition-all duration-300"
                whileHover={{ width: "50%" }}
              />
            </NavLink>
          </motion.div>
        ))}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-3 py-1 rounded-md bg-pink-600 text-white font-medium ml-4 hover:bg-pink-700 transition"
        >
          Book Now
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl text-pink-600 focus:outline-none"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-6 md:hidden z-40"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-gray-700 hover:text-pink-600 transition-colors"
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 rounded-md bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
            >
              Book Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
