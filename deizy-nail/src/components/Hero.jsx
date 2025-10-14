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

// ✅ Optimized fade (one observer reused)
const FadeInSection = ({ children, index = 0 }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let observer = window._fadeObserver;
    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-show");
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.1 }
      );
      window._fadeObserver = observer;
    }
    if (ref.current) observer.observe(ref.current);
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
      className="fade-hide will-change-transform"
    >
      {children}
    </div>
  );
};

// ✅ Tailwind utility for smooth fade-in (no JS transitions)
const fadeClasses = `
.fade-hide {opacity:0; transform:translateY(12px) scale(.98); transition:all .6s cubic-bezier(.25,1,.3,1);}
.fade-show {opacity:1; transform:translateY(0) scale(1);}
`;

// ✅ Card
const ServiceCard = memo(({ service, index }) => (
  <FadeInSection index={index}>
    <div className="group relative border border-gray-200 rounded-2xl p-6 bg-white shadow-sm transition-all duration-400 hover:shadow-xl hover:-translate-y-2">
      <div className="mb-4 flex justify-center sm:justify-start">
        <div className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
          {service.icon}
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800 transition-colors duration-300 group-hover:text-pink-600 text-center sm:text-left">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed text-center sm:text-left group-hover:text-gray-800 transition-colors duration-300">
        {service.desc}
      </p>
    </div>
  </FadeInSection>
));

ServiceCard.displayName = "ServiceCard";

const Hero = () => {
  const phoneNumber = "2347087095727";
  const message = "Hi, I’d like to book an appointment.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <style>{fadeClasses}</style>
      <div className="px-4 sm:px-8 md:px-12 lg:px-56 mt-4 overflow-hidden selection:bg-pink-100/50">
        {/* HERO */}
        <div className="relative w-full mt-4 rounded-2xl overflow-hidden">
          <img
            src={heroimg}
            alt="Hero"
            loading="lazy"
            decoding="async"
            className="w-full h-[18rem] sm:h-[22rem] lg:h-[26rem] object-cover transform-gpu transition-transform duration-[1200ms] ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 sm:px-4">
            <FadeInSection>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-wide drop-shadow-md transition-transform duration-500 transform-gpu">
                Experience The Art Of Beautiful Nails
              </h1>
            </FadeInSection>
            <FadeInSection index={0.1}>
              <p className="text-white/90 max-w-md sm:max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed mb-10">
                Welcome to our nail studio where creativity and precision meet.
                Let us pamper you with the finest nail care services.
              </p>
            </FadeInSection>
            <FadeInSection index={0.2}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-2 bg-pink-500 font-semibold text-white text-xs sm:text-sm md:text-base rounded-md mt-6 hover:bg-pink-600 hover:scale-105 active:scale-95 transition-transform duration-300 shadow-md hover:shadow-pink-300/50"
              >
                Book Appointment
              </a>
            </FadeInSection>
          </div>
        </div>

        {/* SERVICES */}
        <FadeInSection index={0.3}>
          <p className="mt-12 text-lg sm:text-xl font-semibold text-center sm:text-left text-gray-800 tracking-wide">
            Our Services
          </p>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default memo(Hero);
