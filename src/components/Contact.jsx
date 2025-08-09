import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-[#0d0d0d] text-white text-center">  
                <h2 className="text-3xl font-bold mb-10 text-center">
        Contact <span className="text-red-500">Me</span>
      </h2>
      <p className="text-gray-400 mb-6">
        Let's connect! Feel free to reach out via email or my social profiles.
      </p>
      <div className="flex justify-center gap-6 text-3xl">
        <a
          href="mailto:gokul24104@gmail.com"
          className="hover:text-red-500 transition"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/gokul-s-001a0020b"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Gokul24104"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/_gokul_24/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
};

export default Contact;
