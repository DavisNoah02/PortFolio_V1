import { RevealOnScroll } from "../RevealOnScroll";
import { CalModal } from "../CalModal";
import React, { useState } from "react";

export const Services = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Web Development",
      description:
        "Building custom, responsive and scalable web applicationswebsite development using modern technologies and frameworks.",
      icon: "🌐",
      calLink: "https://cal.com/noah-dave-1xhwd5/quick-call-consultation",
    },

    {
      title: "IT Consulting",
      description:
        "Providing expert advice and solutions to improve your IT , including network architecture, cybersecurity, and cloud computing.",
      icon: "💼",
      calLink: "https://cal.com/noah-dave-1xhwd5/quick-call-consultation",
    },
    {
      title: "Digital Marketing",
      description:
        "Developing and executing comprehensive digital marketing strategies to help businesses reach and engage with their target audience",
      icon: "📈",
      calLink: "https://cal.com/noah-dave-1xhwd5/quick-call-consultation",
    },
    {
      title: "SEO Optimization",
      description:
        "Improving your website's visibility and ranking on search engines through expert search engine optimization techniques..",
      icon: "🔍",
      calLink: "https://cal.com/noah-dave-1xhwd5/quick-call-consultation",
    },
  ];

  const handleBookClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleConfirm = () => {
    window.open(selectedService.calLink, "_blank", "noopener,noreferrer");
    setModalOpen(false);
  };
  return (
    <section
      id="services"
      className="relative flex items-center justify-center min-h-screen py-16 bg-gradient-to-br from-gray-900 via-blue-950 to-purple-900 overflow-hidden"
    >
      {/* Decorative blurred background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 opacity-20 rounded-full blur-3xl -z-10" />

      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center tracking-tight drop-shadow-lg">
            Services I Offer
          </h2>
          {/* divider/accent */}
          <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-7 rounded-2xl border border-blue-400/10 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
              >
                {/* Glow effect */}
                <div className="absolute -top-8 -right-8 w-24 h-20 bg-gradient-to-br from-yellow-500 to-purple-500 opacity-20 rounded-full blur-2xl z-0"></div>
                <div className="relative z-10 flex flex-col items-center flex-1">
                  <div className="text-3xl mb-5 drop-shadow-lg">{service.icon}</div>
                  <h3 className="text-2xl font-bold ext-gray-300 mb-6 text-center">
                    {service.title}
                  </h3>
                  <p className=" text-2xl text-gray-300 mb-4 text-sm text-center ">
                    {service.description}
                  </p>
                  <div className="flex-grow" />
                  <button
                    onClick={() => handleBookClick(service)}
                    className="mt-2 inline-block px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
                  >
                    Book A Call
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
      <CalModal
        open={modalOpen}
        onConfirm={handleConfirm}
        onCancel={() => setModalOpen(false)}
        service={selectedService || {}}
      />
    </section>
  );
};