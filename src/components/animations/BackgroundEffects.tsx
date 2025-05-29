import React, { useEffect, useState } from 'react';
import { generateStars, generateMeteors } from '../../lib/utils';

interface BackgroundEffectsProps {
  starsCount?: number;
  meteorsCount?: number;
}

const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({
  starsCount = 100,
  meteorsCount = 5,
}) => {
  const [stars, setStars] = useState<any[]>([]);
  const [meteors, setMeteors] = useState<any[]>([]);

  useEffect(() => {
    setStars(generateStars(starsCount));
    setMeteors(generateMeteors(meteorsCount));
  }, [starsCount, meteorsCount]);

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 dark:opacity-100 opacity-0 transition-opacity duration-1000">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="stars"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="meteor-effect absolute"
          style={{
            top: meteor.top,
            left: meteor.left,
            width: meteor.size,
            height: `${parseInt(meteor.size) * 100}px`,
            animation: `meteor ${meteor.duration} linear infinite`,
            animationDelay: meteor.delay,
          }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-light dark:to-background-dark opacity-90" />
    </div>
  );
};

export default BackgroundEffects;