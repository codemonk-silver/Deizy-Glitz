import React, { useState, useMemo, memo, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import heroimg from "../assets/heroimg.png";
import mani from "../assets/mani.jpg";
import manic from "../assets/manic.jpg";
import manicu from "../assets/manicu.jpg";
import pedi from "../assets/pedi.jpg";
import pedic from "../assets/pedic.jpg";
import pedicu from "../assets/pedicu.jpeg";
import ench from "../assets/ench.jpg";
import encha from "../assets/encha.jpg";
import enchan from "../assets/enchan.jpg";
import ta from "../assets/ta.jpg";
import tb from "../assets/tb.jpg";
import tc from "../assets/tc.jpg";

// Enhanced LazyImage with modern transitions
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
            hovered ? "scale-110 rotate-1 brightness-110" : "scale-100 rotate-0 brightness-100"
          }`}
          style={{
            transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            filter: hovered ? 'brightness(1.1) contrast(1.05)' : 'brightness(1) contrast(1)'
          }}
        />
      )}
      
      {/* Gradient overlay on hover */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out ${
        hovered ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {!loaded && (
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}
    </div>
  );
});

LazyImage.displayName = "LazyImage";

// Enhanced FadeInSection with modern animations
const FadeInSection = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);

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
          setIsIntersecting(true);
          setTimeout(() => {
            setVisible(true);
            observer.unobserve(ref.current);
          }, delay);
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: "100px" 
      }
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
        transition: `all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, filter 0.8s ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Enhanced ServiceCard with modern hover effects
