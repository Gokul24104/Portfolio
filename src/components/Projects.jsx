// Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="min-h-[60vh] py-20 px-6 bg-[#112240] text-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[{
            title: 'Smart AI Resume Screener & Career Advisor',
            description: 'An AI-based platform that screens, scores, and enhances resumes while offering learning advice based on data and job descriptions.'
          }, {
            title: 'UpCode - E-Learning Platform',
            description: 'Teaches students the fundamentals of programming and their application in real-life projects from basics to advanced.'
          }, {
            title: 'Real-Time Cross-Chain Gas Price Tracker',
            description: 'Tracks live gas prices from Ethereum, Polygon, and Arbitrum using their Native RPCs with candlestick charts and wallet simulation.'
          }, {
            title: 'Project 4',
            description: 'More coming soon...'
          }].map((project, index) => (
            <div key={index} className="p-6 bg-[#0a192f] rounded-lg shadow-md border border-gray-700">
              <h3 className="text-xl font-semibold mb-3 text-cyan-300">{project.title}</h3>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;