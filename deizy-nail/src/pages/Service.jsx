import React, { useState, useMemo, memo, useEffect, useRef } from "react";
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

// Memoized image component with lazy loading
const LazyImage = memo(({ src, alt, className }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div className={`${className} bg-gray-100 overflow-hidden`}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          className={`w-full h-full object-cover transition-all duration-700 ${
            loaded ? "opacity-100 hover:scale-110" : "opacity-0"
          }`}
        />
      )}
      {!loaded && <div className="w-full h-full animate-pulse bg-gray-200" />}
    </div>
  );
});

LazyImage.displayName = "LazyImage";

const FadeInSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
            observer.unobserve(ref.current);
          }, delay);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform will-change-transform ${
        visible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-8 scale-[0.98]"
      }`}
    >
      {visible && children}
    </div>
  );
};

// Memoized service card
const ServiceCard = memo(({ item }) => (
  <FadeInSection>
    <article className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="h-52 sm:h-60">
        <LazyImage
          src={item.img}
          alt={item.title}
          className="w-full h-full"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 hover:text-pink-600 transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    </article>
  </FadeInSection>
));

ServiceCard.displayName = "ServiceCard";

// Testimonials section only renders when visible
const TestimonialsSection = memo(() => {
  const reviews = [
    {
      name: "Sarah Johnson",
      date: "September 25, 2025",
      text: "Absolutely loved my manicure! The staff were so kind and the atmosphere was relaxing.",
      stars: 5,
    },
    {
      name: "James Carter",
      date: "August 10, 2025",
      text: "Great experience! I booked a pedicure and was impressed by the attention to detail.",
      stars: 4,
    },
  ];

  return (
    <section className="pt-20 pb-10">
      <FadeInSection delay={0}>
        <h2 className="text-center text-lg sm:text-xl font-semibold mb-10 tracking-wide">
          What Our Clients Say
        </h2>
      </FadeInSection>
      <div className="flex flex-col sm:flex-row justify-between gap-6">
        {reviews.map((review, i) => (
          <FadeInSection key={i} delay={i * 150}>
            <div className="bg-white shadow-md rounded-2xl p-5 flex-1 hover:shadow-xl transition-all duration-500">
              <div className="flex items-center mb-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-pink-300 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h3 className="text-gray-800 font-semibold">
                    {review.name}
                  </h3>
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
              <p className="text-gray-500 text-sm leading-relaxed italic">
                "{review.text}"
              </p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
});

TestimonialsSection.displayName = "TestimonialsSection";

const Service = memo(() => {
  const [activeService, setActiveService] = useState("Manicure");
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);

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
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 mt-8 selection:bg-pink-200/40">
      {/* HERO SECTION */}
      <FadeInSection delay={0}>
        <section className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
          <LazyImage
            src={heroimg}
            alt="Nail salon hero"
            className="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white drop-shadow-lg transition-all duration-700">
              Explore Our Services
            </h1>
            <p className="mt-3 text-white/90 text-sm sm:text-base max-w-xl leading-relaxed">
              Pamper Yourself With Our Signature Nail Treatments
            </p>
          </div>
        </section>
      </FadeInSection>

      {/* NAVIGATION */}
      <FadeInSection delay={100}>
        <nav className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-medium">
          {Object.keys(serviceData).map((service) => (
            <button
              key={service}
              onClick={() => setActiveService(service)}
              className={`relative px-2 py-1 transition-all duration-300 ${
                activeService === service
                  ? "text-pink-600 border-b-2 border-pink-500 scale-105"
                  : "text-gray-500 hover:text-pink-400 hover:scale-105"
              }`}
            >
              {service}
            </button>
          ))}
        </nav>
      </FadeInSection>

      {/* SERVICE CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {serviceData[activeService].map((item, i) => (
          <ServiceCard key={`${activeService}-${i}`} item={item} />
        ))}
      </section>

      {/* TESTIMONIALS - LAZY LOADED */}
      <div
        ref={(el) => {
          if (el) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setTestimonialsVisible(true);
                  observer.unobserve(el);
                }
              },
              { threshold: 0.1 }
            );
            observer.observe(el);
          }
        }}
      >
        {testimonialsVisible && <TestimonialsSection />}
      </div>
    </div>
  );
});

Service.displayName = "Service";

export default Service;