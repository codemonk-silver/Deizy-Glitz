import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 transition-transform duration-300 hover:scale-110"
  >
    <FaChevronRight />
  </button>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 transition-transform duration-300 hover:scale-110"
  >
    <FaChevronLeft />
  </button>
);

const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  // 🔧 Responsive logic
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

  const testimonials = [
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
  ];

  const settings = {
    dots: window.innerWidth < 640,
    infinite: true,
    speed: 700,
    slidesToShow,
    slidesToScroll: 1,
    arrows: window.innerWidth >= 640,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "ease-in-out",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative px-6 md:px-12 lg:px-56 py-10 bg-gray-50 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl font-semibold text-center mb-6"
      >
        What Our Clients Say
      </motion.p>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={item.id} className="px-3">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 25px rgba(0,0,0,0.1)",
              }}
              className="bg-white shadow-md rounded-2xl p-6 h-56 flex flex-col justify-between transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
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

              {/* Text */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
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
