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

  return (
    <section
      id="services"
      className="relative flex flex-col items-center justify-center min-h-screen py-16 px-5 bg-gradient-custom2 overflow-hidden"
    >
      {/* Decorative Blurred Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl -z-10" />

      {/* Spinner Overlay */}
      {isLoading && <Spinner message="Opening calendar..." />}

      {/* Services Section */}
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
            Services I Offer
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-blue-400/10 bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              >
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-500 to-purple-500 opacity-20 rounded-full blur-2xl z-0"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <div className="text-3xl mb-4 drop-shadow-lg">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm text-center">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleBookClick}
            className="inline-flex items-center gap-2 px-4 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
          >
            <span role="img" aria-label="calendar">📅</span>
            Book My Cal
          </button>
        </div>
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
