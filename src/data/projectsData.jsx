// data/projectsData.js
export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    img: "/images/portfolio.png",
    alt: "My personal Portfolio",
    desc: "A comprehensive showcase of my skills, expertise, and projects as a web developer. Designed with a focus on responsiveness and user experience, it highlights my ability to create visually appealing and functional web applications.",
    tech: ["Reactjs", "TailwindCSS", "Framer Motion", "Vite", "Emailjs-com", "Chart.js"],
    live: "https://noa-dave.vercel.app/",
    code: "https://github.com/DavisNoah02/PortFolio_V1.git",
    category: "Web",
    status: "live",
    isPrivate: false,
    featured: true,
    completionDate: "2024-01-15",
    highlights: [
      "Responsive design with mobile-first approach",
      "Interactive animations using Framer Motion",
      "Contact form with EmailJS integration",
      "Performance optimized with Vite"
    ]
  },
  {
    id: 2,
    title: "AI Text-to-image Generator",
    img: "/images/ai-imgP.png",
    alt: "Dall-e image Generator",
    desc: "An AI Image Generator, a web application that utilizes the DALL-E API to create unique and visually stunning images based on user-provided text descriptions.",
    tech: ["Firebase Auth", "Firebase Storage", "React.js", "TailwindCSS", "Flask API", "Vercel", "Dall-e API"],
    live: "https://imagify-ai-noa.vercel.app/",
    code: "https://github.com/DavisNoah02/DALL-E-image-generator-App.git",
    category: "Web",
    status: "live",
    isPrivate: false,
    featured: true,
    completionDate: "2024-02-20",
    highlights: [
      "Integration with OpenAI's DALL-E API",
      "User authentication with Firebase",
      "Cloud storage for generated images",
      "Responsive gallery interface"
    ]
  },
  {
    id: 3,
    title: "Elevate Solutions",
    img: "/images/ES.png",
    alt: "DigitalMarketting Agency",
    desc: "A modern digital marketing agency site built to highlight services like SEO, branding, and social media strategy. Features include service showcases, client testimonials, and a call-to-action driven design to boost conversions.",
    tech: ["Next.js", "TailwindCSS", "Vercel", "Radix-ui", "Framer Motion"],
    live: "",
    code: "",
    category: "Web",
    status: "development",
    isPrivate: true,
    featured: false,
    completionDate: null,
    highlights: [
      "Modern landing page design",
      "SEO optimized with Next.js",
      "Client testimonials section",
      "Contact form with validation"
    ]
  },
  {
    id: 4,
    title: "EDUVERSE LMS",
    img: "/images/lms-placeholder.png",
    alt: "Learning Management System",
    desc: "A comprehensive Learning Management System (LMS) platform designed to facilitate online education and training. It allows educators to create, manage, and deliver courses, while enabling learners to access educational content, track progress, and interact with instructors and peers.",
    tech: ["Express.js", "Node.js", "MongoDB", "Cloudinary", "React.js", "Context API", "TailwindCSS", "Axios"],
    live: "",
    code: "",
    category: "Web",
    status: "development",
    isPrivate: false,
    featured: true,
    completionDate: null,
    highlights: [
      "Full-stack MERN application",
      "User role management (Student/Teacher/Admin)",
      "Course creation and management",
      "Progress tracking and analytics"
    ]
  },
  {
    id: 5,
    title: "A To-Do List",
    img: "/images/todolist.png",
    alt: "To-Do list Application",
    desc: "A To-Do List application that allows users to create, read, update and delete tasks. Users can also mark tasks as completed and view the completion status.",
    tech: ["HTML5", "CSS3", "Vanilla-JavaScript", "localStorage"],
    live: "https://noa-to-do-app.netlify.app/",
    code: "https://github.com/DavisNoah02/To-Do-List_Web-App",
    category: "Others",
    status: "live",
    isPrivate: false,
    featured: false,
    completionDate: "2023-11-10",
    highlights: [
      "Pure vanilla JavaScript implementation",
      "Local storage for data persistence",
      "Drag and drop functionality",
      "Task filtering and sorting"
    ]
  },
  {
    id: 6,
    title: "Quote Generator",
    img: "/images/QuoteGen.png",
    alt: "A Quote Generator app",
    desc: "Generate and share inspiring quotes with just a click, featuring customizable styles and themes. This application allows users to explore a wide variety of motivational and thought-provoking quotes.",
    tech: ["Reactjs", "Quotable-api", "CSS", "JavaScript"],
    live: "https://noa-quote-generator.netlify.app/",
    code: "https://github.com/DavisNoah02/react-qoute-generator.git",
    category: "Others",
    status: "live",
    isPrivate: false,
    featured: false,
    completionDate: "2023-12-05",
    highlights: [
      "API integration with Quotable",
      "Social media sharing functionality",
      "Multiple theme options",
      "Favorite quotes collection"
    ]
  },
  {
    id: 7,
    title: "Oblak Ops",
    img: "/images/Oblak.png",
    alt: "Cloud Solutions Platform",
    desc: "Landing page concept for a fictional DevOps and cloud infrastructure company. Showcases services like CI/CD, cloud migrations, and infrastructure monitoring, designed to attract startups and SMEs looking for managed solutions.",
    tech: ["Wix Website Builder"],
    live: "https://mnoahdave.wixsite.com/oblak-ops/home",
    code: "",
    category: "Design",
    status: "live",
    isPrivate: false,
    featured: false,
    completionDate: "2024-01-08",
    highlights: [
      "Professional corporate design",
      "Service showcase sections",
      "Client testimonials",
      "Contact form integration"
    ]
  },
  {
    id: 8,
    title: "Canva Portfolio Template",
    img: "/images/canvaP.png",
    alt: "Canva Designs",
    desc: "A downloadable Canva template tailored for creative professionals. Enables easy customization for showcasing portfolios, resumes, or brand guides with a clean, modern aesthetic.",
    tech: ["Canva Tool"],
    live: "https://noa-dave.my.canva.site/ai-portfolio",
    code: "",
    category: "Design",
    status: "live",
    isPrivate: false,
    featured: false,
    completionDate: "2024-01-20",
    highlights: [
      "Professional template design",
      "Easy customization options",
      "Multiple layout variations",
      "Print-ready formats"
    ]
  }
];

// Helper functions for data filtering and sorting
export const getProjectsByCategory = (category) => {
  if (category === "All") return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByStatus = (status) => {
  return projects.filter(project => project.status === status);
};

export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

// Categories configuration
export const categories = [
  { id: "All", label: "All Projects", count: projects.length },
  { id: "Web", label: "Web Development", count: projects.filter(p => p.category === "Web").length },
  { id: "Design", label: "Design", count: projects.filter(p => p.category === "Design").length },
  { id: "Others", label: "Others", count: projects.filter(p => p.category === "Others").length }
];

// Statistics
export const projectStats = {
  total: projects.length,
  live: projects.filter(p => p.status === "live").length,
  development: projects.filter(p => p.status === "development").length,
  featured: projects.filter(p => p.featured).length,
  technologies: [...new Set(projects.flatMap(p => p.tech))].length
};