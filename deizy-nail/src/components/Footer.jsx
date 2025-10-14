import React, { useEffect, useRef } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const elements = footerRef.current.querySelectorAll(".fade-up");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-10");
            entry.target.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={footerRef} className="px-6 md:px-12 lg:px-56 py-10">
      <div className="bg-pink-100 w-full px-6 md:px-12 pt-10 pb-6 flex flex-col rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-500">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-16">
          {/* Brand */}
          <div className="flex flex-col md:w-1/3 fade-up opacity-0 translate-y-10 transition-all duration-700 ease-out">
            <p className="text-xl font-semibold mb-2 text-gray-800">
              Deizy Glitz
            </p>
            <p className="text-gray-700 leading-relaxed">
              Experience the art of beautiful nails. Your go-to place for
              stunning nail design and professional care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:w-1/3 fade-up opacity-0 translate-y-10 transition-all duration-700 ease-out delay-100">
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
          </div>

          {/* Connect */}
          <div className="flex flex-col md:w-1/3 fade-up opacity-0 translate-y-10 transition-all duration-700 ease-out delay-200">
            <p className="text-xl font-semibold mb-2 text-gray-800">Connect</p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://instagram.com/deizy_glitz"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110 hover:rotate-3"
              >
                <FaInstagram
                  size={28}
                  className="text-pink-600 hover:text-pink-800 transition-colors duration-300"
                />
              </a>
              <a
                href="https://wa.me/2347087095727"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-transform duration-300 hover:scale-110 hover:-rotate-3"
              >
                <FaWhatsapp
                  size={28}
                  className="text-green-600 hover:text-green-800 transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 my-6 w-full transition-all duration-1000 ease-out fade-up opacity-0 translate-y-6 delay-300"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-600 fade-up opacity-0 translate-y-6 transition-all duration-700 ease-out delay-500">
          © {new Date().getFullYear()} Deizy Glitz. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
