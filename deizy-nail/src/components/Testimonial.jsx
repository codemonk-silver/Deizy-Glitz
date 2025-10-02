import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// ✅ Make sure these CSS imports are inside main.jsx or index.js too!
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
const NextArrow = ({ className, style, onClick }) => (
  <button
    className={`${className} !flex !items-center !justify-center bg-gray-800 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-700`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FaChevronRight />
  </button>
);

// Custom Prev Arrow
const PrevArrow = ({ className, style, onClick }) => (
  <button
    className={`${className} !flex !items-center !justify-center bg-gray-800 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-gray-700`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FaChevronLeft />
  </button>
);

const Testimonial = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // ✅ Prevent hydration / refresh issues
    setMounted(true);
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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // default desktop
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768, // small tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 767, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  if (!mounted) return null; // prevent slider crash on refresh

  return (
    <div className="relative px-4 sm:px-8 md:px-16 lg:px-32 xl:px-56 py-10">
      <p className="text-xl sm:text-2xl font-semibold text-center mb-6">
        What Our Clients Say
      </p>

      <Slider {...settings} className="-mx-2 sm:-mx-4">
        {testimonials.map((item) => (
          <div key={item.id} className="px-2 sm:px-4">
            <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 h-auto min-h-[220px] flex flex-col justify-between">
              {/* Top Section: Image + Name + Stars */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">
                    {item.name}
                  </h3>
                  <div className="flex text-yellow-400 mb-1">
                    {Array.from({ length: item.rating }, (_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Testimonial text */}
              <p className="text-gray-600 italic mt-3 text-sm sm:text-base">
                "{item.text}"
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
