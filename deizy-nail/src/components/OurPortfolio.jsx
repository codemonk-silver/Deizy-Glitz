import React, { useEffect, useState } from "react";
import hom from "../assets/hom.jpg";
import homm from "../assets/homm.jpg";
import hoom from "../assets/hoom.jpg";
import pedi from "../assets/pedi.jpg";
import enchan from "../assets/enchan.jpg";
import manicu from "../assets/manicu.jpg";

const images = [hom, homm, hoom, pedi, enchan, manicu];

const OurPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-6 md:px-12 lg:px-56 py-10">
      {/* Title */}
      <p
        className={`text-lg md:text-xl font-semibold mb-6 text-center md:text-left transform transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        Our Portfolio
      </p>

      {/* Image Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-700 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-xl shadow-md transform transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-6 scale-95"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <img
              src={img}
              alt={`portfolio-${i}`}
              className="w-full h-56 sm:h-64 lg:h-80 object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all duration-500 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPortfolio;
