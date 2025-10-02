import React, { useState } from "react";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Calculate which slides to show on desktop (3 slides)
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 3; i++) {
      slides.push(testimonials[(currentSlide + i) % testimonials.length]);
    }
    return slides;
  };

  return (
    <div className="relative px-4 sm:px-6 md:px-12 lg:px-20 xl:px-56 py-8 md:py-10">
      <p className="text-xl sm:text-2xl font-semibold text-center mb-6 md:mb-8">
        What Our Clients Say
      </p>

      <div className="relative">
        {/* Mobile View - Single Slide with Arrows */}
        <div className="block md:hidden">
          <div className="relative px-12">
            {/* Previous Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-700 w-8 h-8 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Testimonial Card */}
            <div className="bg-white shadow-lg rounded-2xl p-4 min-h-[240px] flex flex-col justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-sm truncate">
                    {testimonials[currentSlide].name}
                  </h3>
                  <div className="flex text-yellow-400 mb-1 text-xs gap-1">
                    {Array.from({ length: testimonials[currentSlide].rating }, (_, i) => (
                      <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 truncate">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 italic mt-3 text-sm leading-relaxed">
                "{testimonials[currentSlide].text}"
              </p>
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-700 w-8 h-8 flex items-center justify-center"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-gray-800 w-6" : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View - Three Slides with Arrows */}
        <div className="hidden md:block">
          <div className="relative px-16">
            {/* Previous Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 w-12 h-12 flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Three Testimonial Cards */}
            <div className="grid grid-cols-3 gap-4">
              {getVisibleSlides().map((item, index) => (
                <div key={`${item.id}-${index}`} className="bg-white shadow-lg rounded-2xl p-6 h-56 flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-base truncate">{item.name}</h3>
                      <div className="flex text-yellow-400 mb-1 text-sm gap-1">
                        {Array.from({ length: item.rating }, (_, i) => (
                          <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 truncate">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic mt-4 text-base leading-relaxed">
                    "{item.text}"
                  </p>
                </div>
              ))}
            </div>

            {/* Next Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-700 w-12 h-12 flex items-center justify-center"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? "bg-gray-800 w-6" : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;