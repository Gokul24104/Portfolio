// Contact.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#112240] text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-400">Contact Me</h2>
      <div className="flex justify-center gap-10 text-3xl">
        <a href="mailto:gokul24104@gmail.com" className="hover:text-blue-400 transition" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/gokul-s-001a0020b" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Gokul24104" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/_gokul_24/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Contact;
