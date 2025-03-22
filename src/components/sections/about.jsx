import { RevealOnScroll } from "../RevealOnScroll";
import { Typewriter } from "react-simple-typewriter";

export const About = () => {
  const Bio = {
    name: "Noah D. Munene",
    roles: [
      "Full Stack Developer",
      "IT Consultant",
      "Technical Writer",
      "SEO Specialist",
    ],
    description:
      "I'm a full-stack developer passionate about building scalable web applications with exceptional performance and a focus on user experience. My goal is to craft solutions that are both efficient and delightful.",
  };
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm <span className="text-white">{Bio.name}</span>
          </h1>
         

      {/* Typewriter Effect */}
      <div className="mt-4 text-xl sm:text-2xl font-semibold">
        <span>I am a </span>
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
      <br/>

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