const ServiceCard = memo(({ item, index }) => (
  <FadeInSection delay={index * 150} direction="up">
    <article className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out will-change-transform">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
      
      <div className="relative bg-white rounded-2xl overflow-hidden">
        {/* Card border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        <div className="absolute inset-[2px] rounded-2xl bg-white z-10" />
        
        <div className="relative z-20 h-52 sm:h-60 overflow-hidden rounded-t-2xl">
          <LazyImage
            src={item.img}
            alt={item.title}
            className="w-full h-full"
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 ease-out" />
        </div>
        
        <div className="relative z-20 p-6 text-center bg-white rounded-b-2xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-pink-600 transition-all duration-500 ease-out transform group-hover:translate-y-[-2px]">
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed transform group-hover:translate-y-[-1px] transition-transform duration-500">
            {item.desc}
          </p>
        </div>
      </div>
    </article>
  </FadeInSection>
));

ServiceCard.displayName = "ServiceCard";

// Enhanced Testimonials with modern animations
const TestimonialsSection = memo(() => {
  const reviews = [
    {
      name: "Sarah Johnson",
      date: "September 25, 2025",
      text: "Absolutely loved my manicure! The staff were so kind and the atmosphere was relaxing.",
      stars: 5,
    },
    {
      name: "James Carter",
      date: "August 10, 2025",
      text: "Great experience! I booked a pedicure and was impressed by the attention to detail.",
      stars: 4,
    },
  ];

  return (
    <section className="pt-20 pb-10">
      <FadeInSection delay={0} direction="down">
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-10 tracking-wide bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
      </FadeInSection>
      <div className="flex flex-col sm:flex-row justify-between gap-6">
        {reviews.map((review, i) => (
          <FadeInSection key={i} delay={i * 200} direction="up">
            <div className="group relative bg-white rounded-2xl p-5 flex-1 hover:shadow-2xl transition-all duration-500 ease-out overflow-hidden">
              {/* Background gradient animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-center mb-3">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-500 ease-out shadow-lg">
                    {review.name.charAt(0)}
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-gray-800 font-semibold group-hover:text-pink-600 transition-colors duration-500">
                      {review.name}
                    </h3>
                    <p className="text-gray-400 text-sm transform group-hover:translate-x-1 transition-transform duration-500">
                      {review.date}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => (
                    <FaStar
                      key={j}
                      className={`transform transition-all duration-500 ease-out ${
                        j < review.stars 
                          ? "text-yellow-400 group-hover:scale-110 group-hover:rotate-12" 
                          : "text-gray-300"
                      }`}
                      style={{ transitionDelay: j * 100 + 'ms' }}
                    />
                  ))}
                </div>
                <p className="text-gray-500 text-sm leading-relaxed italic transform group-hover:translate-y-[-2px] transition-transform duration-500">
                  "{review.text}"
                </p>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

const Service = memo(() => {
  const [activeService, setActiveService] = useState("Manicure");
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const serviceData = useMemo(
    () => ({
      Manicure: [
        {
          img: mani,
          title: "Luxury Manicure",
          desc: "Experience our soothing hand care treatment with nourishing oils and flawless polish.",
        },
        {
          img: manic,
          title: "Classic Manicure",
          desc: "A timeless treatment that keeps your hands soft and nails beautifully polished.",
        },
        {
          img: manicu,
          title: "Gel Manicure",
          desc: "Enjoy chip-free shine with our long-lasting gel finish and expert touch.",
        },
      ],
      Pedicure: [
        {
          img: pedi,
          title: "Spa Pedicure",
          desc: "Relax and rejuvenate your feet with an exfoliating soak and massage treatment.",
        },
        {
          img: pedic,
          title: "Deluxe Pedicure",
          desc: "A deep foot care experience that restores hydration and leaves you feeling refreshed.",
        },
        {
          img: pedicu,
          title: "Express Pedicure",
          desc: "Perfect for those on the go — quick, clean, and polished to perfection.",
        },
      ],
      "Nail Enhancements": [
        {
          img: ench,
          title: "Acrylic Extensions",
          desc: "Get long-lasting nail extensions designed to your ideal shape and style.",
        },
        {
          img: encha,
          title: "Gel Extensions",
          desc: "Flexible, natural-looking gel enhancements with a durable, glossy finish.",
        },
        {
          img: enchan,
          title: "Overlay Treatment",
          desc: "Strengthen your natural nails with a smooth, elegant overlay.",
        },
      ],
      "Nail Arts": [
        {
          img: ta,
          title: "Custom Nail Art",
          desc: "Express your creativity with our stunning custom designs and hand-painted details.",
        },
        {
          img: tc,
          title: "Minimalist Design",
          desc: "Clean, simple lines and elegant colors for a modern nail look.",
        },
        {
          img: tb,
          title: "3D Nail Art",
          desc: "Add sparkle and texture with bold, eye-catching 3D designs.",
        },
      ],
    }),
    []
  );

  const handleServiceChange = (service) => {
    if (service === activeService) return;
    
    setIsNavigating(true);
    setTimeout(() => {
      setActiveService(service);
      setTimeout(() => setIsNavigating(false), 50);
    }, 300);
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 mt-8 selection:bg-pink-200/40">
      {/* Enhanced Hero Section */}
      <FadeInSection delay={0} direction="down">
        <section className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden group">
          <LazyImage
            src={heroimg}
            alt="Nail salon hero"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
            <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-1000 ease-out">
              Explore Our Services
            </h1>
            <p className="mt-3 text-white/90 text-sm sm:text-base max-w-xl leading-relaxed transform group-hover:translate-y-2 transition-transform duration-700 delay-200">
              Pamper Yourself With Our Signature Nail Treatments
            </p>
            
            {/* Animated underline */}
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-500 origin-center" />
          </div>
        </section>
      </FadeInSection>

      {/* Enhanced Navigation */}
      <FadeInSection delay={100} direction="down">
        <nav className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium">
          {Object.keys(serviceData).map((service) => (
            <button
              key={service}
              onClick={() => handleServiceChange(service)}
              className={`relative px-4 py-2 transition-all duration-500 ease-out overflow-hidden rounded-xl ${
                activeService === service
                  ? "text-white scale-110 shadow-2xl"
                  : "text-gray-500 hover:text-pink-600 hover:scale-105 hover:shadow-lg"
              }`}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 ease-out ${
                activeService === service ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`} />
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative z-10 font-semibold drop-shadow-sm">
                {service}
              </span>
              
              {/* Active indicator */}
              {activeService === service && (
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 translate-y-1 animate-ping" />
              )}
            </button>
          ))}
        </nav>
      </FadeInSection>

      {/* Enhanced Service Cards with transition state */}
      <section className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 transition-all duration-500 ${
        isNavigating ? "opacity-50 scale-95" : "opacity-100 scale-100"
      }`}>
        {serviceData[activeService].map((item, i) => (
          <ServiceCard key={`${activeService}-${i}`} item={item} index={i} />
        ))}
      </section>

      {/* Enhanced Testimonials Lazy Load */}
      <div
        ref={(el) => {
          if (el) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setTimeout(() => setTestimonialsVisible(true), 200);
                  observer.unobserve(el);
                }
              },
              { threshold: 0.05 }
            );
            observer.observe(el);
          }
        }}
        className="transition-all duration-1000"
      >
        {testimonialsVisible && <TestimonialsSection />}
      </div>
    </div>
  );
});

Service.displayName = "Service";

export default Service;