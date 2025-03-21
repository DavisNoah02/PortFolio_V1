import { RevealOnScroll } from "../RevealOnScroll";

export const Skills = () => {
  const frontendSkills = [
    "React",
    "Vue",
    "TypeScript",
    "TailwindCSS",
    "Svelte",
  ];

  const backendSkills = ["Node.js", "Python", "AWS", "MongoDB", "GraphQL"];

  const otherSkills = [
    "Git",
    "GitHub",
    "YAML",
    "VSCode",
    "Netlify",
    "Vercel",
    "Postman",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            SKILLS
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all text-center">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">Frontend</p>
                    <p>Learn More</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">Frontend Skills</p>
                    <p>{frontendSkills.join(", ")}</p>
                  </div>
                </div>
              </div>

              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">Full-Stack </p>
                    <p>Learn More</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">FULL-STACK</p>
                    <p>{backendSkills.join(", ")}</p>
                  </div>
                </div>
              </div>

              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">Others</p>
                    <p>Learn More</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">Other Skills</p>
                    <p>{otherSkills.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};