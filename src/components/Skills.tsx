
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      color: 'space-cyan',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5', level: 98 },
        { name: 'CSS3', level: 92 },
        { name: 'Tailwind CSS', level: 88 }
      ]
    },
    {
      category: 'Backend',
      color: 'space-purple',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'REST APIs', level: 92 }
      ]
    },
    {
      category: 'Tools & DevOps',
      color: 'space-pink',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 78 },
        { name: 'AWS', level: 75 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 85 },
        { name: 'Figma', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-space-deep/30">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-cyan to-space-purple mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My technical arsenal spans across the entire development spectrum
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="bg-space-deep/50 p-6 rounded-lg border border-space-medium/30 hover:border-space-cyan/30 transition-all duration-300"
            >
              <h3 className={`text-xl font-bold mb-6 text-${category.color}`}>
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-space-medium rounded-full h-2">
                      <div
                        className={`bg-${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
