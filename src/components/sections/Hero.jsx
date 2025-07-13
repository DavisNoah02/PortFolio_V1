import React from 'react';

export const Hero = () => {
     const Bio = {
    name: "Noah D. Munene",
  };
  return (
    <section className="text-start  md:py-24 min-h-screen flex flex-col md:flex-row  relative  bg-gradient-custom  " id="hero">
      <div className="max-w-2xl mx-auto pt-3">
        <div className="bg-white/60 border border-gray-200 rounded-full px-4 py-2  mb-6 inline-block text-sm">
          Don't feel like scrolling?
          <a href=" https://noa-daveprofile.vercel.app" className="text-yellow-700 font-semibold ">See a brief version of my portfolio instead →</a>
        </div>

        <p className="text-lg text-left text-blue-400">Hi, my name is</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-left text-white">
            {Bio.name}.
        </h1>
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-6 text-left text-gray-400">
             I deliver seamless and responsive web solutions.
        </h2>
        
        <p className="text-lg md:text-xl mt-8 font-light text-gray-300 text-left">
          I'm a passionate Full-Stack web developer with hands-on experience in building web applications using Javascript, React.js & Next.js with TypeScript, TailwindCSS, and Prisma, with System designing.
        </p>

        <p className="text-lg text-left mt-6 text-blue-400">
            Currently available for freelance →
        </p>
        
      </div>
    </section>
  );
};


