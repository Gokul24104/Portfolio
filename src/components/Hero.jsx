import React from 'react';
import profilePic from '../assets/Photo1.png';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#0d0d0d] py-16 flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-12"
    >
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-center md:text-left max-w-xl">
          <p className="text-white text-lg mb-2">
            Hello<span className="text-red-500">.</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            I'm <span className="text-white">Gokul S</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Aspiring Web Developer
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md font-medium transition"
            >
              Got a project?
            </a>
            <a
              href="#resume"
              className="border border-white hover:border-red-500 hover:text-red-500 text-white px-6 py-3 rounded-md font-medium transition"
            >
              My resume
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-red-500/40 to-transparent flex items-center justify-center">
            <img
              src={profilePic}
              alt="Profile"
              className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-[#0d0d0d]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
