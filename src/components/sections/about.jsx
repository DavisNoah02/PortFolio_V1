import { RevealOnScroll } from "../RevealOnScroll";
import { Typewriter } from "react-simple-typewriter";

export const About = () => {
  const Bio = {
    name: "Noah D. Munene",
    roles: [
      "Full Stack Developer",
      "Technical Writer",
      "SEO Specialist",
      "Web Developer",	
    ],
    description: "I'm an enthusiastic and adaptable web developer based in Nairobi, KENYA, with two years of experience building responsive and scalable web applications using modern technologies. Driven by a passion for creating impactful solutions, I thrive on learning and tackling new challenges.  I'm committed to leveraging technology to make a real difference."
  };
  return (
    <section
      id="about"
     className="min-h-screen flex flex-col md:flex-row items-center justify-center relative"
    >
      {/* Profile Image */}
      <div className="md:w-1/2 flex justify-center md:order-2 mb-8 md:mb-0">
        <img
          src="/src/assets/images/Profile1.jpg"
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg border-4 border-green-500"
          loading="lazy"
        />
      </div>

      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm <span className="text-white">{Bio.name}</span>
          </h1>

          {/* Typewriter Effect */}
          <div className="mt-4 text-xl sm:text-2xl font-semibold">
            <span>A </span>
            <span className="text-blue-400">
              <Typewriter
                words={Bio.roles}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
              />
            </span>
          </div>
          <br />

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto text-justify">
            {Bio.description}
          </p>

          <div className="flex justify-center space-x-8">
            <a
              href="https://docs.google.com/document/d/1g9Jg6m9U9FqEujTOjPG6xzKaenJ5mJ8SaVFmxm29EwA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button type1">
                <span>.</span>
                
              </button>
            </a>
            <a
               href="#contact" 
              className="relative group inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                <div className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Connect with me
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </a> 
          </div>
          

        </div>
      </RevealOnScroll>
    </section>
  );
};