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
      description: "I build custom, responsive, and scalable websites from the ground up, ensuring they are optimized for performance and user experience. From Single-page applications , complex Multi-page website (home, about, contact, etc.) good for SME's to complex Full website with extra pages",
      icon: "🌐",
    },
    {
      title: "IT Consulting",
      description: "I provide expert advice on network architecture, cloud solutions, and cybersecurity. My consulting services help you make informed decisions to improve your IT infrastructure, enhance security, and streamline operations for better business outcomes.",
      icon: "💼",
    },
    {
      title: "Digital Marketing",
      description: "I develop data-driven digital marketing strategies to grow your online presence and engage your target audience. My services include content marketing, social media management, and campaign analysis to help you achieve your marketing goals.",
      icon: "📈",
    },
    {
      title: "SEO Optimization",
      description: "I help you rank higher on search engines like Google through comprehensive technical and content-based SEO strategies. My approach focuses on improving your website's visibility, driving organic traffic, and increasing conversions.",
      icon: "🔍",
    },
    {
      title: "UI/UX Design",
      description: "I create intuitive and visually appealing user interfaces that enhance the user experience. My design process focuses on understanding your users' needs to deliver a product that is both beautiful and easy to use, as well ensuring high user satisfaction and engagement.",
      icon: "🎨",
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
      className="relative flex flex-col items-center justify-center min-h-screen py-20 px-4 bg-gradient-custom2 overflow-hidden"
    >
      {/* Decorative Blurred Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl -z-10" />

      {/* Spinner Overlay */}
      {isLoading && <Spinner message="Opening calendar..." />}

      <RevealOnScroll>
        <section className="max-w-6xl mx-auto px-4 text-center">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight drop-shadow-lg">
            What I Do
          </h2>
          <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            I offer a range of services to help you achieve your goals. From building stunning websites to providing expert IT advice, I'm here to help you succeed.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl" />
                
                <div className="relative z-10 ">
                  <div className="text-4xl mb-4 text-blue-400">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed text-left">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={handleBookClick}
            className="mt-16 inline-flex items-center gap-2 px-6 py-3 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-700 to-slate-700 hover:from-blue-600 hover:to-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400  shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <span role="img" aria-label="calendar">📅</span>
            Let's Talk
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
            {/* Close Menu Icon */}
            <button
              onClick={handleCloseCal}
              className="absolute top-4 right-4 text-white hover:text-red-500 z-50 transition-colors"
              aria-label="Close calendar"
            >
              <X size={28} />
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
