import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Custom Next Arrow - fully responsive
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 md:right-[-40px] top-1/2 -translate-y-1/2 
               bg-gray-800 text-white p-2 md:p-3 rounded-full shadow-lg z-10 hover:bg-gray-700
               text-sm md:text-base"
  >
    <FaChevronRight />
  </button>
);

// ✅ Custom Prev Arrow - fully responsive
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 md:left-[-40px] top-1/2 -translate-y-1/2 
               bg-gray-800 text-white p-2 md:p-3 rounded-full shadow-lg z-10 hover:bg-gray-700
               text-sm md:text-base"
  >
    <FaChevronLeft />
  </button>
);

const Testimonial = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // ✅ ensures slick initializes correctly after hydration
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // desktop default
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    adaptiveHeight: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1, // ✅ force single slide
        },
      },
    ],
  };

  return (
    <div className="relative px-4 sm:px-6 md:px-12 lg:px-20 xl:px-56 py-8 md:py-10">
      <p className="text-xl sm:text-2xl font-semibold text-center mb-6 md:mb-8">
        What Our Clients Say
      </p>

      <div className="relative px-2 sm:px-6 md:px-8">
        <Slider {...settings} className="-mx-2 sm:-mx-4">
          {testimonials.map((item) => (
            <div key={item.id} className="px-2 sm:px-4">
              <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 h-auto min-h-[240px] sm:h-56 flex flex-col justify-between">
                {/* Image + Name + Rating */}
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base truncate">
                      {item.name}
                    </h3>
                    <div className="flex text-yellow-400 mb-1 text-xs sm:text-sm">
                      {Array.from({ length: item.rating }, (_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 italic mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                  "{item.text}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
