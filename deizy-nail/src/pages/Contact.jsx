import React, { useState, useMemo, useRef, useEffect, memo } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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

// Enhanced Contact Info Item
const ContactInfoItem = memo(({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeInSection delay={300 + index * 100} direction="right">
      <div 
        className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white hover:shadow-xl transition-all duration-500 ease-out cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Icon Container */}
        <div className="relative">
          <div className="p-3 rounded-xl bg-gradient-to-br from-pink-50 to-purple-50 group-hover:from-pink-100 group-hover:to-purple-100 transition-all duration-500">
            <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              {item.icon}
            </div>
          </div>
          
          {/* Icon glow effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-all duration-500" />
        </div>
        
        <span className="text-gray-700 text-sm sm:text-base transition-all duration-500 group-hover:text-gray-900 group-hover:translate-x-2">
          {item.text}
        </span>
        
        {/* Hover indicator line */}
        <div className={`ml-auto h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-500 ${
          isHovered ? 'w-8 opacity-100' : 'w-0 opacity-0'
        }`} />
      </div>
    </FadeInSection>
  );
});

ContactInfoItem.displayName = "ContactInfoItem";

// Enhanced Form Input Component
const FormInput = memo(({ label, type = "text", index }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeInSection delay={200 + index * 100} direction="up">
      <div 
        className="group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <label className="block text-sm font-semibold text-gray-700 mb-2 transition-all duration-500 group-hover:text-pink-600">
          {label}
        </label>
        
        <div className="relative">
          {type === "textarea" ? (
            <textarea
              rows="4"
              placeholder={`Write your ${label.toLowerCase()}...`}
              className={`w-full border rounded-xl px-4 py-3 focus:outline-none transition-all duration-500 resize-none bg-white ${
                isFocused 
                  ? "border-pink-500 ring-2 ring-pink-500/20 shadow-lg" 
                  : "border-gray-300 group-hover:border-pink-300 group-hover:shadow-md"
              }`}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          ) : (
            <input
              type={type}
              placeholder={`Enter your ${label.toLowerCase()}`}
              className={`w-full border rounded-xl px-4 py-3 focus:outline-none transition-all duration-500 bg-white ${
                isFocused 
                  ? "border-pink-500 ring-2 ring-pink-500/20 shadow-lg" 
                  : "border-gray-300 group-hover:border-pink-300 group-hover:shadow-md"
              }`}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          )}
          
          {/* Focus indicator line */}
          <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-500 ${
            isFocused ? 'w-full opacity-100' : 'w-0 opacity-0'
          }`} />
        </div>
      </div>
    </FadeInSection>
  );
});

FormInput.displayName = "FormInput";

// Enhanced Submit Button
const SubmitButton = memo(() => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeInSection delay={500} direction="up">
      <button
        type="submit"
        className="group relative w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-4 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out active:scale-95"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background overlay for hover state */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
        
        {/* Button glow */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-500 -z-10" />
        
        {/* Button content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          Send Message
          <svg
            className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </span>
      </button>
    </FadeInSection>
  );
});

SubmitButton.displayName = "SubmitButton";

const Contact = () => {
  const contactInfo = useMemo(
    () => [
      {
        icon: <FaPhoneAlt className="text-pink-600 text-xl" />,
        text: "+234 708 709 5727",
      },
      {
        icon: <FaEnvelope className="text-pink-600 text-xl" />,
        text: "dasolaelufisan123@gmail.com",
      },
      {
        icon: <FaMapMarkerAlt className="text-pink-600 text-xl" />,
        text: "24 Pink Avenue, Lagos, Nigeria",
      },
    ],
    []
  );

  const formFields = useMemo(
    () => [
      { label: "Your Name", type: "text" },
      { label: "Email Address", type: "email" },
      { label: "Message", type: "textarea" },
    ],
    []
  );

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 xl:px-56 py-20 bg-white overflow-hidden selection:bg-pink-200/40">
      {/* Enhanced Title Section */}
      <FadeInSection delay={0} direction="down">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mx-auto transform transition-all duration-500 ease-out hover:scale-x-125" />
        </div>
      </FadeInSection>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Enhanced Left Side */}
        <div className="flex flex-col justify-center space-y-2">
          <FadeInSection delay={100} direction="right">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              We'd love to hear from you! Whether you want to book an appointment,
              ask a question, or just say hi — reach out and we'll respond soon.
            </p>
          </FadeInSection>

          {/* Enhanced Contact Info */}
          <div className="space-y-3">
            {contactInfo.map((item, index) => (
              <ContactInfoItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* Enhanced Right Side (Form) */}
        <FadeInSection delay={100} direction="left">
          <div className="group relative">
            {/* Form background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl rounded-2xl" />
            
            <form className="relative bg-gradient-to-br from-pink-50 to-purple-50 p-6 sm:p-8 rounded-2xl shadow-lg space-y-6 hover:shadow-2xl transition-all duration-500 ease-out z-10">
              {/* Form border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute inset-[2px] rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 z-10" />
              
              <div className="relative z-20 space-y-6">
                {formFields.map((field, index) => (
                  <FormInput 
                    key={field.label} 
                    label={field.label} 
                    type={field.type} 
                    index={index} 
                  />
                ))}
                
                <SubmitButton />
              </div>
            </form>
          </div>
        </FadeInSection>
      </div>

      {/* Background decorative elements */}
      <div className="fixed top-1/4 left-1/4 w-48 h-48 bg-pink-300/10 rounded-full blur-3xl animate-pulse -z-10" />
      <div className="fixed bottom-1/4 right-1/4 w-56 h-56 bg-purple-300/10 rounded-full blur-3xl animate-pulse delay-1000 -z-10" />
    </div>
  );
};

export default memo(Contact);