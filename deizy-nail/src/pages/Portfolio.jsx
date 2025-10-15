import React, { useState, useRef, useCallback, useMemo, useEffect, memo } from "react";
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

// Optimized LazyImage for faster loading
const LazyImage = memo(({ src, alt, className, index }) => {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className={`${className} bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative group`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Shimmer effect */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer z-10" />
      )}
      
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover transition-all duration-500 ease-out will-change-transform ${
          loaded 
            ? "opacity-100 blur-0 scale-100" 
            : "opacity-0 blur-md scale-110"
        } ${
          hovered ? "scale-110 rotate-1 brightness-110" : "scale-100 rotate-0 brightness-100"
        }`}
        onLoad={() => setTimeout(() => setLoaded(true), 100)}
        style={{
          filter: hovered ? 'brightness(1.1) contrast(1.05)' : 'brightness(1) contrast(1)'
        }}
      />
      
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out ${
        hovered ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {!loaded && (
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}
    </div>
  );
});

LazyImage.displayName = "LazyImage";

// Optimized FadeInSection for faster animations
const FadeInSection = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const getInitialTransform = () => {
    switch (direction) {
      case "left": return "translateX(-50px)";
      case "right": return "translateX(50px)";
      case "down": return "translateY(-30px)";
      default: return "translateY(50px)";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
            observer.unobserve(ref.current);
          }, delay);
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: "50px" 
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out will-change-transform ${
        visible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0"
          : `opacity-0 ${getInitialTransform()} scale-95 blur-sm`
      }`}
      style={{
        transition: `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Enhanced Category Button Component
const CategoryButton = memo(({ category, isActive, onClick, index }) => (
  <FadeInSection delay={index * 80} direction="down">
    <button
      onClick={() => onClick(category.name)}
      className={`group relative flex flex-col items-center px-5 py-4 rounded-2xl min-w-[90px] sm:min-w-[120px] md:min-w-[140px] flex-shrink-0
        transition-all duration-400 ease-out will-change-transform hover:scale-110 hover:-translate-y-2
        ${
          isActive
            ? "text-white shadow-2xl transform scale-105 -translate-y-1"
            : "text-white hover:shadow-lg"
        }`}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl rounded-2xl" />
      
      {/* Main button background */}
      <div className={`absolute inset-0 rounded-2xl transition-all duration-400 ease-out ${
        isActive 
          ? "bg-gradient-to-r from-pink-600 to-purple-600 shadow-2xl shadow-pink-300/50" 
          : "bg-gradient-to-r from-pink-400 to-purple-400 group-hover:from-pink-500 group-hover:to-purple-500"
      }`} />
      
      {/* Border glow for active state */}
      {isActive && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-400" />
      )}
      
      <div className="absolute inset-[2px] rounded-2xl bg-transparent z-10" />

      {/* Icon with enhanced animations */}
      <div className="relative z-20 mb-2 transform transition-all duration-400 ease-out group-hover:scale-110 group-hover:rotate-3">
        {category.icon}
      </div>

      {/* Category name */}
      <span className="relative z-20 text-xs sm:text-sm font-semibold tracking-wide transform transition-all duration-400 group-hover:translate-y-[-1px]">
        {category.name}
      </span>

      {/* Active indicator */}
      {isActive && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-ping" />
      )}
    </button>
  </FadeInSection>
));

CategoryButton.displayName = "CategoryButton";

// Enhanced Portfolio Item Component (Magnifying glass removed)
const PortfolioItem = memo(({ item, index }) => (
  <FadeInSection delay={index * 100} direction="up">
    <article className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-400 ease-out will-change-transform cursor-pointer">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
      
      <div className="relative bg-white rounded-2xl overflow-hidden">
        {/* Card border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-400" />
        
        <div className="absolute inset-[2px] rounded-2xl bg-white z-10" />
        
        {/* Image container */}
        <div className="relative z-20 h-56 sm:h-64 md:h-72 overflow-hidden rounded-2xl">
          <LazyImage
            src={item.img}
            alt={item.category}
            className="w-full h-full"
            index={index}
          />
          
          {/* Enhanced hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out" />
        </div>
        
        {/* Enhanced info panel */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform transition-all duration-400 ease-out group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">
          <div className="bg-gradient-to-t from-black/80 to-transparent p-4 rounded-xl backdrop-blur-sm">
            <h3 className="text-white font-semibold text-sm mb-1">{item.category}</h3>
            <p className="text-white/80 text-xs">View Full Details</p>
          </div>
        </div>

        {/* Top shimmer border */}
        <span className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-300 via-white to-purple-500 group-hover:w-full transition-all duration-500 ease-out z-30" />
      </div>
      
      {/* Hover indicator line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:w-16 transition-all duration-400 ease-out" />
    </article>
  </FadeInSection>
));

PortfolioItem.displayName = "PortfolioItem";

// Enhanced Load More Spinner
const LoadSpinner = memo(() => (
  <FadeInSection delay={0} direction="up">
    <div className="flex justify-center mt-10">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-pink-200 border-t-pink-600 rounded-full animate-spin-slow" />
        <div className="absolute inset-0 w-12 h-12 border-4 border-transparent border-t-purple-400 rounded-full animate-spin-slow-reverse" />
      </div>
    </div>
  </FadeInSection>
));

LoadSpinner.displayName = "LoadSpinner";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [displayedCount, setDisplayedCount] = useState(ITEMS_PER_PAGE);
  const observerRef = useRef(null);
  const [sectionHovered, setSectionHovered] = useState(false);

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

  const handleCategoryChange = useCallback((category) => {
    setActiveCategory(category);
  }, []);

  useEffect(() => {
    setDisplayedCount(ITEMS_PER_PAGE);
  }, [activeCategory]);

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
    <section 
      className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 py-20 overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white"
      onMouseEnter={() => setSectionHovered(true)}
      onMouseLeave={() => setSectionHovered(false)}
    >
      {/* Enhanced Title Section */}
      <FadeInSection delay={0} direction="down">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto transform transition-all duration-500 ease-out hover:scale-x-125" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Discover our stunning nail art creations and transformations
          </p>
        </div>
      </FadeInSection>

      {/* Enhanced Category Buttons */}
      <div className="flex overflow-x-auto justify-start sm:justify-center gap-4 sm:gap-6 mb-16 pb-4 scrollbar-hide">
        {categories.map((cat, index) => (
          <CategoryButton
            key={cat.name}
            category={cat}
            isActive={activeCategory === cat.name}
            onClick={handleCategoryChange}
            index={index}
          />
        ))}
      </div>

      {/* Enhanced Gallery Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 sm:gap-8 gap-6">
        {visibleItems.length > 0 ? (
          visibleItems.map((item, index) => (
            <PortfolioItem key={`${item.img}-${index}`} item={item} index={index} />
          ))
        ) : (
          <FadeInSection delay={0} direction="up">
            <div className="col-span-full text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">💅</div>
              <p className="text-gray-500 text-lg font-semibold">No images found for this category</p>
              <p className="text-gray-400 text-sm mt-2">Try selecting a different category</p>
            </div>
          </FadeInSection>
        )}
      </div>

      {/* Load More Trigger */}
      {hasMore && <div ref={observerRef} className="h-10 mt-12" />}

      {/* Enhanced Spinner */}
      {hasMore && <LoadSpinner />}

      {/* Fixed Custom Styles - removed jsx attribute */}
      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes spin-slow-reverse {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(-360deg); }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite;
          }
          .animate-spin-slow {
            animation: spin-slow 2s linear infinite;
          }
          .animate-spin-slow-reverse {
            animation: spin-slow-reverse 1.5s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default memo(Portfolio);