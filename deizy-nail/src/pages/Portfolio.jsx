import React, { useState, useEffect } from "react";
import {
  FaBorderAll,
  FaPaintBrush,
  FaGem,
  FaPalette,
  FaHandSparkles,
  FaSpa,
} from "react-icons/fa";

import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import ta from "../assets/ta.jpg";
import tb from "../assets/tb.jpg";
import tc from "../assets/tc.jpg";
import ench from "../assets/ench.jpg";
import mani from "../assets/mani.jpg";
import encha from "../assets/encha.jpg";
import enchan from "../assets/enchan.jpg";
import manic from "../assets/manic.jpg";
import manicu from "../assets/manicu.jpg";
import pedi from "../assets/pedi.jpg";
import pedic from "../assets/pedic.jpg";
import pedicu from "../assets/pedicu.jpeg";
import hom from "../assets/hom.jpg";
import homm from "../assets/homm.jpg";
import hoom from "../assets/hoom.jpg";

const imageData = {
  Gel: [f1, f2, f3, ta, tb],
  Acrylic: [hom, homm, hoom, tb, tc],
  "Nail Art": [ench, encha, enchan],
  Manicure: [mani, manic, manicu],
  Pedicure: [pedi, pedic, pedicu],
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [prevCategory, setPrevCategory] = useState("All");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { name: "All", icon: <FaBorderAll size={22} /> },
    { name: "Gel", icon: <FaPaintBrush size={22} /> },
    { name: "Acrylic", icon: <FaGem size={22} /> },
    { name: "Nail Art", icon: <FaPalette size={22} /> },
    { name: "Manicure", icon: <FaHandSparkles size={22} /> },
    { name: "Pedicure", icon: <FaSpa size={22} /> },
  ];

  const gallery = imageData;

  const allImages = Object.keys(gallery).flatMap((key) =>
    gallery[key].map((img) => ({ img, category: key }))
  );

  const filteredGallery =
    activeCategory === "All"
      ? allImages
      : gallery[activeCategory]?.map((img) => ({
          img,
          category: activeCategory,
        })) || [];

  const handleCategoryChange = (newCategory) => {
    setPrevCategory(activeCategory);
    setActiveCategory(newCategory);
  };

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 py-16 overflow-hidden bg-gradient-to-b from-pink-50 to-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOutDown {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(20px);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes galleryItemIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-gallery-item {
          animation: galleryItemIn 0.5s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.4s ease-out forwards;
        }

        .gallery-grid {
          display: grid;
          gap: 1.5rem;
        }

        .gallery-item {
          will-change: auto;
          contain: layout style paint;
        }

        .gallery-item:hover {
          will-change: transform;
        }

        .gallery-item img {
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
          -webkit-transform: translateZ(0);
          transform: translateZ(0);
        }

        .category-btn {
          will-change: transform, background-color;
          backface-visibility: hidden;
          -webkit-font-smoothing: antialiased;
        }

        /* Stagger delays for gallery items */
        .gallery-item:nth-child(1) { animation-delay: 0.1s; }
        .gallery-item:nth-child(2) { animation-delay: 0.15s; }
        .gallery-item:nth-child(3) { animation-delay: 0.2s; }
        .gallery-item:nth-child(4) { animation-delay: 0.25s; }
        .gallery-item:nth-child(5) { animation-delay: 0.3s; }
        .gallery-item:nth-child(6) { animation-delay: 0.35s; }
        .gallery-item:nth-child(7) { animation-delay: 0.4s; }
        .gallery-item:nth-child(8) { animation-delay: 0.45s; }
        .gallery-item:nth-child(9) { animation-delay: 0.5s; }
        .gallery-item:nth-child(10) { animation-delay: 0.55s; }
        .gallery-item:nth-child(11) { animation-delay: 0.6s; }
        .gallery-item:nth-child(12) { animation-delay: 0.65s; }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

      {/* Title */}
      <h2
        className={`text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-800 ${
          isVisible ? "animate-fade-in-up" : ""
        }`}
      >
        Our Work
      </h2>

      {/* Category Buttons */}
      <div className="flex overflow-x-auto justify-start sm:justify-center gap-3 sm:gap-5 mb-10 pb-2 scrollbar-hide">
        {categories.map((cat, idx) => (
          <button
            key={cat.name}
            onClick={() => handleCategoryChange(cat.name)}
            style={{
              animation: isVisible ? `slideInLeft 0.5s ease-out forwards` : "none",
              animationDelay: `${idx * 0.08}s`,
            }}
            className={`category-btn flex flex-col items-center px-4 sm:px-6 py-3 rounded-lg min-w-[90px] sm:min-w-[110px] md:min-w-[130px] flex-shrink-0 shadow-sm transition-all duration-300 ${
              activeCategory === cat.name
                ? "bg-pink-600 text-white shadow-lg scale-105"
                : "bg-pink-300 text-white hover:bg-pink-400 hover:shadow-md"
            }`}
          >
            <div className="mb-1 transition-transform duration-300 group-hover:scale-110">
              {cat.icon}
            </div>
            <span className="text-xs sm:text-sm font-semibold">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div
        className={`gallery-grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-6 gap-4 ${
          isVisible ? "" : "opacity-0"
        }`}
      >
        {filteredGallery.length > 0 ? (
          filteredGallery.map((item, index) => (
            <div
              key={`${item.img}-${index}`}
              className="gallery-item animate-gallery-item relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl group cursor-pointer transition-shadow duration-500"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={item.img}
                  alt={item.category}
                  loading="lazy"
                  className="w-full h-56 sm:h-64 md:h-72 object-cover brightness-95 transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-100"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-600 to-transparent text-white text-center py-2 text-sm sm:text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {item.category}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg">
            No images found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;