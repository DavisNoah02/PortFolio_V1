import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaCodepen } from "react-icons/fa";

const socialMedia = [
  { name: "GitHub", url: "https://github.com/DavisNoah02", icon: <FaGithub /> },
  { name: "Instagram", url: "https://www.instagram.com/t3ch.savvy/", icon: <FaInstagram /> },
  { name: "Linkedin", url: "https://www.linkedin.com/in/noa-dave-36567b356/", icon: <FaLinkedin /> },
  { name: "Codepen", url: "https://codepen.io/Noah-Munene", icon: <FaCodepen /> },
];

export const Socials = () => (
  <div
    className="
      fixed
      left-4 top-1/2 -translate-y-1/2
      z-40 flex flex-col items-center space-y-4
      sm:left-4 sm:top-1/2 sm:-translate-y-1/2
      xs:left-1/2 xs:bottom-4 xs:top-auto xs:-translate-x-1/2 xs:translate-y-0 xs:flex-row xs:space-y-0 xs:space-x-4
      xs:w-full xs:justify-center
    "
  >
    <div
      className="
        bg-blue-800 rounded-full shadow-lg
        p-2 sm:p-3
        flex flex-col xs:flex-row items-center
        space-y-4 xs:space-y-0 xs:space-x-4
        animate-bounce-slow
      "
    >
      {socialMedia.map((item) => (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-xl sm:text-2xl hover:text-green-400 transition-colors"
          aria-label={item.name}
        >
          {item.icon}
        </a>
      ))}
    </div>
    {/* Balloon string (hidden on mobile) */}
    <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent sm:block hidden "></div>
  </div>
);