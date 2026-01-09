import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from "lucide-react";



const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 1.2,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const Hero = () => {
  const Bio = {
    name: "Noah Dave Munene",
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-custom font-montserrat min-h-screen flex items-center px-4 sm:px-6 md:px-3 py-10 md:py-14 pt-28 sm:pt-32 md:pt-26"
    >
      <motion.div
        className="max-w-4xl mx-auto w-full flex flex-col items-start space-y-2"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={childVariants}
          className="self-center bg-gradient-to-r from-green-600 to-gray-900 border border-yellow-600/50 rounded-full px-4 py-2 text-sm text-center mb-2 sm:mb-10 text-xs sm:text-sm shadow-lg"
        >
          Don't feel like scrolling ?...{" "}
          <a
            href="https://noa-daveprofile.vercel.app"
            className="text-green-500 font-semibold hover:text-green-300 transition-colors duration-300"
            target="_blank"
            rel="noreferrer"
          >
            See a brief Resume version of my portfolio →
          </a>
        </motion.div>

        <motion.p variants={childVariants} className="text-green-300 text-base sm:text-lg">
          Hi 👋, am
        </motion.p>

        <motion.h1
          variants={childVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-200 leading-tight font-extrabold drop-shadow-lg"
        >
          {Bio.name}.
        </motion.h1>

        <motion.h2
          variants={childVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 leading-snug"
        >
          I bring your ideas to life with clean, responsive web builds
        </motion.h2>

        <motion.p
          variants={childVariants}
          className="text-gray-300 text-lg md:text-xl font-light mt-4"
        >
          Full-Stack web developer with hands-on experience in building web
          applications using{" "}
          <span className="font-semibold text-blue-200">
             React.js, Next.js,  TailwindCSS, and Prisma
          </span>
          . Focusing on delivering impactful digital solutions with attention to detail.
        </motion.p>

<motion.a
  variants={childVariants}
  href="#contact"
  className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-400/30 text-green-400 text-sm sm:text-base font-medium backdrop-blur-md"
>
  {/* Smooth pulsing dot */}
  <span className="relative flex h-3 w-3">
    <motion.span
      className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50"
      animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
         // smooth back-and-forth
        ease: "easeOut",
      }}
    />
    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
  </span>

  <span>Available for freelance</span>
</motion.a>



      </motion.div>


    {/* Scroll Down Animation */}
      <motion.div
  className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5 }}
>
  <motion.a
    href="#about"
    aria-label="Scroll down"
    className="flex flex-col items-center gap-1 group"
    animate={{ y: [0, 12, 0] }}
    transition={{
      duration: 1.6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <span className="text-xs tracking-widest uppercase text-gray-500 group-hover:text-green-400 transition">
      Scroll
    </span>
    <ChevronDown
      size={32}
      className="group-hover:text-green-400 transition-colors"
    />
  </motion.a>
</motion.div>

    </section>
  );
};
