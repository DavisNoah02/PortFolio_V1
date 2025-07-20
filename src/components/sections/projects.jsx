import React, { useState, useEffect } from "react";
import { FiExternalLink, FiGithub, FiX, FiClock, FiLock } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

// Status helper
const getStatus = (project) => {
  if (project.live) return { label: "Live Demo", color: "green", icon: <FiExternalLink /> };
  if (project.comingSoon) return { label: "Coming Soon", color: "purple", icon: <FiClock /> };
  if (project.title === "EDUVERSE LMS") return { label: "In Development", color: "yellow", icon: <FiClock /> };
  return { label: "Private Repo", color: "gray", icon: <FiLock /> };
};

// Modal component
const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  const status = getStatus(project);

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
          className="bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl border border-gray-700"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: "spring", damping: 22 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="relative">
            {project.img && (
              <img
                src={project.img}
                alt={project.alt}
                className="w-full h-80 object-cover rounded-t-2xl"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/60 hover:bg-white/20 hover:text-cyan-400 rounded-full p-2 transition-all duration-200 scale-100 hover:scale-110 active:scale-95"
            >
              <FiX size={22} />
            </button>
            <div className="absolute bottom-0 left-0 p-6 flex items-center gap-4">
              <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold bg-${status.color}-900/70 text-${status.color}-300`}>
                {status.icon} {status.label}
              </span>
            </div>
          </div>
          {/* Modal Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-gray-100 mb-2">Description</h4>
              <p className="text-gray-300 mb-6">{project.desc}</p>
              <h4 className="text-lg font-bold text-gray-100 mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="bg-blue-900/30 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6 justify-center items-start">
              <h4 className="text-lg font-bold text-gray-100 mb-2">Links & Status</h4>
              <div className="flex flex-col gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold text-lg transition-all duration-300"
                  >
                    <FiExternalLink size={20} /> Live Demo
                  </a>
                )}
                {project.code ? (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold text-lg transition-all duration-300"
                  >
                    <FiGithub size={20} /> Source Code
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-gray-400 font-semibold text-lg">
                    <FiLock size={20} /> Private Repository
                  </span>
                )}
                {project.comingSoon && (
                  <span className="flex items-center gap-2 text-purple-400 font-semibold text-lg">
                    <FiClock size={20} /> Coming Soon
                  </span>
                )}
                {project.title === "EDUVERSE LMS" && (
                  <span className="flex items-center gap-2 text-yellow-400 font-semibold text-lg">
                    <FiClock size={20} /> In Development
                  </span>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

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
    type: "Portfolio Website",
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
    type: "AI Tool",
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
    type: "Business Website",
  },
  {
    title: "EDUVERSE LMS",
    img: "/images/Oblak.png",
    alt: "Learning Mgt System",
    desc: "A Learning Management System (LMS), a platform designed to facilitate online education and training. It allows educators to create, manage, and deliver courses, while enabling learners to access educational content, track progress, and interact with instructors and peers.",
    tech: [ "Express.js", "Node.js", "MongoDB", "Cloudinary","React.js", "Context API", "TailwindCSS", "Axios"],
    live: "",
    code: "",
    category: "Web",
    comingSoon: true,
    type: "Education Platform",
  },
  // {
  //   title: "A To-Do List",
  //   img: "/images/todolist.png",
  //   alt: "To-Do list Application",
  //   desc: "A To-Do List application that allows users to create, read, update and delete tasks. Users can also mark tasks as completed and view the completion status.",
  //   tech: ["HTML5", "CSS3", "Vanilla-JavaScript", "localStorage"],
  //   live: "https://noa-to-do-app.netlify.app/",
  //   code: "https://github.com/DavisNoah02/To-Do-List_Web-App",
  //   category: "Others",
  // },
  // {
  //   title: "Quote Generator",
  //   img: " /images/QuoteGen.png",
  //   alt: "A Quote Generator app",
  //   desc: "Generate and share inspiring quotes with just a click, featuring customizable styles and themes. This application allows users to explore a wide variety of motivational and thought-provoking quotes.",
  //   tech: ["Reactjs", "Quotable-api", "css","Js"],
  //   live: "https://noa-quote-generator.netlify.app/",
  //   code: "https://github.com/DavisNoah02/react-qoute-generator.git",
  //   category: "Others",
  // },
  // {
  //   title: "Oblak Ops",
  //   img: " /images/Oblak.png",
  //   alt: "Cloud Solutions Platform",
  //   desc: "Landing page concept for a fictional DevOps and cloud infrastructure company. Showcases services like CI/CD, cloud migrations, and infrastructure monitoring, designed to attract startups and SMEs looking for managed solutions.",
  //   tech: ["Wix Website Builder"],
  //   live: "https://mnoahdave.wixsite.com/oblak-ops/home",
  //   code: "",
  //   category: "Design",
  //   comingSoon: false,
  // },
  // {
  //   title: "Canva Portfolio Template",
  //   img: "/images/canvaP.png",
  //   alt: "Canva Designs",
  //   desc: "A downloadable Canva template tailored for creative professionals. Enables easy customization for showcasing portfolios, resumes, or brand guides with a clean, modern aesthetic.",
  //   tech: ["Canva Tool"],
  //   live: "https://noa-dave.my.canva.site/ai-portfolio",
  //   code: "",
  //   category: "Design",
  //   comingSoon: false,
  // },
  // {
  //   title: "Link-Tree ",
  //   img: "/images/linkTree.png",
  //   alt: "Designs and Graphics",
  //   desc: "A minimalist personal link-in-bio page inspired by Linktree.A simple page like  for sharing all your online profiles and important links. It keeps everything in one place and looks good on any device.",
  //   tech: ["LinkTree tool"],
  //   live: "https://linktr.ee/noah_dave",
  //   code: "",
  //   category: "Design",
  //   comingSoon: false,
  // },
];
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // 2 cards per row, responsive
  return (
    <section
      id="projects"
      className="min-h-screen py-26 w-full bg-gradient-to-br from-gray-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center tracking-tight drop-shadow-lg"
        >
          Projects I've Worked On
        </motion.h2>
        <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
        <p className="text-gray-300 mb-10 w-full md:w-2/3 mx-auto text-center">
          I've had the opportunity to work on everything from building user-facing web apps and dashboards to ensuring they run smoothly and responsively.
        </p>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {projects.map((project, idx) => {
              const status = getStatus(project);
              return (
                <motion.div
                  key={idx}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.07 }}
                  className="relative bg-gray-800/70 border border-gray-700/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:scale-[0.98] cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image with stylish hover */}
                  <div className="relative overflow-hidden">
                    {project.img && (
                      <img
                        src={project.img}
                        alt={project.alt}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105 group-hover:blur-[1px]"
                      />
                    )}
                    {/* Shine effect */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
                      </div>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <span className="flex flex-col items-center gap-2">
                        <span className="text-green-400 text-2xl font-bold drop-shadow-lg">View Details</span>
                        <span className="w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></span>
                      </span>
                    </div>
                    {/* Status badge */}
                    <div className="absolute top-3 left-3 flex justify-between w-full px-3">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-${status.color}-900/70 text-${status.color}-300`}>
                        {status.icon} {status.label}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/70 text-blue-300 ml-auto">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  {/* Project Brief */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
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
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Work in Progress Section */}
        {/* <div className="mt-24 flex flex-col items-center justify-center min-h-[220px]">
          <motion.h3
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 text-center"
          >
            This section is evolving...
          </motion.h3>
          
          <div className="mb-4 flex items-center justify-center">
            <span className="relative flex h-10 w-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-10 w-10 bg-blue-500"></span>
            </span>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gray-400 text-lg md:text-xl text-center max-w-md"
          >
            More innovative projects launching soon...<br />
            
          </motion.p>
        </div> */}
         <section className="min-h-[100px] mt-24 flex flex-col items-center justify-center px-4">
      {/* Animated Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8 }}
        className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
      >
       More innovative projects launching soon...
      </motion.h3>

      {/* Animated Spinner Icon */}
      <motion.div
        className="mt-6 text-blue-400"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <FiClock className="animate-spin-slow text-4xl sm:text-5xl" />
      </motion.div>

      {/* Optional Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-4 text-sm sm:text-base text-gray-400 text-center max-w-md"
      >
        Stay tuned  exciting stuff in the pipeline!
      </motion.p>
    </section>

      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};