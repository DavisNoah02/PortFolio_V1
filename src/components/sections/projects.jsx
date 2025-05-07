import React, { useState, useEffect } from "react";
import { FiExternalLink, FiGithub, FiX, FiClock } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Project data with categories
const projects = [
  {
    title: "Personal Portfolio",
    img: "/images/portfolio.png",
    alt: "My personal Portfolio",
    desc: "A comprehensive showcase of my skills, expertise, and projects as a web developer. Designed with a focus on responsiveness and user experience, it highlights my ability to create visually appealing and functional web applications.",
    tech: [ "Reactjs", "TailwindCSS", "Framer Motion", "Vite", "Emailjs-com", "Chart.js"],
    live: "https://noa-dave.vercel.app/",
    code: "https://github.com/DavisNoah02/PortFolio_V1.git",
    category: "Web",
  },
  {
    title: "AI Text-to-image Generator",
    img: "/images/ai-imgP.png",
    alt: "Dall-e image Generator",
    desc: "An AI Image Generator, a web application that utilizes the DALL-E API to create unique and visually stunning images based on user-provided text descriptions.",
    tech: ["Firebase Auth", "Firebase Storage","React.js", "TailwindCSS", "Flask API", "Vercel", "Dall-e API"],
    live: "https://imagify-ai-noa.vercel.app/",
    code: "https://github.com/DavisNoah02/DALL-E-image-generator-App.git",
    category: "Web",
    comingSoon: false,
  },
  {
    title: "Elevate Solutions",
    img: "/images/ES.png",
    alt: "DigitalMarketting Agency",
    desc: "A modern digital marketing agency site built to highlight services like SEO, branding, and social media strategy. Features include service showcases, client testimonials, and a call-to-action driven design to boost conversions.",
    tech: ["Next.js",  "TailwindCSS", "vercel", "radix-ui", "Framer Motion"],
    live: "",
    code: "",
    category: "Web",
    comingSoon: true,
  },
  {
    title: "EDUVERSE LMS",
    img: "/images/EDU.png",
    alt: "Learning Mgt System",
    desc: "A Learning Management System (LMS), a platform designed to facilitate online education and training. It allows educators to create, manage, and deliver courses, while enabling learners to access educational content, track progress, and interact with instructors and peers.",
    tech: [ "Express.js", "Node.js", "MongoDB", "Cloudinary","React.js", "Context API", "TailwindCSS", "Axios"],
    live: "",
    code: "",
    category: "Web",
    comingSoon: true,
  },
  {
    title: "A To-Do List",
    img: "/images/todolist.png",
    alt: "To-Do list Application",
    desc: "A To-Do List application that allows users to create, read, update and delete tasks. Users can also mark tasks as completed and view the completion status.",
    tech: ["HTML5", "CSS3", "Vanilla-JavaScript", "localStorage"],
    live: "https://noa-to-do-app.netlify.app/",
    code: "https://github.com/DavisNoah02/To-Do-List_Web-App",
    category: "Others",
  },
  {
    title: "Quote Generator",
    img: " /images/QuoteGen.png",
    alt: "A Quote Generator app",
    desc: "Generate and share inspiring quotes with just a click, featuring customizable styles and themes. This application allows users to explore a wide variety of motivational and thought-provoking quotes.",
    tech: ["Reactjs", "Quotable-api", "css","Js"],
    live: "https://noa-quote-generator.netlify.app/",
    code: "https://github.com/DavisNoah02/react-qoute-generator.git",
    category: "Others",
  },
  {
    title: "Oblak Ops",
    img: " /images/Oblak.png",
    alt: "Cloud Solutions Platform",
    desc: "Landing page concept for a fictional DevOps and cloud infrastructure company. Showcases services like CI/CD, cloud migrations, and infrastructure monitoring, designed to attract startups and SMEs looking for managed solutions.",
    tech: ["Wix Website Builder"],
    live: "https://mnoahdave.wixsite.com/oblak-ops/home",
    code: "",
    category: "Design",
    comingSoon: false,
  },
  {
    title: "Canva Portfolio Template",
    img: "/images/canvaP.png",
    alt: "Canva Designs",
    desc: "A downloadable Canva template tailored for creative professionals. Enables easy customization for showcasing portfolios, resumes, or brand guides with a clean, modern aesthetic.",
    tech: ["Canva Tool"],
    live: "https://noa-dave.my.canva.site/ai-portfolio",
    code: "",
    category: "Design",
    comingSoon: false,
  },
  {
    title: "Link-Tree ",
    img: "/images/linkTree.png",
    alt: "Designs and Graphics",
    desc: "A minimalist personal link-in-bio page inspired by Linktree.A simple page like  for sharing all your online profiles and important links. It keeps everything in one place and looks good on any device.",
    tech: ["LinkTree tool"],
    live: "https://linktr.ee/noah_dave",
    code: "",
    category: "Design",
    comingSoon: false,
  },
];

