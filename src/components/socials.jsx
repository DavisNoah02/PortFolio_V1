import {
  FaGithub,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaLinkedin,
  FaCodepen,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

const socialMedia = [
  { name: "GitHub", url: "https://github.com/DavisNoah02", icon: <FaGithub /> },
  { name: "Linkedin", url: "https://www.linkedin.com/in/noa-dave-36567b356/", icon: <FaLinkedin /> },
  { name: "Instagram", url: "https://www.instagram.com/t3ch.savvy/", icon: <FaInstagram /> },
  { name: "TikTok", url: "https://www.tiktok.com/@_noah.dave_", icon: <FaTiktok /> },
  { name: "X (formerly Twitter)", url: "https://x.com/@Noah02Dave", icon: <FaTwitter /> },
  { name: "Codepen", url: "https://codepen.io/Noah-Munene", icon: <FaCodepen /> },
];

export const Socials = () => {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if on mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleItems = expanded ? socialMedia : socialMedia.slice(0, 2);

  return (
    <div
      className="
        fixed left-4 top-1/2 -translate-y-1/2 z-40 
        flex flex-col items-center space-y-2
        xs:left-1/2 xs:bottom-4 xs:top-auto xs:-translate-x-1/2 xs:translate-y-0 
        xs:flex-row xs:space-y-0 xs:space-x-4 xs:w-full xs:justify-center
      "
      onMouseEnter={() => !isMobile && setExpanded(true)}
      onMouseLeave={() => !isMobile && setExpanded(false)}
    >
      {/* Icon container */}
      <motion.div
        className="bg-blue-900 rounded-full shadow-lg p-2 sm:p-3 flex flex-col xs:flex-row items-center space-y-4 xs:space-y-0 xs:space-x-4"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      >
        <AnimatePresence>
          {visibleItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              data-tip={item.name}
              data-for="social-tooltip" // Link tooltip to this id
              className={`text-xl sm:text-2xl transition-colors ${
                item.name === "GitHub" ? "text-green-400" : "text-white hover:text-green-400"
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {item.icon}
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      <ReactTooltip
        id="social-tooltip"
        place="right"
        type="dark"
        effect="solid"
        backgroundColor="#000000" // Set a dark background color
        textColor="#ffffff" // Set white text color for contrast
      />

      {/* Toggle Button (still visible and usable on all sizes) */}
      <motion.button
        onClick={() => setExpanded((prev) => !prev)}
        className="relative overflow-hidden bg-blue-700 text-white p-2 rounded-full shadow-md focus:outline-none"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle social links"
      >
        {/* Arrow icon with animation */}
        <motion.div
          animate={{ rotate: expanded ? 180 : 0, y: expanded ? 4 : 0 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <IoIosArrowDown className="text-xl" />
        </motion.div>
      </motion.button>

      {/* Decorative string (hidden on mobile) */}
      <div className="w-1 h-30 bg-gradient-to-b from-blue-500 to-transparent sm:block hidden"></div>
    </div>
  );
};
