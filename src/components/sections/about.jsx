import { RevealOnScroll } from "../RevealOnScroll";
import { Typewriter } from "react-simple-typewriter";



export const About = () => {
  const Bio = {
    name: "Noah D. Munene",
    roles: [
      "Full Stack Developer",
      "Technical Writer",
      "SEO Specialist",
      "Web Developer",	
    ],
    description: "I'm an enthusiastic and adaptable web developer based in Nairobi, KENYA, with two years of experience building responsive and scalable web applications using modern technologies. Driven by a passion for creating impactful solutions, I thrive on learning and tackling new challenges.  I'm committed to leveraging technology to make a real difference."
  };
  return (
    <section
      id="about"
     className="min-h-screen flex flex-col md:flex-row items-center justify-end relative  pt-10 bg-gradient-custom2"
    > 
       {/* Profile Image  */}
  <div className="md:w-1/2 flex justify-center order-2 md:order-2">
    <div className="relative max-w-[300px] md:max-w-[400px] w-[70%] ">
      <div className="wrapper relative w-full rounded-[var(--border-radius)] bg-[var(--green)] shadow-custom transition-transform duration-300 hover:-translate-x-2 hover:-translate-y-2 focus:outline-none">
        <img
          className="img relative rounded-[var(--border-radius)] mix-blend-multiply grayscale contrast-100 transition-all duration-300"
          src="/profile1.jpg"
          alt="noa-dave Profile pic"
          width={500}
        />
      </div>
    </div>
  </div>


      <RevealOnScroll>
        <div className="text-center z-10 px-4 py-10 order-1  md:order-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Hi, I'm <span >{Bio.name}</span>
        </h1>

          {/* Typewriter Effect */}
          <div className="mt-4 text-xl sm:text-2xl font-semibold">
            <span>A </span>
            <span className="text-blue-400">
              <Typewriter
                words={Bio.roles}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
              />
            </span>
          </div>
          <br />

          <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 max-w-lg mx-auto text-justify">
            {Bio.description}
          </p>

          <div className="flex justify-center space-x-8">
          <a
  href="https://docs.google.com/document/d/1g9Jg6m9U9FqEujTOjPG6xzKaenJ5mJ8SaVFmxm29EwA/edit?usp=sharing"
  target="_blank"
  className="relative group inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-custom-dark cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
  rel="noopener noreferrer"
>
  <button className="button shadow-custom-dark" type="button">
    <span className="button__text">RESUME</span>
    <span className="button__icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 35"
        id="bdd05811-e15d-428c-bb53-8661459f9307"
        data-name="Layer 2"
        className="svg"
      >
        <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
        <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
        <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
      </svg>
    </span>
  </button>
</a>
            <a
               href="#contact" 
              className="relative group inline-block p-px font-semibold leading-6 text-white bg-gray-900 shadow-2xl cursor-pointer rounded-xl shadow-zinc-800 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

              <span className="relative z-10 block w-full px-4 py-3 rounded-xl bg-cyan-950 md:w-auto md:px-4 md:py-3">
                <div className="relative z-10 flex items-center space-x-2">
                  <span className="transition-all duration-500 group-hover:translate-x-1">
                    Connect with me
                  </span>
                  <svg
                    className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                    data-slot="icon"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </span>
            </a> 
          </div>
          

        </div>
      </RevealOnScroll>
    </section>
  );
};