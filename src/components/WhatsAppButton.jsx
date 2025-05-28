import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const message = "Hello Noah, I would like to connect with you!";
  const phoneNumber = "254729239023";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-2">
      <motion.div
        className={`text-gray-400 px-3 py-2 rounded-lg shadow-md transition-opacity ${
          hovered ? "opacity-100" : "opacity-70"
        }`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {hovered ? "Message Noah now" : "WhatsApp"}
      </motion.div>
      <motion.a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-800 text-white p-3 rounded-full shadow-lg hover:bg-green-900 transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatType: "loop",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FaWhatsapp size={30} />
      </motion.a>
    </div>
  );
};


