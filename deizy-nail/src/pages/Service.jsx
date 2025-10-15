import React, { useState, useMemo, memo, useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import heroimg from "../assets/heroimg.jpeg";
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

// Enhanced LazyImage with optimized loading
const LazyImage = memo(({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.01, rootMargin: '50px' }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`${className} bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative`}>
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            loaded 
              ? "opacity-100 scale-100 blur-0" 
              : "opacity-0 scale-105 blur-sm"
          }`}
          onLoad={() => setLoaded(true)}
        />
      )}
      
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}
    </div>
  );
});

LazyImage.displayName = "LazyImage";

// Enhanced FadeInSection with smoother animations
const FadeInSection = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const getInitialTransform = () => {
    switch (direction) {
      case "left": return "translateX(-40px)";
      case "right": return "translateX(40px)";
      case "down": return "translateY(-25px)";
      default: return "translateY(40px)";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
          }, delay);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '100px' 
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : `opacity-0 ${getInitialTransform()} scale-95`
      }`}
      style={{
        transition: `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

// Enhanced ServiceCard with richer transitions
const ServiceCard = memo(({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeInSection delay={index * 150} direction="up">
      <article 
        className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-52 sm:h-60 overflow-hidden rounded-t-2xl">
          <LazyImage
            src={item.img}
            alt={item.title}
            className="w-full h-full"
          />
          
          {/* Enhanced hover overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} />
        </div>
        
        <div className="p-6 text-center transition-all duration-500 group-hover:bg-gray-50 rounded-b-2xl">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 transition-all duration-500 group-hover:text-pink-600 group-hover:scale-105">
            {item.title}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed transition-all duration-500 group-hover:text-gray-600">
            {item.desc}
          </p>
          
          {/* Animated underline */}
          <div className={`mt-4 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto transition-all duration-500 ${
            isHovered ? 'w-16 opacity-100' : 'w-0 opacity-0'
          }`} />
        </div>
      </article>
    </FadeInSection>
  );
});

ServiceCard.displayName = "ServiceCard";

// Enhanced Testimonials with richer animations
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
            <div className="group relative bg-white rounded-2xl p-5 flex-1 transition-all duration-500 ease-out hover:shadow-xl hover:scale-105">
              <div className="flex items-center mb-3">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 transition-all duration-500 group-hover:scale-110">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-gray-800 font-semibold transition-all duration-500 group-hover:text-pink-600">
                    {review.name}
                  </h3>
                  <p className="text-gray-400 text-sm transition-all duration-500 group-hover:text-gray-500">
                    {review.date}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <FaStar
                    key={j}
                    className={`transition-all duration-500 ${
                      j < review.stars 
                        ? "text-yellow-400 group-hover:scale-110" 
                        : "text-gray-300"
                    }`}
                    style={{ transitionDelay: j * 75 + 'ms' }}
                  />
                ))}
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed italic transition-all duration-500 group-hover:text-gray-600">
                "{review.text}"
              </p>
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
      setTimeout(() => setIsNavigating(false), 100);
    }, 400);
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 mt-8">
      {/* Enhanced Hero Section */}
      <FadeInSection delay={0} direction="down">
        <section className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden group">
          <LazyImage
            src={heroimg}
            alt="Nail salon hero"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent transition-all duration-700 group-hover:from-black/60" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl transition-all duration-700 group-hover:scale-105">
              Explore Our Services
            </h1>
            <p className="mt-3 text-white/90 text-sm sm:text-base max-w-xl leading-relaxed transition-all duration-700 group-hover:translate-y-2">
              Pamper Yourself With Our Signature Nail Treatments
            </p>
            
            {/* Animated underline */}
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-700 group-hover:w-32" />
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
                  ? "text-white scale-110 shadow-xl"
                  : "text-gray-500 hover:text-pink-600 hover:scale-105 hover:shadow-lg"
              }`}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-500 ${
                activeService === service ? "opacity-100" : "opacity-0"
              }`} />
              
              <span className="relative z-10 font-semibold">
                {service}
              </span>
              
              {/* Active indicator */}
              {activeService === service && (
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 translate-y-1 animate-pulse" />
              )}
            </button>
          ))}
        </nav>
      </FadeInSection>

      {/* Enhanced Service Cards with transition state */}
      <section className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 transition-all duration-500 ${
        isNavigating ? "opacity-70" : "opacity-100"
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
                  setTimeout(() => setTestimonialsVisible(true), 300);
                }
              },
              { threshold: 0.03 }
            );
            observer.observe(el);
          }
        }}
      >
        {testimonialsVisible && <TestimonialsSection />}
      </div>
    </div>
  );
});

Service.displayName = "Service";

export default Service;