import React, { useState, useMemo, useRef, useEffect, memo } from "react";
import { FaHandHoldingHeart, FaPalette, FaUserCheck } from "react-icons/fa6";
import heroimg from "../assets/heroimg.jpeg";
import mypics from "../assets/mypics.jpg";
import ta from "../assets/ta.jpg";
import tc from "../assets/tc.jpg";

// Optimized LazyImage with enhanced transitions
const LazyImage = memo(({ src, alt, className, onLoad }) => {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.01, rootMargin: '50px' }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setLoaded(true);
    onLoad?.();
  };

  return (
    <div ref={imgRef} className={`${className} bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden relative`}>
      {inView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            loaded 
              ? "opacity-100 scale-100 blur-0" 
              : "opacity-0 scale-105 blur-sm"
          }`}
          onLoad={handleLoad}
        />
      )}
      
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}
    </div>
  );
});

LazyImage.displayName = "LazyImage";

// Enhanced FadeInSection with modern animations
const FadeInSection = ({ children, delay = 0, direction = "up" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  const getInitialTransform = () => {
    switch (direction) {
      case "left": return "translateX(-40px)";
      case "right": return "translateX(40px)";
      case "down": return "translateY(-25px)";
      default: return "translateY(40px)";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setVisible(true);
          }, delay);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: '100px' 
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible
          ? "opacity-100 translate-y-0 translate-x-0 scale-100"
          : `opacity-0 ${getInitialTransform()} scale-95`
      }`}
      style={{
        transition: `all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

// Enhanced Team Member Card
const TeamMemberCard = memo(({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeInSection delay={index * 150} direction="up">
      <article 
        className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
        
        <div className="relative bg-white rounded-2xl overflow-hidden">
          {/* Card border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          <div className="absolute inset-[2px] rounded-2xl bg-white z-10" />
          
          <div className="relative z-20 flex flex-col items-center text-center p-6">
            {/* Profile Image */}
            <div className="relative w-48 h-48 mb-4 rounded-full ring-2 ring-pink-200 overflow-hidden bg-gray-200 group-hover:ring-pink-400 transition-all duration-500">
              <LazyImage
                src={member.img}
                alt={member.name}
                className="w-full h-full"
              />
              
              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent transition-all duration-500 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`} />
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-1 transition-all duration-500 group-hover:text-pink-600 group-hover:scale-105">
              {member.name}
            </h3>
            
            <p className="text-pink-600 text-sm font-medium mb-2 transition-all duration-500 group-hover:text-purple-600">
              {member.job}
            </p>
            
            <p className="text-gray-500 text-sm leading-relaxed mb-4 transition-all duration-500 group-hover:text-gray-600">
              {member.desc}
            </p>
            
            {/* Enhanced Button */}
            <button className="group relative bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm px-6 py-2 rounded-full overflow-hidden hover:shadow-xl transition-all duration-500 ease-out active:scale-95">
              {/* Background overlay for hover state */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
              
              <span className="relative z-10">
                Book with {member.name.split(" ")[0]}
              </span>
            </button>
            
            {/* Animated underline */}
            <div className={`mt-4 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-500 ${
              isHovered ? 'w-16 opacity-100' : 'w-0 opacity-0'
            }`} />
          </div>
        </div>
      </article>
    </FadeInSection>
  );
});

TeamMemberCard.displayName = "TeamMemberCard";

// Enhanced Commitment Card
const CommitmentCard = memo(({ card, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeInSection delay={index * 200} direction="up">
      <article 
        className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl" />
        
        <div className="relative bg-white rounded-2xl overflow-hidden">
          {/* Card border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          <div className="absolute inset-[2px] rounded-2xl bg-white z-10" />
          
          <div className="relative z-20 p-6 flex flex-col items-center text-center transition-all duration-500 group-hover:bg-gray-50 rounded-2xl">
            {/* Icon with enhanced animations */}
            <div className="mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              {card.icon}
            </div>
            
            <h3 className="text-lg font-semibold text-gray-800 mb-2 transition-all duration-500 group-hover:text-pink-600 group-hover:scale-105">
              {card.title}
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed transition-all duration-500 group-hover:text-gray-700">
              {card.desc}
            </p>
            
            {/* Animated underline */}
            <div className={`mt-4 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-500 ${
              isHovered ? 'w-16 opacity-100' : 'w-0 opacity-0'
            }`} />
          </div>
        </div>
      </article>
    </FadeInSection>
  );
});

