import React, { useEffect, useState, useMemo, useRef, memo } from "react";
import Slider from "react-slick";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Enhanced Custom Next Arrow
const NextArrow = memo(({ onClick }) => (
  <button
    onClick={onClick}
    className="group absolute right-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full shadow-2xl z-20 hover:shadow-xl transform transition-all duration-500 ease-out hover:scale-110 active:scale-95"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out rounded-full" />
    <FaChevronRight className="relative z-10 transform group-hover:translate-x-0.5 transition-transform duration-300" />
  </button>
));

NextArrow.displayName = "NextArrow";

// Enhanced Custom Prev Arrow
const PrevArrow = memo(({ onClick }) => (
  <button
    onClick={onClick}
    className="group absolute left-4 top-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full shadow-2xl z-20 hover:shadow-xl transform transition-all duration-500 ease-out hover:scale-110 active:scale-95"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out rounded-full" />
    <FaChevronLeft className="relative z-10 transform group-hover:-translate-x-0.5 transition-transform duration-300" />
  </button>
));

PrevArrow.displayName = "PrevArrow";

// Enhanced FadeInSection with modern animations
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

// Enhanced Testimonial Card Component
const TestimonialCard = memo(({ item, index }) => (
  <FadeInSection delay={index * 150} direction="up">
    <article className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out will-change-transform cursor-pointer mx-3">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
      
      <div className="relative bg-white rounded-2xl overflow-hidden">
        {/* Card border glow */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
        
        <div className="absolute inset-[2px] rounded-2xl bg-white z-10" />
        
        <div className="relative z-20 p-6 h-64 flex flex-col justify-between rounded-2xl">
          {/* Profile Info with enhanced animations */}
          <div className="flex items-center gap-4">
            <div className="relative group">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full object-cover transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-500">
                {item.name}
              </h3>
              <div className="flex text-yellow-400 mb-1 transform transition-transform duration-500 group-hover:scale-105">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`transform transition-all duration-500 ease-out ${
                      i < item.rating 
                        ? "text-yellow-400 group-hover:scale-110 group-hover:rotate-12" 
                        : "text-gray-300"
                    }`}
                    style={{ transitionDelay: i * 100 + 'ms' }}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-500 transform transition-all duration-500 group-hover:translate-x-1">
                {item.role}
              </p>
            </div>
          </div>

          {/* Testimonial Text with enhanced styling */}
          <div className="mt-6">
            <p className="text-gray-600 italic leading-relaxed transform transition-all duration-500 group-hover:translate-y-[-2px] group-hover:text-gray-800">
              "{item.text}"
            </p>
          </div>
        </div>
      </div>
      
      {/* Hover indicator line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full group-hover:w-16 transition-all duration-500 ease-out" />
    </article>
  </FadeInSection>
));

TestimonialCard.displayName = "TestimonialCard";

const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isVisible, setIsVisible] = useState(false);

  // Enhanced responsive setup
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const testimonials = useMemo(
    () => [
      {
        id: 1,
        name: "John Doe",
        text: "This service was fantastic! Highly recommend to anyone.",
        role: "CEO, Company A",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5,
      },
      {
        id: 2,
        name: "Jane Smith",
        text: "Absolutely love the professionalism and quality.",
        role: "Manager, Company B",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4,
      },
      {
        id: 3,
        name: "Mike Johnson",
        text: "They went above and beyond my expectations.",
        role: "Entrepreneur",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        rating: 5,
      },
      {
        id: 4,
        name: "Emily Davis",
        text: "Great communication and outstanding results!",
        role: "Designer, Studio C",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
        rating: 4,
      },
      {
        id: 5,
        name: "Chris Brown",
        text: "Super reliable team. Will work with them again.",
        role: "Freelancer",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5,
      },
      {
        id: 6,
        name: "Sophia Wilson",
        text: "They delivered on time and exceeded my expectations.",
        role: "Founder, Startup D",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 5,
      },
    ],
    []
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow,
    slidesToScroll: 1,
    arrows: window.innerWidth >= 640,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    pauseOnHover: true,
    pauseOnFocus: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <section className="relative px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 py-20 overflow-hidden bg-gradient-to-b from-white via-pink-50/30 to-white">
      {/* Enhanced Header Section */}
      <FadeInSection delay={0} direction="down">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto transform transition-all duration-500 ease-out hover:scale-x-125" />
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Discover why our clients love working with us
          </p>
        </div>
      </FadeInSection>

      {/* Enhanced Slider Section */}
      <div className="relative">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <TestimonialCard key={item.id} item={item} index={index} />
          ))}
        </Slider>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-pink-300/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Custom Styles for slick carousel dots */}
      <style>
        {`
          .slick-dots li button:before {
            color: #d1d5db;
            opacity: 0.5;
            font-size: 10px;
            transition: all 0.3s ease;
          }
          .slick-dots li.slick-active button:before {
            color: #ec4899;
            opacity: 1;
            transform: scale(1.2);
          }
          .slick-dots {
            bottom: -50px;
          }
          @media (max-width: 640px) {
            .slick-dots {
              bottom: -40px;
            }
          }
        `}
      </style>
    </section>
  );
};

export default memo(Testimonial);