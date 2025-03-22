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
            <div className="border-l-4 border-blue-500 absolute h-full left-1/2 transform -translate-x-1/2"></div>
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/2">
                    <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                    <div className="flex items-center text-gray-400">
                      <img src={edu.iconSrc} alt={`${edu.institution} icon`} className="w-6 h-6 mr-2" />
                      <p>{edu.institution}</p>
                    </div>
                    <p className="text-cyan-400 mt-2">Grade: {edu.grade}</p>
                    <p className="text-gray-300 mt-2">{edu.description}</p>
                  </div>
                  <div className="w-0 md:w-1/2 h-0 md:h-24"></div>
                  <div className="text-grey-500 text-lg font-semibold w-full md:w-1/2 text-center md:text-left">
                    {edu.year}
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