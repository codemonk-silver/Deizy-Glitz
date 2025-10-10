import React, { useState, useRef, useCallback, useMemo, useEffect } from "react";
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

const ITEMS_PER_PAGE = 9;

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const observerRef = useRef(null);

  const categories = [
    { name: "All", icon: <FaBorderAll size={22} /> },
    { name: "Gel", icon: <FaPaintBrush size={22} /> },
    { name: "Acrylic", icon: <FaGem size={22} /> },
    { name: "Nail Art", icon: <FaPalette size={22} /> },
    { name: "Manicure", icon: <FaHandSparkles size={22} /> },
    { name: "Pedicure", icon: <FaSpa size={22} /> },
  ];

  const allImages = useMemo(
    () =>
      Object.keys(imageData).flatMap((key) =>
        imageData[key].map((img) => ({ img, category: key }))
      ),
    []
  );

  const filteredGallery = useMemo(
    () =>
      activeCategory === "All"
        ? allImages
        : imageData[activeCategory]?.map((img) => ({
            img,
            category: activeCategory,
          })) || [],
    [activeCategory, allImages]
  );

  const visibleItems = useMemo(
    () => filteredGallery.slice(0, displayedCount),
    [filteredGallery, displayedCount]
  );

  const hasMore = displayedCount < filteredGallery.length;

  const handleLoadMore = useCallback(() => {
    setDisplayedCount((prev) => prev + ITEMS_PER_PAGE);
  }, []);

  useEffect(() => {
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-slide");
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = document.querySelectorAll(".gallery-item");
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleItems]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          handleLoadMore();
        }
      },
      { threshold: 0.2 }
    );

    if (observerRef.current) observer.observe(observerRef.current);
    return () => observer.disconnect();
  }, [hasMore, handleLoadMore]);

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 py-16 overflow-hidden bg-gradient-to-b from-pink-50 via-white to-pink-100">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-gray-800 relative">
        Our Work
        <span className="absolute left-1/2 -bottom-3 w-20 h-[3px] bg-gradient-to-r from-pink-500 to-pink-300 rounded-full transform -translate-x-1/2 animate-pulse-glow"></span>
      </h2>

      {/* Category Buttons */}
      <div className="flex overflow-x-auto justify-start sm:justify-center gap-4 sm:gap-6 mb-12 pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className={`flex flex-col items-center px-5 py-4 rounded-xl min-w-[90px] sm:min-w-[120px] md:min-w-[140px] flex-shrink-0
              relative transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] transform hover:scale-110 hover:-translate-y-1
              ${
                activeCategory === cat.name
                  ? "bg-gradient-to-br from-pink-600 to-pink-400 text-white shadow-xl shadow-pink-300/50 before:content-[''] before:absolute before:inset-0 before:bg-white/10 before:animate-shimmer"
                  : "bg-gradient-to-br from-pink-300 to-pink-400 text-white hover:shadow-lg"
              }`}
          >
            <div className="mb-2 animate-float">{cat.icon}</div>
            <span className="text-xs sm:text-sm font-semibold tracking-wide">
              {cat.name}
            </span>
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-10 gap-6">
        {visibleItems.length > 0 ? (
          visibleItems.map((item, index) => (
            <div
              key={`${item.img}-${index}`}
              className="gallery-item relative overflow-hidden rounded-2xl shadow-xl group cursor-pointer opacity-0 transform-gpu"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.category}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-125 group-hover:rotate-[1deg]"
                />
              </div>

              {/* gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 via-pink-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"></div>

              {/* shimmer border */}
              <span className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-300 via-white to-pink-500 group-hover:w-full transition-all duration-700 ease-out"></span>

              {/* Text overlay */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md text-white text-center px-5 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
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

      {/* Load More Trigger */}
      {hasMore && <div ref={observerRef} className="h-10 mt-10" />}

      {/* Spinner */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <div className="w-10 h-10 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin-slow"></div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
