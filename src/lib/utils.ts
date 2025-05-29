import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateStars(count: number) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 1.5 + 0.5;
    stars.push({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${size}px`,
      delay: `${Math.random() * 3}s`,
    });
  }
  return stars;
}

export function generateMeteors(count: number) {
  const meteors = [];
  for (let i = 0; i < count; i++) {
    meteors.push({
      id: i,
      top: `${Math.random() * 90}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      delay: `${Math.random() * 10}s`,
      duration: `${Math.random() * 3 + 2}s`,
    });
  }
  return meteors;
}