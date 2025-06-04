
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechNova Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Increased application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Innovations Inc.',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design and product teams to deliver exceptional user experiences.',
      achievements: [
        'Built 15+ responsive web applications',
        'Reduced development time by 30%',
        'Implemented automated testing'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Focused on creating intuitive user interfaces and optimizing user experience. Worked closely with UX designers to implement pixel-perfect designs.',
      achievements: [
        'Improved user engagement by 25%',
        'Created reusable component library',
        'Optimized loading times by 50%'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      location: 'California, USA',
      period: '2015 - 2019',
      gpa: '3.8 GPA',
      relevant: 'Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-space-deep/30">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-cyan to-space-purple mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-space-cyan">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-space-medium/50 hover:border-space-cyan/50 transition-colors duration-300"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-space-cyan rounded-full border-4 border-space-dark"></div>
                  
                  <div className="bg-space-deep/50 p-6 rounded-lg border border-space-medium/30">
                    <h4 className="text-xl font-semibold text-white mb-2">{exp.title}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <span className="text-space-cyan font-medium">{exp.company}</span>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-sm text-gray-400 flex items-start">
                          <span className="text-space-cyan mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-space-purple">Education</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-space-medium/50 hover:border-space-purple/50 transition-colors duration-300"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-space-purple rounded-full border-4 border-space-dark"></div>
                  
                  <div className="bg-space-deep/50 p-6 rounded-lg border border-space-medium/30">
                    <h4 className="text-xl font-semibold text-white mb-2">{edu.degree}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <span className="text-space-purple font-medium">{edu.school}</span>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    <p className="text-space-cyan text-sm mb-2">{edu.gpa}</p>
                    <p className="text-gray-300 text-sm">{edu.relevant}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
