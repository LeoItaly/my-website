import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BackgroundEffects: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1 
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Reduced number of stars for better performance
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
  }));

  // Reduced floating orbs
  const orbs = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 120 + 60,
    duration: Math.random() * 15 + 20,
    color: ['purple', 'blue', 'green'][Math.floor(Math.random() * 3)],
  }));

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Optimized gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${100 - (mousePosition.y + 1) * 50}%, 
              rgba(139, 92, 246, 0.3) 0%, 
              rgba(59, 130, 246, 0.2) 40%, 
              transparent 70%),
            linear-gradient(45deg, 
              rgba(139, 92, 246, 0.05) 0%, 
              rgba(59, 130, 246, 0.05) 50%, 
              transparent 100%)
          `,
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Optimized stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        />
      ))}

      {/* Optimized floating orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full opacity-10 blur-2xl"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: `radial-gradient(circle, 
              ${orb.color === 'purple' ? 'rgba(139, 92, 246, 0.4)' : 
                orb.color === 'blue' ? 'rgba(59, 130, 246, 0.4)' :
                'rgba(16, 185, 129, 0.4)'} 0%, 
              transparent 70%)`,
          }}
          animate={{
            y: [-20, -60, -20],
            x: [-10, 10, -10],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Simplified meteor effect */}
      <motion.div className="absolute inset-0">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 bg-gradient-to-b from-white via-purple-300 to-transparent rotate-45"
            style={{
              left: `${20 + i * 30}%`,
              top: '-10px',
              height: '60px',
            }}
            animate={{
              y: [0, window.innerHeight + 70],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>

      {/* Simplified neural network - static SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-5" style={{ zIndex: 1 }}>
        <defs>
          <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Static grid pattern */}
        {Array.from({ length: 6 }, (_, i) => (
          <g key={i}>
            <line
              x1={`${i * 16.66}%`}
              y1="0%"
              x2={`${(i * 16.66) + 20}%`}
              y2="100%"
              stroke="url(#neuralGradient)"
              strokeWidth="1"
            />
            <line
              x1="0%"
              y1={`${i * 16.66}%`}
              x2="100%"
              y2={`${(i * 16.66) + 10}%`}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
            />
          </g>
        ))}

        {/* Static connection nodes */}
        {Array.from({ length: 8 }, (_, i) => (
          <circle
            key={i}
            cx={`${(i * 12.5) % 100}%`}
            cy={`${((i * 15.5) % 100)}%`}
            r="2"
            fill="url(#neuralGradient)"
          />
        ))}
      </svg>
    </div>
  );
};

export default BackgroundEffects;