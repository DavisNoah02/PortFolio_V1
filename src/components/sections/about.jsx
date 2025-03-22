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
    description:
      "I am a Web developer from Nairobi, KENYA, with 3 years of experience in building responsive and scalable web applications using modern technologies.",
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

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            {Bio.description}
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="https://docs.google.com/document/d/1g9Jg6m9U9FqEujTOjPG6xzKaenJ5mJ8SaVFmxm29EwA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button type1">
                <span></span>
                Resume
              </button>
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};