import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Noah Dave Munene
          </h1>

          <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
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