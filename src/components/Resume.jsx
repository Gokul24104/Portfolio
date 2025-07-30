// Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 bg-[#112240] text-white">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-400">My Resume</h2>
        <div className="w-full shadow-lg rounded overflow-hidden">
          <iframe
            title="Gokul S Resume"
            src="/GOKULS_Resume.pdf"
            width="100%"
            height="1200px"
            className="border-none"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Resume;
