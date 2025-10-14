import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // fade-in when mounted
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/service", label: "Services" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`flex justify-between items-center h-16 px-6 md:px-20 lg:px-56 shadow-md bg-white relative z-50 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {/* Logo */}
      <h1
        className={`text-2xl md:text-3xl lg:text-4xl font-bold text-pink-600 transform transition-all duration-700 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        Deizy Glitz
      </h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link, index) => (
          <div
            key={index}
            style={{ transitionDelay: `${index * 100}ms` }}
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `relative group flex flex-col items-center justify-center min-h-[32px] transition-all duration-300 ${
                  isActive ? "text-pink-600" : "text-gray-700 hover:text-pink-500"
                }`
              }
            >
              <span>{link.label}</span>
              {/* underline animation */}
              <span className="absolute bottom-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-1/2"></span>
            </NavLink>
          </div>
        ))}

        <button className="px-3 py-1 rounded-md bg-pink-600 text-white font-medium ml-4 hover:bg-pink-700 active:scale-95 transition-all duration-300">
          Book Now
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden text-2xl text-pink-600 focus:outline-none active:scale-95 transition-transform duration-200"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-6 md:hidden z-40 animate-navbarSlideDown">
          {navLinks.map((link, index) => (
            <div
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="opacity-0 animate-navbarFadeIn"
            >
              <NavLink
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-gray-700 hover:text-pink-600 transition-colors duration-300"
              >
                {link.label}
              </NavLink>
            </div>
          ))}

          <button className="px-5 py-2 rounded-md bg-pink-600 text-white font-semibold hover:bg-pink-700 active:scale-95 transition-all duration-300">
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