// Modal component
const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="bg-gray-900 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="relative">
            <img 
              src={project.img} 
              alt={project.alt} 
              className="w-full h-64 object-cover rounded-t-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 hover:bg-white hover:bg-opacity-20 hover:text-cyan-400 rounded-full p-1 transition-all duration-200 scale-100 hover:scale-110 active:scale-95"
            >
              <FiX size={20} />
            </button>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            </div>
          </div>

          {/* Modal content */}
          <div className="p-6">
            <p className="text-gray-300 mb-6">{project.desc}</p>
            
            <div className="mb-6">
              <h4 className="text-sm uppercase text-gray-500 font-semibold mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-blue-900/30 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
              {project.title === "EDUVERSE LMS" ? (
                <div className="flex items-center space-x-2 text-green-400">
                  <FiClock size={18} />
                  <span className="relative">
                    In Development
                    <span className="absolute -right-3 -top-3 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                  </span>
                </div>
              ) : project.comingSoon ? (
                <div className="flex items-center space-x-2 text-purple-400 animate-pulse">
                  <FiClock size={18} />
                  <span>Coming Soon</span>
                </div>
              ) : (
                <>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      <FiExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-all duration-300 hover:translate-y-[-2px]"
                    >
                      <FiGithub size={18} />
                      <span>Source Code</span>
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const categories = [
    { id: "All", label: "All" },
    { id: "Web", label: "Web" },
    { id: "Design", label: "Design" },
    { id: "Others", label: "Others" }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-gradient-to-br from-gray-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-center"
        >
          Featured Projects
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-gray-800/50 rounded-lg border border-gray-700/50">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-gray-800/70 border border-gray-700/50 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:translate-y-[-5px] cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Project Image */}
                <div className="relative">
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="w-full h-48 object-cover"
                  />
                  {project.title === "EDUVERSE LMS" ? (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center bg-green-900/70 text-green-300 py-1 px-3 rounded-full text-xs font-medium">
                        <span className="relative flex h-2 w-2 mr-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        In Development
                      </span>
                    </div>
                  ) : project.title === "Elevate Solutions" ? (
                    <div className="absolute top-3 right-3">
                      <span className="flex items-center bg-purple-700/70 text-purple-300 py-1 px-3 rounded-full text-xs font-medium animate-pulse">
                        <FiClock className="mr-1" /> Coming Soon
                      </span>
                    </div>
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                </div>

                {/* Project Brief */}
                <div className="p-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.slice(0, 3).map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-900/20 text-blue-400 py-0.5 px-2 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="bg-gray-700 text-gray-300 py-0.5 px-2 rounded-full text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="col-span-full bg-gray-800/50 border border-gray-700/30 rounded-xl p-8 text-center">
              <p className="text-gray-400">No projects found in this category.</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={selectedProject !== null}
          onClose={closeModal}
        />
      )}
    </section>
  );
};