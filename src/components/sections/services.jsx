import React, { useState, useRef, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { Spinner } from "../Spinner";
import { X } from "lucide-react";

export const Services = () => {
  const [showCalOverlay, setShowCalOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const iframeRef = useRef(null);
  const overlayRef = useRef(null);

  const calLink = "https://cal.com/noah-dave-1xhwd5/quick-call-consultation";

  const services = [
    {
      title: "Web Development",
      description: "Custom, responsive and scalable websites using modern technologies.",
      icon: "🌐",
    },
    {
      title: "IT Consulting",
      description: "Expert advice on network architecture, cloud, and cybersecurity.",
      icon: "💼",
    },
    {
      title: "Digital Marketing",
      description: "Data-driven strategies to grow and engage your digital audience.",
      icon: "📈",
    },
    {
      title: "SEO Optimization",
      description: "Rank higher on Google with technical & content-based SEO strategies.",
      icon: "🔍",
    },
    
  ];

  const handleBookClick = () => {
    setShowCalOverlay(true);
    setIsLoading(true);
  };

  const handleCalLoad = () => {
    setIsLoading(false);
  };

  const handleCloseCal = () => {
    setShowCalOverlay(false);
    setIsLoading(false);
  };

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(event.target)
      ) {
        handleCloseCal();
      }
    };
    if (showCalOverlay) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCalOverlay]);

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="services"
      className="relative flex flex-col items-center justify-center min-h-screen py-10 px-5 bg-gradient-custom2 overflow-hidden"
    >
      {/* Decorative Blurred Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl -z-10" />

      {/* Spinner Overlay */}
      {isLoading && <Spinner message="Opening calendar..." />}

      <RevealOnScroll>
  <section className="max-w-6xl mx-auto px-4 py-20 text-center">
    {/* Header */}
    <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
      Services I Offer
    </h2>
    <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-md" />

    {/* Services List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-white/10 bg-gradient-to-tr from-white/5 to-white/10 backdrop-blur-md shadow-md hover:shadow-xl hover:border-blue-400/20 transition-all duration-300"
        >
          {/* Toggle Header */}
          <button
            className="flex items-center justify-between w-full px-6 py-5 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-t-xl"
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`service-panel-${idx}`}
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl text-blue-400 group-hover:scale-110 transition-transform">{service.icon}</span>
              <span className="text-lg sm:text-xl font-semibold text-white">{service.title}</span>
            </div>
            <span
              className={`text-white transform transition-transform duration-300 ${
                openIndex === idx ? 'rotate-90' : ''
              }`}
            >
              ▶
            </span>
          </button>

          {/* Collapsible Description */}
          <div
            id={`service-panel-${idx}`}
            className={`px-6 pb-5 text-gray-300 text-sm leading-relaxed transition-all duration-300 ease-in-out overflow-hidden ${
              openIndex === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ transitionProperty: 'max-height, opacity' }}
          >
            {service.description}
          </div>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <button
      onClick={handleBookClick}
      className="mt-16 inline-flex items-center gap-2 px-6 py-3 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-700 to-slate-700 hover:from-blue-600 hover:to-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
    >
      <span role="img" aria-label="calendar">📅</span>
      Book My Cal
    </button>
  </section>
</RevealOnScroll>


      {/* Calendar Overlay */}
      {showCalOverlay && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-[6px] animate-fadeAndScale">
          <div
            ref={overlayRef}
            className="relative w-full max-w-5xl h-[90vh] rounded-xl overflow-hidden shadow-xl border border-white/10 "
          >
            {/* Close Menu Icon */}
            <button
              onClick={handleCloseCal}
              className="absolute top-3 right-3 text-white hover:text-red-500 z-50"
              aria-label="Close calendar"
            >
              <X size={24} />
            </button>

            {/* Cal iframe */}
            <iframe
              ref={iframeRef}
              src={calLink}
              title="Schedule Call"
              className={`w-full h-full border-0 transition-opacity duration-500 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
              loading="eager"
              onLoad={handleCalLoad}
            />
          </div>
        </div>
      )}
    </section>
  );
};
