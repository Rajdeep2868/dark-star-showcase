
import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const starFieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (!starFieldRef.current) return;
      
      const starField = starFieldRef.current;
      const numberOfStars = 150;

      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 3 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
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
