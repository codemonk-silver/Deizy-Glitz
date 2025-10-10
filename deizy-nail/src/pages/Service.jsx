import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const Service = React.memo(() => {
  const [activeService, setActiveService] = useState("Manicure");

  // ✅ Memoize data to prevent recreation
  const serviceData = useMemo(
    () => ({
      Manicure: [
        { img: mani, title: "Luxury Manicure", desc: "Experience our soothing hand care treatment with nourishing oils and flawless polish." },
        { img: manic, title: "Classic Manicure", desc: "A timeless treatment that keeps your hands soft and nails beautifully polished." },
        { img: manicu, title: "Gel Manicure", desc: "Enjoy chip-free shine with our long-lasting gel finish and expert touch." },
      ],
      Pedicure: [
        { img: pedi, title: "Spa Pedicure", desc: "Relax and rejuvenate your feet with an exfoliating soak and massage treatment." },
        { img: pedic, title: "Deluxe Pedicure", desc: "A deep foot care experience that restores hydration and leaves you feeling refreshed." },
        { img: pedicu, title: "Express Pedicure", desc: "Perfect for those on the go — quick, clean, and polished to perfection." },
      ],
      "Nail Enhancements": [
        { img: ench, title: "Acrylic Extensions", desc: "Get long-lasting nail extensions designed to your ideal shape and style." },
        { img: encha, title: "Gel Extensions", desc: "Flexible, natural-looking gel enhancements with a durable, glossy finish." },
        { img: enchan, title: "Overlay Treatment", desc: "Strengthen your natural nails with a smooth, elegant overlay." },
      ],
      "Nail Arts": [
        {
          img: "https://images.unsplash.com/photo-1612104124593-2c9331c9d6f8?auto=format&fit=crop&w=600&q=60",
          title: "Custom Nail Art",
          desc: "Express your creativity with our stunning custom designs and hand-painted details.",
        },
        {
          img: "https://images.unsplash.com/photo-1602167686690-7fcb30efc0c5?auto=format&fit=crop&w=600&q=60",
          title: "Minimalist Design",
          desc: "Clean, simple lines and elegant colors for a modern nail look.",
        },
        {
          img: "https://images.unsplash.com/photo-1599058917212-d750089bc07f?auto=format&fit=crop&w=600&q=60",
          title: "3D Nail Art",
          desc: "Add sparkle and texture with bold, eye-catching 3D designs.",
        },
      ],
    }),
    []
  );

  const smoothSpring = { type: "spring", stiffness: 80, damping: 18, mass: 1 };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: smoothSpring },
  };

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 mt-8 overflow-hidden">
      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <motion.img
          src={heroimg}
          alt="hero"
          loading="lazy"
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-76 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl will-change-transform"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="absolute inset-0 bg-black rounded-xl"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 tracking-wide"
          >
            Explore Our Services
          </motion.h1>
          <motion.p className="text-white text-sm sm:text-base max-w-xl leading-relaxed">
            Pamper Yourself With Our Signature Nail Treatments
          </motion.p>
        </motion.div>
      </motion.div>

      {/* NAVIGATION */}
      <motion.ul
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium"
      >
        {Object.keys(serviceData).map((service) => (
          <motion.li
            key={service}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={smoothSpring}
            onClick={() => setActiveService(service)}
            className={`cursor-pointer flex flex-col items-center gap-1 transition-colors duration-300 ${
              activeService === service
                ? "text-pink-600"
                : "text-gray-500 hover:text-pink-400"
            }`}
          >
            <p>{service}</p>
            {activeService === service && (
              <motion.div
                layoutId="underline"
                className="w-3/4 h-[2px] bg-pink-500 rounded-full"
              />
            )}
          </motion.li>
        ))}
      </motion.ul>

      {/* SERVICE CARDS */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
        >
          {serviceData[activeService].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...smoothSpring, delay: index * 0.1 }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
              }}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 will-change-transform"
            >
              <motion.img
                src={item.img}
                alt={item.title}
                loading="lazy"
                className="w-full h-48 sm:h-56 md:h-60 object-cover will-change-transform"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* TESTIMONIAL SECTION */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="pt-20 pb-10"
      >
        <p className="text-center text-lg sm:text-xl font-semibold mb-10">
          What Our Clients Say
        </p>

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
            <motion.div
              key={i}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 25px rgba(0,0,0,0.1)",
              }}
              transition={smoothSpring}
              className="bg-white shadow-lg rounded-xl p-5 flex-1 transition-all duration-300 will-change-transform"
            >
              <div className="flex items-center mb-3">
                <img
                  src={review.img}
                  alt={review.name}
                  loading="lazy"
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
                    className={j < review.stars ? "text-yellow-400" : "text-gray-300"}
                  />
                ))}
              </div>

              <p className="text-gray-500 text-sm leading-relaxed">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
});

export default Service;