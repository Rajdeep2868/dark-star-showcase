import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto text-center section-padding">
        <div className="animate-fade-in">
          {/* Profile Image Circle */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-space-cyan bg-transparent shadow-2xl transform perspective-1000 hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full overflow-hidden shadow-inner">
                  <img src="/lovable-uploads/668b6126-bf25-4b09-a5a6-84a72f67c9cd.png" alt="Rajdeep Das Profile" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* 3D effect shadow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-space-cyan/20 to-space-purple/20 transform translate-x-2 translate-y-2 -z-10 blur-sm"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">RAJDEEP DAS</h1>
          <h2 className="text-xl mb-8 font-mono font-medium text-[#56a5ff] md:text-3xl">Full-Stack Developer || Software Developer</h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed md:text-xl font-extralight text-[#48e7ff]">Curious mind. Creative heart. Consistent effort </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={() => scrollToSection('projects')} className="bg-space-cyan text-space-dark hover:bg-space-cyan/90 px-8 py-3 text-lg font-semibold animate-glow">
              View My Work
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('contact')} className="border-space-purple text-space-purple hover:bg-space-purple hover:text-white px-8 py-3 text-lg">
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-space-cyan transition-colors duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-space-blue transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:alex@example.com" className="text-gray-400 hover:text-space-pink transition-colors duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;