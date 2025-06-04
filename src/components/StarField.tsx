
import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const starFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (!starFieldRef.current) return;
      
      const starField = starFieldRef.current;
      const numberOfStars = 200;

      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        
        // Add different star types for variety
        const starType = Math.random();
        if (starType < 0.7) {
          star.className = 'star star-white';
        } else if (starType < 0.85) {
          star.className = 'star star-blue';
        } else if (starType < 0.95) {
          star.className = 'star star-cyan';
        } else {
          star.className = 'star star-pink';
        }
        
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Random blinking patterns
        star.style.animationDelay = `${Math.random() * 4}s`;
        star.style.animationDuration = `${Math.random() * 3 + 1.5}s`;
        
        starField.appendChild(star);
      }
    };

    createStars();

    return () => {
      if (starFieldRef.current) {
        starFieldRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={starFieldRef} className="star-field" />;
};

export default StarField;
