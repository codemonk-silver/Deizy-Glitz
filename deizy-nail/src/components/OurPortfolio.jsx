import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hom from "../assets/hom.jpg";
import homm from "../assets/homm.jpg";
import hoom from "../assets/hoom.jpg";
import pedi from "../assets/pedi.jpg";
import enchan from "../assets/enchan.jpg";
import manicu from "../assets/manicu.jpg";

const images = [hom, homm, hoom, pedi, enchan, manicu];

const OurPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  // trigger animation a tick after mount → ensures smooth fade-in without delay
  useEffect(() => {
    const timer = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <div className="px-6 md:px-12 lg:px-56 py-10">
      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: -15 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1], // smooth cubic-bezier easeOut
        }}
        className="text-lg md:text-xl font-semibold mb-6 text-center md:text-left"
      >
        Our Portfolio
      </motion.p>

      {/* Image Grid */}
      <motion.div
        layout
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={
              isVisible
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: i * 0.08,
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  }
                : {}
            }
            className="relative overflow-hidden rounded-xl shadow-md group will-change-transform"
          >
            <motion.img
              src={img}
              alt={`portfolio-${i}`}
              className="w-full h-56 sm:h-64 lg:h-80 object-cover"
              whileHover={{
                scale: 1.08,
                rotate: 0.2,
                transition: { duration: 0.5, ease: "easeOut" },
              }}
            />

            {/* Soft overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.4 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black rounded-xl"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurPortfolio;
