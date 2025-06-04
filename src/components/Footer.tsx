
import React from 'react';
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react';

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
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-space-cyan transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-space-blue transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-space-purple transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="mailto:alex@example.com"
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
