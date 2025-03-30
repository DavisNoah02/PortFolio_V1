
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"; 

export const WhatsAppButton = () => {
  const message = "Hello Noah, I would like to connect with you!";
  const phoneNumber = "254729239023";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1.1, 1] }} // Pulsing effect
      transition={{
        duration: 1.5, // Duration of one pulse
        repeat: Infinity, // Infinite pulsing
        repeatType: "loop", // Loop the animation
      }}
    >
      <FaWhatsapp size={30} />
    </motion.a>
  );
};


