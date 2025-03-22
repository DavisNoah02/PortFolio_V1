import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Education = () => {
  const educationData = [
    {
      year: "2021 Sep - 2025 April",
      degree: "BSc. in Computer Science",
      institution: "Chuka University",
      description: "Specializing in Artificial Intelligence and Machine Learning.",
      grade: "2nd Class Honors Upper Division",
      iconSrc: "/src/assets/images/Chuka.jpeg", 
    },
    {
      year: "2021 May - 2021 Aug",
      degree: "ICDL (International Computer Driving License)",
      institution: "Strathmore University",
      description: "Focused on software development and data structures.",
      grade: "PASS",
      iconSrc: "/src/assets/images/Strathmore.png", 
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-900 text-white"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Education
          </h2>

          <div className="relative">
            {/* Timeline line - positioned on left for mobile, center for desktop */}
            <div className="border-l-4 border-blue-500 absolute h-full left-4 md:left-1/2 md:transform md:-translate-x-1/2"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute w-6 h-6 bg-blue-500 rounded-full left-1 md:left-1/2 md:transform md:-translate-x-1/2 z-10 mt-2 md:mt-0"></div>
                  
                  {/* Content layout changes based on screen size */}
                  <div className="md:w-1/2 md:pr-8 md:text-right md:self-center order-2 md:order-1 pl-12 md:pl-0">
                    {index % 2 === 0 ? (
                      <div className="hidden md:block text-lg font-semibold text-gray-300">
                        {edu.year}
                      </div>
                    ) : (
                      <div className="md:hidden"></div>
                    )}
                    {index % 2 === 1 && (
                      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:text-right">
                        <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                        <div className="flex items-center text-gray-400 md:justify-end">
                          <img src={edu.iconSrc} alt={`${edu.institution} icon`} className="w-6 h-6 mr-2" />
                          <p>{edu.institution}</p>
                        </div>
                        <p className="text-cyan-400 mt-2">Grade: {edu.grade}</p>
                        <p className="text-gray-300 mt-2">{edu.description}</p>
                        <p className="text-gray-400 mt-2 md:hidden">{edu.year}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="md:w-1/2 md:pl-8 md:text-left md:self-center order-2 md:order-2 pl-12 md:pl-0">
                    {index % 2 === 1 ? (
                      <div className="hidden md:block text-lg font-semibold text-gray-300">
                        {edu.year}
                      </div>
                    ) : (
                      <div className="md:hidden"></div>
                    )}
                    {index % 2 === 0 && (
                      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
                        <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                        <div className="flex items-center text-gray-400">
                          <img src={edu.iconSrc} alt={`${edu.institution} icon`} className="w-6 h-6 mr-2" />
                          <p>{edu.institution}</p>
                        </div>
                        <p className="text-cyan-400 mt-2">Grade: {edu.grade}</p>
                        <p className="text-gray-300 mt-2">{edu.description}</p>
                        <p className="text-gray-400 mt-2 md:hidden">{edu.year}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};