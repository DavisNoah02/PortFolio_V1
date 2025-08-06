import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGraduationCap } from "react-icons/fa";
import educationData from "../../data/education";

export const Education = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-12 text-white bg-gradient-to-br from-blue-950 via-gray-900 to-gray-800"
    >
      <RevealOnScroll>
        <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center tracking-tight drop-shadow-lg">
            Education
          </h2>
          <div className="w-32 h-1 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 z-0"></div>

            <div className="space-y-8 md:space-y-12">
              {educationData.map((edu, index) => {
                const isOpen = hovered === index;
                const isLeft = index % 2 === 0; // Alternate card placement on desktop

                return (
                  <div
                    key={index}
                    className={`relative flex md:justify-${isLeft ? 'start' : 'end'}`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                      <FaGraduationCap className="text-blue-400 text-2xl md:text-3xl bg-gray-900 rounded-full p-1 shadow-md" />
                    </div>

                    {/* Card */}
                    <div
                      className={`relative w-full md:w-5/12 ml-12 md:ml-0 ${isLeft ? 'md:mr-8' : 'md:ml-8'} bg-gray-800 rounded-xl shadow-xl p-6 border border-blue-900/20 hover:border-blue-400/60 transition-all duration-300 cursor-pointer group`}
                      onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                      tabIndex={0}
                      onFocus={() => setHovered(index)}
                      onBlur={() => setHovered(null)}
                    >
                      {/* Connector Line for Desktop */}
                      <div
                        className={`hidden md:block absolute top-3 w-8 h-1 bg-blue-400 ${isLeft ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}`}
                      ></div>

                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={edu.iconSrc}
                          alt={`${edu.institution} icon`}
                          className="w-10 h-10 rounded-md object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                          <p className="text-sm text-blue-300 font-semibold">{edu.institution}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                        <span>{edu.year}</span>
                        <span className="italic">{edu.grade}</span>
                      </div>
                      <p className="text-gray-300 text-sm md:text-base text-justify transition-all duration-300">
                        {isOpen ? edu.description : edu.description.slice(0, 100) + (edu.description.length > 100 ? "..." : "")}
                      </p>
                      {edu.institution === "Chuka University" && (
                        <p className="text-xs text-blue-400 mt-3 italic">
                          Expected Graduation: November 2025
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};