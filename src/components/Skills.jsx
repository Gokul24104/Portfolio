import React from 'react';
import { FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const skills = [
  // 🌐 Frontend
  { label: 'HTML5', category: 'Frontend' },
  { label: 'CSS3', category: 'Frontend' },
  { label: 'JavaScript(ES6+)', category: 'Frontend' },
  { label: 'React.js', category: 'Frontend' },
  { label: 'Tailwind CSS', category: 'Frontend' },
  { label: 'Bootstrap', category: 'Frontend' },
  { label: 'Vite.js', category: 'Frontend' },

  // ⚙️ Backend
  { label: 'Node.js', category: 'Backend' },
  { label: 'Spring Boot', category: 'Backend' },
  { label: 'Python', category: 'Backend' },
  { label: 'Flask', category: 'Backend' },
  { label: 'REST API', category: 'Backend' },
  { label: 'JWT', category: 'Backend' },

  // 🗄 Database
  { label: 'MySQL', category: 'Database' },
  { label: 'AWS DynamoDB', category: 'Database' },
  { label: 'AWS S3', category: 'Database' },

  // 🛠 Tools
  { label: 'Git', category: 'Tools' },
  { label: 'Github', category: 'Tools' },
  { label: 'VS Code', category: 'Tools' },
  { label: 'Vercel', category: 'Tools' },
  { label: 'AWS ElasticBeanstalk', category: 'Tools' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0d0d0d] text-white py-10 px-10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills & <span className="text-red-500">Experience</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: 'Frontend', icon: <FaCode />, color: 'text-red-500' },
            { title: 'Backend', icon: <FaServer />, color: 'text-red-500' },
            { title: 'Database', icon: <FaDatabase />, color: 'text-red-500' },
            { title: 'Tools', icon: <FaTools />, color: 'text-red-500' },
          ].map((cat) => (
            <div
              key={cat.title}
              className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-gray-800 hover:border-red-500 transition"
            >
              <div className={`text-3xl mb-4 ${cat.color}`}>{cat.icon}</div>
              <h3 className="font-semibold text-lg mb-4">{cat.title}</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                {skills
                  .filter((s) => s.category === cat.title)
                  .map((s) => (
                    <li key={s.label}>{s.label}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
