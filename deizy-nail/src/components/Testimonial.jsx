import React, { useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 🔹 Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 active:scale-95 transition-transform duration-200 will-change-transform"
  >
    <FaChevronRight />
  </button>
);

// 🔹 Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 active:scale-95 transition-transform duration-200 will-change-transform"
  >
    <FaChevronLeft />
  </button>
);

const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  // 🔹 Responsive slider setup
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🔹 Static testimonial data memoized
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

  // 🔹 Slider config optimized for smoothness
  const settings = {
    dots: window.innerWidth < 640,
    infinite: true,
    speed: 800,
    slidesToShow,
    slidesToScroll: 1,
    arrows: window.innerWidth >= 640,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    pauseOnHover: false,
    pauseOnFocus: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative px-6 md:px-12 lg:px-56 py-10 bg-gray-50 overflow-hidden">
      {/* Header Text */}
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          duration: 0.5,
        }}
        className="text-2xl font-semibold text-center mb-6"
      >
        What Our Clients Say
      </motion.p>

      {/* Slider Section */}
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={item.id} className="px-3 will-change-transform">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 90,
                  damping: 18,
                },
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                transition: { type: "spring", stiffness: 250 },
              }}
              className="bg-white shadow-md rounded-2xl p-6 h-56 flex flex-col justify-between transform-gpu"
            >
              {/* Profile Info */}
              <div className="flex items-center gap-3">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover will-change-transform"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <div className="flex text-yellow-400 mb-1">
                    {Array.from({ length: item.rating }, (_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                className="text-gray-600 italic mt-4"
              >
                "{item.text}"
              </motion.p>
            </motion.div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
