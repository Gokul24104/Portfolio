import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Smart AI Resume Screener & Career Advisor',
      description:
        'An AI-based platform that screens, scores, and enhances resumes while offering learning advice based on data and job descriptions.',
      url: 'https://resume-project-dun.vercel.app', // ✅ replace with your actual deployed link
    },
    {
      title: 'Real-Time Cross-Chain Gas Price Tracker',
      description:
        'Tracks live gas prices from Ethereum, Polygon, and Arbitrum using their Native RPCs with candlestick charts and wallet simulation.',
      url: 'https://gas-tracker-red.vercel.app', // ✅ replace with your deployed link
    },
    {
      title: 'UpCode - E-Learning Platform',
      description:
        'Teaches students the fundamentals of programming and their application in real-life projects from basics to advanced.',
      url: '/coming-soon', // ✅ replace with your deployed/demo link
    },

    {
      title: 'Project 4',
      description: 'More coming soon...',
      url: '/coming-soon', // keep as placeholder for now
    },
  ];


  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] text-white py-16 px-6 md:px-12"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-extrabold mb-14 text-center tracking-wide">
          My <span className="text-red-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-[#1a1a1a]/60 backdrop-blur-md border border-gray-800 rounded-xl p-6 shadow-lg hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-2 hover:border-red-500 block"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition duration-300"></div>

              <h3 className="text-xl font-semibold mb-3 text-red-400 group-hover:text-red-500 transition">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex items-center gap-2 text-red-500 text-sm font-medium group-hover:underline">
                View Project <FiExternalLink />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
