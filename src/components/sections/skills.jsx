import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { RevealOnScroll } from "../RevealOnScroll";
import { FaHtml5, FaCss3Alt,FaDatabase,FaNetworkWired, FaCode, FaCogs, FaReact, FaBootstrap, FaNodeJs, FaAws, FaGit, FaGithub, FaFigma, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiFirebase, SiMongodb, SiPostman, SiNetlify, SiVercel, SiCanva, SiJsonwebtokens, SiYaml } from 'react-icons/si';

const skillIcons = {
  HTML5: <FaHtml5 className="text-orange-600" />,
  CSS3: <FaCss3Alt className="text-blue-600" />,
  React: <FaReact className="text-cyan-500" />,
  TypeScript: <SiTypescript className="text-blue-500" />,
  TailwindCSS: <SiTailwindcss className="text-teal-400" />,
  Bootstrap: <FaBootstrap className="text-purple-600" />,
  Json: <SiJsonwebtokens className="text-yellow-500" />,
  SQL: <FaDatabase className="text-gray-600" />,
  "Node.js": <FaNodeJs className="text-green-500" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  AWS: <FaAws className="text-orange-500" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  "REST Api's": <FaNetworkWired className="text-blue-500" />,
  Yaml: <SiYaml className="text-gray-500" />,
  Git: <FaGit className="text-red-500" />,
  GitHub: <FaGithub className="text-black" />,
  VSCode: <FaCode className="text-blue-500" />,
  Netlify: <SiNetlify className="text-teal-500" />,
  Vercel: <SiVercel className="text-black" />,
  Postman: <SiPostman className="text-orange-500" />,
  "Github Actions": <FaGithub className="text-blue-500" />,
  "CI/CD": <FaCogs className="text-gray-500" />,
  Figma: <FaFigma className="text-pink-500" />,
  Canva: <SiCanva className="text-blue-500" />,
};

export const Skills = () => {
  // Proficiency levels (0-100) for each category
  const skillData = {
    frontend: 90,
    backend: 85,
    devops: 80,
    design: 75,
    tools: 88
  };

  const radarData = {
    labels: ['Frontend', 'Backend', 'DevOps', 'Design', 'Tools'],
    datasets: [
      {
        label: 'Skill Proficiency',
        data: [
          skillData.frontend,
          skillData.backend,
          skillData.devops,
          skillData.design,
          skillData.tools
        ],
        backgroundColor: 'rgba(99, 102, 241, 0.2)',
        borderColor: 'rgb(99, 102, 241)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(99, 102, 241)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(99, 102, 241)',
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      r: {
        angleLines: { color: 'rgba(200, 200, 200, 0.3)' },
        grid: { color: 'rgba(200, 200, 200, 0.3)' },
        pointLabels: {
          color: '#4a5568',
          font: { size: 14 }
        },
        ticks: {
          display: false,
          beginAtZero: true,
          max: 100,
          stepSize: 20
        }
      }
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}%`
        }
      },
      legend: { display: false }
    }
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center pt-14 pb-2  "
    >
      <RevealOnScroll direction="up">
        <div className="max-w-4xl mx-auto px-4 glass p-6 rounded-xl border bg-gray-900 border-blue-500/10 
                 hover:-translate-y-2 hover:border-white-500/60 
                 hover:shadow-[0_4px_20px_rgba(128,0,128,0.3)]
                 transition-all ">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center tracking-tight drop-shadow-lg">
            My Skills Set
          </h2>
          {/* divider/accent */}
          <div className="w-24 h-1 mx-auto mb-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>
          <div>
            <p className="text-gray-300 mb-6 text-center">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
              Here are some of the skills that I have been working on so far.
            </p>
            {/* Radar Chart */}
            <div className="relative h-96 flex items-center justify-center">
              <Radar 
                data={radarData} 
                options={options}
                className="w-full h-full"
              />
            </div>

            {/* Skills Legend */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
              <SkillCategory
                title="Frontend"
                skills={[ "HTML5", "CSS3", "React","TypeScript", "TailwindCSS", "Bootstrap","Json"]}
                color="from-purple-500 to-blue-400"
              />
              <SkillCategory
                title="Backend"
                skills={["SQL","Node.js", "Firebase", "AWS", "MongoDB", "REST Api's","Yaml"]}
                color="from-purple-500 to-pink-400"
              />
              <SkillCategory
                title="Tools"
                skills={["Git", "GitHub", "VSCode","Netlify", "Vercel", "Postman"]}
                color="from-green-500 to-teal-400"
              />
              <SkillCategory
                title="Devops"
                skills={[  "Github Actions","CI/CD"]}
                color="from-purple-500 to-pink-400"
              />
              <SkillCategory
                title="Graphics & Design"
                skills={[ "Figma","Canva"]}
                color="from-purple-500 to-blue-400"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const SkillCategory = ({ title, skills, color }) => (
  <div className="p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm">
    <h3 className={`text-lg font-semibold mb-2 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill}
          className="flex items-center px-3 py-1 text-sm rounded-full bg-gray-700/50 text-gray-300"
        >
          {skillIcons[skill]} <span className="ml-2">{skill}</span>
        </span>
      ))}
    </div>
  </div>
);