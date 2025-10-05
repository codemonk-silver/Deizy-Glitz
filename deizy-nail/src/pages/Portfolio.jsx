import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBorderAll,
  FaPaintBrush,
  FaGem,
  FaPalette,
  FaHandSparkles,
  FaSpa,
} from "react-icons/fa";

import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import ta from "../assets/ta.jpg";
import tb from "../assets/tb.jpg";
import tc from "../assets/tc.jpg";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { name: "All", icon: <FaBorderAll size={22} /> },
    { name: "Gel", icon: <FaPaintBrush size={22} /> },
    { name: "Acrylic", icon: <FaGem size={22} /> },
    { name: "Nail Art", icon: <FaPalette size={22} /> },
    { name: "Manicure", icon: <FaHandSparkles size={22} /> },
    { name: "Pedicure", icon: <FaSpa size={22} /> },
  ];

  const gallery = {
    Gel: [f1, f2, f3, ta, tb],
    Acrylic: [f2, f3, ta, tb, tc],
    "Nail Art": [f1, f2, tb, tc, ta],
    Manicure: [tb, ta, f3, f1, f2],
    Pedicure: [tc, tb, f1, f2, f3],
  };

  const allImages = Object.keys(gallery).flatMap((key) =>
    gallery[key].map((img) => ({ img, category: key }))
  );

  const filteredGallery =
    activeCategory === "All"
      ? allImages
      : gallery[activeCategory]?.map((img) => ({
          img,
          category: activeCategory,
        })) || [];

  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 py-16 overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-800"
      >
        Our Work
      </motion.h2>

      {/* Category Buttons */}
      <motion.div
        className="flex overflow-x-auto justify-start sm:justify-center gap-3 sm:gap-5 mb-10 pb-2 scrollbar-hide"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {categories.map((cat) => (
          <motion.button
            key={cat.name}
            whileTap={{ scale: 0.93 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            onClick={() => setActiveCategory(cat.name)}
            className={`flex flex-col items-center px-4 sm:px-6 py-3 rounded-lg transition-all duration-500 ease-in-out min-w-[90px] sm:min-w-[110px] md:min-w-[130px] flex-shrink-0 shadow-sm 
              ${
                activeCategory === cat.name
                  ? "bg-pink-600 text-white shadow-md"
                  : "bg-pink-300 text-white hover:bg-pink-400"
              }`}
          >
            <div className="mb-1">{cat.icon}</div>
            <span className="text-xs sm:text-sm font-semibold">
              {cat.name}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Gallery */}
      <motion.div
        layout
        className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        <AnimatePresence mode="wait">
          {filteredGallery.length > 0 ? (
            filteredGallery.map((item, index) => (
              <motion.div
                key={`${item.img}-${index}`}
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: "easeInOut",
                }}
                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg group cursor-pointer"
              >
                <motion.img
                  src={item.img}
                  alt={item.category}
                  className="w-full h-56 sm:h-64 md:h-72 object-cover brightness-95 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-100"
                />

                {/* Overlay Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute bottom-0 left-0 right-0 bg-pink-600 text-white text-center py-2 text-sm sm:text-base font-medium rounded-b-xl"
                >
                  {item.category}
                </motion.div>
              </motion.div>
            ))
          ) : (
            <motion.p
              key="no-images"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center col-span-full text-gray-500"
            >
              No images found.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Portfolio;
