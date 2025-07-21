'use client';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import Marquee from 'react-fast-marquee';
import * as Tooltip from '@radix-ui/react-tooltip';
import { RevealOnScroll } from '../RevealOnScroll';

import {
  FaHtml5, FaCss3Alt, FaDatabase, FaNetworkWired, FaCode, FaCogs,
  FaReact, FaBootstrap, FaNodeJs, FaAws, FaGit, FaGithub, FaFigma, FaDocker
} from 'react-icons/fa';

import {
  SiTypescript, SiTailwindcss, SiFirebase, SiMongodb, SiPostman,
  SiNetlify, SiVercel, SiCanva, SiJsonwebtokens, SiYaml
} from 'react-icons/si';

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
  GitHub: <FaGithub className="text-white" />,
  VSCode: <FaCode className="text-blue-500" />,
  Netlify: <SiNetlify className="text-teal-500" />,
  Vercel: <SiVercel className="text-white" />,
  Postman: <SiPostman className="text-orange-500" />,
  "Github Actions": <FaGithub className="text-blue-500" />,
  "CI/CD": <FaCogs className="text-gray-500" />,
  Figma: <FaFigma className="text-pink-500" />,
  Canva: <SiCanva className="text-blue-500" />,
};

const skillDescriptions = {
  HTML5: "Web page structure",
  CSS3: "Styling & layouts",
  React: "UI components",
  TypeScript: "Typed JS",
  TailwindCSS: "Utility CSS",
  Bootstrap: "UI framework",
  Json: "User tokens",
  SQL: "Relational DB",
  "Node.js": "Backend JS",
  Firebase: "Auth & DB",
  AWS: "Cloud services",
  MongoDB: "NoSQL DB",
  "REST Api's": "Data exchange",
  Yaml: "Config files",
  Git: "Code tracking",
  GitHub: "Code hosting",
  VSCode: "Code editor",
  Netlify: "Site hosting",
  Vercel: "Next.js deploy",
  Postman: "API testing",
  "Github Actions": "CI/CD flows",
  "CI/CD": "Auto deploys",
  Figma: "UI design",
  Canva: "Quick graphics",
};

const skillsList = Object.keys(skillIcons);
const halfway = Math.ceil(skillsList.length / 2);
const firstHalf = skillsList.slice(0, halfway);
const secondHalf = skillsList.slice(halfway);

export const Skills = () => {
  const skillData = {
    frontend: 90,
    backend: 85,
    devops: 80,
    design: 75,
    tools: 88,
  };

  const radarData = {
    labels: ['Frontend', 'Backend', 'DevOps', 'Design', 'Tools'],
    datasets: [{
      label: 'Skill Proficiency',
      data: Object.values(skillData),
      backgroundColor: 'rgba(99, 102, 241, 0.2)',
      borderColor: 'rgb(99, 102, 241)',
      borderWidth: 2,
      pointBackgroundColor: 'rgb(99, 102, 241)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(99, 102, 241)',
    }],
  };

  const radarOptions = {
    responsive: true,
    scales: {
      r: {
        angleLines: { color: 'rgba(200, 200, 200, 0.3)' },
        grid: { color: 'rgba(200, 200, 200, 0.3)' },
        pointLabels: {
          color: '#CBD5E0',
          font: { size: 14 },
        },
        ticks: {
          display: false,
          beginAtZero: true,
          max: 100,
          stepSize: 20,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}%`,
        },
      },
      legend: { display: false },
    },
  };

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center py-14 bg-gradient-custom2"
    >
      <RevealOnScroll direction="up">
        <div className="w-full max-w-5xl px-4 glass p-6 rounded-xl border bg-gray-900 border-blue-500/10 shadow-md">
          <h2 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-center tracking-tight drop-shadow-lg">
            My Skills ToolBox
          </h2>

          <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"></div>

          <p className="text-gray-300 mb-10 text-center">
            Building the web with heart, clean code, and a modern tech stack. Here’s what I’m stacking.
          </p>

          <div className="relative w-full h-96 flex items-center justify-center mb-8">
            <Radar data={radarData} options={radarOptions} className="w-full h-full" />
          </div>

          {/* Marquee One */}
          <div className="w-3/4 mx-auto mb-4 overflow-hidden">
            <Marquee gradient={false} speed={30} pauseOnHover={true}>
              {firstHalf.map((skill) => (
                <SkillCard
                  key={skill}
                  name={skill}
                  icon={skillIcons[skill]}
                  tooltip={skillDescriptions[skill]}
                />
              ))}
            </Marquee>
          </div>

          {/* Marquee Two */}
          <div className="w-3/4 mx-auto mt-2 overflow-hidden">
            <Marquee gradient={false} speed={30} direction="right" pauseOnHover={true}>
              {secondHalf.map((skill) => (
                <SkillCard
                  key={skill}
                  name={skill}
                  icon={skillIcons[skill]}
                  tooltip={skillDescriptions[skill]}
                />
              ))}
            </Marquee>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const SkillCard = ({ name, icon, tooltip }) => (
  <Tooltip.Provider>
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        <div className="flex flex-col items-center justify-center w-16 h-16 mx-2 bg-gray-800 rounded-lg shadow-md hover:shadow-blue-500/30 transition-all duration-300 transform cursor-pointer">
          <div className="text-2xl hover:text-white transition-colors duration-200">
            {icon}
          </div>
          <p className="text-xs text-gray-300 mt-2 text-center">{name}</p>
        </div>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          className="px-3 py-2 text-sm rounded-md bg-gray-500 text-white shadow-md z-50 max-w-xs text-center"
          sideOffset={6}
        >
          {tooltip}
          <Tooltip.Arrow className="fill-white" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.Provider>
);
