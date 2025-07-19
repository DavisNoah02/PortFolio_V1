import { FaGithub } from "react-icons/fa";

export const Navbar = ({ setMenuOpen }) => {
  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[98%] sm:w-[95%] md:w-[90%] lg:w-[85%] z-50
  bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-white/10 shadow-xl rounded-xl px-6 py-1">

        <div className="flex justify-between items-center h-16">
          {/* Logo with classy </> styled icon */}
          <a
            href="#hero"
            className="btn-shine font-mono text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold flex items-center space-x-2"
          >
            <span
              className="text-red text-xl md:text-2xl px-1 py-0.5   shadow-sm"
            >
              {"</>"}
            </span>
            <span className="text-white text-2xl">noa.dave</span>
          </a>

        {/* Hamburger */}
        <div
          className="w-7 h-5 relative cursor-pointer z-50 md:hidden text-white text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          &#9776;
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#projects" className="nav-link">My Work</a>
          <a href="#contact" className="nav-link">Contact</a>

          {/* GitHub Button */}
          <a
              href="https://github.com/DavisNoah02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn-github relative overflow-hidden border-2 border-blue-500 rounded-full px-4 py-1 flex items-center gap-2 text-white">
                <span
                  className="absolute inset-0 border-1 border-blue-500 rounded-full"
                  // style={{ animation: "pulse-slow 3s infinite" }}
                ></span>
                <FaGithub size={16} className="relative z-10" />
                <span className="relative z-10">Github Profile</span>
              </button>


          </a>
        </div>
      </div>
    </nav>
  );
};
