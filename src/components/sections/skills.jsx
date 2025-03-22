import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { RevealOnScroll } from "../RevealOnScroll";

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
      className="min-h-screen flex items-center justify-center py-20  "
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 glass p-6 rounded-xl border border-blue-500/40 
                 hover:-translate-y-1 hover:border-white-500/60 
                 hover:shadow-[0_4px_20px_rgba(128,0,128,0.3)]
                 transition-all ">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            MY SKILLS SET
          </h2>

          <div >
            <p className="text-gray-300 mb-6 text-center">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
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
          className="px-3 py-1 text-sm rounded-full bg-gray-700/50 text-gray-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);