import React, { useState, useMemo, memo } from "react";
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

const Service = memo(() => {
  const [activeService, setActiveService] = useState("Manicure");

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

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 mt-8 overflow-hidden selection:bg-pink-200/40">
      {/* HERO SECTION */}
      <section className="relative w-full h-64 sm:h-72 md:h-80 lg:h-[28rem] overflow-hidden rounded-2xl">
        <img
          src={heroimg}
          alt="Nail salon hero"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover will-change-transform duration-500 ease-in-out scale-100 hover:scale-105 transition-transform"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg animate-[fadeIn_1s_ease-out]">
            Explore Our Services
          </h1>
          <p className="mt-3 text-white/90 text-sm sm:text-base max-w-xl leading-relaxed animate-[fadeIn_1.2s_ease-out]">
            Pamper Yourself With Our Signature Nail Treatments
          </p>
        </div>
      </section>

      {/* NAVIGATION */}
      <nav className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium animate-[fadeIn_1s_ease-out_0.3s_both]">
        {Object.keys(serviceData).map((service) => (
          <button
            key={service}
            onClick={() => setActiveService(service)}
            className={`relative px-2 py-1 transition-all duration-300 ${
              activeService === service
                ? "text-pink-600 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-[2px] after:bg-pink-500 after:rounded-full after:animate-[scaleIn_0.3s_ease-out]"
                : "text-gray-500 hover:text-pink-400"
            }`}
          >
            {service}
          </button>
        ))}
      </nav>

      {/* SERVICE CARDS */}
      <section
        key={activeService}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      >
        {serviceData[activeService].map((item, i) => (
          <article
            key={i}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500 will-change-transform animate-[slideUp_0.6s_ease-out_both]"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden bg-gray-100">
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </article>
        ))}
      </section>

      {/* TESTIMONIALS */}
      <section className="pt-20 pb-10 animate-[fadeIn_1s_ease-out_0.2s_both]">
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-10">
          What Our Clients Say
        </h2>

        <div className="flex flex-col sm:flex-row justify-between gap-6">
          {[
            {
              name: "Sarah Johnson",
              date: "September 25, 2025",
              img: "https://randomuser.me/api/portraits/women/65.jpg",
              text: "Absolutely loved my manicure! The staff were so kind and the atmosphere was relaxing.",
              stars: 5,
            },
            {
              name: "James Carter",
              date: "August 10, 2025",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
              text: "Great experience! I booked a pedicure and was impressed by the attention to detail.",
              stars: 4,
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl p-5 flex-1 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 will-change-transform"
            >
              <div className="flex items-center mb-3">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-gray-800 font-semibold">{review.name}</h3>
                  <p className="text-gray-400 text-sm">{review.date}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(5)].map((_, j) => (
                  <FaStar
                    key={j}
                    className={`${
                      j < review.stars ? "text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-500 text-sm leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Modern animations using Tailwind keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
});

export default Service;
