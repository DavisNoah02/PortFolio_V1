import React, { useEffect, useRef, useState } from 'react';

export const Skills = () => {
  // Define your skills with proficiency levels (0-100)
  const skillCategories = [
    {
      name: "Frontend",
      color: "#3B82F6", // blue-500
      skills: [
        { name: "React", level: 90 },
        { name: "Vue", level: 75 },
        { name: "TypeScript", level: 85 },
        { name: "TailwindCSS", level: 95 },
        { name: "Svelte", level: 70 },
      ]
    },
    {
      name: "Full-Stack",
      color: "#06B6D4", // cyan-500
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "AWS", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "GraphQL", level: 70 },
      ]
    },
    {
      name: "Others",
      color: "#8B5CF6", // violet-500
      skills: [
        { name: "Git", level: 95 },
        { name: "GitHub", level: 90 },
        { name: "YAML", level: 75 },
        { name: "VSCode", level: 95 },
        { name: "Netlify/Vercel", level: 85 },
        { name: "Postman", level: 80 },
      ]
    }
  ];

  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  
  // Simple reveal on scroll implementation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
      ref={sectionRef}
    >
      <div 
        className={`max-w-3xl mx-auto px-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          SKILLS
        </h2>

        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 text-center">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 m-2 rounded-md transition-all ${
                  activeCategory === index
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setActiveCategory(index)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Category Title */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-medium text-white inline-block border-b-2" 
                style={{ borderColor: skillCategories[activeCategory].color }}>
              {skillCategories[activeCategory].name} Skills
            </h3>
          </div>

          {/* Skills Progress Bars */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between mb-2">
                  <span 
                    className="font-medium text-lg"
                    style={{ color: "#3B82F6" }} // Set all skill names to blue-500
                  >
                    {skill.name}
                  </span>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-1000 ease-out relative"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      backgroundColor: skillCategories[activeCategory].color
                    }}
                  >
                    {/* Visual indication inside the progress bar */}
                    <div className="absolute inset-0 bg-white/20 rounded-full transform scale-x-0 animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Category Description */}
          <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-white/5">
            <p className="text-gray-300">
              {activeCategory === 0 ? (
                "Frontend development expertise focusing on creating responsive, intuitive user interfaces with modern frameworks and tools."
              ) : activeCategory === 1 ? (
                "Full-stack development skills covering both client and server-side technologies for complete application development."
              ) : (
                "Additional technical skills and tools that support the development workflow and project management."
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;