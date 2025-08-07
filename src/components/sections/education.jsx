import React, { useState } from "react";
import { GraduationCap, Calendar, Award, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import educationData from "../../data/educationdata";

// Simple Card Components
const Card = ({ children, className, onClick }) => (
  <div
    onClick={onClick}
    className={`rounded-xl border transition-all duration-300 ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Badge = ({ children, className }) => (
  <span
    className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border ${className}`}
  >
    {children}
  </span>
);

export const Education = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
           {/* divider  */}
              <h2 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center tracking-tight drop-shadow-lg">
                Education
              </h2>
            {/* divider  */}
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              My academic journey and educational achievements that have shaped
              my knowledge and skills
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-cyan-400" />

            <div className="space-y-8 md:space-y-12">
              {educationData.map((edu) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: edu.id * 0.1 }}
                  
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900 z-10" />

                  {/* Card */}
                  <div className="md:ml-20">
                    <Card
                      className={`bg-slate-800/50 border-slate-700/50 backdrop-blur-sm cursor-pointer hover:bg-slate-800/70 hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-400/10 ${
                        expandedCard === edu.id
                          ? "border-blue-400/50 bg-slate-800/70"
                          : ""
                      }`}
                      onClick={() => toggleCard(edu.id)}
                    >
                      <CardContent>
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
                          <div className="flex items-center gap-3 flex-1">
                            <img
                              src={edu.iconSrc || "/placeholder.svg"}
                              alt={`${edu.institution} logo`}
                              className="w-12 h-12 rounded-lg border border-slate-600"
                            />
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-white mb-1">
                                {edu.degree}
                              </h3>
                              <p className="text-blue-300 font-semibold flex items-center gap-2 flex-wrap">
                                {edu.institution}
                                {edu.location && (
                                  <span className="text-sm text-cyan-300 flex items-center gap-1">
                                    <MapPin className="w-3.5 h-3.5" />
                                    {edu.location}
                                  </span>
                                )}
                              </p>
                            </div>
                          </div>

                          <div className="flex flex-col sm:items-end gap-2">
                            <Badge
                              className={`${
                                edu.status === "Completed"
                                  ? " text-green-300 border-green-500/30"
                                  : " text-blue-300 border-blue-500/30"
                              }`}
                            >
                              {edu.status}
                            </Badge>
                          </div>
                        </div>

                        {/* Meta */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-cyan-200">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4 text-blue-400" />
                            <span>{edu.year}</span>
                          </div>
                          <div className="flex items-center gap-1 text-cyan-400 ">
                            <Award className="w-4 h-4 text-purple-400" />
                            <span>{edu.grade}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 leading-relaxed mb-4">
                          {expandedCard === edu.id
                            ? edu.description
                            : `${edu.description.slice(0, 120)}${
                                edu.description.length > 120 ? "..." : ""
                              }`}
                        </p>

                        {/* Expanded Content */}
                        {expandedCard === edu.id && (
                          <div className="space-y-4">
                            {edu.skills && (
                              <div>
                                <h4 className="text-sm font-semibold text-white mb-2">
                                  Key Subjects/Skills:
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {edu.skills.map((skill, i) => (
                                    <Badge
                                      key={i}
                                      className="bg-slate-700/50 text-gray-300 border-slate-600"
                                    >
                                      {skill}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}

                            {edu.achievements && (
                              <div>
                                <h4 className="text-sm font-semibold text-white mb-2">
                                  Achievements:
                                </h4>
                                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
                                  {edu.achievements.map((achievement, i) => (
                                    <li key={i}>{achievement}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {edu.expectedGraduation && (
                              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                                <p className="text-sm text-blue-300">
                                  <strong>Expected Graduation:</strong>{" "}
                                  {edu.expectedGraduation}
                                </p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Expand Toggle */}
                        <div className="flex justify-center mt-4">
                          <button className="text-xs text-gray-400 hover:text-blue-400 transition-colors hover:cursor-pointer">
                            {expandedCard === edu.id
                              ? "Click to collapse"
                              : "Click to expand"}
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Note */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400" />
              <span>Academic Journey</span>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-purple-400" />
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};
