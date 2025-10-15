import React, { memo, useEffect, useRef, useState } from "react";
import heroimg from "../assets/heroimg.png";
import { FaHandSparkles } from "react-icons/fa";
import { GiFootprint } from "react-icons/gi";
import { MdBrush } from "react-icons/md";

const services = [
  {
    id: 1,
    icon: <FaHandSparkles className="text-4xl text-pink-500" />,
    title: "Manicure",
    desc: "Professional hand and nail care treatments that leave your hands looking elegant and polished.",
  },
  {
    id: 2,
    icon: <GiFootprint className="text-4xl text-pink-500" />,
    title: "Pedicure",
    desc: "Relaxing foot treatments designed to rejuvenate and beautify your feet from heel to toe.",
  },
  {
    id: 3,
    icon: <MdBrush className="text-4xl text-pink-500" />,
    title: "Nail Art",
    desc: "Creative and custom nail designs that express your unique style and personality.",
  },
];

// ✅ Lazy loading image with shimmer + smooth hover animation
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
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer" />
      )}

      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-1000 ease-out will-change-transform ${
            loaded
              ? "opacity-100 blur-0 scale-100"
              : "opacity-0 blur-md scale-110"
          } ${
            hovered
              ? "scale-110 rotate-1 brightness-110"
              : "scale-100 rotate-0 brightness-100"
          }`}
          style={{
            transition:
              "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            filter: hovered
              ? "brightness(1.1) contrast(1.05)"
              : "brightness(1) contrast(1)",
          }}
        />
      )}

      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {!loaded && (
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}
    </div>
  );
});

LazyImage.displayName = "LazyImage";

// ✅ Fade-in section for scroll animation
const FadeInSection = ({ children, delay = 0, direction = "up", index = 0 }) => {
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
          setTimeout(() => {
            setVisible(true);
            observer.unobserve(ref.current);
          }, delay);
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
      className={`transition-all duration-1000 ease-out will-change-transform ${
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

// ✅ Service Card component
const ServiceCard = memo(({ service, index }) => (
  <FadeInSection delay={index * 150} direction="up" index={index}>
    <article className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out will-change-transform">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />

      <div className="relative bg-white rounded-2xl overflow-hidden">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute inset-[2px] rounded-2xl bg-white z-10" />

        <div className="relative z-20 p-6 text-center bg-white rounded-2xl">
          {/* ✅ Icon */}
          <div className="mb-4 flex justify-center">
            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 group-hover:from-pink-100 group-hover:to-purple-100 transition-all duration-500 ease-out">
              <div className="transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:rotate-3">
                {service.icon}
              </div>
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 group-hover:text-pink-600 transition-all duration-500">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition-all duration-500">
            {service.desc}
          </p>

          <div className="mt-4 w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto transition-all duration-500" />
        </div>
      </div>
    </article>
  </FadeInSection>
));

ServiceCard.displayName = "ServiceCard";

// ✅ Fixed Book Appointment Button Component
const BookAppointmentButton = memo(({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 font-semibold text-white rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out active:scale-95"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      {/* Background overlay for hover state */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shine effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform"
        style={{
          transition: 'transform 1s ease-out',
          transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)'
        }}
      />
      
      {/* Button glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-500 -z-10" />
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-3 text-sm md:text-base">
        {children}
        <svg
          className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </span>
    </a>
  );
});

BookAppointmentButton.displayName = "BookAppointmentButton";

// ✅ Main Hero Component
const Hero = () => {
  const phoneNumber = "2347087095727";
  const message = "Hi, I'd like to book an appointment.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-56 mt-4 overflow-hidden selection:bg-pink-100/50">
      {/* Hero Image */}
      <div className="relative w-full mt-4 rounded-2xl overflow-hidden group">
        <LazyImage
          src={heroimg}
          alt="Nail salon hero"
          className="w-full h-[18rem] sm:h-[22rem] lg:h-[26rem]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
          <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 sm:px-4">
          <FadeInSection delay={0} direction="down">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 mt-5 lg:mt-0 tracking-wide drop-shadow-2xl bg-gradient-to-r from-white to-pink-100 bg-clip-text transform group-hover:scale-105 transition-transform duration-1000">
              Experience The Art Of Beautiful Nails
            </h1>
          </FadeInSection>

          <FadeInSection delay={200} direction="down">
            <p className="text-white/90 max-w-md sm:max-w-2xl text-sm md:text-base leading-relaxed mb-5 lg:mb-10 transform group-hover:translate-y-2 transition-transform duration-700">
              Welcome to our nail studio where creativity and precision meet.
              Let us pamper you with the finest nail care services.
            </p>
          </FadeInSection>

          <FadeInSection delay={400} direction="up">
            <div className="transform group-hover:scale-105 transition-transform duration-700">
              <BookAppointmentButton href={whatsappLink}>
                Book Appointment
              </BookAppointmentButton>
            </div>
          </FadeInSection>

          {/* Animated underline */}
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-500 origin-center" />
        </div>
      </div>

      {/* Services */}
      <FadeInSection delay={600} direction="down">
        <div className="relative">
          <p className="mt-12 text-lg sm:text-xl font-semibold text-center sm:text-left text-gray-800 tracking-wide bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Our Services
          </p>
          {/* Animated underline for section title */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-300" />
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>

      {/* ✅ Shimmer animation keyframes */}
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

export default memo(Hero);