import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number; // Delay in ms
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  overflowHidden?: boolean;
}

const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = 'fit-content', 
  delay = 0, 
  direction = 'up',
  className = '',
  overflowHidden = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Stop observing once visible to run animation only once
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -50px 0px', // Trigger a bit before the element is fully in view
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getDirectionClass = () => {
    switch (direction) {
      case 'up': return 'translate-y-12';
      case 'down': return '-translate-y-12';
      case 'left': return 'translate-x-12';
      case 'right': return '-translate-x-12';
      default: return 'translate-y-12';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{ 
        position: 'relative', 
        width, 
        overflow: overflowHidden ? 'hidden' : 'visible'
      }}
    >
      <div
        className={`transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${getDirectionClass()}`
        }`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;