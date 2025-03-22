import { RevealOnScroll } from "../RevealOnScroll";

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  View Code
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
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  View Code
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
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  View Code
                </a>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
