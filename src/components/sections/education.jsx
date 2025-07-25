import React, { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGraduationCap } from "react-icons/fa";

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

  // Track hovered content index for expansion (only on content)
  const [hovered, setHovered] = useState(null);

  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center py-10  text-white bg-gradient-to-br from-blue-950 via-gray-900 to-gray-800 overflow-hidden"
    >
      <RevealOnScroll>
        <div className="max-w-5xl w-full mx-auto px-2 sm:px-4">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center tracking-tight drop-shadow-lg">
            Education
          </h2>
          {/* divider/accent */}
           <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
          <div className="relative">
            {/* Timeline Line with Cap Icons */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full flex flex-col items-center z-0">
              <FaGraduationCap className="text-blue-500 text-3xl  mb-2" />
              <div className="border-l-4 border-green-500 h-full animate-pulse"></div>
              <FaGraduationCap className="text-blue-500 text-3xl mt-2 " />
            </div>
           
           
            {/* Timeline Content */}
            <div className="relative z-10">
              <div className="flex flex-col gap-8 md:gap-0 md:block overflow-x-auto md:overflow-visible snap-x md:snap-none">
                {educationData.map((edu, index) => {
                  const isOpen = hovered === `${index}-left` || hovered === `${index}-right`;
                  const halfDesc = edu.description.slice(0, Math.floor(edu.description.length / 2)) + "...";
                  return (
                    <div
                      key={index}
                      className="relative flex-shrink-0 snap-center md:snap-none"
                      style={{ minWidth: "320px" }}
                    >
                      <div className="flex flex-col md:flex-row items-start md:items-center relative group transition-all duration-300">
                        {/* Timeline Dot with gradient and blink animation */}
                        <div
                          className="absolute w-4 h-4 left-1 md:left-1/2 md:transform md:-translate-x-1/2 z-10 mt-2 md:mt-0 border-4 border-white rounded-full "
                          style={{
                            
                            boxShadow: "0 0 0 4px rgba(168,85,247,0.3), 0 0 16px 4px #22d3ee66",
                          }}
                        ></div>
                        {/* Left Content */}
                        <div className="md:w-1/2 md:pr-8 md:text-right md:self-center order-2 md:order-1 pl-12 md:pl-0">
                          {index % 2 === 0 && (
                            <div className="hidden md:block text-lg font-semibold text-gray-300">
                              {edu.year}
                            </div>
                          )}
                          {index % 2 === 1 && <div className="md:hidden"></div>}
                          {index % 2 === 1 && (
                            <div
                              className={`bg-gray-800 rounded-lg shadow-lg w-full md:text-right transition-all duration-300 overflow-hidden cursor-pointer
                                ${isOpen ? "max-h-[600px] p-6" : "max-h-52 p-6"}
                              `}
                              style={{
                                minHeight: isOpen ? "220px" : "130px",
                              }}
                              onMouseEnter={() => setHovered(`${index}-left`)}
                              onMouseLeave={() => setHovered(null)}
                              tabIndex={0}
                              onFocus={() => setHovered(`${index}-left`)}
                              onBlur={() => setHovered(null)}
                            >
                              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                              <div className="flex items-center text-gray-400 md:justify-end">
                                <img
                                  src={edu.iconSrc}
                                  alt={`${edu.institution} icon`}
                                  className="w-6 h-6 mr-2"
                                />
                                <p>{edu.institution}</p>
                              </div>
                              {!isOpen && (
                                <p className="text-gray-400 mt-5 line-clamp-4 text-justify">
                                  {halfDesc}
                                </p>
                              )}
                              {isOpen && (
                                <>
                                  <p className="text-cyan-400 mt-2">Grade: {edu.grade}</p>
                                  <p className="text-gray-300 mt-2 text-justify">{edu.description}</p>
                                  <p className="text-gray-400 mt-2 md:hidden">{edu.year}</p>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                        {/* Right Content */}
                        <div className="md:w-1/2 md:pl-8 md:text-left md:self-center order-2 md:order-2 pl-12 md:pl-0">
                          {index % 2 === 1 && (
                            <div className="hidden md:block text-lg font-semibold text-gray-300">
                              {edu.year}
                            </div>
                          )}
                          {index % 2 === 0 && <div className="md:hidden"></div>}
                          {index % 2 === 0 && (
                            <div
                              className={`bg-gray-800 rounded-lg shadow-lg w-full transition-all duration-300 overflow-hidden cursor-pointer
                                ${isOpen ? "max-h-[600px] p-6" : "max-h-52 p-6"}
                              `}
                              style={{
                                minHeight: isOpen ? "220px" : "130px",
                              }}
                              onMouseEnter={() => setHovered(`${index}-right`)}
                              onMouseLeave={() => setHovered(null)}
                              tabIndex={0}
                              onFocus={() => setHovered(`${index}-right`)}
                              onBlur={() => setHovered(null)}
                            >
                              <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                              <div className="flex items-center text-gray-400">
                                <img
                                  src={edu.iconSrc}
                                  alt={`${edu.institution} icon`}
                                  className="w-6 h-6 mr-2"
                                />
                                <p>{edu.institution}</p>
                              </div>
                              {!isOpen && (
                                <p className="text-gray-400 mt-2 line-clamp-4 text-justify">
                                  {halfDesc}
                                </p>
                              )}
                              {isOpen && (
                                <>
                                  <p className="text-cyan-400 mt-2">Grade: {edu.grade}</p>
                                  <p className="text-gray-300 mt-2 text-justify">{edu.description}</p>
                                  {edu.institution === "Chuka University" && (
                                    <p className="text-sm text-blue-400 mt-2 italic">
                                      Expected Graduation: November 2025
                                    </p>
                                  )}
                                  <p className="text-gray-400 mt-2 md:hidden">{edu.year}</p>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};