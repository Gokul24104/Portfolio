import React from 'react';
import { FaLaptopCode, FaDatabase, FaProjectDiagram, FaCode } from 'react-icons/fa';
import { MdOutlineDesignServices } from 'react-icons/md';

const About = () => {
  const services = [
    { icon: <FaLaptopCode />, label: 'Website Development' },
    { icon: <FaCode />, label: 'Full Stack Web Development' },
    { icon: <MdOutlineDesignServices />, label: 'UI/UX Design' },
    { icon: <FaProjectDiagram />, label: 'API Development' },
    { icon: <FaDatabase />, label: 'Database Integration' },
  ];

  return (
    <section id="about" className="bg-[#0d0d0d] text-white py-16 px-10 md:px-12">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12 text-center">
          About <span className="text-red-500">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Left: Services with hover cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative bg-[#1a1a1a]/60 backdrop-blur-md border border-gray-800 rounded-xl 
                           p-5 shadow-lg hover:shadow-red-500/30 transition-all duration-300 
                           hover:-translate-y-2 hover:border-red-500 flex items-center gap-3"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 
                                group-hover:opacity-100 rounded-xl transition duration-300"></div>

                <div className="text-red-500 text-2xl relative z-10">{service.icon}</div>
                <span className="text-lg font-medium relative z-10">{service.label}</span>
              </div>
            ))}
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
