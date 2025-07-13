import React from 'react';

export const Hero = () => {
  const Bio = {
    name: "Noah D. Munene",
  };

  return (
    <section
      id="hero"
      className="bg-gradient-custom min-h-screen flex items-center px-4 sm:px-6 md:px-10 py-10 md:py-28"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-start space-y-4">
        {/*  CTA box */}
        <div className="bg-white/40 border border-gray-200 rounded-full px-4 py-2 text-sm text-center mb-2 sm:mb-8">
          Don't feel like scrolling?{" "}
          <a
            href="https://noa-daveprofile.vercel.app"
            className="text-yellow-500 font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            See a brief Resume version of my portfolio →
          </a>
        </div>

        <p className="text-blue-400 text-base sm:text-lg">Hi, my name is</p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
          {Bio.name}.
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-400 leading-snug">
          Let's bring your project to life with confidence and creativity. I deliver seamless and responsive web solutions.
        </h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light mt-2">
          I'm a passionate Full-Stack web developer with hands-on experience in building web
          applications using JavaScript, React.js & Next.js with TypeScript, TailwindCSS, and Prisma,
          with system designing.
        </p>

        <p className="text-green-400 text-base sm:text-lg mt-4 relative inline-flex items-center animate-pulse">
          Currently available for freelance →
        </p>
      </div>
    </section>
  );
};
