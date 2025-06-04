
import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-space-deep/80 border-t border-space-medium/30 py-12">
      <div className="max-w-6xl mx-auto section-padding">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-space-cyan glow-text">RAJDEEP DAS</h3>
            <p className="text-gray-300 max-w-md mx-auto">
              Full-Stack Developer passionate about creating stellar digital experiences
            </p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/rajdeepdas108" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-space-cyan transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/rajdeepdas108/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-space-blue transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://x.com/rajdeepdas108" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-space-purple transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://www.youtube.com/@rajdeepdas108" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Youtube size={24} />
            </a>
            <a 
              href="https://stackoverflow.com/users/29964602/rajdeep-das" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z"/>
              </svg>
            </a>
            <a 
              href="mailto:rajdeepdas108@gmail.com"
              className="text-gray-400 hover:text-space-pink transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="border-t border-space-medium/30 pt-8">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              Made with <Heart size={16} className="text-space-pink animate-pulse" /> by RAJDEEP DAS © 2024
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Designed & Developed in the Digital Galaxy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
