import React from "react";
import { motion } from "framer-motion"; // ✅ Animation library
import f1 from "../assets/f1.jpg";
import tb from "../assets/tb.jpg";
import f2 from "../assets/f2.jpg";
import ta from "../assets/ta.jpg";
import tc from "../assets/tc.jpg";
import f3 from "../assets/f3.jpg";

const images = [f1, tb, f2, ta, tc, f3];

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
