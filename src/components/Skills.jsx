// Skills.jsx
import React from 'react';

const wordCloudSkills = [
  { label: 'HTML', category: 'Frontend' },
  { label: 'CSS', category: 'Frontend' },
  { label: 'JavaScript', category: 'Frontend' },
  { label: 'React.js', category: 'Frontend' },
  { label: 'TailwindCSS', category: 'Frontend' },
  { label: 'Node.js', category: 'Backend' },
  { label: 'Flask', category: 'Backend' },
  { label: 'Python', category: 'Backend' },
  { label: 'MySQL', category: 'Database' },
  { label: 'Git', category: 'Tools' },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-[60vh] py-20 px-6 bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#233554] text-white">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-start gap-12">
        {/* Left: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">Skills & Experience</h2>
          <p className="text-gray-300 mb-4">
            I have a strong foundation in full-stack web development, with experience in both frontend and backend technologies.
          </p>
          <p className="text-white mb-4">
            On the frontend, I work with <span className="font-bold">HTML, CSS, JavaScript, and React.js</span> to build responsive websites, interactive layouts, custom features, and animations.
          </p>
          <p className="text-white">
            On the backend, I have experience with <span className="font-bold">Python, Node.js, and Flask</span> along with working knowledge of <span className="font-bold">MySQL</span> for database management and <span className="font-bold">Git</span> for version control.
          </p>
        </div>

        {/* Right: Skill Categories */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Skill Columns */}
          {['Frontend', 'Backend', 'Database', 'Tools'].map((category) => (
            <div key={category}>
              <h3 className="text-cyan-400 font-semibold text-lg mb-3">{category}</h3>
              <ul className="space-y-2">
                {wordCloudSkills
                  .filter((skill) => skill.category === category || (category === 'Database' && skill.category === 'Database') || (category === 'Tools' && skill.category === 'Tools'))
                  .map((skill) => (
                    <li key={skill.label} className="text-base text-cyan-300 font-medium">{skill.label}</li>
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