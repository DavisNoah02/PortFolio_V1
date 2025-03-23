import { RevealOnScroll } from "../RevealOnScroll";
import todoListImg from "../../assets/images/todolist.png";
import quoteGenImg from "../../assets/images/QuoteGen.png";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            My Projects
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6">

            {/* Project 1 */}
            <div
              className="
                glass p-6 rounded-xl border border-purple-500/40 
                 hover:-translate-y-1 hover:border-purple-500/60 
                 hover:shadow-[0_4px_20px_rgba(128,0,128,0.3)]
                 transition-all "
            >
              <h3 className="text-xl font-bold mb-2">Cloud Platform</h3>
               {/* Project Image */}
               <img
                src="your-image-url.jpg"
                alt="Cloud Platform Preview"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-400 mb-4">
                Scalable cloud infrastructure management with real-time monitoring and automated scaling.
              </p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-4 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex justify-start items-center space-x-8 my-8">
                <a
                  href="#"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  View Live
                </a>
                <a
                href="#"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-base tracking-wide active:scale-95 transition-transform duration-300"
              >
                {/* Black overlay that slides away on hover */}
                <div className="absolute inset-0 -left-[10%] w-[120%] h-full bg-black -skew-x-[30deg] transform transition-transform duration-400 ease-out group-hover:translate-x-full z-0"></div>
                
                {/* Button content stays on top */}
                <div className="flex items-center space-x-2 relative z-10">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>View Code</span>
                </div>
              </a>
              </div>
            </div>


             {/* Project 2 */}
             <div
              className="
                 glass p-6 rounded-xl border border-purple-500/40 
                 hover:-translate-y-1 hover:border-purple-500/60 
                 hover:shadow-[0_4px_20px_rgba(128,0,128,0.3)]
                 transition-all "
            >
              <h3 className="text-xl font-bold mb-2">To-Do List</h3>
               {/* Project Image */}
               <img
                src={todoListImg}
                alt="To-Do list Application"
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <p className="text-gray-400 mb-4">
                A To-Do List application that allows users to create, read, update and delete tasks. Users can also mark tasks as completed and view the completion status.
              </p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-4 mb-4">
                {["HTML5", "CSS3", "JavaScript","localStorage"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex justify-start items-center space-x-8 my-8">
                <a
                  href="https://noa-to-do-app.netlify.app/"
                  target="blank"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  View Live
                </a>
                <a
                href="#"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-base tracking-wide active:scale-95 transition-transform duration-300"
              >
                {/* Black overlay that slides away on hover */}
                <div className="absolute inset-0 -left-[10%] w-[120%] h-full bg-black -skew-x-[30deg] transform transition-transform duration-400 ease-out group-hover:translate-x-full z-0"></div>
                
                {/* Button content stays on top */}
                <div className="flex items-center space-x-2 relative z-10">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>View Code</span>
                </div>
              </a>
              </div>
            </div>

                        {/* Project 3 */}
            <div
              className="
                glass p-6 rounded-xl border border-purple-500/40 
                 hover:-translate-y-1 hover:border-purple-500/60 
                 hover:shadow-[0_4px_20px_rgba(128,0,128,0.3)]
                 transition-all "
            >
              <h3 className="text-xl font-bold mb-2">Quote Generator</h3>
               {/* Project Image */}
               <img
                src={quoteGenImg}
                alt="A Quote Generator app"
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <p className="text-gray-400 mb-4">
                Generate and share inspiring quotes with just a click, featuring customizable styles and themes.
              </p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-4 mb-4">
                {["Reactjs", "api", "css"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex justify-start items-center space-x-8 my-8">
                <a
                  href="https://noa-quote-generator.netlify.app/"
                  target="blank"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  View Live
                </a>
                <a
                href="https://github.com/DavisNoah02/react-qoute-generator.git"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-base tracking-wide active:scale-95 transition-transform duration-300"
              >
                {/* Black overlay that slides away on hover */}
                <div className="absolute inset-0 -left-[10%] w-[120%] h-full bg-black -skew-x-[30deg] transform transition-transform duration-400 ease-out group-hover:translate-x-full z-0"></div>
                
                {/* Button content stays on top */}
                <div className="flex items-center space-x-2 relative z-10">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>View Code</span>
                </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
