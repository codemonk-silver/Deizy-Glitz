import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import heroimg from "../assets/heroimg.png";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";

const Service = () => {
  const [activeService, setActiveService] = useState("Manicure");

  const serviceData = {
    Manicure: [
      {
        img: f1,
        title: "Luxury Manicure",
        desc: "Experience our soothing hand care treatment with nourishing oils and flawless polish.",
      },
      {
        img: f2,
        title: "Classic Manicure",
        desc: "A timeless treatment that keeps your hands soft and nails beautifully polished.",
      },
      {
        img: f3,
        title: "Gel Manicure",
        desc: "Enjoy chip-free shine with our long-lasting gel finish and expert touch.",
      },
    ],
    Pedicure: [
      {
        img: "https://images.unsplash.com/photo-1599058917212-d750089bc07f",
        title: "Spa Pedicure",
        desc: "Relax and rejuvenate your feet with an exfoliating soak and massage treatment.",
      },
      {
        img: "https://images.unsplash.com/photo-1602167686690-7fcb30efc0c5",
        title: "Deluxe Pedicure",
        desc: "A deep foot care experience that restores hydration and leaves you feeling refreshed.",
      },
      {
        img: "https://images.unsplash.com/photo-1595941069919-fbaedaa7f2f4",
        title: "Express Pedicure",
        desc: "Perfect for those on the go — quick, clean, and polished to perfection.",
      },
    ],
    "Nail Enchancements": [
      {
        img: "https://images.unsplash.com/photo-1612104124444-8f8e5f8f8d60",
        title: "Acrylic Extensions",
        desc: "Get long-lasting nail extensions designed to your ideal shape and style.",
      },
      {
        img: "https://images.unsplash.com/photo-1584622650111-f1d6bca9b11d",
        title: "Gel Extensions",
        desc: "Flexible, natural-looking gel enhancements with a durable, glossy finish.",
      },
      {
        img: "https://images.unsplash.com/photo-1621522434169-b232f0cfc7eb",
        title: "Overlay Treatment",
        desc: "Strengthen your natural nails with a smooth, elegant overlay.",
      },
    ],
    "Nail Arts": [
      {
        img: "https://images.unsplash.com/photo-1612104124593-2c9331c9d6f8",
        title: "Custom Nail Art",
        desc: "Express your creativity with our stunning custom designs and hand-painted details.",
      },
      {
        img: "https://images.unsplash.com/photo-1602167686690-7fcb30efc0c5",
        title: "Minimalist Design",
        desc: "Clean, simple lines and elegant colors for a modern nail look.",
      },
      {
        img: "https://images.unsplash.com/photo-1599058917212-d750089bc07f",
        title: "3D Nail Art",
        desc: "Add sparkle and texture with bold, eye-catching 3D designs.",
      },
    ],
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 mt-8">
      {/* HERO SECTION */}
      <div className="relative">
        <img
          className="w-full h-76 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl"
          src={heroimg}
          alt="hero"
        />
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3">
            Explore Our Services
          </h1>
          <p className="text-white text-sm sm:text-base max-w-xl">
            Pamper Yourself With Our Signature Nail Treatments
          </p>
        </div>
      </div>

      {/* NAVIGATION */}
      <div className="mt-10">
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium">
          {Object.keys(serviceData).map((service) => (
            <li
              key={service}
              onClick={() => setActiveService(service)}
              className={`cursor-pointer flex flex-col items-center gap-1 transition-all duration-200 ${
                activeService === service
                  ? "text-pink-600 scale-105"
                  : "text-gray-500 hover:text-pink-400"
              }`}
            >
              <p>{service}</p>
              <hr
                className={`w-3/4 border-none h-[2px] transition-all duration-200 ${
                  activeService === service ? "bg-pink-500" : "bg-transparent"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* CARD SECTION */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {serviceData[activeService].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 sm:h-56 md:h-60 object-cover"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* TESTIMONIAL SECTION */}
      <div className="pt-18 pb-5">
        <p className="text-center text-lg sm:text-xl font-semibold mb-10">
          What Our Clients Say
        </p>

        <div className="flex flex-col sm:flex-row justify-between gap-6">
          {/* CARD 1 */}
          <div className="bg-white shadow-lg rounded-xl p-5 flex-1">
            <div className="flex items-center mb-3">
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="Client 1"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-gray-800 font-semibold">Sarah Johnson</h3>
                <p className="text-gray-400 text-sm">September 25, 2025</p>
              </div>
            </div>

            <div className="flex mb-3 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              "Absolutely loved my manicure! The staff were so kind and the
              atmosphere was relaxing. My nails have never looked better!"
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white shadow-lg rounded-xl p-5 flex-1">
            <div className="flex items-center mb-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Client 2"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-gray-800 font-semibold">James Carter</h3>
                <p className="text-gray-400 text-sm">August 10, 2025</p>
              </div>
            </div>

            <div className="flex mb-3 text-yellow-400">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} />
              ))}
              <FaStar className="text-gray-300" />
            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              "Great experience! I booked a pedicure and was impressed by the
              attention to detail. Definitely coming back soon."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
