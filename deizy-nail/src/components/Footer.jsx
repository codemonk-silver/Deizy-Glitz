import React from 'react'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-6 md:px-12 lg:px-56 py-10">
      <div className="bg-pink-100 w-full px-6 md:px-12 pt-10 pb-6 flex flex-col rounded-lg">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-16">
          
          {/* Brand */}
          <div className="flex flex-col md:w-1/3">
            <p className="text-2xl font-semibold mb-2">
              Deizy Glitz
            </p>
            <p className="text-gray-700">
              Experience the art of beautiful nails. Your go-to place for stunning
              nail design and professional care.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:w-1/3">
            <p className="text-2xl font-semibold mb-2">
              Quick Links
            </p>
            <div className="flex flex-col space-y-1">
              <a href="">Home</a>
              <a href="">Services</a>
              <a href="">Portfolio</a>
              <a href="">About</a>
            </div>
          </div>

          {/* Connect */}
          <div className="flex flex-col md:w-1/3">
            <p className="text-2xl font-semibold mb-2">
              Connect
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={28} className="text-pink-600 hover:text-pink-800" />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={28} className="text-green-600 hover:text-green-800" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-400 my-6"></div>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Deizy Glitz. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
