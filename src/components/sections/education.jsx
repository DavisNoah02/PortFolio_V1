import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Education = () => {
  const educationData = [
    {
      year: "2021 Sep - 2025 April",
      degree: "BSc. in Computer Science",
      institution: "Chuka University",
      description:
        "I have established a strong foundation in programming, algorithms, data structures, databases, and software engineering with hands-on experience in Python, Java, JavaScript, and web technologies. I have also had the opportunity to work on real-world projects giving me the capability to develop innovative solutions. I was also part of GDSC CHUKA, which enabled me to acquire teamwork skills. Through my coursework and projects, I have honed problem-solving skills and analytical thinking, preparing me to solve real-world problems in the tech industry.",
      grade: "Projected Class: Second Class Honors Upper Division",
      iconSrc: "images/Chuka.jpeg",
    },
    {
      year: "2021 May - 2021 Aug",
      degree: "ICDL (International Computer Driving License)",
      institution: "Strathmore University",
      description:
        "I gained hands-on experience in essential digital skills, including word processing, spreadsheets, presentations, online collaboration, and cybersecurity. Developed proficiency in Microsoft Office, Google Workspace, and IT fundamentals, enhancing my ability to work efficiently with digital tools. Certified in ICDL, a globally recognized qualification in digital literacy.",
      grade: "PASS",
      iconSrc: "/images/Strathmore.png",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-20 text-white"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          {/* Section Title */}
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Education
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="border-l-4 border-blue-500 absolute h-full left-4 md:left-1/2 md:transform md:-translate-x-1/2"></div>

            {/* Timeline Content */}
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute w-6 h-6 bg-blue-500 rounded-full left-1 md:left-1/2 md:transform md:-translate-x-1/2 z-10 mt-2 md:mt-0"></div>

                  {/* Left Content */}
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
                          <img
                            src={edu.iconSrc}
                            alt={`${edu.institution} icon`}
                            className="w-6 h-6 mr-2"
                          />
                          <p>{edu.institution}</p>
                        </div>
                        <p className="text-cyan-400 mt-2">Grade: {edu.grade}</p>
                        <p className="text-gray-300 mt-2 text-justify">
                          {edu.description}
                        </p>
                        <p className="text-gray-400 mt-2 md:hidden">
                          {edu.year}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right Content */}
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
                        <h3 className="text-xl font-bold mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center text-gray-400">
                          <img
                            src={edu.iconSrc}
                            alt={`${edu.institution} icon`}
                            className="w-6 h-6 mr-2"
                          />
                          <p>{edu.institution}</p>
                        </div>
                        <p className="text-cyan-400 mt-2">
                          Grade: {edu.grade}
                        </p>
                        <p className="text-gray-300 mt-2 text-justify">
                          {edu.description}
                        </p>
                        {/* Expected Graduation for Chuka University */}
                        {edu.institution === "Chuka University" && (
                          <p className="text-sm text-blue-400 mt-2 italic">
                            Expected Graduation: November 2025
                          </p>
                        )}
                        <p className="text-gray-400 mt-2 md:hidden">
                          {edu.year}
                        </p>
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