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
      tagline: "Fast, modern, scalable websites",
      points: [
        "Landing Pages & SPAs",
        "Business & SME Websites",
        "Full-Stack Web Apps",
        "Performance Optimization",
      ],
      icon: "🌐",
    },
    {
      title: "IT Consulting",
      tagline: "Smart tech decisions that scale",
      points: [
        "System Architecture",
        "Cloud Strategy",
        "Security Best Practices",
        "Infrastructure Planning",
      ],
      icon: "💼",
    },
    {
      title: "Digital Marketing",
      tagline: "Data-driven growth strategies",
      points: [
        "Content Strategy",
        "Social Media Management",
        "Campaign Analytics",
        "Brand Visibility",
      ],
      icon: "📈",
    },
    {
      title: "SEO Optimization",
      tagline: "Rank higher. Get discovered.",
      points: [
        "Technical SEO",
        "On-Page Optimization",
        "Content SEO",
        "Conversion Tracking",
      ],
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
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
      className="relative flex flex-col items-center justify-center min-h-screen pt-26 py-20 px-4 bg-gradient-custom2 overflow-hidden"
    >
      {/* Decorative Blurred Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl -z-10" />

      {isLoading && <Spinner message="Opening calendar..." />}

      <RevealOnScroll>
        <section className="max-w-6xl mx-auto px-4 text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
            What I Do
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Clear, focused services built for speed, scale, and real business results.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">

            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md 
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/30"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="text-4xl mb-2 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm text-gray-400 mb-6">
                    {service.tagline}
                  </p>

                  {/* Points */}
                  <ul className="mt-auto space-y-2 text-sm text-gray-300 text-left">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-blue-400">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <p className="mt-14 mb-4 text-gray-400 text-base">
            A 15-minute call can save you weeks of guesswork.
          </p>

          <button
            onClick={handleBookClick}
            className="mt-3 inline-flex items-center gap-2 px-6 py-3 text-base sm:text-lg font-semibold text-white 
            bg-gradient-to-r from-blue-700 to-slate-700 
            hover:from-blue-600 hover:to-slate-600 
            shadow-lg hover:shadow-blue-700/30 
            hover:scale-105 transition-all duration-300 rounded-md cursor-pointer opacity-80 hover:opacity-90"
          >
            <span role="img" aria-label="calendar">📅</span>
            Let's Talk ~ Book a call
          </button>
        </section>
      </RevealOnScroll>

      {/* Calendar Overlay */}
      {showCalOverlay && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-lg animate-fadeAndScale">
          <div
            ref={overlayRef}
            className="relative w-full max-w-4xl h-[90vh] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
          >
            <button
              onClick={handleCloseCal}
              className="absolute top-4 right-4 text-white hover:text-red-500 z-50 transition-colors"
              aria-label="Close calendar"
            >
              <X size={28} />
            </button>

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
