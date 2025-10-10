import React from "react";
import { motion } from "framer-motion"; // ✅ Animation library
import hom from "../assets/hom.jpg";
import homm from "../assets/homm.jpg";
import hoom from "../assets/hoom.jpg";
import pedi from "../assets/pedi.jpg";
import enchan from "../assets/enchan.jpg";
import manicu from "../assets/manicu.jpg";

const images = [hom, homm, hoom, pedi, enchan, manicu];

// Framer Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const OurPortfolio = () => {
  return (
    <div className="px-6 md:px-12 lg:px-56 py-10">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-lg md:text-xl font-semibold mb-6 text-center md:text-left"
      >
        Our Portfolio
      </motion.p>

      {/* Responsive Animated Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl shadow-md group"
          >
            {/* Image */}
            <img
              src={img}
              alt={`portfolio-${i}`}
              className="w-full h-56 sm:h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />

           
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurPortfolio;
