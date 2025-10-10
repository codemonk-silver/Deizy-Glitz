import React, { useState, useEffect, useRef } from "react";
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
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { name: "All", icon: <FaBorderAll size={22} /> },
    { name: "Gel", icon: <FaPaintBrush size={22} /> },
    { name: "Acrylic", icon: <FaGem size={22} /> },
    { name: "Nail Art", icon: <FaPalette size={22} /> },
    { name: "Manicure", icon: <FaHandSparkles size={22} /> },
    { name: "Pedicure", icon: <FaSpa size={22} /> },
  ];

  const allImages = Object.keys(imageData).flatMap((key) =>
    imageData[key].map((img) => ({ img, category: key }))
  );

  const filteredGallery =
    activeCategory === "All"
      ? allImages
      : imageData[activeCategory]?.map((img) => ({
          img,
          category: activeCategory,
        })) || [];

  return (
    <section
      ref={sectionRef}
      className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 py-16 overflow-hidden bg-gradient-to-b from-pink-50 to-white"
    >
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-800 animate-fadeIn">
        Our Work
      </h2>

      {/* Category Buttons */}
      <div className="flex overflow-x-auto justify-start sm:justify-center gap-3 sm:gap-5 mb-10 pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`flex flex-col items-center px-4 sm:px-6 py-3 rounded-lg min-w-[90px] sm:min-w-[110px] md:min-w-[130px] flex-shrink-0 transition-all duration-300 transform ${
              activeCategory === cat.name
                ? "bg-pink-600 text-white shadow-lg scale-105"
                : "bg-pink-300 text-white hover:bg-pink-400 hover:shadow-md hover:scale-105"
            }`}
          >
            <div className="mb-1">{cat.icon}</div>
            <span className="text-xs sm:text-sm font-semibold">
              {cat.name}
            </span>
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-6 gap-4">
        {filteredGallery.length > 0 ? (
          filteredGallery.map((item, index) => (
            <div
              key={`${item.img}-${index}`}
              className="relative overflow-hidden rounded-xl shadow-md group cursor-pointer transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] animate-fadeInUp"
              style={{
                transform: `translateY(${(scrollY - index * 50) * 0.02}px)`,
              }}
            >
              <img
                src={item.img}
                alt={item.category}
                loading="lazy"
                className="w-full h-56 sm:h-64 md:h-72 object-cover brightness-95 transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-600 to-transparent text-white text-center py-2 text-sm sm:text-base font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0">
                {item.category}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 text-lg animate-fadeIn">
            No images found.
          </p>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
