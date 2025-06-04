
import React from 'react';
import { Code, Rocket, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-cyan to-space-purple mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Alex, a passionate full-stack developer with a love for creating 
              digital solutions that make a difference. My journey in the cosmos of code 
              began several years ago, and I've been exploring new frontiers ever since.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in building scalable web applications using modern technologies. 
              From crafting pixel-perfect user interfaces to architecting robust backend 
              systems, I enjoy every aspect of the development process.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring the latest tech trends, 
              contributing to open-source projects, or stargazing (both literally and 
              metaphorically in code repositories).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-space-deep/50 p-6 rounded-lg border border-space-medium/30 text-center group hover:border-space-cyan/50 transition-all duration-300">
              <Code className="mx-auto mb-4 text-space-cyan group-hover:animate-float" size={40} />
              <h3 className="font-semibold text-lg mb-2">Clean Code</h3>
              <p className="text-sm text-gray-400">Writing maintainable and efficient code</p>
            </div>
            
            <div className="bg-space-deep/50 p-6 rounded-lg border border-space-medium/30 text-center group hover:border-space-purple/50 transition-all duration-300">
              <Rocket className="mx-auto mb-4 text-space-purple group-hover:animate-float" size={40} />
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-sm text-gray-400">Embracing cutting-edge technologies</p>
            </div>
            
            <div className="bg-space-deep/50 p-6 rounded-lg border border-space-medium/30 text-center group hover:border-space-pink/50 transition-all duration-300">
              <Star className="mx-auto mb-4 text-space-pink group-hover:animate-float" size={40} />
              <h3 className="font-semibold text-lg mb-2">Excellence</h3>
              <p className="text-sm text-gray-400">Delivering stellar user experiences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
