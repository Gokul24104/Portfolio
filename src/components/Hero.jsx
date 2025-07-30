import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[40vh] bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#233554] flex items-center justify-center text-center pt-28">
      <div>
        <h1 className="text-4xl md:text-5xl text-white font-bold mb-5">Hi, I'm Gokul S</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-6">Aspiring Fullstack Web Developer</p>
        <a href="#projects" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-800 transition font-semibold shadow-md">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;