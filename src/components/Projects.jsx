import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Smart AI Resume Screener & Career Advisor',
      description:
        'An AI-based platform that screens, scores, and enhances resumes while offering learning advice based on data and job descriptions.',
    },
    {
      title: 'UpCode - E-Learning Platform',
      description:
        'Teaches students the fundamentals of programming and their application in real-life projects from basics to advanced.',
    },
    {
      title: 'Real-Time Cross-Chain Gas Price Tracker',
      description:
        'Tracks live gas prices from Ethereum, Polygon, and Arbitrum using their Native RPCs with candlestick charts and wallet simulation.',
    },
    {
      title: 'Project 4',
      description: 'More coming soon...',
    },
  ];

  return (
    <section id="projects" className="bg-[#0d0d0d] text-white py-10 px-10 md:px-12">
      <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-10 text-center">
          My <span className="text-red-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-5 md:p-6 rounded-lg shadow-md border border-gray-800 hover:border-red-500 transition duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-red-500">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
