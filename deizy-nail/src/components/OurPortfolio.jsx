import React, { useEffect, useState, useRef, memo } from "react";
import hom from "../assets/hom.jpg";
import homm from "../assets/homm.jpg";
import hoom from "../assets/hoom.jpg";
import pedi from "../assets/pedi.jpg";
import enchan from "../assets/enchan.jpg";
import manicu from "../assets/manicu.jpg";

const images = [hom, homm, hoom, pedi, enchan, manicu];

// ✅ LazyImage component (optimized)
const LazyImage = memo(({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setTimeout(() => setLoaded(true), 50);
    };
    img.src = src;
  }, [src]);

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

      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
            loaded
              ? "opacity-100 blur-0 scale-100"
              : "opacity-0 blur-md scale-110"
          } ${hovered ? "scale-110 brightness-110" : "scale-100 brightness-100"}`}
        />
      )}
    </div>
  );
});

LazyImage.displayName = "LazyImage";

// ✅ FadeInSection (unchanged)
const FadeInSection = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const getInitialTransform = () => {
    switch (direction) {
      case "left":
        return "translateX(-50px)";
      case "right":
        return "translateX(50px)";
      case "down":
        return "translateY(-30px)";
      default:
        return "translateY(50px)";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay, direction]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        visible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100 blur-0"
          : `opacity-0 ${getInitialTransform()} scale-95 blur-sm`
      }`}
      style={{
        transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// ✅ PortfolioItem (no text or magnifier)
const PortfolioItem = memo(({ img, index }) => (
  <FadeInSection delay={index * 150}>
    <article className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />

      <div className="relative bg-white rounded-2xl overflow-hidden">
        <div className="relative z-20 h-56 sm:h-64 lg:h-80 overflow-hidden rounded-2xl">
          <LazyImage src={img} alt={`Portfolio item ${index + 1}`} className="w-full h-full" />
        </div>
      </div>
    </article>
  </FadeInSection>
));

PortfolioItem.displayName = "PortfolioItem";

// ✅ Main Component
const OurPortfolio = () => {
  return (
    <div className="px-6 md:px-12 lg:px-56 py-16 bg-gradient-to-b from-white to-gray-50/30">
      {/* Section Title */}
      <FadeInSection delay={0} direction="down">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Our Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto" />
        </div>
      </FadeInSection>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((img, i) => (
          <PortfolioItem key={i} img={img} index={i} />
        ))}
      </div>

      {/* Shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default memo(OurPortfolio);
