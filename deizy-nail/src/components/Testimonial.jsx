import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700"
  >
    <FaChevronRight />
  </button>
);

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700"
  >
    <FaChevronLeft />
  </button>
);

const Testimonial = () => {
  const [slidesToShow, setSlidesToShow] = useState(3); // dynamic control

  // 🔧 Detect screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1); // mobile
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // tablet
      } else {
        setSlidesToShow(3); // desktop
      }
    };
    handleResize(); // run on load
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
    dots: window.innerWidth < 640, // show dots only on mobile
    infinite: true,
    speed: 600,
    slidesToShow,
    slidesToScroll: 1,
    arrows: window.innerWidth >= 640, // hide arrows on mobile
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative px-6 md:px-12 lg:px-56 py-10">
      <p className="text-2xl font-semibold text-center mb-6">
        What Our Clients Say
      </p>

      <Slider {...settings}>
        {testimonials.map((item) => (
          <div key={item.id} className="px-3">
            <div className="bg-white shadow-md rounded-2xl p-6 h-56 flex flex-col justify-between">
              {/* Header */}
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover"
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
              <p className="text-gray-600 italic mt-4">"{item.text}"</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
