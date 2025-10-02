import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // icons for mobile toggle

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/service", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex justify-between items-center h-16 px-6 md:px-20 lg:px-56 shadow-md bg-white relative">
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink-600">
        Deizy Glitz
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link, index) => (
          <NavLink
            key={index}
            to={link.to}
            className="flex flex-col items-center justify-center min-h-[32px] hover:text-pink-500 transition-colors"
          >
            <p>{link.label}</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-pink-300 hidden" />
          </NavLink>
        ))}
        <button className="px-3 py-1 rounded-md bg-pink-600 text-white font-medium ml-4 hover:bg-pink-700 transition">
          Book Now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl text-pink-600 focus:outline-none"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 gap-4 md:hidden z-20">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.to}
              onClick={() => setMenuOpen(false)} // close menu when clicked
              className="text-lg hover:text-pink-500 transition-colors"
            >
              {link.label}
            </NavLink>
          ))}
          <button className="px-4 py-2 rounded-md bg-pink-600 text-white font-medium hover:bg-pink-700 transition">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
