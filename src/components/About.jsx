import React from 'react';
import { FaLaptopCode, FaDatabase, FaProjectDiagram, FaCode } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';

const About = () => {
  return (
    <section id="about" className="bg-[#0d0d0d] text-white py-10 px-10 md:px-12">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-10 text-center">
          About <span className="text-red-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
          {/* Left: Services */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <FaLaptopCode className="text-red-500 text-2xl" />
              <span className="text-lg font-medium">Website Development</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCode className="text-red-500 text-2xl" />
              <span className="text-lg font-medium">Full Stack Web Development</span>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineDesignServices className="text-red-500 text-2xl" />
              <span className="text-lg font-medium">UI/UX Design</span>
            </div>
            <div className="flex items-center gap-3">
              <FaProjectDiagram className="text-red-500 text-2xl" />
              <span className="text-lg font-medium">API Development</span>
            </div>
            <div className="flex items-center gap-3">
              <FaDatabase className="text-red-500 text-2xl" />
              <span className="text-lg font-medium">Database Integration</span>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="max-w-xl text-gray-300 leading-relaxed space-y-6">
            <p>
              I am a passionate full-stack web developer dedicated to creating modern, responsive, 
              and efficient digital solutions. From crafting visually appealing frontends to building 
              powerful backend systems, I aim to deliver exceptional user experiences while ensuring 
              performance, scalability, and maintainability.
            </p>
            <p>
              Over the years, I’ve developed a strong skill set in web technologies, API integration, 
              and database management, enabling me to transform ideas into real-world applications. 
              My focus is always on writing clean, maintainable code and bringing value to clients 
              through reliable and impactful solutions.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              <div className="min-w-[100px]">
                <p className="text-2xl font-bold text-red-500">10+</p>
                <p className="text-sm text-gray-400">Completed Projects</p>
              </div>
              <div className="min-w-[100px]">
                <p className="text-2xl font-bold text-red-500">95%</p>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
              <div className="min-w-[100px]">
                <p className="text-2xl font-bold text-red-500">6+</p>
                <p className="text-sm text-gray-400">Months Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
