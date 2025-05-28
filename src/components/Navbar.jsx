import { useState } from "react";
import { FaGithub, FaAngleDown } from "react-icons/fa";

export const Navbar = ({ setMenuOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full  z-40 bg-[rgba(130, 160, 121, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#about" className="btn-shine font-mono text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            <span className="text-2xl">noa.dave</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#certifications" className="nav-link">
             Certifications
            </a>
            <a href="#education" className="nav-link">
              Education
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>

            {/* Dropdown for Blog Links */}
            <div
              className="relative select"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div
                className="selected text-white px-4 py-1 rounded flex items-center justify-between cursor-pointer hover:text-[#23ae48]"
              >
                Blogs
                <FaAngleDown
                  className={`ml-2 arrow transition-transform duration-300 ${
                    dropdownOpen ? "rotate-0" : "-rotate-90"
                  }`}
                />
              </div>
              {dropdownOpen && (
                <div className="options absolute top-full mt-0 bg-gray-800 text-white rounded shadow-lg py-1 w-30 z-50">
                  <a
                    href="https://hashnode.com/@noadave"
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-2 hover: rounded hover:text-purple-400 transition-colors"
                  >
                    Hashnode
                  </a>
                  <a
                    href="https://medium.com/@noahdavemunene"
                    target="_blank"
                    rel="noreferrer"
                    className="block px-4 py-2   rounded hover:text-purple-400 transition-colors"
                  >
                    Medium
                  </a>
                </div>
              )}
            </div>

            <a
              href="https://github.com/DavisNoah02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-github relative overflow-hidden border-2 border-blue-500 rounded-full">
                <span
                  className="absolute inset-0 border-2 border-blue-500 rounded-full animate-pulse-slow"
                  style={{ animation: "pulse-slow 3s infinite" }}
                ></span>
                <FaGithub size={16} className="relative z-10" />
                <span className="relative z-10">Github Profile</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes pulse-slow {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }
        `}
      </style>
    </nav>
  );
};