CommitmentCard.displayName = "CommitmentCard";

const About = () => {
  const [testimonialsVisible, setTestimonialsVisible] = useState(false);

  const teamMembers = useMemo(
    () => [
      {
        img: mypics,
        name: "Modasola Elufisan",
        job: "Lead Nail Artist",
        desc: "With over 10 years of experience, Modasola specializes in creative nail designs and luxury hand treatments.",
      },
      {
        img: ta,
        name: "Amara Benson",
        job: "Senior Nail Technician",
        desc: "Amara's precision and gentle care make her a favorite for both manicure and pedicure services.",
      },
      {
        img: tc,
        name: "Tosin Adeyemi",
        job: "Nail Art Specialist",
        desc: "Tosin brings your nail ideas to life with stunning art, color, and custom design techniques.",
      },
    ],
    []
  );

  const commitmentCards = useMemo(
    () => [
      {
        icon: <FaHandHoldingHeart size={40} className="text-pink-600" />,
        title: "Hygiene and Safety",
        desc: "We uphold the highest standards of cleanliness, sterilization, and client safety in every service.",
      },
      {
        icon: <FaPalette size={40} className="text-pink-600" />,
        title: "Creativity and Artistry",
        desc: "Our team blends modern trends with artistic precision to craft unique nail designs that inspire confidence.",
      },
      {
        icon: <FaUserCheck size={40} className="text-pink-600" />,
        title: "Client Focused",
        desc: "Your comfort and satisfaction are at the heart of everything we do — every visit is a personalized experience.",
      },
    ],
    []
  );

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 py-10 overflow-hidden selection:bg-pink-200/40">
      {/* Enhanced Hero Section */}
      <FadeInSection delay={0} direction="down">
        <section className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden group mb-12">
          <LazyImage
            src={heroimg}
            alt="Nail salon hero"
            className="w-full h-full"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent transition-all duration-700 group-hover:from-black/70" />
          
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000">
            <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-1000 ease-out">
              Where Artistry Meets Your Fingertips
            </h1>
            
            <p className="mt-3 text-white/90 text-sm sm:text-base max-w-xl leading-relaxed transform group-hover:translate-y-2 transition-transform duration-700 delay-200">
              Pamper Yourself With Our Signature Nail Treatments
            </p>
            
            {/* Animated underline */}
            <div className="mt-4 w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-500 origin-center" />
          </div>
        </section>
      </FadeInSection>

      {/* Enhanced Story Section */}
      <FadeInSection delay={100} direction="up">
        <div className="lg:py-8 pt-1">
          <h2 className="text-lg sm:text-xl font-bold mb-3 text-center sm:text-left bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Our Story
          </h2>

          <div className="flex flex-col lg:flex-row justify-between gap-8 mt-5 items-center">
            <div className="flex flex-col lg:w-1/2">
              <h3 className="text-base sm:text-lg font-medium mb-2 text-gray-800">
                From Passion to Profession
              </h3>
              <p className="text-pink-700 mb-4 leading-relaxed text-sm sm:text-base">
                Founded in 2016 by lead artist{" "}
                <span className="font-semibold">Modasola Elufisan</span>, our salon was born from a lifelong passion for nail art and a desire to create a welcoming space where clients feel pampered and beautiful.
              </p>
              
              <h3 className="text-base sm:text-lg font-medium mb-2 text-gray-800">
                Our Mission
              </h3>
              <p className="text-pink-700 leading-relaxed text-sm sm:text-base">
                Our mission is to deliver exceptional nail services in a clean, safe, and friendly environment.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <LazyImage
                src={heroimg}
                alt="Our Story"
                className="h-60 sm:h-72 lg:h-80 rounded-xl"
              />
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Enhanced Team Section */}
      <FadeInSection delay={200} direction="down">
        <div className="py-16">
          <h2 className="text-lg sm:text-xl font-bold mb-10 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Talented Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <TeamMemberCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Enhanced Commitment Section */}
      <FadeInSection delay={300} direction="up">
        <div className="pt-12">
          <h2 className="text-lg sm:text-xl font-bold mb-10 text-center bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Our Commitment to You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {commitmentCards.map((card, i) => (
              <CommitmentCard key={i} card={card} index={i} />
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default memo(About);