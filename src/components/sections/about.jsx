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
    description: " Noah is an enthusiastic, skilled and passionate Full-Stack web developer and consultant based in Kenya, specializing in crafting impactful digital solutions as well as with a keen eye for detail and a love for problem-solving. With hands-on experience in building web applications using Javascript ,React.js & Next.js with TypeScript, TailwindCSS, and Prisma, I'm comfortable working in collaborative environments and value open communication and feedback.",
  };
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden bg-gradient-custom2 px-2 sm:px-4 md:px-8 py-8 sm:py-12 md:py-20"
    > 
    
       {/* Profile Image  */}
  <div className="md:w-1/2 flex justify-center order-2 md:order-2">
    <div className="relative w-4/5 sm:w-3/4 md:w-[70%] max-w-[220px] sm:max-w-[300px] md:max-w-[400px] ">
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
      <div className="text-center z-10 px-2 sm:px-4 md:px-8 pt-18 py-5 order-1 md:order-2 md:items-start">

        <h2 className="text-4xl p-4 font-bold ">About <span className=" bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center tracking-tight drop-shadow-lg">Me </span></h2>
        <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
          {/* Typewriter Effect */}
          <div className="mt-4 text-base sm:text-lg md:text-xl text-justify font-semibold">
            <span>A </span>
            <span className="text-blue-400">
              <Typewriter
                words={Bio.roles}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
              />
            </span>
          </div>
          <br />

          <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg mx-auto text-justify">
            {Bio.description}
          </p>

          <div className="flex justify-start space-x-8 overflow-x-auto">
          <a
            href="https://docs.google.com/document/d/1g9Jg6m9U9FqEujTOjPG6xzKaenJ5mJ8SaVFmxm29EwA/edit?usp=sharing"
            target="_blank"
            className="relative group inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-custom-dark cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
            rel="noopener noreferrer"
          >
  <button className="button shadow-custom-dark ml-auto" type="button">
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
            
          </div>
          

        </div>
      </RevealOnScroll>
    </section>
  );
};